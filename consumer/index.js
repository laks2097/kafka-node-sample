console.log("Consumer running....");
var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.KafkaClient(),
    consumer = new Consumer(
        client,
        [
            { topic: 'workOrderCreation',partition: 0}
        ],
        {
            autoCommit: true,
			groupId: 'test-consumer-group',
			fromOffset: 'latest'
        }
    );
    
consumer.on('message', function (message) {
    console.log(message.value);
    
});