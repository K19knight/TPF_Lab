/*describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});*/

describe('Swiper Gallery test', function (){
  it('Checks all slides', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  })
})

describe('Swiper Gallery test', function (){
  it('Check if all elements are visible', function () {
    cy.visit('http://localhost:3000');
    cy.get('.wrapper')
    cy.get('.card-contents')
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-button-prev').click();
  })
})