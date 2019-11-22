var fs = require('fs');
var prompt = require('prompt');
var fileName = '/git/JIRA-postman/src/globals/MS_env.json';
var file = require(fileName);
var exec = require('child_process').exec,child;
var btoa = require('btoa');
var atob = require('atob');

// Start the prompt
var schema = {
  properties: {
    trigram: {
      pattern: /^[a-zA-Z]{3}$/,
      message: 'You must enter your trigram',
      required: true
    },
    password: {
      hidden: true
    },
    // old prompt for label
   /* JIRA_label: {
      pattern: /^[/^\S*$/]+$/,
      message: 'No spcaes, underscore/hyphen OK',
      required: true
    },*/
    epic_name: {
      required: true
    },
    epic_desc: {
      required: false
    },
    due_date: {
      required: true
    },
  }
};

prompt.start();

  prompt.get(schema, function (err, result) {

  // Say thanks!
  console.log('Thanks!');

  // Save the input
  // lb = result.JIRA_label; old variable for label
  dc = result.epic_desc;
  en = result.epic_name; 
  un = result.trigram;
  pw = result.password;
  dd = result.due_date;
 
  //pass input to environment json
  // file.values[0].value = lb; 
  file.values[1].value = dc;
  file.values[2].value = en;
  file.values[3].value = un;
  file.values[4].value = pw;
  file.values[5].value = dd;

fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
  if (err) return console.log(err);
  console.log('Writing to file' + ' ...please wait.');
});

// run the newman script and log errors
child = exec('node src/QlikView/qv_runNewman.js {{args}}',
  function (error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });

});




