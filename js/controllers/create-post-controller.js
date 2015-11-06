(function(){

var app = angular.module('createPost',[]);

app.controller('CreateController',function(){
	this.post = {};
	this.addPost = function(){
		console.log(this.post);
	};
});

})();