var conf = {
	"Application" : "calculator", 
 	"Version" : 12,
 	modules :[
 		{
 		 name:"calculator",
 		 rootPath: "js/lib/calculator/",
 		 verion: "v-02",
 		 active : true,
 		 src : ["calculator-core-v-02.js",
 		 		"calculator-events-v-02.js"	
			  	] 
 		},
 		{
 		 name:"BlaBla",
 		 rootPath: "/js/calculator/",
 		 verion: "v-02",
 		 active : false,
 		 src : ["calculator-core-v-02.js",
 		 		"calculator-events-v-02.js"	
			  	] 
 		}
 		]
}