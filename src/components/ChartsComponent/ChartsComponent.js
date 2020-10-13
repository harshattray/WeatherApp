/**
 * @Author: harsha
 * @Date:   2020-10-13T15:24:22+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T18:25:09+02:00
 */

import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Chart from "react-apexcharts";

/**
 * [ChartsComponent Renders the Chart component]
 * @param {[type]} props [Takes in the style props along with the selectedWeather chunk and the temperature choice]
 */

export const ChartsComponent = props => {
  const { selectedTemp, selectedWeather, classes } = props;

  if (Object.keys(selectedWeather).length === 0) {
    return <div />;
  }

  const state = {
    options: {
      chart: {
        id: "charts",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: []
      },
      colors: ["#E91E63"]
    },
    series: [
      {
        name: "Temperature",
        data: []
      }
    ]
  };

  selectedWeather.weatherByHour.forEach(byHour => {
    state.options.xaxis.categories.push(byHour.hour);
    state.series[0].data.push(byHour[selectedTemp]);
  });

  return (
    <div className={classes.chart}>
      <Chart
        height={320}
        options={state.options}
        series={state.series}
        type="bar"
        id="temp-chart"
      />
      <Grid alignItems="flex-end" container spacing={5}>
        <Grid item sm={5} xs={4} />
        <Grid item sm={5} xs={4}>
          <Typography component="h6" variant="h6">
            {selectedWeather && selectedWeather.displayDate}
          </Typography>
        </Grid>
        <Grid item sm={1} xs={4} />
      </Grid>
    </div>
  );
};
