import { deepMerge } from "grommet/utils";
import { grommet } from "grommet";

export const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#51A4FB",
      focus: "#51A4FB",
    },
  },
});
