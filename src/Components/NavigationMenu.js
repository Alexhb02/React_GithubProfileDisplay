import React from "react";
import { Link } from "react-router-dom";
function NavigationMenu(props) {
  return (
    <div>
      <div class="bold">The Menu</div>
      <ul>
        <li class="menuLink">
          <Link to="/" onClick={props.closeMenu}>
            Home
          </Link>
        </li>
        <li class="menuLink">
          <Link to="/project" onClick={props.closeMenu}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
