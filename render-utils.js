export function renderParticipants(someParticipant) {
    const participantEl = document.createElement('div');
    const a = document.createElement('a');
    const nameEl = document.createElement('h3');

    participantEl.classList.add('participant');

    a.href = `./participant-detail/?id=${someParticipant.id}`;
    nameEl.textContent = someParticipant.name;
}