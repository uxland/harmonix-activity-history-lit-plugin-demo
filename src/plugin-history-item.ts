import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('plugin-history-item')
export class PluginHistoryItem extends LitElement {

  render() {
    return html`
        <div style="background-color: red">
           ${this.item.id} - ${this.item.date} - ${this.item.professional.name}
        </div>
      
    `
  } 

  @property()
  item: Object;
}