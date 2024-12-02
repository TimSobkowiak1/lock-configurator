// Select DOM elements
const addCylinderButton = document.getElementById('addCylinder');
const clearConfigButton = document.getElementById('clearConfig');
const saveConfigButton = document.getElementById('saveConfig');
const cylinderList = document.getElementById('cylinderList');
const emptyMessage = document.getElementById('emptyMessage');

let cylinderCount = 0;

// Add a new cylinder
addCylinderButton.addEventListener('click', () => {
  const name = document.getElementById('cylinderName').value;
  const length = document.getElementById('cylinderLength').value;
  const color = document.getElementById('cylinderColor').value;
  const security = document.getElementById('securityLevel').value;

  if (!name || !length || !color || !security) {
    alert('Please fill in all fields before adding a cylinder.');
    return;
  }

  // Create cylinder item
  const cylinderItem = document.createElement('div');
  cylinderItem.className = 'cylinder-item';
  cylinderItem.innerHTML = `
    <span><strong>Name:</strong> ${name}</span>
    <span><strong>Length:</strong> ${length}</span>
    <span><strong>Color:</strong> ${color}</span>
    <span><strong>Security Level:</strong> ${security}</span>
    <button class="button remove-button">Remove</button>
  `;

  // Add remove functionality
  cylinderItem.querySelector('.remove-button').addEventListener('click', () => {
    cylinderList.removeChild(cylinderItem);
    cylinderCount--;
    checkIfEmpty();
  });

  // Append to list and clear input fields
  cylinderList.appendChild(cylinderItem);
  cylinderCount++;
  checkIfEmpty();

  document.getElementById('cylinderName').value = '';
  document.getElementById('cylinderLength').value = '';
  document.getElementById('cylinderColor').value = '';
  document.getElementById('securityLevel').value = '';
});

// Clear all cylinders
clearConfigButton.addEventListener('click', () => {
  cylinderList.innerHTML = '<h3>Configured Cylinders</h3>';
  cylinderCount = 0;
  checkIfEmpty();
});

// Check if the list is empty
function checkIfEmpty() {
  emptyMessage.style.display = cylinderCount === 0 ? 'block' : 'none';
  saveConfigButton.disabled = cylinderCount === 0;
}
