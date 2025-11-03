function filterSubmission(){
    const filterElement = document.getElementById('filterPlace');
    const filterValue = filterElement.value;

    
    filterElement.addEventListener('change', (event) => {
        console.log(filterElement.value);
        
    })
}

filterSubmission();