/**
 * @Author: harsha
 * @Date:   2020-10-09T14:21:43+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-11T11:08:46+02:00
 */

import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography
} from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar color="primary" variant="dense">
          <AcUnitIcon />
          <Typography variant="h6" color="inherit" noWrap>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <MainComponent />
      </Container>
    </Fragment>
  );
}

export default App;
