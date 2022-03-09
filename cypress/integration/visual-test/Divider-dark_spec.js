describe('Divider dark mode visual regression check', () => {
  beforeEach(() => {
    cy.visit('/visual-test/Divider-dark');
  });

  it('Compares screenshots', () => {
    cy.get('[data-test-id="visual-test"]').toMatchImageSnapshot({
      name: 'Divider-dark',
    });
  });
});