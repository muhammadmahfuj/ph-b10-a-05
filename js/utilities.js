// Let's Get current balance
function getCurrentBalance(currentBalanceId) {
    const currentBalance = document.getElementById(currentBalanceId);
    return parseInt(currentBalance.textContent);
  }

  // Updating the balance after addition
  function updateCurrentBalance(balanceDivId, newBalance) {
    const currentBalance = document.getElementById(balanceDivId);
    currentBalance.textContent = newBalance;
  }

  // Show the modal
  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.showModal();
  }

  // Close the modal
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.close();
  }

// Show a section by Id
function showSectionById(id) {
    document.getElementById('donation__section').classList.add('hidden');
    document.getElementById('history__section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}


// active button color
function setActiveButton(activeId, inactiveId) {
    const activeButton = document.getElementById(activeId);
    const inactiveButton = document.getElementById(inactiveId);

    activeButton.classList.remove('border', 'btn-outline');
    activeButton.classList.add('bg-[#B4F461]', 'ease-in', 'duration-[0.15s]');

    inactiveButton.classList.remove('bg-[#B4F461]');
    inactiveButton.classList.add('border', 'btn-outline', 'ease-in', 'duration-[0.15s]');
  }
