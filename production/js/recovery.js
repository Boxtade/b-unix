const readline=require("readline");var promise=require("bluebird"),cmdSys=require("./cmd_sys"),fs=require("fs");const r=readline.createInterface({input:process.stdin,output:process.stdout});var user_question=function(e){return new promise(function(n){r.question(e,function(e){n(e)})})},begin=function(e){return new promise(function(n){for(var r=0;r<=e.len()-1;r++)console.log("No : "+r+" | name : "+e.name(r));n()})},proc=promise.promisify(cmdSys.process);exports.start=function(e,n){var r=0;cmdSys.init(n),begin(e).then(function(){return user_question("Choose a backup name and enter the number :  ")}).then(function(n){r=n;var t="sshpass -p "+e.pwd_dest(r)+" ssh "+e.user_dest(r)+"@"+e.host(r)+" ls "+e.path_dest(r);return proc(t)}).then(function(){return user_question("Enter the backup file name :  ")}).then(function(n){var t="sshpass -p "+e.pwd_dest(r)+" scp "+e.user_dest(r)+"@"+e.host(r)+":"+e.path_dest(r)+n+" "+e.filename(r)+e.extension(r);return proc(t)}).then(function(){return console.log("Backup done!!!"),user_question("Do you want to continue the data recovery ? Entry q for quit or c for continue : ")}).then(function(n){"c"==n?exports.start(e):process.exit(0)})["catch"](function(e){console.log(e),process.exit(-1)})},exports.createFile=function(){if(!fs.exists("b-unix_recovery.js")){var e="var bunix = require('b-unix');\n\nbunix.recovery('./setup.json');";fs.writeFile("b-unix_recovery.js",e)}};