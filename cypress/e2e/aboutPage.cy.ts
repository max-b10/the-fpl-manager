import { STACK_LENGTH } from '../../src/constants/stack';

describe('About Page', () => {
  before(() => {
    cy.request('http://localhost:5173/stack.json').then((response) => {
      console.log(response.body);
    });
  });

  beforeEach(() => {
    cy.visit('http://localhost:5173/about');
  });

  it('renders the navbar', () => {
    cy.get('[data-cy="navbar"]').should('be.visible');
  });

  it('renders the correct number of tech stack cards', () => {
    cy.get('[data-cy="tech-stack-card"]').should('have.length', STACK_LENGTH);
  });

  it('each tech stack card has an icon and a title', () => {
    cy.get('[data-cy="tech-stack-card"]').each(($card) => {
      cy.wrap($card).find('[data-cy="icon"]').should('be.visible');
      cy.wrap($card).find('[data-cy="title"]').should('be.visible');
    });
  });
});
