describe('Test For Login Page and Forgot Password', function() {
	context('Login Page', function() {
		beforeEach(function() {
            cy.visit('localhost:3000/login');
            cy.server()
            cy.route({
                method: 'Post',
                url: '/auth/*',
            }).as('login')
        })
        
        it('test login no input fileds',function(){
            cy.get('.button.is-success').click()
            cy.url().should('include', '/login')
        });
        it('test login invalid email',function(){
            cy.get('input[name="email"]').type('sagmail.com').should('have.value', 'sagmail.com')
            cy.get('input[name="password"]').type('retro').should('have.value', 'retro')
            cy.get('.button.is-success').click()
            cy.get('.help.is-danger').invoke('text')
            .then((text)=>{
            const req = text;
            expect(req).to.equal("Please enter a valid email");})
            cy.url().should('include', '/login')
        });
        it('test login email not verified',function(){
            cy.get('input[name="email"]').type('sagar@gmail.com').should('have.value', 'sagar@gmail.com')
            cy.get('input[name="password"]').type('123456').should('have.value', '123456')
            cy.get('.button.is-success').click()
            cy.wait('@login')
            cy.get('.Toastify__toast-body').invoke('text')
            .then((text)=>{
            const toastText = text;
            expect(toastText).to.equal("Email not verified");})
            cy.url().should('include', '/login')
        });
        it('test login email or password wrong',function(){
            cy.get('input[name="email"]').type('sags@i.lu').should('have.value', 'sags@i.lu')
            cy.get('input[name="password"]').type('123456').should('have.value', '123456')
            cy.get('.button.is-success').click()
            cy.wait('@login')
            cy.get('.Toastify__toast-body').invoke('text')
            .then((text)=>{
            const toastText = text;
            expect(toastText).to.equal("either email or password is wrong");})
            cy.url().should('include', '/login')
        });
        it('test login valid credentials',function(){
            cy.get('input[name="email"]').type('manupanday1998@gmail.com').should('have.value', 'manupanday1998@gmail.com')
            cy.get('input[name="password"]').type('123456').should('have.value', '123456')
            cy.get('.button.is-success').click()
            cy.url().should('include', '/home')
        });
        
        it('test forgot password when button clicked with empty field',function(){
            // cy.get('a').eq(6).click() 
            cy.contains('Forgot Password').click()
            cy.get('.button.is-success').contains("Send Reset Link").click()
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
            cy.wait('@login')
            cy.get('.Toastify__toast-body').invoke('text')
            .then((text)=>{
            const toastText = text;
            expect(toastText).to.equal("Error email not registered");})
 
         });
         it('test forgot password not registered user',function(){
            // cy.get('a').eq(6).click() 
            cy.contains('Forgot Password').click()
            cy.get('input[name="forgetPassword"]').type('sag@gmal.com').should('have.value', 'sag@gmal.com')
            cy.get('.button.is-success').contains("Send Reset Link").click()
            cy.wait('@login')
            cy.get('.Toastify__toast-body').invoke('text')
            .then((text)=>{
            const toastText = text;
            expect(toastText).to.equal("Error email not registered");})
 
         });
         it('test forgot password valid entry- unverified',function(){
            // cy.get('a').eq(6).click() 
            cy.contains('Forgot Password').click()
            cy.get('input[name="forgetPassword"]').type('sagar@gmail.com').should('have.value', 'sagar@gmail.com')
            cy.get('.button.is-success').contains("Send Reset Link").click()
            cy.wait('@login')
            cy.get('.Toastify__toast-body').invoke('text')
            .then((text)=>{
            const toastText = text;
            expect(toastText).to.equal("Email not verified");})
         //    cy.url().should('include', '/')
 
         });
         it('test forgot password valid entry',function(){
            // cy.get('a').eq(6).click() 
            cy.contains('Forgot Password').click()
            cy.get('input[name="forgetPassword"]').type('manupanday1998@gmail.com').should('have.value', 'manupanday1998@gmail.com')
            cy.get('.button.is-success').contains("Send Reset Link").click()
            cy.wait('@login')
            cy.get('.Toastify__toast-body').invoke('text')
            .then((text)=>{
            const toastText = text;
            expect(toastText).to.equal("Link Has Been Successfully send to Your email ");})
            cy.url().should('include', '/login')
 
         });
        });
    })