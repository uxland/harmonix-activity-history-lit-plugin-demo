import { PrimariaApi } from '@uxland/primary-shell';
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { addItem, updateItem } from "./activity-history-actions";


@customElement('plugin-header')
export class PluginHeader extends LitElement {

  constructor(api: PrimariaApi) {
    super();
    this.api = api;
  }

  render() {
    return html`
      <button @click=${() => addItem(this.api)}>Afegir element</button>
      <button @click=${() => updateItem(this.api)}>Modificar element</button>
    `
  } 

  @property()
  api: PrimariaApi = undefined;
}
