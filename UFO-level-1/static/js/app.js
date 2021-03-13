// from data.js
var tableData = data;

// YOUR CODE HERE!
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
