describe('Order', function() {
  it("creates a pizza order with the given properties", function() {
    var testOrder = new Order("cheese","small","thin","liter");
    expect(testOrder.topping).to.equal("cheese");
    expect(testOrder.size).to.equal("small");
    expect(testOrder.crust).to.equal("thin");
    expect(testOrder.addon).to.equal("liter");
    expect(testOrder.cart).to.eql([]);
  });
  it("adds the pizzaType method to all Orders", function() {
    var testOrder = new Order("pepperoni","small","thin","2ltr")
    expect(testOrder.pizzaType()).to.equal("thin crust pepperoni pizza, small, 2ltr");
  });
});
