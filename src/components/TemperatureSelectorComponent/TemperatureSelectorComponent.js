/**
 * @Author: harsha
 * @Date:   2020-10-12T13:49:13+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-12T14:07:38+02:00
 */

import React from "react";
import { FormControlLabel, Grid, Radio } from "@material-ui/core";
import { TEMPERATURES } from "../../helpers/constants";

export const TemperatureSelectorComponent = props => {
  const { selectedTemp, selectTempType } = props;
  return (
    <Grid container>
      <Grid item xs={2} />
      <Grid item xs={3}>
        <FormControlLabel
          checked={selectedTemp === TEMPERATURES.CELCIUS}
          control={<Radio color="primary" />}
          label="Celsius"
          labelPlacement="end"
          onClick={() => {
            selectTempType(TEMPERATURES.CELCIUS);
          }}
          id="celcius-radio"
        />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={3}>
        <FormControlLabel
          checked={selectedTemp === TEMPERATURES.FAHRENHEIT}
          control={<Radio color="primary" />}
          label="Fahrenheit"
          labelPlacement="end"
          onClick={() => {
            selectTempType(TEMPERATURES.FAHRENHEIT);
          }}
          id="fr-radio"
        />
      </Grid>
    </Grid>
  );
};
