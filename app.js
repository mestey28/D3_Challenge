// @TODO: YOUR CODE HERE!
//  Your Task
// Core Assignment: D3 Dabbler (Required Assignment)
// You need to create a scatter plot between two of the data variables such as `Healthcare vs. Poverty` or `Smokers vs. Age`.
// Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the `app.js` file of your homework directory—make sure you pull in the data from `data.csv` by using the `d3.csv` function. Your scatter plot should ultimately appear like the image at the top of this section.
// * Include state abbreviations in the circles.
// Create and situate your axes and labels to the left and bottom of the chart.
// Note: You'll need to use `python -m http.server` to run the visualization. This will host the page at `localhost:8000` in your web browser.
// id,state,abbr,poverty,povertyMoe,age,ageMoe,income,incomeMoe,healthcare,healthcareLow,healthcareHigh,obesity,obesityLow,obesityHigh,smokes,smokesLow,smokesHigh,-0.385218228

// function makeResponsive() {
//   var svgArea= d3.select("body").select("svg");
//   if(!svgArea.empty()){
//     svgArea.remove();
//   }

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the margins as an object
var margin = {
  top: 20,
  right: 30,
  bottom: 125,
  left: 100
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
d3.csv("data.csv").then(function(riskData){
  // Print the Data
  console.log(riskData);


// Step 1: Parse Data/ Cast as numbers
  riskData.forEach(function(data){
    data.smokes= +data.smokes;
    data.age= +data.age;
  });

// Step 2: Create scale functions
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(riskData, d => d.smokes)-2, d3.max(riskData, d => d.smokes)+2])
    .range([0, width]);
  
  var yLinearScale = d3.scaleLinear()
    .domain([d3.min(riskData, d => d.age)-2, d3.max(riskData, d => d.age)+2])
    .range([height, 0]);    

// Step 3: Create axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

// Step 4: Append Axis to the chart
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

    chartGroup.append("g")  
    .call(leftAxis);

// Step 5:Create Cirlces
    var circlesGroup = chartGroup.selectAll("circle")
    .data(riskData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.smokes))
    .attr("cy", d => yLinearScale(d.age))
    .attr("r", "10")
    .attr("fill", "teal")
    .attr("opacity", ".8")
    .attr('class', 'stateCircle')
    .attr('stroke', 'black');


// Step 6: Initialize tool tip
  var toolTip = d3.tip()
    .attr("class", "toolTip")
    .offset([80, -80])
    .html(function(d){
      return (`${d.state}<br>Smokes:${d.smokes} <br>Age: ${d.age}`);
    });

// Step 7: Create tooltop in the chart
    chartGroup.call(toolTip);

// Step 8: Create event listeners to display and hide the tooltip
    circlesGroup.on("click", function(data){
      toolTip.show(data, this);
    })

    .on("mouseOut", function(data,index){
      toolTip.hide(data);
    });

    // Create axis labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height /2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Age (Median)");

    chartGroup.append("text")
      .attr("transform", `translate(${width/2}, ${height + margin.top +30})`)
      .attr("class", "axisText")
      .text("Smokes %")
   }) .catch(function(error) {
    console.log(error);
  });

//   makeResponsive();
//   d3.select(window).on("resize", makeResponsive);

// };






