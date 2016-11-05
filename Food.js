(function(){
  //var food = {Type:"", Price:0.0,};
  var cart = new Array();
  window.num = "HELLO WORLD HELP MAKE THIS WORK";
  var images = new Array();
  document.getElementById("cart").addEventListener("click", getReceipt);
  images = document.getElementsByClassName('img-thumbnail');
  for (var i = 0; i < images.length; i++){
    images[i].addEventListener("click", clickEvent);
  }

  function clickEvent(event){
    addToCart(this.name, 13.57);
    alert("Added "+ this.name + " To Cart");
  }

  function addToCart(type, price){
    var food = {Type:"", Price:0.0,};
    food.Type = type;
    food.Price = price;
    cart.push(food);
    //alert(cart[0].Type);
  }

  function getReceipt(event){
    var str = "";
    var total = 0;
    for(var i = 0; i < cart.length; i++){
      str += cart[i].Type + " : " + cart[i].Price + "\n" + "<br>";
      total += cart[i].Price;
    }
    str += total;
    window.localStorage.setItem("order", str);
    window.localStorage.setItem("count", cart.length);
    //alert("" + str + "Total : " + total);
    //return str;
  }

})();
