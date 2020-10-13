/**
 * @Author: harsha
 * @Date:   2020-10-12T11:58:00+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T18:26:28+02:00
 */
import React from "react";
import { Button, Grid } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

/**
 * [PaginationComponent Responsible for the pagination functionality]
 * @param {[type]} props [description]
 */

export const PaginationComponent = props => {
  const { classes, setCurrentIndex, currentIndex, weatherListing } = props;

  const weatherDataBlock = weatherListing.slice(currentIndex, currentIndex + 3);

  const hideNextButton = weatherDataBlock.length < 3;

  const hidePreviousButton = currentIndex === 0;

  const paginationTrigger = event => {
    const eventType = event.currentTarget.value;
    const { currentIndex } = props;
    setCurrentIndex(
      eventType === "previous" ? currentIndex - 1 : currentIndex + 1
    );
  };

  return (
    <Grid container justify="flex-start" spacing={2}>
      <Grid item xs={2} className={classes.pullLeft}>
        <Button
          id="previousPageButton"
          className={classes.button}
          color="secondary"
          disabled={hidePreviousButton}
          onClick={paginationTrigger}
          value={"previous"}
          variant="contained"
        >
          <ArrowBack fontSize="large" />
        </Button>
      </Grid>
      <Grid item xs={8} />
      <Grid item xs={2} className={classes.pullRight}>
        <Button
          id="nextPageButton"
          className={classes.button}
          color="secondary"
          disabled={hideNextButton}
          onClick={paginationTrigger}
          value={"next"}
          variant="contained"
        >
          <ArrowForward fontSize="large" />
        </Button>
      </Grid>
    </Grid>
  );
};
