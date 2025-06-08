describe('Sample Test Suite', () => {
  it('should visit a page and verify title', () => {
    // Example test - replace with your actual tests
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
    cy.get('[data-cy="submit"]').should('be.visible')
  })

  it('should demonstrate fixture usage', () => {
    // Example of using fixtures
    cy.fixture('example').then((data) => {
      expect(data.name).to.equal('Using fixtures to represent data')
      expect(data.email).to.equal('hello@cypress.io')
    })
  })
})