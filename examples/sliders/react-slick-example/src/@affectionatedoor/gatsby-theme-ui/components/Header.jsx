/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import ThemeSwitcher from "@affectionatedoor/gatsby-theme-ui/src/components/ThemeSwitcher";

const Header = ({ siteTitle }) => (
  <header
    sx={{
      backgroundColor: "primary",
      color: "background"
    }}
  >
    <Flex
      sx={{
        m: "0 auto",
        p: "1rem 1.0875rem",
        maxWidth: "960px",
        alignItems: "center"
      }}
    >
      <Link
        to="/"
        sx={{
          fontFamily: "heading",
          fontWeight: "heading",
          fontSize: 40,
          color: "background",
          textDecoration: "none"
        }}
      >
        {siteTitle}
      </Link>
      <ThemeSwitcher />
    </Flex>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
