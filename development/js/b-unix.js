/**
 * Created by kvins on 26/04/2016.
 */
var setup = require('./setup');
var backup = require('./backup');
var recovery = require('./recovery');

exports.start = function(setupFile,setupMail) {
    recovery.createFile();
    if(setupMail == undefined)
        setup.init(setupFile, function(){backup.start(setup);});
    else
        setup.init(setupFile, function(){backup.start(setup,setupMail);});
};

exports.recovery = function(setupFile,setupMail){
    if(setupMail == undefined)
        setup.init(setupFile, function(){recovery.start(setup);});
    else
        setup.init(setupFile, function(){recovery.start(setup,setupMail);});
};



