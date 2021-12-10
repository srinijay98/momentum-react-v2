import { prefix } from '../../utils/index';

describe('@momentum-ui/react-collaboration', () => {
  it('snapshot of modal', () => {
    cy.visit(`${Cypress.env('BASE_URL')}/modal`)
      .get('#default-1')
      .click()
      .get(`.${prefix}-modal`)
      .should('be.visible')
      .percySnapshot()
      .trigger('keydown', { which: 27, code: 'Escape', key: 'Escape' })
      .get('#default-2')
      .click()
      .get(`.${prefix}-modal`)
      .should('be.visible')
      .percySnapshot()
      .trigger('keydown', { which: 27, code: 'Escape', key: 'Escape' })
      .get('#full-1')
      .click()
      .get(`.${prefix}-modal`)
      .should('be.visible')
      .percySnapshot()
      .trigger('keydown', { which: 27, code: 'Escape', key: 'Escape' })
      .get('#full-2')
      .click()
      .get(`.${prefix}-modal`)
      .should('be.visible')
      .percySnapshot()
      .trigger('keydown', { which: 27, code: 'Escape', key: 'Escape' })
      .get('#small-1')
      .click()
      .get(`.${prefix}-modal`)
      .should('be.visible')
      .percySnapshot()
      .trigger('keydown', { which: 27, code: 'Escape', key: 'Escape' })
      .get('#small-2')
      .click()
      .get(`.${prefix}-modal`)
      .should('be.visible')
      .percySnapshot()
      .trigger('keydown', { which: 27, code: 'Escape', key: 'Escape' })
      .get('#large-1')
      .click()
      .get(`.${prefix}-modal`)
      .should('be.visible')
      .percySnapshot()
      .trigger('keydown', { which: 27, code: 'Escape', key: 'Escape' })
      .get('#large-2')
      .click()
      .get(`.${prefix}-modal`)
      .should('be.visible')
      .percySnapshot();
  });
});
