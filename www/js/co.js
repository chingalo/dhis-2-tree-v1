.controller('ChatsCtrl', function($scope,$filter,$ionicModal) {

  $scope.hasOrgUnitChildernOpened = {};

  $scope.data = [];
  orgUnitdata = [{"level":1,"name":"Testing land","id":"GD7TowwI46c","children":[{"level":2,"name":"Animal Region","id":"zj9LoeErgkP","children":[{"level":3,"name":"Fish District","id":"I33odCYFs58","children":[{"level":4,"name":"Catfish Ward","id":"YfvoyE8tTrk","children":[],"dataSets":[{"id":"zk2Q65fuBjl"},{"id":"sJZpLgWm8KK"},{"id":"Ba9mZCFaUCV"},{"id":"p3R3pn2tbCc"},{"id":"XQE2574S08o"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"},{"name":"Animal Region","id":"zj9LoeErgkP"},{"name":"Fish District","id":"I33odCYFs58"}]}],"dataSets":[{"id":"HhyM40b8ma1"},{"id":"QLoyT2aHGes"},{"id":"K24dTOb3JHc"},{"id":"Wtzj9Chl3HW"},{"id":"OBnVfEenAuW"},{"id":"Znn30Q67yDO"},{"id":"cSC1VV8uMh9"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"},{"name":"Animal Region","id":"zj9LoeErgkP"}]},{"level":3,"name":"Bird District","id":"Hq1ZHMHGvQE","children":[{"level":4,"name":"Crow Ward","id":"iH7LSuDKBxU","children":[],"dataSets":[{"id":"zk2Q65fuBjl"},{"id":"sJZpLgWm8KK"},{"id":"Ba9mZCFaUCV"},{"id":"p3R3pn2tbCc"},{"id":"XQE2574S08o"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"},{"name":"Animal Region","id":"zj9LoeErgkP"},{"name":"Bird District","id":"Hq1ZHMHGvQE"}]},{"level":4,"name":"Hawk Ward","id":"AsgiIABsA69","children":[],"dataSets":[{"id":"zk2Q65fuBjl"},{"id":"sJZpLgWm8KK"},{"id":"Ba9mZCFaUCV"},{"id":"p3R3pn2tbCc"},{"id":"XQE2574S08o"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"},{"name":"Animal Region","id":"zj9LoeErgkP"},{"name":"Bird District","id":"Hq1ZHMHGvQE"}]},{"level":4,"name":"Owl Ward","id":"PwOdmPqofaP","children":[],"dataSets":[{"id":"zk2Q65fuBjl"},{"id":"sJZpLgWm8KK"},{"id":"Ba9mZCFaUCV"},{"id":"p3R3pn2tbCc"},{"id":"XQE2574S08o"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"},{"name":"Animal Region","id":"zj9LoeErgkP"},{"name":"Bird District","id":"Hq1ZHMHGvQE"}]}],"dataSets":[{"id":"HhyM40b8ma1"},{"id":"QLoyT2aHGes"},{"id":"K24dTOb3JHc"},{"id":"Wtzj9Chl3HW"},{"id":"OBnVfEenAuW"},{"id":"Znn30Q67yDO"},{"id":"cSC1VV8uMh9"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"},{"name":"Animal Region","id":"zj9LoeErgkP"}]}],"dataSets":[{"id":"HhyM40b8ma1"},{"id":"QLoyT2aHGes"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"}]},{"level":2,"name":"Food Region","id":"gwAcS6gaz7D","children":[{"level":3,"name":"Dessert District","id":"vUamP5PpJsx","children":[{"level":4,"name":"Cake Ward","id":"ezsGHqkqHOg","children":[],"dataSets":[{"id":"zk2Q65fuBjl"},{"id":"sJZpLgWm8KK"},{"id":"Ba9mZCFaUCV"},{"id":"p3R3pn2tbCc"},{"id":"XQE2574S08o"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"},{"name":"Food Region","id":"gwAcS6gaz7D"},{"name":"Dessert District","id":"vUamP5PpJsx"}]}],"dataSets":[{"id":"HhyM40b8ma1"},{"id":"QLoyT2aHGes"},{"id":"K24dTOb3JHc"},{"id":"Wtzj9Chl3HW"},{"id":"OBnVfEenAuW"},{"id":"Znn30Q67yDO"},{"id":"cSC1VV8uMh9"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"},{"name":"Food Region","id":"gwAcS6gaz7D"}]}],"dataSets":[{"id":"HhyM40b8ma1"},{"id":"QLoyT2aHGes"}],"ancestors":[{"name":"Testing land","id":"GD7TowwI46c"}]}],"dataSets":[{"id":"HhyM40b8ma1"},{"id":"QLoyT2aHGes"}],"ancestors":[]}];
 
  $scope.toggleOrgUnit = function(orgUnit){
    if($scope.hasOrgUnitChildernOpened[orgUnit.id]){
      $scope.hasOrgUnitChildernOpened[orgUnit.id] = !$scope.hasOrgUnitChildernOpened[orgUnit.id];
    }else{
      $scope.hasOrgUnitChildernOpened[orgUnit.id] = true;
    }
  };
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.organisationUnitsModal = modal;
  });
  init();
  function init(){
    orgUnitdata.forEach(function (organisationUnit) {
      $scope.data.push(getSorted(organisationUnit));
    });
  }
  $scope.setSelectedOrgUnit = function(orgUnit){
    $scope.selectedOgUnit = orgUnit.name;
  }

  function getSorted (organisationUnit) {
    if (organisationUnit.children) {
      organisationUnit.children = $filter('orderBy')(organisationUnit.children, 'name');
      organisationUnit.children.forEach(function (child, index) {
        organisationUnit.children[index] = getSorted(child);
      });
    }
    return organisationUnit;
  }


})
