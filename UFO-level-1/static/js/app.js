// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(tableData);

// Loop through `tableData` and console.log each UFO sighting data object.
tableData.forEach((sightingDetails) => {
    console.log(sightingDetails);

    // Append one table row `tr` for each UFO sighting data object.
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO sighting data object.
    var keyValuePairs = Object.entries(sightingDetails)
    keyValuePairs.forEach(([key,value]) => {
        console.log(`${key} : ${value}`);

        // Append 1 cell per sighting data
        var cell = row.append("td")
        cell.text(value);

    }); 

});


// Custom Filtering date/time column and display. 
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit",runFilter);

// Complete the event handler function for the form
function runFilter() {

    //  Reset the table contents
    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputDateTime = d3.select("#datetime");
  
    // Get the value property of the input element
    var dateTime = inputDateTime.property("value");
  
    // Use the form input to filter the data by date/time of UFo sightings
    var filteredData = tableData.filter(ufo => ufo.datetime == dateTime);
    console.log(filteredData);
   
    // Loop through filtered data and console.log each UFO sighting data object.
    filteredData.forEach((filtered) => {
        console.log(filtered);
    
        // Append one table row `tr` for each UFO sighting data object.
        var row = tbody.append("tr");
    
        // Use `Object.entries` to console.log each UFO sighting data object.
        var keyValue = Object.entries(filtered)
        keyValue.forEach(([key,value]) => {
            console.log(`${key} : ${value}`);
    
            // Append 1 cell per sighting data
            var cell = row.append("td")
            cell.text(value);
    
        }); 
    
    });
  };
