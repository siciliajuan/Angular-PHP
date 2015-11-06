(function(){

	var blog = [];

	var app = angular.module('showPosts',[]);

	app.controller('ShowController',function(){
		this.posts = blog;
		//this.loadPosts = function(blog){
			var post1 = {
				title: '1',
				content: '1'
			};
			var post2 = {
				title: '2',
				content: '2'
			};
			this.post.push(post1);
			this.post.push(post2);
		//};
	});

})();