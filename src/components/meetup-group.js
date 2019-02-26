export default class MeetupGroupElement extends HTMLElement {
    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.setAttribute('name', value);
    }
    
    static get observedAttributes() {
        return [ 'name' ];
    }

    constructor() {
        super();

        const heading = document.createElement('h3');
        heading.textContent = this.name;

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(heading);
    }

    attributeChangedCallback(name, oldValue, newValue) {

        if (name === 'name') {
            const heading = this.shadow.querySelector('h3');
            heading.textContent = this.name;
        }

    }
};