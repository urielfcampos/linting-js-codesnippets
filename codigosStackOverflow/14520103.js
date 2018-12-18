

app.controller('SimpleArrayCtrl', ['$scope', function SimpleArrayCtrl($scope) {

    // Fruits
    $scope.fruits = ['apple', 'orange', 'pear', 'naartjie'];
  
    // Selected fruits
    $scope.selection = ['apple', 'pear'];
  
    // Toggle selection for a given fruit by name
    $scope.toggleSelection = function toggleSelection(fruitName) {
      var idx = $scope.selection.indexOf(fruitName);
  
      // Is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }
  
      // Is newly selected
      else {
        $scope.selection.push(fruitName);
      }
    };
  }]);

  app.controller('ObjectArrayCtrl', ['$scope', 'filterFilter', function ObjectArrayCtrl($scope, filterFilter) {

    // Fruits
    $scope.fruits = [
      { name: 'apple',    selected: true },
      { name: 'orange',   selected: false },
      { name: 'pear',     selected: true },
      { name: 'naartjie', selected: false }
    ];
  
    // Selected fruits
    $scope.selection = [];
  
    // Helper method to get selected fruits
    $scope.selectedFruits = function selectedFruits() {
      return filterFilter($scope.fruits, { selected: true });
    };
  
    // Watch fruits for changes
    $scope.$watch('fruits|filter:{selected:true}', function (nv) {
      $scope.selection = nv.map(function (fruit) {
        return fruit.name;
      });
    }, true);
  }]);
  