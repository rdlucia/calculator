//all core behaviors of a calculator

// comment to test for git v1

"use strict";
$.initStructure ("com.sapui.calculator")
var calc = $.calculator;
calc.screen= 0;
calc.op={n1:0,operator:undefined,n2:0}
var mem = calc.mem={};
mem.history={pv2:0,pv1:0,v:0}

mem.mplus=function(valueToSave){ 
	this.pv2=this.pv1	
	this.pv1=this.v
	this.v+=valueToSave
};
mem.mminus=function(valueToTakeOFF){
	this.pv2=this.pv1	
	this.pv1=this.v
	this.v-=valueToTakeOFF
};
mem.memshow=function(){
	calc.screen=this.v
};
calc.clear= function(){
	this.screen=0
};
var ops = calc.ops={};
ops.multi=function (v1,v2){
	return v1*v2
	}
ops.divid=function (v1,v2){
	return v1/v2
}
ops.add=function (v1,v2){
	return v1+v2
}
ops.sub=function (v1,v2){
	return v1-v2
}
ops.generic = function () {
  calc.screen = ops[this.operator](this.n1, this.n2);
}