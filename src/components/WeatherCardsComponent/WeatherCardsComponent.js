/**
 * @Author: harsha
 * @Date:   2020-10-10T16:00:41+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T18:27:44+02:00
 */
import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import { isMobile } from "../../helpers/helpers";
import { TEMPERATURES } from "../../helpers/constants";
import { selectWeatherCard } from "../../actions/fetchWeatherActions";

/**
 * [direction Displays the weather information]
 * @type {Object}
 */

export class WeatherCardsComponent extends Component {
  render() {
    const {
      weatherListing,
      selectWeatherCard,
      classes,
      currentIndex,
      selectedTemp,
      selectedWeather
    } = this.props;
    return (
      <Fragment>
        <Grid
          direction={isMobile() ? "column" : "row"}
          container
          spacing={2}
          alignContent="center"
        >
          <WeatherCards
            weatherListing={weatherListing}
            selectWeatherCard={selectWeatherCard}
            classes={classes}
            currentIndex={currentIndex}
            selectedTemp={selectedTemp}
            selectedWeather={selectedWeather}
          />
        </Grid>
      </Fragment>
    );
  }
}

/**
 * [WeatherCards A floater component to render the weather cards]
 * @param {[type]} props [description]
 */

export const WeatherCards = props => {
  const { classes, currentIndex, selectedTemp, selectedWeather } = props;

  const weatherDataBlock = props.weatherListing.slice(
    currentIndex,
    currentIndex + 3
  );
  return weatherDataBlock.map((value, index) => {
    const cardClasses = classNames(
      classes.weatherCard,
      value.date === selectedWeather.date ? classes.selectedCard : undefined
    );
    return (
      <Fragment key={index}>
        <Grid item xs={isMobile() ? 12 : 4}>
          <Card
            className={cardClasses}
            id={"weather-card-" + index}
            onClick={() => {
              props.selectWeatherCard(value);
            }}
          >
            <CardContent>
              <ul>
                <li>
                  <Typography variant="h6">
                    Temp: {value[selectedTemp]}{" "}
                    {selectedTemp === TEMPERATURES.CELCIUS ? "° C" : "° F"}
                  </Typography>
                </li>
                <li>Date: {value.displayDate}</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Fragment>
    );
  });
};

function mapStateToProps({ weatherStack }) {
  return {
    weatherListing: weatherStack.weatherData,
    currentIndex: weatherStack.currentIndex
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectWeatherCard }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherCardsComponent);
