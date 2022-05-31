const { delay, ServiceBusClient, ServiceBusMessage } = require("@azure/service-bus");

async function main() {
	const queueName = process.env.sbqueuename;
	const connectionString = process.env.sbconnstring;

	const sbClient = new ServiceBusClient(connectionString);
  const receiver = await sbClient.createReceiver(queueName);
  const queueHandler = async (messageReceived) => {
		console.log(`Process id: ${process.pid} & Message Received:  ${JSON.stringify(messageReceived.body)}`);
		await receiver.completeMessage(messageReceived);
	};

	// function to handle any errors
	const queueErrorHandler = async (error) => {
		console.error('Queue error:', error);
	};

	receiver.subscribe({
		processMessage: queueHandler,
		processError: queueErrorHandler
	});

	await delay(5000);
}

main().catch((err) => {
	console.error("Error occurred in main process: ", err);
	process.exit(1);
});
