document.addEventListener("DOMContentLoaded", function() {
  const locationSelect = document.getElementById("locationSelect");
  const categorySelect = document.getElementById("categorySelect");
  const areaSelect = document.getElementById("areaSelect");
  const itemTableBody = document.getElementById("itemTableBody");
  const existingCategories = document.getElementById("existingCategories");
  const startNewSessionButton = document.getElementById("startNewSession");
  const finishAndSendButton = document.getElementById("finishAndSend");

  const data = [
      {
          "Item ID": 3497,
          "Name": "BAG GROCERY PAPER 20#",
          "Unit Size": "CASE",
          "PAR": "",
          "Order Quantity": 0,
          "Category": "DRY STORAGE - PAPER & PACKAGING",
          "location": "biscotti's",
          "area": "kitchen"
      },
      // More items...
  ];

  const cacheKey = "orderChanges";
  let changes = JSON.parse(localStorage.getItem(cacheKey)) || {};

  // Function to populate categories based on selected location
  function populateCategories(location) {
      const filteredData = data.filter(item => item.location === location);
      const categories = [...new Set(filteredData.map(item => item.Category))];

      categorySelect.innerHTML = '';
      categories.forEach(category => {
          const option = document.createElement("option");
          option.value = category;
          option.textContent = category;
          categorySelect.appendChild(option);
      });

      // Populate areas for the first category by default
      if (categories.length > 0) {
          categorySelect.value = categories[0];
          populateAreas(categories[0], location);
      }

      // Populate existing categories list (for Manage Categories tab)
      existingCategories.innerHTML = '';
      categories.forEach(category => {
          const div = document.createElement("div");
          div.textContent = category;
          existingCategories.appendChild(div);
      });
  }

  // Function to populate areas based on selected category and location
  function populateAreas(category, location) {
      const filteredData = data.filter(item => item.Category === category && item.location === location);
      const areas = [...new Set(filteredData.map(item => item.area))];

      areaSelect.innerHTML = '';
      areas.forEach(area => {
          const option = document.createElement("option");
          option.value = area;
          option.textContent = area;
          areaSelect.appendChild(option);
      });

      // Populate items for the first area by default
      if (areas.length > 0) {
          areaSelect.value = areas[0];
          populateTable(category, location, areas[0]);
      }
  }

  // Function to populate items table based on selected category, location, and area
  function populateTable(category, location, area) {
      itemTableBody.innerHTML = "";
      const filteredData = data.filter(item => item.Category === category && item.location === location && item.area === area);
      filteredData.forEach(item => {
          const row = document.createElement("tr");
          const cachedQuantity = changes[item["Item ID"]] || item["Order Quantity"];
          row.innerHTML = `
              <td>${item["Item ID"]}</td>
              <td>${item.Name}</td>
              <td>${item["Unit Size"]}</td>
              <td>
                  <input type="number" value="${cachedQuantity}" min="0" class="form-control" data-id="${item["Item ID"]}">
              </td>
          `;
          itemTableBody.appendChild(row);
      });

      // Add event listeners to inputs
      document.querySelectorAll("#itemTableBody input").forEach(input => {
          input.addEventListener("change", function() {
              const itemId = this.getAttribute("data-id");
              changes[itemId] = parseInt(this.value, 10);
              localStorage.setItem(cacheKey, JSON.stringify(changes));
          });
      });
  }

  // Event listener for location selection
  locationSelect.addEventListener("change", function() {
      populateCategories(this.value);
  });

  // Event listener for category selection
  categorySelect.addEventListener("change", function() {
      const location = locationSelect.value;
      populateAreas(this.value, location);
  });

  // Event listener for area selection
  areaSelect.addEventListener("change", function() {
      const location = locationSelect.value;
      const category = categorySelect.value;
      populateTable(category, location, this.value);
  });

  // Event listener for starting a new session
  startNewSessionButton.addEventListener("click", function() {
      changes = {};
      localStorage.removeItem(cacheKey);
      populateCategories(locationSelect.value);
  });

  // Event listener for finishing and sending the order
  finishAndSendButton.addEventListener("click", function() {
      const itemsToOrder = Object.keys(changes).map(itemId => {
          return data.find(item => item["Item ID"] == itemId && changes[itemId] > 0);
      }).filter(item => item);

      if (itemsToOrder.length > 0) {
          // Send data to server via POST request (AJAX)
          fetch('send_email.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ items: itemsToOrder }),
          }).then(response => response.text())
          .then(data => {
              alert('Order sent successfully!');
              changes = {};
              localStorage.removeItem(cacheKey);
          })
          .catch(error => {
              alert('Error sending order: ' + error);
          });
      } else {
          alert('No items to order.');
      }
  });

  // Initialize with the first location
  populateCategories(locationSelect.value);
});