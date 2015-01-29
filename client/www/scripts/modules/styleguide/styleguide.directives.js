Styleguide.directive('slStyleguideModuleButtons', [
  '$log',
  function ($log) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: './scripts/modules/styleguide/templates/styleguide.module.buttons.html',
      scope: {},
      controller: function($scope){
        $scope.show = true;

        $scope.clickModule = function(){
          $scope.show = !$scope.show;
        }
      }
    };
  }
]);

Styleguide.directive('slStyleguideModuleText', [
  '$log',
  function ($log) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: './scripts/modules/styleguide/templates/styleguide.module.text.html',
      scope: {},
      controller: function($scope){
        $scope.show = true;

        $scope.tabs = [{ id: 1, name: 'Normal' }, { id: 2, name: 'second tab' }, { id: 3, name: 'three' }, { id: 4, name: 'this is the fourth tab' }];
        $scope.activeTab = null;

        $scope.setActiveTab = function(tab){
          $scope.activeTab = tab;
        };

        $scope.closeTab = function(tab){

        };

        $scope.clickModule = function(){
          $scope.show = !$scope.show;
        }
      }
    };
  }
]);

Styleguide.directive('slStyleguideModuleColor', [
  '$log',
  '$timeout',
  function ($log, $timeout) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: './scripts/modules/styleguide/templates/styleguide.module.color.html',
      scope: {},
      controller: function($scope){
        $scope.show = true;

        //color-scheme classes
        $scope.colors = {};
        $scope.colors.primary = 'green-1 green-2'.split(' ');
        $scope.colors.secondary = 'green-3 green-4 blue-1 blue-2'.split(' ');
        $scope.colors.grey = 'grey-1 grey-2 grey-3 grey-4 grey-5 grey-6 grey-7'.split(' ');
        $scope.colors.tertiary = 'red-1 teal-dark teal-light orange purple-dark purple-light'.split(' ');
        $scope.hex = {};

        $scope.clickModule = function(){
          $scope.show = !$scope.show;
        };
      },
      link: function(scope, el, attrs){
        scope.$watch('$viewContentLoaded', function(){
          //hack to wait until view content is actually parsed
          $timeout(function(){
            var $colors = el.find('.colors .color');

            $colors.each(function(i, el){
              var rgb = $(el).css('backgroundColor');
              var hex = rgb2hex(rgb);
              $(el).siblings('.hex').text(hex);
            });

          }, 0);
        });
      }
    };
  }
]);

Styleguide.directive('slStyleguideModuleForms', [
  '$log',
  function ($log) {
    return {
      restrict: "E",
      replace: true,
      templateUrl: './scripts/modules/styleguide/templates/styleguide.module.forms.html',
      scope: {},
      controller: function($scope){
        $scope.show = true;
        $scope.interests = ['biking', 'scuba', 'skiing'];
        $scope.education = ['high school', '2-year college', '4-year college', 'masters program'];

        //models
        $scope.user = {};
        $scope.user.interests = {};
        $scope.user.education = {};
        $scope.nolabel = {};
        $scope.nolabel.interests = {};
        $scope.nolabel.education = {};

        //togglers
        $scope.toggler1 = 'id-1';
        $scope.togglers1 = [
          { id: 'id-1', label: 'One', activeId: 'toggler1' },
          { id: 'id-2', label: 'Two', activeId: 'toggler1' }
        ];

        $scope.toggler2 = 'id-1';
        $scope.togglers2 = [
          { id: 'id-1', label: 'One', activeId: 'toggler2' },
          { id: 'id-2', label: 'Two', activeId: 'toggler2' },
          { id: 'id-3', label: 'Three', activeId: 'toggler2' }
        ];

        $scope.toggler3 = 'id-1';
        $scope.togglers3 = [
          { id: 'id-1', label: 'One', activeId: 'toggler3' },
          { id: 'id-2', label: 'Two', activeId: 'toggler3' },
          { id: 'id-3', label: 'Three', activeId: 'toggler3' },
          { id: 'id-4', label: 'Example number Four', activeId: 'toggler3' }
        ];

        $scope.switch1 = 'new';
        $scope.switches1 = [
          { id: 'new', label: 'New', activeId: 'switch1' },
          { id: 'existing', label: 'Existing', activeId: 'switch1' }
        ];

        $scope.switch2 = 'new';
        $scope.switches2 = [
          { id: 'new', label: 'New', activeId: 'switch2' },
          { id: 'existing', label: 'Existing', activeId: 'switch2' }
        ];

        $scope.switch3 = 'off';
        $scope.switches3 = [
          { id: 'off', label: 'Off', activeId: 'switch3' },
          { id: 'on', label: 'On', activeId: 'switch3' }
        ];

        $scope.switch4 = 'off';
        $scope.switches4 = [
          { id: 'off', label: 'Off', activeId: 'switch4' },
          { id: 'on', label: 'On', activeId: 'switch4' }
        ];

        $scope.submit = function(myForm){
          $log.log(myForm);
        };

        $scope.clickModule = function(){
          $scope.show = !$scope.show;
        };
      }
    };
  }
]);