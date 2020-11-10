var twilio = require('twilio');

const accountSid = 'ACe76629c0e1aee77a15b4d9eb8707054d'; 
const authToken = '2998ea0856ea011c8ccced19cb962439'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages .create({
        body:" bhai ek kam hai",
        from: '+12058258883',      
        to: '+916268329811' 
       }) 
    //   .then(message => console.log(message)) 
    //   .done();