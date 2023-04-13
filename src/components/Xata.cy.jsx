import React from 'react'
import Xata from './Xata'

describe('<Xata />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Xata />)
  })
})