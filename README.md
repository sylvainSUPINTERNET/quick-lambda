
quickly 

npm i to this project 
-> generate zip ( contains node module )
-> copy / paste code index.js into a new lambda ( replace endpoint apigateway ) 
-> add layer ( upload zip for libs )


-> create api gateway WS (customRoute) 


Postman : 

wss://<ID_generatezd>.execute-api.eu-west-3.amazonaws.com/production

{
    "action": "customRoute"
}


// TODO
At this point, you should face in cloudwatch the log error permission lambda / APIgateway for ws answer

