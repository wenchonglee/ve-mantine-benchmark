
import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

const root = style({
    color: theme.colors.orange[4],
    fontSize: "35px"
}); 

export default { root }