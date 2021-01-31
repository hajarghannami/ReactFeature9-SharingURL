// Styling
import { ThemeButton, Logo } from "../styles";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/">
        <img src="https://image.flaticon.com/icons/png/512/614/614131.png" />
      </Logo>
      <div className="navbar-nav ml-auto">
        <a className="nav-item" style={{ padding: "0.25em 1em" }}>
          Products
        </a>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
