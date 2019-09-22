/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "@affectionatedoor/gatsby-theme-ui/src/components/Link";

export default () => (
  <nav sx={{ marginRight: "auto" }}>
    <Styled.ul>
      <Styled.li>
        <Link to="/">Parallax example</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/parallax-bg/">Parallax example with background image</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/vanilla/">Vanilla example</Link>
      </Styled.li>
    </Styled.ul>
  </nav>
);
