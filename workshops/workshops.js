import { checkAuth, logout } from "../fetch-utils.js";


checkAuth();

const workshopListEl = document.querySelector('.workshop-list');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

