    // const express = require('express');


    // const app = express(); // server instance create;

    // app.get("/",(req , res ) => {
    //     res.send("Hello World")
    // });

    // app.get("/about", (req , res ) => {
    //     res.send("About Page")
    // })

    // app.listen(3000) //listen port no 3000 ; server start

    const app = require("./src/app");


    app.listen(3000, () => {
        console.log("server is runing on port 3000");
    })