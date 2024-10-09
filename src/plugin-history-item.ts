import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('plugin-history-item')
export class PluginHistoryItem extends LitElement {

  render() {
    return html`
        <div style="background-color: red">
            hola
        </div>
      
    `
  } 

  @property()
  item: string;
}