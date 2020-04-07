describe('Test For Login Page and Forgot Password', function() {
	context('Login Page', function() {
		beforeEach(function() {
			cy.visit('localhost:3000/login');
        })
        it('test login no input fileds',function(){
            cy.get('.button.is-success').click()
            cy.url().should('include', '/')
        });
        it('test login valid email',function(){
            cy.get('input[name="email"]').type('manupanday1998@gmail.com').should('have.value', 'manupanday1998@gmail.com')
            cy.get('input[name="password"]').type('123456').should('have.value', '123456')
            cy.get('.button.is-success').click()
            cy.url().should('include', '/')
        });
        it('test login invalid email',function(){
            cy.get('input[name="email"]').type('sagmail.com').should('have.value', 'sagmail.com')
            cy.get('input[name="password"]').type('retro').should('have.value', 'retro')
            cy.get('.button.is-success').click()
            cy.url().should('include', '/')
        });
        it('test forgot password valid entry',function(){
           // cy.get('a').eq(6).click() 
           cy.contains('Forgot Password').click()
           cy.get('input[name="forgetPassword"]').type('sagar@gmail.com').should('have.value', 'sagar@gmail.com')
           cy.wait(1000)
           cy.get('.Toastify__toast-body').invoke('text')
           .then((text)=>{
           const toastText = text;
           expect(toastText).to.equal("please enter an valid email");})
        //    cy.url().should('include', '/')

        });
        it('test forgot password only when button clicked',function(){
            // cy.get('a').eq(6).click() 
            cy.contains('Forgot Password').click()
            cy.get('.button.is-success').contains("Send Reset Link").click()
            cy.wait(1000)
            cy.get('.Toastify__toast-body').invoke('text')
            .then((text)=>{
            const toastText = text;
            expect(toastText).to.equal("please enter an valid email");})
            // cy.wait(5400)
            // cy.get('.Toastify__toast-body').invoke('text')
            // .then((text)=>{
            // const toastText = text;
            // expect(toastText).to.equal("Error email not registered");})
 
         });
        it('test forgot password invalid entry',function(){
            // cy.get('a').eq(6).click() 
            cy.contains('Forgot Password').click()
            cy.get('input[name="forgetPassword"]').type('sagargmail.com').should('have.value', 'sagargmail.com')
 
            cy.get('.button.is-success').contains("Send Reset Link").click()
            cy.wait(1000)
            cy.get('.Toastify__toast-body').invoke('text')
            .then((text)=>{
            const toastText = text;
            expect(toastText).to.equal("please enter an valid email");})
 
         });
        });
    })