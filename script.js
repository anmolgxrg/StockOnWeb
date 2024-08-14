document.addEventListener("DOMContentLoaded", function () {
  const existingCategories = document.getElementById("existingCategories");
  const downloadButton = document.getElementById("downloadData");

  // Link data.js to be used in the script for const data
  // Assuming data.js is already included and provides the 'data' object

  let changes = {}; // Store only the changes made by the user
  let currentLocationData = []; // To store items filtered by the selected location

  const accessCodes = {
    abg6200: ["Biscotti", "Stacks", "Outpost", "Provisions"],
    rad15: ["Outpost", "Provisions"],
    ckt5383: ["Biscotti", "Stacks", "Outpost", "Provisions"],
  };

  const deadlines = {
    Biscotti: "Order by Wednesday",
    Stacks: "Order by Thursday",
    Outpost: "Order by Friday",
    // Add other location deadlines here
  };

  const filterOptions = document.getElementById("filterOptions");
  const locationSelect = document.getElementById("LocationSelect");
  const areaSelect = document.getElementById("AreaSelect");
  const categorySelect = document.getElementById("categorySelect");
  const itemTableBody = document.getElementById("itemTableBody");

  // Function to sort options alphabetically
  function sortAlphabetically(arr) {
    return arr.sort((a, b) => a.localeCompare(b));
  }

  // Function to populate categories based on selected Area
  function populateCategories(area) {
    const filteredData = currentLocationData.filter(
      (item) => item.Area === area
    );
    const categories = [...new Set(filteredData.map((item) => item.Category))];

    // Sort categories alphabetically
    const sortedCategories = sortAlphabetically(categories);

    categorySelect.innerHTML = "";
    sortedCategories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });

    // Populate items for the first category by default
    if (sortedCategories.length > 0) {
      categorySelect.value = sortedCategories[0];
      populateTable(sortedCategories[0], area);
    }
  }

  // Function to populate Areas based on selected Location
  function populateAreas(location) {
    const filteredData = currentLocationData.filter(
      (item) => item.Location === location
    );
    const areas = [...new Set(filteredData.map((item) => item.Area))];

    // Sort areas alphabetically
    const sortedAreas = sortAlphabetically(areas);

    areaSelect.innerHTML = "";
    sortedAreas.forEach((area) => {
      const option = document.createElement("option");
      option.value = area;
      option.textContent = area;
      areaSelect.appendChild(option);
    });

    // Populate categories for the first area by default
    if (sortedAreas.length > 0) {
      areaSelect.value = sortedAreas[0];
      populateCategories(sortedAreas[0]);
    }

    // Display the deadline note for the selected location
    document.getElementById("locationNote").textContent =
      deadlines[location] || "";
  }

  // Function to populate Locations based on access code
  function populateLocations(accessCode) {
    const locations = accessCodes[accessCode] || [];

    // Sort locations alphabetically
    const sortedLocations = sortAlphabetically(locations);

    locationSelect.innerHTML = "";
    sortedLocations.forEach((location) => {
      const option = document.createElement("option");
      option.value = location;
      option.textContent = location;
      locationSelect.appendChild(option);
    });

    // Populate areas for the first location by default
    if (sortedLocations.length > 0) {
      locationSelect.value = sortedLocations[0];
      filterItemsByLocation(sortedLocations[0]);
    }
  }

  // Function to filter items by selected location
  function filterItemsByLocation(location) {
    currentLocationData = data.filter((item) => item.Location === location);
    populateAreas(location); // Populate areas and categories based on filtered data
  }

  // Function to populate items table based on selected category and Area
  function populateTable(category, area) {
    const filteredData = currentLocationData.filter(
      (item) => item.Category === category && item.Area === area
    );
    renderItems(filteredData);
  }

  // Function to show item details in a popup
  function showItemDetails(item) {
    itemDetails.innerHTML = `
      <p><strong>Item ID:</strong> ${item["Item ID"]}</p>
      <p><strong>Name:</strong> ${item.Name}</p>
      <p><strong>Unit Size:</strong> ${item["Unit Size"]}</p>
      <p><strong>Category:</strong> ${item.Category}</p>
      <p><strong>Location:</strong> ${item.Location}</p>
      <p><strong>Area:</strong> ${item.Area}</p>
  `;
    itemDetailsPopup.style.display = "block";
  }

  // Event listener to close the popup
  closePopup.addEventListener("click", function () {
    itemDetailsPopup.style.display = "none";
  });

  // Function to render items
  function renderItems(items) {
    itemTableBody.innerHTML = ""; // Clear existing rows
    items.forEach((item) => {
      const itemQuantity = changes[item["Item ID"]] || item["Order Quantity"];
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${item["Item ID"]}</td>
            <td>${item.Name}</td>
            <td>${item["Unit Size"]}</td>
            <td>
                <div class="quantity-control">
                    <span class="quantity-down">-</span>
                    <input type="number" value="${itemQuantity}" min="0" class="form-control" data-id="${item["Item ID"]}">
                    <span class="quantity-up">+</span>
                </div>
            </td>
        `;

      // Add click event listener to the row
      row.addEventListener("click", function () {
        showItemDetails(item);
      });

      itemTableBody.appendChild(row);
    });

    // Add event listeners to quantity spans
    document.querySelectorAll("#itemTableBody .quantity-up").forEach((span) => {
      span.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent row click event
        const input = this.parentElement.querySelector("input");
        input.value = parseInt(input.value) + 1;
        updateQuantity(input);
      });
    });

    document
      .querySelectorAll("#itemTableBody .quantity-down")
      .forEach((span) => {
        span.addEventListener("click", function (event) {
          event.stopPropagation(); // Prevent row click event
          const input = this.parentElement.querySelector("input");
          if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
            updateQuantity(input);
          }
        });
      });

    // Add event listeners to inputs
    document.querySelectorAll("#itemTableBody input").forEach((input) => {
      input.addEventListener("change", function (event) {
        event.stopPropagation(); // Prevent row click event
        updateQuantity(this);
      });
    });
  }

  // Event listener for access code input
  document.getElementById("accessCode").addEventListener("input", function () {
    const accessCode = this.value.trim();
    if (accessCodes[accessCode]) {
      filterOptions.style.display = "block"; // Show the filter options
      populateLocations(accessCode); // Populate locations based on the entered code
    } else {
      filterOptions.style.display = "none"; // Hide the filter options if the code is invalid
    }
  });

  // Event listener for Location selection
  locationSelect.addEventListener("change", function () {
    filterItemsByLocation(this.value);
  });

  // Event listener for Area selection
  areaSelect.addEventListener("change", function () {
    populateCategories(this.value);
  });

  // Event listener for category selection
  categorySelect.addEventListener("change", function () {
    const area = areaSelect.value;
    populateTable(this.value, area);
  });

  // Event listener for Search Input
  document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredItems = currentLocationData.filter(
      (item) =>
        item["Item ID"].toString().includes(searchTerm) ||
        item.Name.toLowerCase().includes(searchTerm)
    );
    renderItems(filteredItems);
  });
  downloadButton.addEventListener("click", function () {
    const itemsToOrder = data.map((item) => {
        const key = `${item["Item ID"]}-${item.Category}-${item.Location}`;
        const updatedQuantity = changes[key];
        if (updatedQuantity !== undefined) {
            return { ...item, "Order Quantity": updatedQuantity };
        }
        return item;
    }).filter(item => item["Order Quantity"] > 0); // Only include items with quantity > 0

    if (itemsToOrder.length > 0) {
        downloadExcel(itemsToOrder);
    } else {
        alert("No items to download.");
    }
});

function updateQuantity(input) {
    const itemId = input.getAttribute("data-id");
    const category = categorySelect.value;
    const location = locationSelect.value;
    const key = `${itemId}-${category}-${location}`;
    
    changes[key] = parseInt(input.value, 10) || 0; // Store updated quantity
    console.log(`Updated quantity for Item ID ${itemId} in ${category} at ${location}: ${changes[key]}`); // Debugging line
}


  function downloadExcel(jsonObject) {
    const worksheet = XLSX.utils.json_to_sheet(jsonObject);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

    // Download the Excel file
    XLSX.writeFile(workbook, "data.xlsx");
  }
});
