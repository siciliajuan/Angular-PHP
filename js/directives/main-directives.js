(function(){

	var app = angular.module('directives', []);

	app.directive('headerDirective',function(){
		return {
			restrict: 'E',
			templateUrl: 'template/pages/header/index.html'
		};
	});

	app.directive('mainSection',function(){
		return {
			restrict: 'E',
			templateUrl: 'template/pages/main/index.html'
		};
	});

	app.directive('footerDirective',function(){
		return {
			restrict: 'E',
			templateUrl: 'template/pages/footer/index.html'
		};
	});

})();