/**
 * Created by kvins on 26/04/2016.
 */
var exec = require('child_process').exec;
var time = require('./time');
var fs = require("fs");
var bmailer = require("b-mailer");
var mail;

var handleException = function(msg){
    fs.appendFile('bunix_error.log',msg);
    console.error('\n\nREAD THE BackupService_error.log');
    bmailer.sendSync(mail,function(){throw new Error(msg);});
};

exports.init = function(m){
    mail = m;
};

exports.process = function(command, callback){
    exec(command, function(e,out,err){
        if(e !== null) {
            handleException(time.date() + ":\n" + e + '\n');
        }
        if(out !== '')
            console.log(out);

        if(callback != undefined)
            callback();
    });
};