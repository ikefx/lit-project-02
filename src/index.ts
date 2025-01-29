import { LitElement, html } from "lit";

class AppCounter extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <h1>Counter 0</h1>
            <button>Add 1</button>
        `;
    }
}

window.customElements.define('app-counter', AppCounter);