import { addPackage, getFilteredPackages, transformFormData } from "./state.js";
import { renderCards } from "./render.js";
import { updateChart } from "../../c3Customize.js";

function formListener() {
    const form = document.getElementById('addPackageForm');

    if (!form) {
        console.error('Form element not found');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const packageData = Object.fromEntries(formData.entries());

        const newPackageData = transformFormData(packageData);

        addPackage(newPackageData);

        const currentFilter = document.getElementById('filterPlace').value;
        renderCards(getFilteredPackages(currentFilter));

        form.reset();
    });
}

function filterListener() {
    const filterSelect = document.getElementById('filterPlace');

    if (!filterSelect) {
        console.error('Filter select element not found');
        return;
    }

    filterSelect.addEventListener('change', (event) => {
        const selectedPlace = filterSelect.value;

        const filteredData = getFilteredPackages(selectedPlace);

        renderCards(filteredData);

        updateChart(filteredData);
    });
}

export function setupListeners() {
    formListener();
    filterListener();
}