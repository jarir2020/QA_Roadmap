describe('Auth - wrong password', () => {
  it('shows Invalid email or password', () => {
    const email = 'demo@example.com'
    const password = 'WrongPassword!'

    cy.visit('/login.php')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)

    cy.contains('Sign in').click()

    cy.get('#form-result')
      .should('contain.text', 'Invalid email or password')
  })
})
