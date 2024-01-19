import React from "react";
import { useNavigate } from "react-router-dom";
import BarsIcon from '../assets/bars.svg';
import { Link } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const handleMenuOne = () => {
    console.log('clicked');
    <Link to="/scrollsearch"> Hunter College Resources</Link>
    navigate("/scrollsearch");
  };

  const handleMenuTwo = () => {
    console.log('clicked two');
  };

  return (
    <Dropdown
      trigger={<img className='menu-img' src={BarsIcon} alt="" />}
      menu={[
        <button onClick={handleMenuOne}>Resources</button>,
        <button onClick={handleMenuTwo}>Menu 2</button>,
      ]}
    />
  );
};

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Menu;
