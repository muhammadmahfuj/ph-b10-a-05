// Getting the modal element
const modal = document.getElementById('my_modal_5');

// Closeing the modal when the close button is clicked
// with defalt form behavior prevention
document.querySelector('form[method="dialog"]').addEventListener('submit', function(event) {
    event.preventDefault();
    closeModal('my_modal_5');
});

// Receive the donation
function receiveDonation(donateButtonId, balanceDivId, mainBalanceDivtId) {
  const donateButton = document.getElementById(donateButtonId);
  const donationAmountInput = donateButton.parentNode.querySelector('input');

  donateButton.addEventListener('click', function() {
    const donationAmount = parseFloat(donationAmountInput.value);

    if (donationAmount <= 0 || Number.isNaN(donationAmount) || !Number.isInteger(donationAmount)) {
        alert("Wrong input! Please provide correct input");
      }
    if(donationAmount > 0) {
      const currentBalance = getCurrentBalance(balanceDivId);
      const updatedBalance = currentBalance + donationAmount;
      updateCurrentBalance(balanceDivId, updatedBalance);

      const mainBalance = getCurrentBalance(mainBalanceDivtId);
      const newMainBalance = mainBalance - donationAmount;
      updateCurrentBalance(mainBalanceDivtId, newMainBalance);

      donationAmountInput.value = '';
      showModal('my_modal_5');
    }

  });
}

// function call Names
receiveDonation('noakhali-donate-button', 'noakhali-balance', 'main-balance');
receiveDonation('feni-donate-button', 'feni-balance', 'main-balance');
receiveDonation('quota-donate-buton', 'quota-balance', 'main-balance');
