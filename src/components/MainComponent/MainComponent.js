/**
 * @Author: harsha
 * @Date:   2020-10-09T17:07:54+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-13T15:59:30+02:00
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withStyles, Container, CircularProgress } from "@material-ui/core";

import {
  fetchWeatherData,
  setCurrentIndex,
  selectTempType
} from "../../actions/fetchWeatherActions";

import WeatherCardsComponent from "../WeatherCardsComponent/WeatherCardsComponent";
import { PaginationComponent } from "../PaginationComponent/PaginationComponent";
import { TemperatureSelectorComponent } from "../TemperatureSelectorComponent/TemperatureSelectorComponent";
import { ChartsComponent } from "../ChartsComponent/ChartsComponent";

import styles from "../../globalstyles/globalStyles";

class MainComponent extends Component {
  componentDidMount() {
    const { fetchWeatherData } = this.props;
    fetchWeatherData();
  }
  render() {
    const {
      isLoading,
      classes,
      setCurrentIndex,
      currentIndex,
      weatherListing,
      selectTempType,
      selectedTemp,
      selectedWeather
    } = this.props;
    if (isLoading) {
      return (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      );
    }
    return (
      <Fragment>
        {!isLoading && (
          <div className={classes.content}>
            <Container component="main" maxWidth="md">
              <TemperatureSelectorComponent
                classes={classes}
                selectTempType={selectTempType}
                selectedTemp={selectedTemp}
              />
              <PaginationComponent
                classes={classes}
                setCurrentIndex={setCurrentIndex}
                currentIndex={currentIndex}
                weatherListing={weatherListing}
              />
              <WeatherCardsComponent
                classes={classes}
                selectedTemp={selectedTemp}
                selectedWeather={selectedWeather}
              />
              <ChartsComponent
                classes={classes}
                selectedWeather={selectedWeather}
                selectedTemp={selectedTemp}
              />
            </Container>
          </div>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ weatherStack }) {
  return {
    weatherListing: weatherStack.weatherData,
    isLoading: weatherStack.isLoading,
    currentIndex: weatherStack.currentIndex,
    selectedTemp: weatherStack.selectedTemp,
    selectedWeather: weatherStack.selectedWeather
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchWeatherData, setCurrentIndex, selectTempType },
    dispatch
  );
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(MainComponent)
);
