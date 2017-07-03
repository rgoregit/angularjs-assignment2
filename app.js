(function () {
'use strict';
//ShoppingListCheckOff
angular.module('ControllerAsApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// ToBuyController LIST  - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buylist = this;

  buylist.items = ShoppingListCheckOffService.getBuyItems();

  buylist.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };

}


// AlreadyBoughtController LIST  - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtlist = this;

  boughtlist.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buyitems=[];
  var boughtitems=[];

  service.loadbuyitems = function (itemName, quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        buyitems.push(item);
    };

  service.loadboughtitems = function (itemName, quantity) {
        var item = {
          name: itemName,
          quantity: quantity
        };
        boughtitems.push(item);
    };

    // Initiate Buy List
    service.loadbuyitems("Donuts",1);
    service.loadbuyitems("Cookies",2);
    service.loadbuyitems("Chocolates",3);
    service.loadbuyitems("Hard Candies",5);
    service.loadbuyitems("ice cream bites dibs",1);
    //

  service.boughtItem = function (itemIdex) {
    service.loadboughtitems(buyitems[itemIdex].name,buyitems[itemIdex].quantity );
    buyitems.splice(itemIdex, 1);
  };
    service.getBuyItems = function () {
      return buyitems;
    };

    service.getBoughtItems = function () {
      return boughtitems;
    };

}

})();
