import { addPackage, getAllPackages, getFilteredPackages } from "./state.js";
import { renderCards } from "./render.js";
import { name, render } from "ejs";

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

        packageData.price = parseFloat(packageData.price) || 0;
        packageData.number = parseInt(packageData.number) || 0;
        packageData.stars = parseFloat(packageData.stars) || 0;

        const newpackage = {
            name: packageData.packageName,
            place: packageData.packagePlace,
            price: packageData.packagePrice,
            number: packageData.packageNum,
            stars: packageData.packageStar,
            description: packageData.packageDescription,
            image: packageData.packageImage,
            linkUrl: "#"
        };
        addPackage(newpackage);

        renderCards(getFilteredPackages(document.getElementById('filterPlace').value));
        
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
    });
}

export function setupListeners() {
    formListener();
    filterListener();
}