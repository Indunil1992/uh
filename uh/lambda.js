let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    sns.publish({
        Message: 'msg1',
        Subject: 'subjct1',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:testIndunilSNS'
    }).promise()
        .then(data => {
            console.log("sucss")
            // your code goes here
        })
        .catch(err => {
             console.log("errrrrr")
            // error handling goes here
        });

    callback(null, { "message": "Successfully executed" });
}