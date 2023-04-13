import React from 'react'
import Basic from './Formik'

describe('<Basic />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Basic />)
  })
})