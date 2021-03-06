var application = angular.module('AngularUiDemo', ['ngSanitize', 'ui.select', 'ui.calendar']);
  application.filter('propsFilter', function() {
    return function(items, props) {
      var out = [];

      if (angular.isArray(items)) {
        items.forEach(function(item) {
          var itemMatches = false;

          var keys = Object.keys(props);
          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var text = props[prop].toLowerCase();
            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
              itemMatches = true;
              break;
            }
          }

          if (itemMatches) {
            out.push(item);
          }
        });
      } else {
        // Let the output be the input untouched
        out = items;
      }

      return out;
    };
  });

  application.controller('welcomeCtrl', function($scope){
    // Config for ui-calendar
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
    $scope.eventSources = [];

  	$scope.movies = [{id:1, name: 'abc'}, {id:2, name: 'bbc'}, {id:3, name: 'ccd'}, {id:4, name: 'ccc'}]
    $scope.getLocations = function(id){
      console.log("In get locations",id);
    }
});
