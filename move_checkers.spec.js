describe('Checkers Game Test', () => {
    it('Moves an orange checker piece to another space', () => {
      // Visit the game website
      cy.visit('https://www.gamesforthebrain.com/game/checkers/');
  
      // Select orange checker piece
      cy.get('img[name="space02"]').click();
  
      // click on the destination space
      cy.get('img[name="space13"]').click();

      
      cy.get('img[name="space02"]').click(); 

      
      cy.get('img[name="space04"]').click();

      
      cy.get('img[name="space15"]').click();
      cy.get('#message').should('have.text', 'Make a move.');

      cy.get('img[name="space22"]').click();
      cy.get('img[name="space33"]').click();
      cy.get('#message').should('have.text', 'Make a move.');

      cy.get('img[name="space15"]').click();
      cy.get('#message').should('have.text', 'Make a move.');

      cy.contains('a', 'Restart...').click();

      // This text will be validating that the game has restarted 
      cy.get('#message').should('have.text', 'Select an orange piece to move.');
    });

  });
