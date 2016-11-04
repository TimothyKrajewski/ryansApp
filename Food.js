(function(){

  var cart = new Array(10);
  var images = new Array();

  images = document.getElementsByClassName('img-thumbnail');
  for (var i = 0; i < images.length; i++){
    images[i].addEventListener("click", clickEvent);
  }

  function clickEvent(event){
    alert(this.innerHTML);
    addToCart("", 13.57);
    alert("Item Successfully added");
  }

  function addToCart(type, price){
    var food = {Type:"", Price:0.0,};
    food.Type = type;
    food.Price = price;
    cart.push(food);
  }

  function getReceipt(){
    var str = "";
    for(var i = 0; i < cart.length; i++){
      str += cart[i].Type + cart[i].Price;
    }
    return str;
  }

})();
