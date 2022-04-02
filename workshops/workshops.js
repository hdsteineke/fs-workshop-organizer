import { checkAuth, deleteParticipant, getWorkshops, logout } from '../fetch-utils.js';


checkAuth();

const workshopListEl = document.querySelector('.workshop-list');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});


async function fetchAndDisplayWorkshops() {
    const workshops = await getWorkshops();

    workshopListEl.textContent = '';

    for (let workshop of workshops) {
        const workshopEl = document.createElement('div');
        const nameEl = document.createElement('h3');
        const participantsEl = document.createElement('div');

        participantsEl.classList.add('participants');
        workshopEl.classList.add('workshop');

        nameEl.textContent = workshop.name;


        for (let participant of workshop.participants) {
            const participantEl = document.createElement('div');

            participantEl.classList.add('participant');
            participantEl.textContent = participant.name;

            participantEl.addEventListener('click', async () => {
                //await deleteParticipant(participant.id);
                await fetchAndDisplayWorkshops();

            });
            participantsEl.append(participantEl);
        }
        workshopEl.append(nameEl, participantsEl);
        workshopListEl.append(workshopEl);
    }
}

window.addEventListener('load', async e => {
    e.preventDefault();
    fetchAndDisplayWorkshops();
    
});