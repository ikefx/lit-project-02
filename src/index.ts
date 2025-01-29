import {LitElement, html, PropertyValues} from "lit";
import { customElement, state } from 'lit/decorators.js';

@customElement('app-counter')
// @ts-ignore
class AppCounter extends LitElement {

    @state() value: number =  0;

    // LifeCycle Hooks
    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);
    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
    }

    addCB() {
        this.value++;
    }

    minusCb() {
        this.value--;
    }

    render() {
        return html`
            <h1>Counter ${this.value}</h1>
            <div style="display: flex; width: 100%; justify-content: space-around">
                <button @click="${this.addCB}" style="width: 100%">Add 1</button>
                <button @click="${this.minusCb}" style="width: 100%">Remove 1</button>
            </div>

        `;
    }
}