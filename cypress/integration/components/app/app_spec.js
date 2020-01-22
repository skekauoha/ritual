describe("App should be working", function() {
  it("App should render", function() {
    cy.visit("http://localhost:3000/");
    cy.get(".App").should("be.visible");
  });
});
