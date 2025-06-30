import Highcharts from "highcharts";
import accessibilityInit from "highcharts/modules/accessibility";

if (typeof window !== "undefined" && typeof accessibilityInit === "function") {
  accessibilityInit(Highcharts);
}

export default Highcharts;
