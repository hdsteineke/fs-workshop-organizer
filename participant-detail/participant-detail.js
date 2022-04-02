import { getParticipant } from '../fetch-utils.js';
import { renderParticipantDetail } from './render-utils.js';

const participantDiv = document.querySelector('.participant-detail');


window.addEventListener('load', async () => {
    const data = new URLSearchParams(window.location.search);
    const id = data.get('id');

    const participant = await getParticipant(id);
    const participantEl = renderParticipantDetail(participant);


    participantDiv.append(participantEl);
})