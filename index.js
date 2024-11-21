const express = require('express'); // tells app it depends on express module
//setup express app
const app = express(); // creates an instance of express

function doWork(task) {
    return `Task completed: ${task}`;
}
//configure your doors aka routes verb
app.get("/doWork",(request, response)=>{ // one door that listens for incoming requests
    //input

    //DoWork
    const result = doWork('Consultant Contractor');

    //output
    //server output
    console.log(result);

    //client output
    //response.send(result); // send is a verb that tells the app to send a response
    response.json({
        message: result
    })
}) // get is a verb that tells the app to listen for incoming requests //app.get(route, your function)


app.listen(4000, () => console.log(`server is listening on port 4000`))// tells app to listen for incoming requests on port 3000
// ports are like doors that allow data to come in and out of a computer


