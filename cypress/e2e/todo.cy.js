/// <reference types="cypress" />

describe('Test example', () => {
  beforeEach(() => {
        //Navigate to main mage
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
  })
        //Test if the main page is loaded
  it('Navigate to Despe noi page', () => {
        //Click on the link to Despre noi page
    cy.get('a[href*="/about"]').click()
        //Check if the url is correct
    cy.url().should('contains','/about')
        //Check if the title is correct
    cy.get('.mb-5 h3.card-title').should('have.text', 'Despre noi')
  })

})

describe("Header" , () => {
     beforeEach(() => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
     })

     it('TC1-Navigate to the correct page', () => {
      cy.get('.navbar-brand').click({ force: true });
      cy.get(".home-page").should("exist");

      cy.get(':nth-child(2) > .nav-link').click();
      cy.get('.content').should("exist");

      cy.get(':nth-child(3) > .nav-link').click();
      cy.get(`.search-page`).should(`exist`);

      cy.get(':nth-child(4) > .nav-link').click();
      cy.get(`.landing-page`).should(`exist`);

      cy.get(':nth-child(5) > .nav-link').click();
      cy.get(`.container`).should("exist");

      cy.get(':nth-child(6) > .nav-link').click();
      cy.get(".content").should(`exist`);

      
      cy.get(':nth-child(6) > .nav-link').click();
      cy.get('.register-page').should("exist");
     })
      
  })

describe(`Top Voluntari page`,() => {
      beforeEach(() => {
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
       })
       it(` TC-2 Map and volunteer is displayed`, () => {
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').should(`exist`);
        cy.get('.container-fluid > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .row > .col-sm-12 > .card').should(`exist`);
       })

       it(`TC-3 Zoom functionality`,() =>{
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('[aria-label="Zoom in"]').click();
        cy.get('[aria-label="Zoom out"]').click();
        
       } )
  })
describe("Autentificare page", () => {
        beforeEach(() => {
          cy.visit('https://iwanttohelp.bim.assistcloud.services/')
         })
        it(`TC-4 Login in valid credentials`, () => {
          cy.get(':nth-child(7) > .nav-link').click();
          cy.get('[name="phone_number"]').type(`0745217878`);
          cy.get('[name="password').type(`test2`);
          cy.get('.btn').click();
          cy.get('.content').should(`exist`);
        })
        it(`TC-5 Login with invalid credentials`, () => {
          cy.get(':nth-child(7) > .nav-link').click();
          cy.get('[name="phone_number"]').type(`0000000000`);
          cy.get('[name="password"]').type(`TEST.1`);
          cy.get('.btn').click();
          cy.get('.alert').should(`exist`);
          cy.get('.login-page').should(`exist`);
        })
    })
    
