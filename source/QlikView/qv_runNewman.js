//File is named runNewman.js
var fs = require('fs'),
newman = require('newman');

let rawdata = fs.readFileSync('source/QlikView/qv_options.json');
let optionsJson = JSON.parse(rawdata);
//console.log(optionsJson);

//Run the options file
newman.run(optionsJson, function(err){
    if(err){console.log("Error in collection run: " , err)};
    console.log('Collection run complete!');
    
});


