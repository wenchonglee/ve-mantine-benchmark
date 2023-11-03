
import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

const root = style({
    color: theme.colors.orange[1],
    fontSize: "32px"
}); 

export default { root }