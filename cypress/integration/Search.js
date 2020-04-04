describe('Test For Search Page', function() {
	context('SearchView', function() {
		beforeEach(function(){
			cy.visit('localhost:3000/search/ahmedabad/')
		})
		it('Search component should be visible', function(){
			cy.get(`[data-test-id="SearchView"]`).should('be.visible')
		})

		it('filer component should be visible', function() {
			cy.get(`[data-test-id="Filter"]`).should('be.visible')
		})

		it("By default only 3 component should be visible", function() {
			cy.get('[data-test-id="Property"]',{timeout: 20000}).its('length').should('eq', 3)
		})

		it('load more button should increase the count of property', function() {
			cy.get('[data-test-id="Property"]').its('length').should('eq', 3)
			cy.get('[data-test-id="loadMoreButton"]').click()
			cy.get('[data-test-id="Property"]').its('length').should('be.gte', 3)
		})

	})
})