(function(){

	var app = angular.module('createPostService',[]);

	app.factory('Create', function CreateFactory(){
		return{
			create: function(post){
				console.log('Guardando . . .');
				console.log(post.title);
				console.log(post.content);
				return console.log('Guardado correctamente ');
			}
		};
	});

})();