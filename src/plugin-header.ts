import { PrimariaApi } from '@uxland/primary-shell';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { addItem, updateItem } from "./activity-history-actions";


@customElement('plugin-header')
export class PluginHeader extends LitElement {
  
  static styles = css`
    div {
      padding: 8px;
      border: 1px solid grey;
      border-radius: 5px;
      gap: 10px;
      display: flex;
      align-items: center;
    }
    button {
      background-color: #0054A8;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 5px 20px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;
    }
    button:hover {
      background-color: #0056b3;
    }
    button:active {
      transform: scale(0.98);
    }
    button:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
  `;

  constructor(api: PrimariaApi) {
    super();
    this.api = api;
  }

  render() {
    return html`
      <div>
        <span>Demostració:</span>
        <button @click=${() => addItem(this.api)}>Afegir element</button>
        <button @click=${() => updateItem(this.api)}>Modificar element</button>
      </div>
    `;
  } 

  @property()
  api: PrimariaApi = undefined;
}
