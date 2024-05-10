describe('Compare Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/managerComparison');
  });

  it('renders the navbar', () => {
    cy.get('[data-cy="navbar"]').should('be.visible');
  });

  it('navigates to the Manager History page', () => {
    cy.get('[data-cy="navbar-link-history"]').click();
    cy.url().should('eq', 'http://localhost:5173/managerHistory');
  });

  it('navigates to the About page', () => {
    cy.get('[data-cy="navbar-link-about"]').click();
    cy.url().should('eq', 'http://localhost:5173/about');
  });
});
