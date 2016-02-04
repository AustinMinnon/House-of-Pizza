describe('Order', function() {
  it("creates a pizza order with properties:topping,size,crust,addon", function() {
    var testOrder = new Order("cheese","sm","thin","liter");
    expect(testOrder.topping).to.equal("cheese");
    expect(testOrder.size).to.equal("sm");
    expect(testOrder.crust).to.equal("thin");
    expect(testOrder.addon).to.equal("liter");
    expect(testOrder.cart).to.eql([]);
  });
  it("return pizzaType to display in pizzas list", function() {
    var testOrder = new Order("pepperoni","sm","thin","cola")
    expect(testOrder.pizzaType()).to.equal("thin crust pepperoni pizza, sm, cola");
  });
  it("calculate topping price selected", function() {
    var testOrder = new Order("pepperoni","sm","thin","cola")
    expect(testOrder.getToppingPrice()).to.equal(8);
  });
  it("calculate size price selected", function() {
    var testOrder = new Order("pepperoni","sm","thin","cola")
    expect(testOrder.getSizePrice()).to.equal(1);
  })
  it("calculate crust price selected", function() {
    var testOrder = new Order("pepperoni","sm","thin","cola")
    expect(testOrder.getCrustPrice()).to.equal(-1)
  })
  it("calculate addon soda price", function() {
    var testOrder = new Order("pepperoni","sm","thin","cola")
    expect(testOrder.getAddonPrice()).to.equal(2)
  })
  it("calculate topping plus size plus crust plus addon", function() {
    var testOrder = new Order("pepperoni","sm","thin","cola")
    expect(testOrder.getPizzaPrice()).to.equal(10)
  })
});
