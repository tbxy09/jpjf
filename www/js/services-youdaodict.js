var config = require('./config');
angular.module('directory.services.youdaodict', ['ngResource','directory.config'])
    .factory('Youdaodict', function ($resource,remoteserver) {
        console.log("resource Youdaodict");
        return $resource(remoteserver.uri+'/query/:word');
    })
    // $resource('http://192.168.1.2:5000/youdaodict',charge: {method:'POST', params:{charge:true}});
// http://192.168.1.2:5000/employees/:employeeId/:data
        // return $resource('http://dict.youdao.com/jsonapi?\
        // 	q=:word\
        // 	&keyfrom=deskdict.tab_switch\
        // 	&dogVersion=1.0\
        // 	&dogui=json\
        // 	&client=deskdict\
        // 	&id=2d63d924a39c62514\
        // 	&vendor=unknown\
        // 	&in=YoudaoDict_V6.3.67.7016_setup.1439368979\
        // 	&appVer=6.3.69.4001\
        // 	&appZengqiang=0\
        // 	&abTest=9\
        // 	&le=jap\
        // 	&dicts={"count":11,"dicts":\
        // 	[["ec","ce","cj","jc","ck","kc","cf","fc"],\
        // 	["pic_dict"],["web_trans","special","ee","hh"],\
        // 	["collins","ec21","ce_new"],\
        // 	["phrs","syno","rel_word"],\
        // 	["blng_sents_part","media_sents_part","auth_sents_part"],\
        // 	["baike"],\
        // 	["fanyi"],\
        // 	["web_search"],\
        // 	["typos"],\
        // 	["collins_part"]]}')