/**
 * @Author: harsha
 * @Date:   2020-10-11T14:09:38+02:00
 * @Last modified by:   harsha
 * @Last modified time: 2020-10-11T16:09:45+02:00
 */

import { isMobile } from "../helpers/helpers";

export default theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  loader: {
    marginTop: isMobile() ? "30%" : "20%",
    marginLeft: "40%"
  },
  content: {
    marginTop: "2%"
  },
  selectedCard: {
    borderStyle: "solid",
    borderColor: "#33a0fc"
  },
  chart: {
    marginTop: "20px"
  },
  weatherCard: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  button: {
    padding: theme.spacing(1),
    textAlign: "center"
  },
  pullRight: {
    display: "inline-block",
    textAlign: "right",
    width: "100%"
  },
  pullLeft: {
    display: "inline-block",
    textAlign: "left",
    width: "100%"
  }
});
