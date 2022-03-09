describe('SearchField visual regression check', () => {
  beforeEach(() => {
    cy.visit('/visual-test/SearchField');
  });

  it('Compares screenshots', () => {
    cy.get('[data-test-id="visual-test"]').toMatchImageSnapshot({
      name: 'SearchField',
    });
  });
});
