beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests', () => {

    it('User can use only same both first and validation passwords', ()=>{
        cy.get('input[placeholder="John"').type('Fida')
        cy.get('#lastName').type('ur Rahman')
        cy.get('#email.input').type('fidakhan25@gmail.com')
        cy.get('#username').type('johnDoe')
        cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
        cy.get('input[name="password"]').type('Password123')
        cy.get('[name="confirm"]').type('Password12345')
        cy.get('.submit_button').should('be.disabled')
        cy.get('#success_message').should('not.be.visible')
        cy.get('#input_error_message')
        cy.get('input[name="password"]').scrollIntoView()
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password"]').type('password')
        cy.get('[name="confirm"]').scrollIntoView()
        cy.get('[name="confirm"]').clear()
        cy.get('[name="confirm"]').type('password')
        cy.get('#input_error_message').should('not.be.visible')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.enabled')
    
    })
    
    it('User can submit form with all fields added', ()=>{
        cy.get('input[placeholder="John"').type('Fida')
        cy.get('#lastName').type('ur Rahman')
        cy.get('#email.input').type('fidakhan25@@gmail.com')
        cy.get('#username').type('johnDoe')
        cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
        cy.get('input[name="password"]').type('Password123')
        cy.get('[name="confirm"]').type('Password123')
        cy.get('#javascriptFavLanguage').click()
        cy.get('#vehicle2.checkbox.vehicles').click()
        cy.get('#cars').select("Opel")
        cy.get('#animal').select("Hippo")
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.enabled').click()
        cy.get('#success_message').should('have.css', 'display', 'block')
    })

    it('User can submit form with valid data and only mandatory fields added', ()=>{
        inputValidData('johnDoe')  
        
        
        
        
        

        
        
        
    })

    it('User cannot submit form with email missing', () => {
        inputValidData('UsernameTest')
        cy.get('#email').clear()
        cy.get('h3').contains('Input email').click()
        cy.get('.submit_button').should('be.disabled')
        cy.get('#success_message').should('not.be.visible')
        cy.get('#input_error_message').should('be.visible').and('contain', 'Mandatory input field is not valid or empty!')
    })

})

/*
Assignement 5: create more visual tests
*/

describe('Section 2: Visual tests', () => {
    describe('Section 2: Visual tests', () => {
        it('Check that logo is correct and has correct size', () => {
            cy.log('Will check logo source and size')
            cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
            
            
            cy.get('img').invoke('height').should('be.lessThan', 178)
                .and('be.greaterThan', 100)   
        })

        it(' Test for second picture', () => {
            cy.log('Will check 2 logo source and size')
            cy.get('[data-cy="cypress_logo"]').should('have.attr', 'src').should('include', 'cypress_logo')
            cy.get('[data-cy="cypress_logo"]').invoke('width').should('be.lessThan', 178)
                .and('be.greaterThan', 100)   
        });

        it('Test the navigation of Registration form 1', () => {
            cy.get('nav').children().should('have.length', 2)
    
            
            cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
            
            
            cy.get('nav').children().eq(0).should('be.visible')
                .and('have.attr', 'href', 'registration_form_1.html')
                .click()
            
            
            cy.url().should('contain', '/registration_form_1.html')
            
            
            cy.go('back')
            cy.log('Back again in registration form 2')
        })
    
        it('Test the navigation of Registration form 3 ', () => {
            cy.get('nav').children().should('have.length', 2)
            cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
            cy.get('nav').children().eq(1).should('be.visible')
                .and('have.attr', 'href', 'registration_form_3.html')
                .click()
            cy.url().should('contain', '/registration_form_3.html')
            cy.go('back')
            cy.log('Back again in registration form 2')
        })

    it('Test the radio button list is correct', () => {
        
            
            cy.get('input[type="radio"]').should('have.length', 4)
    
            
            cy.get('input[type="radio"]').next().eq(0).should('have.text','HTML')
            cy.get('input[type="radio"]').next().eq(1).should('have.text','CSS')
            cy.get('input[type="radio"]').next().eq(2).should('have.text','JavaScript')
            cy.get('input[type="radio"]').next().eq(3).should('have.text','PHP')
    
            
            cy.get('input[type="radio"]').eq(0).should('not.be.checked')
            cy.get('input[type="radio"]').eq(1).should('not.be.checked')
            cy.get('input[type="radio"]').eq(2).should('not.be.checked')
            cy.get('input[type="radio"]').eq(3).should('not.be.checked')
    
            
            cy.get('input[type="radio"]').eq(0).check().should('be.checked')
            cy.get('input[type="radio"]').eq(1).check().should('be.checked')
            cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        })

        it('Test the  checkbox button list is correct', () => {
            cy.get('input[type="checkbox"]').should('have.length', 3)
    
            
            cy.get('input[type="checkbox"]').next().eq(0).should('have.text','I have a bike')
            cy.get('input[type="checkbox"]').next().eq(1).should('have.text','I have a car')
            cy.get('input[type="checkbox"]').next().eq(2).should('have.text','I have a boat')
    
            
            cy.get('input[type="checkbox"]').eq(0).should('not.be.checked')
            cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')
            cy.get('input[type="checkbox"]').eq(2).should('not.be.checked')
    
            
            cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
            cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
            cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        })

    it('Test the Car dropdown is correct', () => {
        

        cy.get('#cars').select(1).screenshot('Cars drop-down')
        cy.screenshot('Full page screenshot')

        

        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)
        
        
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')
        
        
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })

    it('Test the Animal dropdown is correct', () => {
        cy.get('#animal').select(1).screenshot('Animal drop-down')
        cy.screenshot('Full page screenshot')

        cy.get('#animal').children().should('have.length', 6)

        cy.get('#animal').find('option').eq(0).should('have.text', 'Dog')
        cy.get('#animal').find('option').eq(1).should('have.text', 'cat')
        cy.get('#animal').find('option').eq(2).should('have.text', 'snake')
        cy.get('#animal').find('option').eq(3).should('have.text', 'hippo')
        cy.get('#animal').find('option').eq(4).should('have.text', 'cow')
        cy.get('#animal').find('option').eq(5).should('have.text', 'horse')
        cy.get('#animal').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['dog', 'cat', 'snake', 'hippo', 'cow', 'mouse'])
             // A bug is discovered as "horse" has been replaced with "mouse"
        })
    })

})

function inputValidData(username) {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type(username)
    cy.get('#email').type('validemail@yeap.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('[data-testid="phoneNumberTestId"]').type('10203040')
    cy.get('#password').type('MyPass')
    cy.get('#confirm').type('MyPass')
    cy.get('h2').contains('Password').click()
}