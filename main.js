import './assets/scss/all.scss';

import { getAllPackages } from './assets/js/state.js';
import { renderCards } from './assets/js/render.js';
import { setupListeners } from './assets/js/listeners.js';

function init() {
    console.log('Initializing application...');

    setupListeners();

    renderCards(getAllPackages());

    console.log('Application initialized.');
}

window.addEventListener('DOMContentLoaded', init);