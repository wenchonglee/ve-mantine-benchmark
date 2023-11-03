import { mkdirSync, writeFileSync } from "node:fs";

const basedir = "./src/ve-mantine-theme/";
const count = 100;
for (let i = 0; i < count; i++) {
  mkdirSync(`${basedir}${i}`, { recursive: true });
  writeFileSync(
    `${basedir}${i}/styles.css.ts`,
    `
import { style } from "@vanilla-extract/css";
import { theme } from "../../theme";

const root = style({
    color: theme.colors.orange[${i % 9}],
    fontSize: "${i + 4}px"
}); 

export default { root }
`
  );
  writeFileSync(
    `${basedir}${i}/Component.tsx`,
    `
import styles from "./styles.css";

export const Component${i} = () => {
    return (
    <div className={styles.root}>
        Component #${i}
    </div>
    );
};
`
  );
}

writeFileSync(
  `${basedir}/KitchenSink.tsx`,
  `${Array(count)
    .fill()
    .map((_, i) => `import { Component${i} } from "./${i}/Component"\n`)
    .join("")}

export const KitchenSink = () => {
    return <div>
    ${Array(count)
      .fill()
      .map((_, i) => `<Component${i} />\n`)
      .join("")}
    </div>
}
`
);