describe(`Nevoi recomandate page`, () => {
      beforeEach(() => {
        cy.visit('https://iwanttohelp.bim.assistcloud.services/')
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get(`[name="phone_number"]`).type(`0745217878`);
        cy.get('[name="password"]').type(`test2`);
        cy.get('.btn').click();
       })
       it(`TC-6 New Nevoie recomandată`, () =>{
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get('.btn').click({force:true});
        cy.get('.col-md-8').should(`exist`);
        cy.get('[name="contact_first_name"]').type(`Casian`);
        cy.get('[name="contact_last_name"]').type(`Alina`);
        cy.get('[name="contact_phone_number"]').type(`0746414088`);
        cy.get('[class="vs__search"]').click();
        cy.get('#vs1__option-2').click();
        cy.get('[name="description"]').type("boli");
        cy.get('[class="form-control pac-target-input"]').type(`Fabricii`);
        cy.get('[name="details"]').type(`Numarul 32`);
        cy.get('[name="county"]').type(`Suceava`);
        cy.get('[name="city"]').type(`Suceava`);
        cy.get('[name="postal_code"]').type(`727225`);
        cy.get('[class="btn btn-primary"]').click();
        cy.get('.alert').should(`exist`);
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get('tbody > :nth-child(1) > [aria-colindex="4"] > div').should(`exist`);
       })

       it(`TC-7 Verify if the "Descriere" field is required`, () => {
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get('.btn').click({force:true});
        cy.get('.col-md-8').should(`exist`);
        cy.get('[name="contact_first_name"]').type(`Casian`);
        cy.get('[name="contact_last_name"]').type(`Alin`);
        cy.get('[name="contact_phone_number"]').type(`0746414088`);
        cy.get('[class="vs__search"]').click();
        cy.get('#vs1__option-2').click();
        cy.get('[class="form-control pac-target-input"]').type(`Fabricii`);
        cy.get('[name="details"]').type(`Numarul 32`);
        cy.get('[name="county"]').type(`Suceava`);
        cy.get('[name="city"]').type(`Suceava`);
        cy.get('[name="postal_code"]').type(`727225`);
        cy.get('[class="btn btn-primary"]').click();
        cy.get('.errors > .text-left').should(`exist`);
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get('tbody > :nth-child(1) > [aria-colindex="4"] > div').should(`not.exist`);
       })
       
       it(`TC-8 Verify “Vizualizeaza” functionality`, () => {
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get(':nth-child(1) > [aria-colindex="6"] > div > .fa-eye').click();
        cy.get('.title').contains("Vizualizare nevoie recomandata")
        cy.get('[name="contact_first_name"]').should('have.value',`Casian`);
        cy.get('[name="contact_last_name"]').should(`have.value`,`Alina`);
        cy.get('[name="contact_phone_number"]').should('have.value' ,`0746414088`);
        cy.get('[class="need-description form-control"]').should( `have.value` ,"boli");
        cy.get('[class="form-control pac-target-input"]').should(`have.value`,`Fabricii`);
        cy.get('[name="details"]').should(`have.value`,`Numarul 32`);
        cy.get('[name="county"]').should(`have.value`,`Suceava`);
        cy.get('[name="city"]').should('have.value',`Suceava`);
        cy.get('[name="postal_code"]').should(`have.value`,`727225`);
       })

       it(`TC-9 Verify "Sterge" functionality`,() =>{
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get(':nth-child(1) > [aria-colindex="6"] > div > .fa-trash-alt').click({ multiple: true });
        cy.get('#delete_modal___BV_modal_content_').should("exist");
        cy.get(`[class="btn btn btn-primary btn-secondary btn-sm"]`).click();
        cy.contains('td[aria-colindex]').should(`not.exist`);
        cy.get('table[role="table"]')
        .invoke('val')
        .then(parentName => {
  
          cy.get('table[role="table"]')
            .find('tr[role="row"]')
            .first()
            .parents('table[role="table"]')
            .within(tr => {
              cy.get('tr[role="row"]')
                .invoke('val')
                .then('tr[role="row"]',() => {
                  cy.contains('table','tr[role="row"]' ).should('not.exist');
                });
            });
        });
       })

       it(`TC-10 Verify the 'Search frunctionality`,() => {
        cy.get(':nth-child(3) > .nav-link > p').click();
        cy.get(`[name="Filter"]`).type("boli");
        cy.get('tbody > tr > [aria-colindex="1"] > div').contains(`boli`).should("be.visible");
        cy.get(`[name="Filter"]`).clear();
        cy.get(`[name="Filter"]`).type("Dumitrescu");
        cy.get('tbody > :nth-child(1) > [aria-colindex="2"] > div').contains(`Dumitrescu`).should("be.visible");
        cy.get(`[name="Filter"]`).clear();
        cy.get(`[name="Filter"]`).type("Fabricii");
        cy.get('tbody > :nth-child(1) > [aria-colindex="3"] > div').contains(`Fabricii`).should("be.visible");
        cy.get(`[name="Filter"]`).clear();
        cy.get(`[name="Filter"]`).type("0746414088");
        cy.get('tbody > :nth-child(1) > [aria-colindex="4"] > div').contains(`0746414088`).should("be.visible");
      })
    })

