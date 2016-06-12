
var circlefunctions={}

circlefunctions.area = function(radius){
	return Math.PI * radius* radius;
}

circlefunctions.circumference = function(radius){
	return Math.PI * 2* radius;
}

module.exports=circlefunctions;