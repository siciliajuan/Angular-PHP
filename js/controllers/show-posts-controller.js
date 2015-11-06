(function(){

	var blog = [];

	var app = angular.module('showPosts',[]);

	app.controller('ShowController',function(){
		this.posts = blog;
		var post1 = {
			title: 'Título 1',
			content: 'Primer post'
		};
		var post2 = {
			title: 'Título 2',
			content: 'Segundo post'
		};
		this.posts.push(post1);
		this.posts.push(post2);
	});

})();