(function(){
  var order = window.localStorage.getItem("order");
  var str = "";
  var total = 0;

  /*for(var i = 0; i < window.localStorage.getItem("count"); i++){
    str += order[i].Type + " : " + order[i].Price + "\n";
    total += order[i].Price;
  }*/

  var prnt = document.getElementById("printOut");
  prnt.innerHTML = order;
  window.localStorage.removeItem("order");
})()
