describe('tests', () => {
    it('passes', () => {
      cy.visit("/")
      cy.title().should("eq","NEVER STOP LEARNING - Automation Step by Step")
      cy.get(".pum-close").should("be.visible")
      cy.get(".tnp-email").last().type("user@gmail.com")
      cy.get(".tnp-firstname").type("new user")
      cy.get(".tnp-privacy").check()
      cy.get(".tnp-field-button > .tnp-submit").should("be.visible").click()
      

    })
  })