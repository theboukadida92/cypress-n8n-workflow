describe('Manage Address Book', () => {
  it('Update address book information', () => {
    // Step 1: Visit the website
    cy.visit('https://automationteststore.com');

    // Step 2: Login with username and password
    cy.get('a[href="https://automationteststore.com/index.php?rt=account/login"]').click();
    cy.get('#loginFrm_loginname').type('techpro');
    cy.get('#loginFrm_password').type('Techpro!');
    cy.get('button[title="Login"]').click();

    // Step 3: Click on "Manage Address Book" in the "Welcome back ..." menu
    cy.contains('Welcome back').should('be.visible');
    cy.contains('Manage Address Book').click();

    // Step 4: Click on the "Edit" button
    cy.get('a[title="Edit"]').first().click();

    // Step 5: Change all the information in the form
    cy.get('#AddressFrm_firstname').clear().type('NewFirstName');
    cy.get('#AddressFrm_lastname').clear().type('NewLastName');
    cy.get('#AddressFrm_address_1').clear().type('New Address Line 1');
    cy.get('#AddressFrm_city').clear().type('New City');
    cy.get('#AddressFrm_zone_id').select('Alabama');
    cy.get('#AddressFrm_postcode').clear().type('12345');
    cy.get('#AddressFrm_country_id').select('United States');

    // Step 6: Save the changes
    cy.get('button[title="Continue"]').click();

    // Step 7: Verify that the changes have been applied
    cy.contains('Your address has been successfully updated').should('be.visible');
    cy.contains('NewFirstName').should('be.visible');
    cy.contains('NewLastName').should('be.visible');
    cy.contains('New Address Line 1').should('be.visible');
    cy.contains('New City').should('be.visible');
    cy.contains('Alabama').should('be.visible');
    cy.contains('12345').should('be.visible');
  });
});