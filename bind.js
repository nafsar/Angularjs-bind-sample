	//'use strict';

var app = angular.module('myApp',[]);
app.controller('cartCtrl', ['$scope',function($scope) {
	$scope.username = 'World'; 
//}]);
  

  
		$scope.items = [
			{Name: "Soap", Price: "25", Quantity: "10"},
			{Name: "Shaving cream", Price: "50", Quantity: "15"},
			{Name: "Shampoo", Price: "100", Quantity: "5"}
		];

		$scope.addItem = function(item) {
			//alert(Object.keys(item).length)
			//var p = JSON.stringify(item);alert(p)
			if(p=='undefined')alert(Object.keys(item));
			if (typeof item != 'undefined'){
			   $scope.items.push(item);
			   $scope.item = {};
		    }
		   
		}
    
		$scope.totalPrice = function(){
			var total = 0;
			for(count=0;count<$scope.items.length;count++){
				total += $scope.items[count].Price*$scope.items[count].Quantity;
			}
			return total;
		}
		
		$scope.removeItem = function(index){
			$scope.items.splice(index,1);
		}
		
	}]);	
	