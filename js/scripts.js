// business logic
function Order(topping,size,crust,addon) {
  this.topping = topping;
  this.size = size;
  this.crust = crust;
  this.addon = addon;
  this.cart = [];
}
Order.prototype.pizzaType = function() {
  return this.crust + " crust " + this.topping + " pizza, " + this.size + ", " + this.addon ;
}
// user interface
$(document).ready(function() {
  $("form#new-order").submit(function(event) {
    event.preventDefault();

    var inputtedTopping = $("input#new-topping").val();
    var inputtedSize = $("input#new-size").val();
    var inputtedCrust = $("input#new-crust").val();
    var inputtedAddon = $("input#new-addon").val();
    var newOrder = new Order(inputtedTopping, inputtedSize, inputtedCrust, inputtedAddon);

    $("ul#orders").append("<li><span class='order'>" + newOrder.pizzaType() + "</span></li>");

    $('input').val("");


    $(".order").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newOrder.pizzaType());
      $("p .topping").text(newOrder.topping);
      $("p .size").text(newOrder.size);
      $("p .crust").text(newOrder.crust);
      $("p .addon").text(newOrder.addon);
    });
  });
});
