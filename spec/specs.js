describe('Order', function() {
  it("creates a pizza order with the given properties", function() {
    var testOrder = new Order("cheese","small","thin","liter");
    expect(testOrder.topping).to.equal("cheese");
    expect(testOrder.size).to.equal("small");
    expect(testOrder.crust).to.equal("thin");
    expect(testOrder.addon).to.equal("liter");
    expect(testOrder.cart).to.eql([]);
  });
});
