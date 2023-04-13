import React from 'react'
import ListTools from './componentList'

describe('<ListTools />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListTools />)
  })
})