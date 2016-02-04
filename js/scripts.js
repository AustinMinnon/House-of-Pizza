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
Order.prototype.getToppingPrice = function() {
  var toppingPrice = 5

  if (this.topping === "pepperoni" || this.topping === "xcheese" || this.topping === "bacon") {
    return toppingPrice +=3;
  }else {
    return toppingPrice +0;
  }
  return toppingPrice;
}

Order.prototype.getSizePrice = function() {
  var sizePrice = 0

  if (this.size === "sm") {
    return sizePrice +=1;
  }else if (this.size === "md") {
    return sizePrice +=3;
  }else if (this.size === "lg") {
    return sizePrice +=5;
  }else {
  }
  return sizePrice;
}

Order.prototype.getCrustPrice = function() {
  var CrustPrice = 0

  if (this.crust === "reg") {
    return CrustPrice +=0;
  }else if (this.crust === "thin") {
    return CrustPrice +=-1;
  }else if (this.crust === "deep") {
    return CrustPrice +=1;
  }else {
  }
  return CrustPrice;
}

Order.prototype.getAddonPrice = function() {
  var AddonPrice = 0

  if (this.addon === "cola" || this.addon === "rootbeer" || this.addon === "gingerale") {
    return AddonPrice +=2;
  }else {
  }
  return AddonPrice;
}

Order.prototype.getPizzaPrice = function() {
  return this.getToppingPrice() + this.getSizePrice() + this.getCrustPrice() + this.getAddonPrice();
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
    var total = newOrder.getPizzaPrice();
    $("ul#orders").append("<li><span class='order'>" + newOrder.pizzaType() + "</span></li>");

    $('input').val("");


    $(".order").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newOrder.pizzaType());
      $("p .topping").text(newOrder.topping);
      $("p .size").text(newOrder.size);
      $("p .crust").text(newOrder.crust);
      $("p .addon").text(newOrder.addon);
      $("p .total").text(total);
    });
  });
});
