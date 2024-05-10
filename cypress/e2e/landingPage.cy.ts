describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('renders the title', () => {
    cy.get('[data-cy="landing-title"]')
      .should('be.visible')
      .contains('The FPL Manager');
  });
  it('renders the description', () => {
    cy.get('[data-cy="landing-description"]')
      .should('be.visible')
      .contains(
        'Enter your Fantasy Premier League id to analyse your manager history and more!'
      );
  });
  it('renders the form', () => {
    cy.get('form').should('be.visible');
  });

  it('submits the form with valid input', () => {
    cy.get('input[type="number"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:5173/dashboard');
  });

  it('shows an error message with invalid input', () => {
    cy.get('input[type="number"]').type('0');
    cy.get('button[type="submit"]').click();
    cy.get('[data-cy="form-message"]')
      .should('be.visible')
      .contains('ID must be at least 1');
  });
});
