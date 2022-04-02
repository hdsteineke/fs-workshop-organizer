export function renderParticipants(someParticipant) {
    const participantEl = document.createElement('div');
    const a = document.createElement('a');
    const nameEl = document.createElement('h3');

    participantEl.classList.add('participant');

    a.href = `./participant-detail/?id=${someParticipant.id}`;
    nameEl.textContent = someParticipant.name;
}


export function renderParticipantDetail(someParticipant) {
    const participantEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const workshopEl = document.createElement('selector');

    participantEl.classList.add('participant');

    nameEl.textContent = someParticipant.name;
    workshopEl.value = someParticipant.workshop_id;
}