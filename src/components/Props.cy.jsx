import React from 'react'
import Props from './Props'

describe('<Props />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Props />)
  })
})