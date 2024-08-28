// Declare and initialize a strings array
const stringsArray = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// Get the <ul> element to display the strings
const stringsList = document.getElementById('strings-list');

// Populate the list
stringsArray.forEach(string => {
    const listItem = document.createElement('li');
    listItem.textContent = string;
    stringsList.appendChild(listItem);
});






// // Declare and initialize a numbers array
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Get the <ul> element to display the numbers
// const numbersList = document.getElementById('numbers-list');

// // Populate the list
// numbersArray.forEach(number => {
//     const listItem = document.createElement('li');
//     listItem.textContent = number;
//     numbersList.appendChild(listItem);
// });






// // Initialize an array with education qualifications
// const qualifications = [
//     'SSC (Secondary School Certificate)',
//     'HSC (Higher Secondary School Certificate)',
//     'BCS (Bachelor of Computer Science)',
//     'BS (Bachelor of Science)',
//     'BCOM (Bachelor of Commerce)',
//     'MS (Master of Science)',
//     'M. Phil. (Master of Philosophy)',
//     'PhD (Doctor of Philosophy)'
// ];

// // Get the <ul> element to display qualifications
// const qualificationsList = document.getElementById('qualifications-list');

// // Populate the list
// qualifications.forEach(qualification => {
//     const listItem = document.createElement('li');
//     listItem.textContent = qualification;
//     qualificationsList.appendChild(listItem);
// });


