// all common funtion to configure modules. 

"use strict";
//window["com"]={};
var com = {};


//create alias to call com.sapui as $
var $ = com.sapui = {v:10};

$.initStructure=function (libPath){
    var root = window
    var structure=libPath.split(".")
    for (var i = 0; i < structure.length; i++) {
        root[structure[i]]=root[structure[i]]||{}
        root= root[structure[i]];
        }
}
 
 com.sapui.initConf = function(){
 		var filePath = {}
		for (var j = 0; j < conf.modules.length; j++){
			 var mod = conf.modules[j];
			 if (mod.active) {
			 	for( var k = 0; k < mod.src.length; k++) {
					filePath  = mod.rootPath + mod.src[k]
					var script = document.createElement('script')		
					script.src = filePath;
					document.write(script.outerHTML);
				}
			 }

		}
}

$.initConf()