angular.module('directory', ['ionic', 'directory.controllers', 'directory.config', 'directory.services.employees'])
    //"directory.services.employees","directory.services.youdaodict"
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: 'templates/employee-list.html',
            controller: 'EmployeeListCtrl'
        })

    // .state('employee', {
    //     url: '/employees/:employeeId',
    //     templateUrl: 'templates/employee-detail.html',
    //     controller: 'EmployeeDetailCtrl'
    // })
    .state('sentence', {
        url: '/sentence/:sentenceId',
        template: '{{data.showDelete}}',
        // templateUrl: 'templates/sentence-detail.html',
        controller: 'TestCtrl'
        // controller: 'EmployeeDetailCtrl'
    })

    // .state('reports', {
    //     url: '/employees/:employeeId/reports',
    //     templateUrl: 'templates/employee-reports.html',
    //     controller: 'EmployeeReportsCtrl'
    // });


    .state('reports', {
        url: '/dict/:word',
        templateUrl: 'templates/employee-reports.html',
        controller: 'EmployeeReportsCtrl'
    })

    .state('test', {
        url: '/test',
        templateUrl: 'templates/test.html',
        controller: 'TestCtrl'
    })


    $urlRouterProvider.otherwise('/search');

});