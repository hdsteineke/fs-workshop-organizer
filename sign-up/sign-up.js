import { createParticipant, getWorkshops } from '../fetch-utils.js';

const form = document.querySelector('.sign-up-form');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);

    await createParticipant({
        name: data.get('name'),
        email: data.get('email'),
        workshop_id: data.get('workshop-id')
    });

    form.reset();

});

window.addEventListener('load', async () => {
    const selectorEl = document.querySelector('select');

    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const optionEl = document.createElement('option');

        optionEl.value = workshop.id;
        optionEl.textContent = workshop.name;

        selectorEl.append(optionEl);
    }
});

