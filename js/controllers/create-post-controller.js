(function(){

	var app = angular.module('createPost',['createPostService']);

	app.controller('CreateController',function(Create){
		this.post = {};
		this.addPost = function(posts){
			Create.create(this.post);
			posts.push(this.post);
			this.post={};
		};
	});

})();