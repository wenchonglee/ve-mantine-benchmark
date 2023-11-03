import { mkdirSync, writeFileSync } from "node:fs";

const basedir = "./src/cssmod/";
const count = 100;
for (let i = 0; i < count; i++) {
  mkdirSync(`${basedir}/${i}`, { recursive: true });
  writeFileSync(
    `${basedir}/${i}/styles.module.css`,
    `
.root {
  color: var(--color-orange-${i % 9});
  font-size: ${i + 4}px;
}
`
  );
  writeFileSync(
    `${basedir}/${i}/Component.tsx`,
    `
import styles from "./styles.module.css";

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
