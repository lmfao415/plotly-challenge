# plotly-challenge

This project features an interactive dashboard exploring the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset contains samples taken from different patients, each with a different Subject ID #. Included is data on the most prevalent microbial species (also called operational taxonomic units, or OTUs, in the study) present in each subject. Each OTU has a number assigned to it along with species classification data included as well. 

The dataset reveals that a small handful of OTUs were present in more than 70% of people, while the rest were relatively rare.

**The full Dashboard is live and interactive [HERE](https://rmurnane94.github.io/plotly-challenge/)**


## Notes

1. The [`app.js`](https://github.com/rmurnane94/plotly-challenge/blob/main/static/js/app.js) file uses the D3 library to read in the [`samples.json`](https://github.com/rmurnane94/plotly-challenge/blob/main/static/js/samples.json) file with the JSON data to create the dashboard visualizations.

6. Subject ID # for each sample can be chosen in the dropdown menu, and all displayed information and plots update when a new sample is selected.

4. Information includes metadata, i.e., an individual's demographic information given in the dataset. 
![hw](https://github.com/rmurnane94/plotly-challenge/blob/main/pics/demo.png)

2. Plots include a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual sample.

* Uses `sample_values` as the values for the bar chart.

* Uses `otu_ids` as the labels for the bar chart.

* Uses `otu_labels` as the hovertext for the chart.

  ![bar Chart](https://github.com/rmurnane94/plotly-challenge/blob/main/pics/bar.png)

3. Also features a bubble chart displaying each subject sample.

* Uses `otu_ids` for the x values.

* Uses `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![Bubble Chart]![bar Chart](https://github.com/rmurnane94/plotly-challenge/blob/main/pics/bubble.png)


