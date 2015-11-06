(function(){
	var app = angular.module('showPostsService',[]);

	app.factory("Show",function ShowFactory(){
		return{
			all: function(){
				var posts = [];
				var post1 = {
					id: 1,
					title: 'Título 1',
					content: 'Primer post'
				};
				var post2 = {
					id: 2,
					title: 'Título 2',
					content: 'Segundo post'
				};
				posts.push(post1);
				posts.push(post2);
				console.log('Devolviendo los posts guardados');
				return posts;
			}
		};
	});

})();