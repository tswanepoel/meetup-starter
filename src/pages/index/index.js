import './index.scss';
import 'bootstrap';
import MeetupService from '../../services/meetup-service.js';
import MeetupGroupElement from '../../components/meetup-group.js';

customElements.define('meetup-group', MeetupGroupElement);

document.addEventListener("DOMContentLoaded", () => { 
    MeetupService
        .getGroups('ZA')
        .then(data => {
            const status = document.querySelector('[role="status"]');
            status.classList.add('d-none');
            
            const container = document.querySelector('.container .row');
            
            for (var i = 0; i < data.length; i++) {
                const group = document.createElement('meetup-group');
                group.name = data[i].name;

                container.appendChild(group);
            }
        });
});