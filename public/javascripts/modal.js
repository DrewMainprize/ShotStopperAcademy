//Modal
var contactModal = document.getElementById('#contactModal');
//Buttons
var contactInput = document.getElementsByClassName('.modalOpener');

contactModal.addEventListener('shown.bs.modal', function() {
    contactInput[0].focus();
    contactInput[1].focus();
});
