import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | table score', function() {
  setupComponentTest('table-score', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#table-score}}
    //     template content
    //   {{/table-score}}
    // `);

    this.render(hbs`{{table-score}}`);
    expect(this.$()).to.have.length(1);
  });
});
