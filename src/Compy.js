import { html, render } from "lit-html";

class Compy {
  constructor(props) {
    this._destiny = props.destiny;
    this._data = props.data;
  }

  update(data) {
    const newData = { ...this.data, ...data };
    const oldData = this.data;
    this.data = newData;

    render(this.template, document.querySelector(this.destiny));
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }

  get template() {
    return this.template;
  }

  set template(tpl) {
    this.template = tpl;
  }

  get destiny() {
    return this._destiny;
  }

  set destiny(destiny) {
    this._destiny = destiny;
  }

  render() {
    console.log(this.template);
    render(this.template, document.querySelector(this.destiny));
  }
}

export default Compy;
