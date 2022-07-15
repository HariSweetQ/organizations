import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html, css } from 'lit-element';

import '@cells-components/cells-template-paper-drawer-panel';

import styles from './home-page-styles.js';

/* eslint-disable new-cap */
class HomePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'home-page';
  }

  static get properties() {
    return {
      data: {type: Object}
    }
  }
  constructor() {
    super();
    this.data = {};
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this.subscribe('__bridge_post_message_load', this.__onLoad)
  }

  onLoad(e) {
    this.data = e;
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed">       
        <div slot="app__main" class="container">
          <pre>${JSON.stringify(this.data)}</pre>
        </div>
     </cells-template-paper-drawer-panel>`;
  }

  static get styles() {
    return [ styles ];
  }
}

window.customElements.define(HomePage.is, HomePage);