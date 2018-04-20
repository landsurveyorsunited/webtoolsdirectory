var $body = $("body"),
    $searchGhost = $("#search-ghost"),
    $menuAnchor = $(".menu-anchor"),
    appModules = ['duScroll', 'ui.bootstrap'],
    app = angular.module("resourcesApp", appModules),
    searchHeight;

app.controller("resourcesCtrl", function($scope, $http) {

  var toolsList = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/design-tools.json";

  $http.get(toolsList).success(function(data) {
    $scope.resources = data;
  });

}).value('duScrollDuration', 1000).value('duScrollOffset', 80);

$(window).load(function() {
  setGhostHeight();
}).on('resize', function() {
  setGhostHeight();
});

function setGhostHeight() {
  setTimeout(function() {
    $searchGhost.css('height', $("#search").outerHeight());
  }, 250);
}