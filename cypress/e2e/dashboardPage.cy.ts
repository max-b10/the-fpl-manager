describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('input[type="number"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', 'http://localhost:5173/dashboard');
  });

  it('renders the navbar', () => {
    cy.get('[data-cy="navbar"]').should('be.visible');
  });

  it('renders the header', () => {
    cy.get('[data-cy="header"]').should('be.visible');
  });
  it('renders the team dashboard card and contains the correct text', () => {
    cy.get('[data-cy="dashboard-card-team"]')
      .should('be.visible')
      .contains('Team');
  });

  it('renders the overall rank dashboard card and contains the correct text', () => {
    cy.get('[data-cy="dashboard-card-overall-rank"]')
      .should('be.visible')
      .contains('Overall Rank');
  });

  it('renders the previous gameweek dashboard card and contains the correct text', () => {
    cy.get('[data-cy="dashboard-card-previous-gameweek"]')
      .should('be.visible')
      .contains('Gameweek');
  });

  it('renders the current gameweek dashboard card and contains the correct text', () => {
    cy.get('[data-cy="dashboard-card-current-gameweek"]')
      .should('be.visible')
      .contains('Gameweek');
  });
  it('renders the table title', () => {
    cy.get('[data-cy="table-title"]').should('be.visible');
  });
  it('renders the table', () => {
    cy.get('[data-cy="dashboard-table"]').should('be.visible');
  });
  it('navigates to the Manager History page', () => {
    cy.get('[data-cy="navbar-link-history"]').click();
    cy.url().should('eq', 'http://localhost:5173/managerHistory');
  });
  it('navigates to the Manager Comparison page', () => {
    cy.get('[data-cy="navbar-link-compare"]').click();
    cy.url().should('eq', 'http://localhost:5173/managerComparison');
  });
  it('navigates to the About page', () => {
    cy.get('[data-cy="navbar-link-about"]').click();
    cy.url().should('eq', 'http://localhost:5173/about');
  });
});
