(function(){

	var blog = [];

	var app = angular.module('showPosts',['showPostsService']);

	app.controller('ShowController',function(Show){
		this.posts = blog;
		this.posts = Show.all();
	});

})();