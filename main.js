import './assets/scss/all.scss';

import { getAllPackages, fetchRemotePackage } from './assets/js/state.js';
import { renderCards } from './assets/js/render.js';
import { setupListeners } from './assets/js/listeners.js';

import { initMyChart } from './c3Customize.js';

async function init() {
    console.log('Initializing application...');

    await fetchRemotePackage();

    setupListeners();

    const data = getAllPackages();
    console.log('Initial package data:', data);

    renderCards(data);

    initMyChart();

    console.log('Application initialized.');
}

window.addEventListener('DOMContentLoaded', init);