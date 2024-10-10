import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('plugin-history-item')
export class PluginHistoryItem extends LitElement {

  render() {
    return html`
        <div style="padding: 10px;">
          <div>

          </div>
           ${this.item.date} | ${this.item.id} | ${this.item.professional.name}  | ${this.item.professional.speciality.description} | ${this.item.center.description} 
        </div>
      
    `
  } 

  @property()
  item: Object;
}