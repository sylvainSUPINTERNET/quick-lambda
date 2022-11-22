
import AWS from "aws-sdk"



// /opt is where layer folder goes
// means if you upload folder on layer such as /toto/tata.json
// -> let jso = require('/opt/toto/tata.json')


const apig = new AWS.ApiGatewayManagementApi({
    endpoint: "q7qfgi96v4.execute-api.eu-west-3.amazonaws.com/production"
});


// TODO authorize lambda / apig to send message to client

export const handler = async(event,ctx) => {
    
    // You will face issue if you don't use request with postman websocket
    const { connectionId } = event.requestContext;

/*    console.log(event); 
    console.log("--------")
    console.log(ctx);*/
    
    await apig
      .postToConnection({
        ConnectionId: connectionId,
        Data: JSON.stringify({"hello":`${connectionId}`}),
      })
      .promise();
    
    
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
