function Order(topping,size,crust,addon) {
  this.topping = topping;
  this.size = size;
  this.crust = crust;
  this.addon = addon;
  this.cart = [];
}
Order.prototype.pizzaType = function() {
  return "Your " + this.crust + " crust " + this.topping + " pizza, " + this.size + " will be ready in about 15 minutes";
}
