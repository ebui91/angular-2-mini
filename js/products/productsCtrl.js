angular.module("myApp").controller("productsCtrl", function($scope, productsSrvc, $stateParams){
  productsSrvc.getProducts($stateParams.id).then(response=> {
    $scope.products= response.data;
    console.log('scope', $scope.products);
  });
});
