// initialize the page with some data
d3.json('static/js/samples.json').then((allData) => {
    // populate the dropdown menu with ids
    var optionSelect = d3.select("#selDataset");
    allData.names.forEach(x => { 
        optionSelect.append("option").text(x).property("value", x); 
    });
    // initialized with 940 id
    var selectId = allData.names[0];
    createStuff(selectId);
});

// function handles change in dropdown, calls function to create visualizations
function optionChanged(newId) {
    createStuff(newId);
};

// function to create the charts and metadata
function createStuff(currentId) {
    d3.json('static/js/samples.json').then((allData) => {
// filter samples to find data for the selected id
    var currentSample = allData.samples.filter(x=>x.id===currentId);
    console.log(currentSample);

    // values for selected patient id for amounts of bacteria
    var currentSampleAmounts = currentSample[0].sample_values;
    console.log(currentSampleAmounts);

    // ids of bacteria present in selected patient id
    var currentSampleIds = currentSample[0].otu_ids;
    var testes = currentSampleIds.slice(0, 10).reverse().map(x=>`OTU ${String(x)}`);
    console.log(testes);

    // names of bacteria for the text
    var currentSampleLabels = currentSample[0].otu_labels;
    console.log(currentSampleLabels);

    // Making the Bar Graph//
    var trace1 = {
        x: currentSampleAmounts.slice(0, 10).reverse(),
        y: testes,
        text: currentSampleLabels.slice(0, 10).reverse(),
        name: "stuff",
        type: "bar",
        orientation: "h"
    };
// bar data and layout
    var data = [trace1];
    var layout = {
        title: "Most Prevalent OTUs",
        height: 500,
        width: 800
    };
//   creating bar plot
    Plotly.newPlot("bar", data, layout);

// Making the Bubble Chart//
   var  bubbleTrace = {
    x: currentSampleIds,
    y: currentSampleAmounts,
    text: currentSampleLabels,
    mode: 'markers',
    marker: {
      color: currentSampleIds,
      size: currentSampleAmounts
    }
    };
// bubble data and layout
    var data1 = [bubbleTrace];
    var layout1 = {
        title: 'OTU Presence',
        height: 800,
        width: 1300
    };
// creating bubble chart
    Plotly.newPlot("bubble",data1,layout1);
    
// Making the MetaData Panel //
    var currentMeta = allData.metadata.filter(x=>x.id===+currentId);
    var metadataspace = d3.select("#sample-metadata");
    metadataspace.html(""); //clears panel before adding new info
    Object.entries(currentMeta[0]).forEach(([key,value])=>{
        metadataspace.append("p").text(`${key} : ${value}`)
    });
  

});
};
  





 