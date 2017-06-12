'use strict';

/**
 * @ngdoc function
 * @name myDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myDashboardApp
 */
angular.module('myDashboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.myInterval = 5000;
      var slides = $scope.slides = [];
t
        var newWidth = 600 + slides.length + 1;
        slides.push({
          image: 'http://placekitten.com/' + newWidth + '/300',
          text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
          ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
      };
      for (var i=0; i<4; i++) {
        $scope.addSlide();
      }


    });
