var fs=require("fs"),setup,filename="";exports.init=function(e,t){filename=e,fs.exists(filename,function(e){if(!e)throw new Error("Nothing setup file JSON.");setup=JSON.parse(fs.readFileSync(filename)),t()})},exports.len=function(){return setup.config.length},exports.number_backups=function(){return setup.number_backups},exports.hour=function(){return setup.hour},exports.minute=function(){return setup.minute},exports.second=function(){return setup.second},exports.name=function(e){return setup.config[e].name},exports.user_dest=function(e){return setup.config[e].user_dest},exports.pwd_dest=function(e){return setup.config[e].pwd_dest},exports.host=function(e){return setup.config[e].host},exports.path_src=function(e){return setup.config[e].path_src},exports.path_copy=function(e){return setup.config[e].path_copy},exports.path_dest=function(e){return setup.config[e].path_dest},exports.filename=function(e){return setup.config[e].filename},exports.extension=function(e){return setup.config[e].extension};