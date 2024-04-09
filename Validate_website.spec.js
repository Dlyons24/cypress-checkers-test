describe('Check if the Checkers game website is up', () => {
    it('Visits the Checkers game and checks for the page title', () => {
      cy.visit('https://www.gamesforthebrain.com/game/checkers/');
      cy.title().should('include', 'Checkers');
    });
  });
  