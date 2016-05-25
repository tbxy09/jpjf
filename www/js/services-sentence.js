angular.module('directory.services.sentence', ['ngResource'.'directory.config'])
    .factory('Sentence', function ($resource,remoteserver) {
    	console.log("resource Sentence");
        return $resource(remoteserver.uri+'/sentence/:sentenceId/:data');
    })