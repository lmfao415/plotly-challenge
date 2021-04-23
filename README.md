# plotly-challenge

This project features an interactive dashboard exploring the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset contains samples taken from different patients, each with a different Subject ID #. Included is data on the most prevalent microbial species (also called operational taxonomic units, or OTUs, in the study) present in each subject. Each OTU has a number assigned to it along with species classification data included as well. 

The dataset reveals that a small handful of OTUs were present in more than 70% of people, while the rest were relatively rare.

**The full Dashboard is live and interactive [HERE](https://rmurnane94.github.io/plotly-challenge/)**


## Notes

1. D3 library is used to read in the [`samples.json`](https://github.com/rmurnane94/plotly-challenge/blob/main/static/js/samples.json) file which contains all the data used in JSON format.

6. Update all of the plots any time that a new sample is selected.


4. Display the sample metadata, i.e., an individual's demographic information. Display each key-value pair from the metadata JSON object somewhere on the page.

![hw](https://github.com/rmurnane94/plotly-challenge/blob/main/pics/demo.png)




2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use `sample_values` as the values for the bar chart.

* Use `otu_ids` as the labels for the bar chart.

* Use `otu_labels` as the hovertext for the chart.

  ![bar Chart](https://github.com/rmurnane94/plotly-challenge/blob/main/pics/bar.png)

3. Create a bubble chart that displays each sample.

* Use `otu_ids` for the x values.

* Use `sample_values` for the y values.

* Use `sample_values` for the marker size.

* Use `otu_ids` for the marker colors.

* Use `otu_labels` for the text values.

![Bubble Chart]![bar Chart](https://github.com/rmurnane94/plotly-challenge/blob/main/pics/bubble.png)


