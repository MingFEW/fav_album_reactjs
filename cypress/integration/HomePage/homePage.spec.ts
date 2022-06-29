/**
 * Home Page - Test
 */

describe('Renders the home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Renders correctlly', () => {
    cy.get('.home-page').should('exist')
  })

  it('Renders [add new] button', () => {
    cy.get('.add-new-btn').should('include.text', '+ ADD NEW')
  })

  it('Renders Footer', () => {
    cy.get('.footer').should('include.text', '© 2022 Ming Wizardev.')
  })
})
