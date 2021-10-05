
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains body tag', ()=>{
            cy.get('body').should('be.visible');
        });
        it('reveal answer button clicks', ()=>{
            cy.get('#reveal-button').click();
        });
        it('contains title', ()=>{
            cy.get('#title').should('be.visible');
        });
    });
});