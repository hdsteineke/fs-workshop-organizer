import { createParticipant } from "../fetch-utils";

const form = document.querySelector('.sign-up-form');


form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);

    await createParticipant({
        name: data.get('name'),
        email: data.get('email')
    });

    form.reset();

});