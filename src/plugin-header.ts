import { PrimariaApi } from '@uxland/primary-shell';
import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('plugin-header')
export class PluginHeader extends LitElement {
// TODO constructor con api 
  render() {
    return html`
  
      <button @click=${() => this.api.broker.send(addHistoryItemRequest)}>Add</button>
      <button @click=${() => this.api.broker.send(updateHistoryItemRequest)}>Update</button>
    `
  } 

  @property()
  item: Object;

  @property()
  api: PrimariaApi;
}
