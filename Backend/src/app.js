    const express = require('express');
    const app = express();

    const notes = [];
     app.use(express.json())
    
    
    
    app.post('/note', (req , res) => {
        // res.send()
        console.log(req.body);
        res.status(201).json({message : "Admin Got "})
    });


    
    module.exports = app;