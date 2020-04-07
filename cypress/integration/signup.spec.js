describe('Test For Sign Up Page', function() {
	context('SignUp', function() {
		beforeEach(function() {
			cy.visit('localhost:3000/SignUp');
		})
		it('test signup no input fileds',function(){
                cy.get('.button.is-success').click()
                cy.url().should('include', '/')
            });
            it('test login valid credentials',function(){
                cy.get('input[name="firstName"]').type('Sagar').should('have.value', 'Sagar')
                cy.get('input[name="lastName"]').type('Singh').should('have.value', 'Singh')
                cy.get('input[name="email"]').type('sagar.sind20@gmail.com').should('have.value', 'sagar.sind20@gmail.com')
                cy.get('input[name="password"]').type('lol').should('have.value', 'lol')
                cy.get('input[name="confirmPassword"]').type('lol').should('have.value', 'lol')
                cy.get('.button.is-success').click()
                cy.url().should('include', '/')
            });
	})
});
