angular.module('directory.services.employees', ['ngResource','directory.config'])

    .factory('Employees', function($resource,remoteserver) {
        console.log("resource Employees");
        return $resource(remoteserver.uri+ '/employees/:employeeId/:data');
    })

    .factory('Sentence', function ($resource,remoteserver) {
        console.log("resource Sentence");
        return $resource(remoteserver.uri+'/sentence/:sentenceId/:data');
    })

    .factory('Youdaodict', function ($resource,remoteserver) {
        console.log("resource Youdaodict");
        return $resource(remoteserver.uri+'/query/:word');
    })