describe(`Nevoi Page` , () => {
    beforeEach(() => {
      cy.visit('https://iwanttohelp.bim.assistcloud.services/')
      cy.get(':nth-child(7) > .nav-link').click();
      cy.get(`[name="phone_number"]`).type(`0745217878`);
      cy.get('[name="password"]').type(`test2`);
      cy.get('.btn').click();
    })

    it(`TC-11 Vizualizează functionality`, () =>{
      cy.get(':nth-child(2) > .nav-link > p').click();
      cy.get(':nth-child(15) > [aria-colindex="5"] > div > .fa-eye').click();
      cy.get('[name="first_name"]').should('have.value',`Stefan`);
      cy.get('[name="last_name"]').should(`have.value`,`Olarnic`);
      cy.get('[name="phone_number"]').should('have.value' ,`0751415238`);
      cy.get('[class="need-description form-control"]').should( `have.value` ,"yaby");
      cy.get('[name="street_name"]').should(`have.value`,`Str. stefan cel mare nr. 24`);
      cy.get('[name="county"]').should(`have.value`,`Suceava`);
      cy.get('[name="city"]').should('have.value',`Suceava`);
      cy.get('[name="postal_code"]').should(`have.value`,'720024');
      cy.get('.title').contains("Vizualizare nevoie");
      cy.get('span[class="text-warning"]').should(`contain`, `Deschis`);
    })

    it(`TC -12 Verify “Aplica” functionality `, () => {
      cy.get(':nth-child(2) > .nav-link > p').click();
      cy.get(':nth-child(16) > [aria-colindex="5"] > div > .fa-user-check').click({force: true});
      cy.get('.btn-primary').click();
      cy.get('.alert').should(`exist`);
    })

    it(`TC -13 Verify “Completeaza” functionality`,() =>{
      cy.get(':nth-child(2) > .nav-link > p').click();
      cy.get(':nth-child(72) > [aria-colindex="5"] > div > .fa-check').click({force: true});
      cy.get('[class="vue-star-rating-star"]').click({ multiple: true });
      cy.get('[name="comment"]').type(`ok`);
      cy.get('.btn-primary').click();
      cy.get('.alert').should('exist');
      cy.get(`[title="Aplica"]`).should('have.class', 'disabled');
      cy.get(`[title="Completeaza"]`).should('have.class', 'disabled')
      cy.get(':nth-child(5) > [aria-colindex="5"] > div > .fa-eye').click({force:true});
      cy.get('.reviews').should(`exist`);
    })
})

describe(`Autentificare`, () => {
  it(`TC - 14 Verify that the user is able to properly logout.`,() =>{
    cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    cy.get(':nth-child(7) > .nav-link').click();
    cy.get(`[name="phone_number"]`).type(`0745217878`);
    cy.get('[name="password"]').type(`test2`);
    cy.get('.btn').click();
    cy.get(':nth-child(9) > .nav-link').click();
    cy.get(`[class="home-page"]`).should(`be.visible`);
    cy.get(':nth-child(7) > .nav-link').should(`contain`, `Autentificare`)
  })
})

describe(`Api tests`, () =>{
  it('TC-15 Get Profile endpoint',()=>{
    cy.requiest({
        method: 'Get',
        url: 'https://iwanttohelp.bim.assistcloud.services/dashboard/profile',
      }).then(function(response){
        expect(response.body).have.property('/profile')
      })
  } )
})

describe(`My tests`, () =>{
  
  it("TC-18 Verify Persoane ajutate page", () => {
    cy.visit('https://iwanttohelp.bim.assistcloud.services/')
    cy.get(':nth-child(7) > .nav-link').click();
    cy.get(`[name="phone_number"]`).type(`0745217878`);
    cy.get('[name="password"]').type(`test2`);
    cy.get('.btn').click();
    cy.get(':nth-child(5) > .nav-link > p').click();
    cy.get('tbody > :nth-child(1) > [aria-colindex="1"]').should(`contain`, "Sergiu");
    
  })
 

  it("TC- 19 Pagination test ",() =>{
    cy.visit("https://iwanttohelp.bim.assistcloud.services/")
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get('.pagination').should('have.length.gte',1)
    cy.get('.card').should('have.length.gte',7);
  })

  it.only("TC- 20 Lista nevoi page", () => {
    cy.visit("https://iwanttohelp.bim.assistcloud.services/");
    cy.get(':nth-child(3) > .nav-link').click();
    cy.url().should('contains','/needs_list');
    cy.get('.bottom-section > :nth-child(1) > .card > .card-body').contains('Nevoi personale')
  })
  })

