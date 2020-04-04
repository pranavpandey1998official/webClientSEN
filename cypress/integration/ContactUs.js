describe('Test For Contact Us Page', function() {
	context('ContactUs', function() {
		beforeEach(function() {
			cy.visit('http://localhost:3000/contact');
		})
		it('Contact us page should render', function() {
			cy.get(`[data-test-id="ContactUs"]`).should('be.visible')
		})
		it('Page should contain contact us text', function() {
			cy.contains('Contact Us').should('be.visible')
		})
		it('Email should be equal to daiict email', function() {
			cy.get(`[data-test-id="email"]`).contains('info@daiict.ac.in')
		})

		it('clicking facebook icon should lead to facebook page of company', function() {
			cy.get(`[data-test-id="facebookButton"]`).should('be.visible')
		})
	})
});