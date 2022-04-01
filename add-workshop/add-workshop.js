import { checkAuth, createWorkshop, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('.add-workshop-form');

logoutButton.addEventListener('click', () => {
    logout();
});


form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);

    await createWorkshop({
        name: data.get('workshop-name')
    });

    form.reset();

    window.location.href = '../workshops';

});