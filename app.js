// @TODO: YOUR CODE HERE!
//  Your Task
// Core Assignment: D3 Dabbler (Required Assignment)
// You need to create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.
// Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the `app.js` file of your homework directory—make sure you pull in the data from `data.csv` by using the `d3.csv` function. Your scatter plot should ultimately appear like the image at the top of this section.
// * Include state abbreviations in the circles.
// Create and situate your axes and labels to the left and bottom of the chart.
// Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.
// id,state,abbr,poverty,povertyMoe,age,ageMoe,income,incomeMoe,healthcare,healthcareLow,healthcareHigh,obesity,obesityLow,obesityHigh,smokes,smokesLow,smokesHigh,-0.385218228

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the margins as an object
var margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load data from data.csv
d3.csv("data.csv").then(function(data){;
  // Print the Data
  console.log(data);
});

// Step 1: Parse Data/ Cast as numbers
  data.forEach(function(data){
    data.smokes= +data.smokes;
    data.age= +data.age;
  });

// Step 2: Create scale functions
  var xLinearScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.smokes)])
    .range([0, width]);
  
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.age)])
    .range([height, 0]);    

// Step 3: Create axis functions


// Step 4: Append Axis to the chart


// Step 5:Create Cirlces


// Step 6: Initialize tool tip


// Step 7: Create tooltop in the chart


// Step 8: Create event listeners to display and hide the tooltip





