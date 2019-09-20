/** @jsx jsx */
import { jsx, useColorMode, Box } from "theme-ui";
import Button from "@affectionatedoor/gatsby-theme-ui/src/components/Button";
import theme from "@affectionatedoor/gatsby-theme-ui/src/theme";

let themes = ["light"];
const { modes } = theme.colors;
if (modes) themes = themes.concat(Object.keys(modes));

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Box as="span" sx={{ py: 3, px: [2, 3], marginLeft: "auto" }}>
      <Button
        sx={{ borderRadius: "2px", textTransform: "capitalize" }}
        onClick={() => {
          const index = themes.indexOf(colorMode);
          const next = themes[(index + 1) % themes.length];
          setColorMode(next);
        }}
      >
        {`${colorMode} mode`}
      </Button>
    </Box>
  );
};
