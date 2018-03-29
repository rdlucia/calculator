var SAPStyle = 24;
SAPStyle= divid(SAPStyle,3);
console.log(SAPStyle);


/*


function Table(nbrLegs){
	var nbl=nbrLegs;
	console.log(nbl)
}

function Table(nbrLegs){
	this.nbl=nbrLegs;
	var nbl = this.nbl;
	nbl+=10;
	console.log(this.nbl, nbl)
}
*/
//version with full object description
/*
function Table(nbrLegs){
	this.nbl=nbrLegs;
	this.showProperties=function(){
						console.log("les propriétés de mon objet:",this)
					};
	var nbl = this.nbl;
	nbl+=10;
	console.log(this.nbl, nbl)
}
*/
function Table(nbrLegs){
	this.nbl=nbrLegs;
	//this.color="red";
	var nbl = this.nbl;
	nbl+=10;
	console.log(this.nbl, nbl)
}
Table.prototype={
			color:"#FFFFFF",
			show:function(){
						console.log("mon objet:",this)
					}
		}


// list of params
var obj1={}
var addColors= function(bgColor,textColor){
							this.bgColor=bgColor; 
							this.color=textColor
						}
//v call
addColors.call(obj1,"red","blue")

//v apply
addColors.apply(obj1,["red","blue"])
// v apply better quality coding
var params =["red","blue"]
addColors.apply(obj1,params)

// one object params (K, V) approache
var addColors= function(colors){
							this.bgColor=colors.bgColor 
							this.color=colors["textColor"]
						}
var params= {
				bgColor:undefined,
				bgColor1:"blue",
				textColor:"green"
			}
// v call
addColors.call(obj1,params)
// v apply
addColors.apply(obj1,[params])

// add function to the table 
Table.prototype["paint"]= function(color){
								this.bgColor=color
							}


