console.log("Producer started....");
const {createRandomUser} = require("../utility");
var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.KafkaClient({clientId:"my-producer", kafkaHost: 'localhost:9092'}),
    producer = new Producer(client);
    
producer.on('ready', function () {
    setInterval(()=>{
        let payloads = [{ topic: 'workOrderCreation', messages: JSON.stringify(createRandomUser()) }];
        producer.send(payloads, function (err, data) {
            console.log(data);
        });
    },3000);
    
});
 
producer.on('error', function (err) {
    console.log(error.toString())
});

