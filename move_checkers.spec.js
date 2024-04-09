describe('Checkers Game Test', () => {
    it('Moves an orange checker piece to another space', () => {
      // Visit the game website
      cy.visit('https://www.gamesforthebrain.com/game/checkers/');
  
      // Select orange checker piece
      cy.get('img[name="space02"]').click();
  
      // click on the destination space
      cy.get('img[name="space13"]').click();
  
     
    });
  });
