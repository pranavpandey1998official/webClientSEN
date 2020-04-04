describe('Test For Home Page ', function() {
	context('HomeView', function() {
		beforeEach(function() {
			cy.visit('localhost:3000/home');
		})
		it('mumbai route is disabled', function() {
			cy.get(`[data-test-id="imageButton-Mumbai"]`).click()
			cy.location('pathname').should('eq', '/search/mumbai');
			cy.contains('Sorry We Are Not Currently Available In This City').should('be.visible')
		})
		it('Delhi route is disabled', function() {
			cy.get(`[data-test-id="imageButton-Delhi"]`).click()
			cy.location('pathname').should('eq', '/search/delhi');
			cy.contains('Sorry We Are Not Currently Available In This City').should('be.visible')
		})
		it('Chennai route is disabled', function() {
			cy.get(`[data-test-id="imageButton-Chennai"]`).click()
			cy.location('pathname').should('eq', '/search/chennai');
			cy.contains('Sorry We Are Not Currently Available In This City').should('be.visible')
		})
		it('Bangalore route is disabled', function() {
			cy.get(`[data-test-id="imageButton-Bangalore"]`).click()
			cy.location('pathname').should('eq', '/search/bangalore');
			cy.contains('Sorry We Are Not Currently Available In This City').should('be.visible')
		})
		it('Hyderabad route is disabled', function() {
			cy.get(`[data-test-id="imageButton-Hyderabad"]`).click()
			cy.location('pathname').should('eq', '/search/hyderabad');
			cy.contains('Sorry We Are Not Currently Available In This City').should('be.visible')
		})

		it('Ahmedabad route is not disabled',  function() {
			cy.get(`[data-test-id="imageButton-Ahmedabad"]`).click()
			cy.location('pathname').should('eq', '/search/ahmedabad');
			cy.get('[data-test-id="SearchView"]').should('be.visible');
		})

		it('when search for test redirect happens to /search/{search text}', function() {
			cy.get('[data-test-id="searchInput"').type('anything');
			cy.get('[data-test-id="searchInput"').trigger('keydown', { keyCode: 13});
			cy.location('pathname').should('eq', '/search/anything');
		})

		it('when search for ahmedabad ahmeadbad properties are vible', function() {
			cy.get('[data-test-id="searchInput"').type('ahmedabad');
			cy.get('[data-test-id="searchInput"').trigger('keydown', { keyCode: 13});
			cy.get('[data-test-id="SearchView"]').should('be.visible');
		})
	})
})