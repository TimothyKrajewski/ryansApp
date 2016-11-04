(function(){
  var food = {Type:"", Price:0.0,};
  var cart = new Array(10);

  function addToCart(type){
    var i = new food();
    i.Type = type;
    cart.add(i);
  }

  function getReceipt(){
    var str = "";
    for(var i = 0; i < cart.length(); i++){
      str += cart[i].Type + cart[i].Price;
    }
    return str;
  }

})();
