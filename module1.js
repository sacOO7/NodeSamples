
function construct_fun(){
	var full_name;

	return {
			getfullname :function (firstname,lastname){
				return full_name=firstname+lastname;
			}
		,
			setfullname : function(name){
				full_name="name"
			} 
	}

}
module.exports=construct_fun;