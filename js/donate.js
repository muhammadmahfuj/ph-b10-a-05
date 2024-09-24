// Getting the modal element
const modal = document.getElementById('my_modal_5');

// Closeing the modal when the close button is clicked
// with defalt form behavior prevention
document.querySelector('form[method="dialog"]').addEventListener('submit', function() {
    closeModal('my_modal_5');
});

// Receive the donation
function receiveDonation(donateButtonId, balanceDivId, mainBalanceDivtId) {
  const donateButton = document.getElementById(donateButtonId);
  const donationAmountInput = donateButton.parentNode.querySelector('input');

  donateButton.addEventListener('click', function(event) {
    event.preventDefault();
    const donationAmount = parseFloat(donationAmountInput.value);

    if (donationAmount <= 0 || Number.isNaN(donationAmount) || !Number.isInteger(donationAmount)) {
        alert("Wrong amount! Please provide correct amount ( add positive number )");
        donationAmountInput.value = '';
      }
    if(donationAmount > 0) {
      const currentBalance = getCurrentBalance(balanceDivId);
      const updatedBalance = currentBalance + donationAmount;
    //   updateCurrentBalance(balanceDivId, updatedBalance);
        const mainBalance = getCurrentBalance(mainBalanceDivtId);
        const newMainBalance = mainBalance - donationAmount;

    if (newMainBalance < 0) {
        alert("Donation exceeds Current Balance. Please recharge more to donate.");
        donationAmountInput.value = '';
        return;
      } else {
            updateCurrentBalance(mainBalanceDivtId, newMainBalance);
            updateCurrentBalance(balanceDivId, updatedBalance);
            updateCurrentBalance(mainBalanceDivtId, newMainBalance);
            showModal('my_modal_5');
            addDonationHistory(donationAmount, balanceDivId);
      }
      donationAmountInput.value = '';
    }

  });
}

// Donation History
function addDonationHistory(donationAmount, location) {
    let donationMessage = '';

    // getting the current time
    const currentDate = new Date();
    const dateFormat = currentDate.toLocaleString();

    // custom message for each donation
    if (location === 'noakhali-balance') {
        donationMessage = `${donationAmount} Taka is Donated for Flood Relief in Noakhali, Bangladesh.`;
    } else if (location === 'feni-balance') {
        donationMessage = `${donationAmount}  Taka is Donated for famine-2024 at Feni, Bangladesh.`;
    } else if (location === 'quota-balance') {
        donationMessage = `${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.`;
    }

    // the message html body
    const donationHistory = document.createElement('div');
    donationHistory.classList.add('card','ease-in', 'duration-[0.15s]' , 'border', 'p-8', 'lg:card-side', 'bg-base-100', 'hover:shadow-xl', 'mx-6','mb-8', 'lg:mx-40');
    donationHistory.innerHTML = `
        <div class="flex flex-col gap-3">
        <h3 class="text-2xl font-bold">${donationMessage}</h3>
        <p class="text-lg text-gray-500">Donated on: ${dateFormat}</p>
        </div>
    `;
    document.getElementById('history__section').appendChild(donationHistory);
}


// function call Names
receiveDonation('noakhali-donate-button', 'noakhali-balance', 'main-balance');
receiveDonation('feni-donate-button', 'feni-balance', 'main-balance');
receiveDonation('quota-donate-buton', 'quota-balance', 'main-balance');
