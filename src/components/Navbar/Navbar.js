import "./Navbar.css";
import { BsPerson } from "react-icons/bs";
import { TbBrightnessDown } from "react-icons/tb";
import { RiShareBoxLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <button className="navbar-btn">
        <span className="btn-plus">+</span> New Chat
      </button>
      <p className="navbar-p">
        History is temporarily unavailable. We're working to restore this
        feature as soon as possible.
      </p>

      <div className="navbar-bottom">
        <ul>
          <li>
            <BsPerson className="icon" />
            Upgrade to Plus <span className="new">NEW</span>
          </li>
          <li>
            <TbBrightnessDown className="icon" />
            Light mode
          </li>
          <li>
            <RiShareBoxLine className="icon" />
            Updates &amp; FAQ
          </li>
          <li>
            <FiLogOut className="icon" />
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
