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
 
 com.sapui.initConf = function(configuration){
 		var filePath = {}
		for (var j = 0; j < configuration.modules.length; j++){
			 var mod = configuration.modules[j];
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
$.conf= function(config){
	console.log(config.Application)
}
$.makeAjaxCall =function (url, methodType){
   var xhr = new XMLHttpRequest();
   xhr.open(methodType, url, true);
   xhr.send();
   xhr.onreadystatechange = function(){
     if (xhr.readyState === 4){
        if (xhr.status === 200){
           var resp = xhr.responseText;
           $.conf(JSON.parse(resp));
        }  
        
     }
  }
}

$.initConf(conf)