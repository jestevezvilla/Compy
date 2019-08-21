import { html } from "lit-html";

import Compy from "./Compy";

export default class Header extends Compy {
  get template() {
    return html`
      <h1>${this.data.title}</h1>
      <p>Esto no se actualiza nunca</p>
      <p>Esto tampoco</p>
    `;
  }
}
