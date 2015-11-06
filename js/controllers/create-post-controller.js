(function(){

	var app = angular.module('createPost',['createPostService']);

	app.controller('CreateController',function(Create){
		this.post = {};
		this.addPost = function(){
			Create.create(this.post);
		};
	});

})();