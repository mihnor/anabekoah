(function(){

var app = angular.module('gemAnabekoah',[]);

var gem = { name: 'Azurite', price: 2.95 };


app.controller('TitleController',function(){

  this.noob = gem;
});

app.controller('MainController',[ '$http',function($http){

  var namesAna = this;
  namesAna.names = [];



  $http.get('_json/anaNames.json').success(function(data){
    namesAna.names = data;
  });

});

})();
