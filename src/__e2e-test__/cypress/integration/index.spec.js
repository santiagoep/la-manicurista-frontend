context('Home', () => {
  it('Go To Home', () => {
    cy.visit('/');
    // Should render
    cy.get('#la-manicurista-logo').should('be.visible');
    cy.get('[data-testid=track]').should('have.length', 10);
    cy.get('[data-testid=track-detail__no-track-selected]').should(
      'be.visible'
    );
    cy.get('[data-testid=accessibility__font-size]').should('be.visible');
    cy.get('[data-testid=accessibility__theme]').should('be.visible');
    cy.get('[data-testid=accessibility__language]').should('be.visible');
    cy.get('[data-testid=search-tracks__input]').should('be.visible');

    // Should change accessibility settings
    cy.get('[data-testid=accessibility__font-size]').then(($fontSizeBtn) =>
      expect($fontSizeBtn.text()).to.include('md')
    );
    cy.get('[data-testid=accessibility__font-size]').click();
    cy.get('[data-testid=accessibility__font-size]').then(($fontSizeBtn) =>
      expect($fontSizeBtn.text()).to.include('lg')
    );
    cy.get('[data-testid=accessibility__theme]').then(($fontSizeBtn) =>
      expect($fontSizeBtn.text()).to.include('LIGHT')
    );
    cy.get('[data-testid=accessibility__theme]').click();
    cy.get('[data-testid=accessibility__theme]').then(($fontSizeBtn) =>
      expect($fontSizeBtn.text()).to.include('DARK')
    );
    cy.get('[data-testid=accessibility__language]').then(($fontSizeBtn) =>
      expect($fontSizeBtn.text()).to.include('es')
    );
    cy.get('[data-testid=accessibility__language]').click();
    cy.get('[data-testid=accessibility__language]').then(($fontSizeBtn) =>
      expect($fontSizeBtn.text()).to.include('en')
    );

    // Should search
    cy.get('[data-testid=search-tracks__input]').type('bohemian rhapsody');
    cy.wait(1000);
    cy.get('[data-testid=track]')
      .first()
      .get('h2')
      .first()
      .then(($name) => expect($name.text()).to.include('Bohemian Rhapsody'));

    // Should show player
    cy.get('[data-testid=track]').first().click();
    cy.wait(1000);
    cy.get('[data-testid=track-detail__player').should('be.visible');
  });
});
