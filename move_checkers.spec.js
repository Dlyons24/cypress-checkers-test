describe('Checkers Game Test', () => {
    it('Moves an orange checker piece to another space', () => {
      // Visit the game website
      cy.visit('https://www.gamesforthebrain.com/game/checkers/');
  
      // You might need to adjust the selectors based on the game's structure
      // Example: Select the orange checker piece
      cy.get('img[name="space02"]').click();
  
      // Then click on the destination space
      cy.get('img[name="destination-space-name"]').click();
  
      // Add assertions here to verify the move was successful
      // For example, you could check if the destination space now contains an orange piece
      // and the original space does not
    });
  });