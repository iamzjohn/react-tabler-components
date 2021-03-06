import React from "react";
import { Icon } from "../";

const NavLink = ({
  className,
  icon,
  children,
  active = false,
  as: Component = "a",
  ...rest
}) => (
  <Component
    className={`nav-link ${active ? `active` : ``} ${className}`}
    {...rest}
  >
    {icon && (
      <React.Fragment>
        <Icon name={icon} />{" "}
      </React.Fragment>
    )}
    {children && children}
  </Component>
);

export default NavLink;
