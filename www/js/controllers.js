// 'http://192.168.1.2:5000/sentence/:sentenceId/:data'
// 
angular.module('directory.controllers', [])

    .controller('EmployeeListCtrl', function ($scope, Employees,Sentence,Youdaodict) {

        $scope.searchKey = "";
        console.log('search');
        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.employees = Employees.query();
        }

        $scope.search = function () {
            $scope.employees = Employees.query({name: $scope.searchKey});
        }

        $scope.employees = Employees.query();
        // var Sentence= $resource('http://192.168.1.4:5000/sentence/:sentenceId/:data');
        $scope.sentences = Sentence.query();
        console.log($scope.sentences)
    })

    // .controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees,Sentence) {
    //     console.log('details');
    //     $scope.employeeitem = Employees.get({employeeId: $stateParams.employeeId});
    // })

    .controller('EmployeeDetailCtrl', function($scope, $stateParams, Employees,Sentence) {
        console.log('details');
        // $scope.employee = Employees.get({employeeId: $stateParams.employeeId});
        $scope.sentence = Sentence.get ({sentenceId:$stateParams.sentenceId})
        // console.log($scope.employee.id)

    })

    .controller('EmployeeReportsCtrl', function ($scope, $stateParams, Employees,Youdaodict,$http) {
        console.log('reports');
        // $scope.employee = Employees.get({employeeId: $stateParams.employeeId, data: 'reports'});
         // $scope.sentence = Sentence.get ({sentenceId:$stateParams.sentenceId})
         // $scope.dict = $http.post('http://dict.youdao.com/jsonapi?\
         //    q=:いろん\
         //    &keyfrom=deskdict.tab_switch\
         //    &dogVersion=1.0\
         //    &dogui=json\
         //    &client=deskdict\
         //    &id=2d63d924a39c62514\
         //    &vendor=unknown\
         //    &in=YoudaoDict_V6.3.67.7016_setup.1439368979\
         //    &appVer=6.3.69.4001\
         //    &appZengqiang=0\
         //    &abTest=9\
         //    &le=jap\
         //    &dicts={"count":11,"dicts":\
         //    [["ec","ce","cj","jc","ck","kc","cf","fc"],\
         //    ["pic_dict"],["web_trans","special","ee","hh"],\
         //    ["collins","ec21","ce_new"],\
         //    ["phrs","syno","rel_word"],\
         //    ["blng_sents_part","media_sents_part","auth_sents_part"],\
         //    ["baike"],\
         //    ["fanyi"],\
         //    ["web_search"],\
         //    ["typos"],\
         //    ["collins_part"]]}');
        // $scope.dict = $http.get("http://dict.youdao.com/w/jap/%E3%81%84%E3%82%8D%E3%82%93/#keyfrom=dict.top")
        // console.log($scope.dict);
        console.log(Youdaodict);
        $scope.json =Youdaodict.get({word:$stateParams.word});


        // sententceword = $stateParams.words
    })
    .controller('TestCtrl',function ($scope,$stateParams,Employees) {
        console.log('TestCtrl');
      $scope.data = {
        showDelete: false,
        showReorder: false
      };
      $scope.items = Employees.query();
      $scope.edit = function(item) {
        alert('Edit Item: ' + item.id);
      };
      $scope.share = function(item) {
        alert('Share Item: ' + item.id);
      };
      
      $scope.moveItem = function(item, fromIndex, toIndex) {
        $scope.items.splice(fromIndex, 1);
        $scope.items.splice(toIndex, 0, item);
      };
      $scope.print = function() {
        console.log("work");
        $scope.data.showDelete=!($scope.data.showDelete);
        // $scope.data.showReorder=!($scope.data.showReorder)
      };
      
      $scope.onItemDelete = function(item) {
        $scope.items.splice($scope.items.indexOf(item), 1);
      };
      
      

    });
    // .controller('MyCtrl', function($scope,$stateParams,Employees) {
      
    //   $scope.data = {
    //     showDelete: false
    //   };
      
    //   $scope.edit = function(item) {
    //     alert('Edit Item: ' + item.id);
    //   };
    //   $scope.share = function(item) {
    //     alert('Share Item: ' + item.id);
    //   };
      
    //   $scope.moveItem = function(item, fromIndex, toIndex) {
    //     $scope.items.splice(fromIndex, 1);
    //     $scope.items.splice(toIndex, 0, item);
    //   };
      
    //   $scope.onItemDelete = function(item) {
    //     $scope.items.splice($scope.items.indexOf(item), 1);
    //   };
      
    //   $scope.items = Employees.query();

      
    // });
// Define CreditCard class
/*var CreditCard = $resource('/user/:userId/card/:cardId',
 {userId:123, cardId:'@id'}, {
  charge: {method:'POST', params:{charge:true}}
 });*/

/*// We can retrieve a collection from the server
var cards = CreditCard.query(function() {
  // GET: /user/123/card
  // server returns: [ {id:456, number:'1234', name:'Smith'} ];

  var card = cards[0];
  // each item is an instance of CreditCard
  expect(card instanceof CreditCard).toEqual(true);
  card.name = "J. Smith";
  // non GET methods are mapped onto the instances
  card.$save();
  // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
  // server returns: {id:456, number:'1234', name: 'J. Smith'};

  // our custom method is mapped as well.
  card.$charge({amount:9.99});
  // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
});

// we can create an instance as well
var newCard = new CreditCard({number:'0123'});
newCard.name = "Mike Smith";
newCard.$save();
// POST: /user/123/card {number:'0123', name:'Mike Smith'}
// server returns: {id:789, number:'0123', name: 'Mike Smith'};
expect(newCard.id).toEqual(789);*/