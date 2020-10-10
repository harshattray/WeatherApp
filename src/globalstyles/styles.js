import { createMuiTheme } from "@material-ui/core";

import themeStack from "./theme";
import styleType from "./styleType.js";

const theme = createMuiTheme({
  palette: themeStack,
  typography: styleType,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
