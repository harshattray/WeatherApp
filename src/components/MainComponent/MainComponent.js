/**
 * @Author: harsha
 * @Date:   2020-10-09T17:07:54+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-10T16:09:18+02:00
 */

import React, { Fragment, Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withStyles, Container, CircularProgress } from "@material-ui/core";

import { fetchWeatherData } from "../../actions/fetchWeatherActions";

class MainComponent extends Component {
  componentDidMount() {
    const { fetchWeatherData } = this.props;
    fetchWeatherData();
  }
  render() {
    const { weatherListing, isLoading } = this.props;
    console.log(weatherListing, "weatherListing");
    return <Fragment></Fragment>;
  }
}

function mapStateToProps({ weatherStack }) {
  return {
    weatherListing: weatherStack.weatherData
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeatherData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
