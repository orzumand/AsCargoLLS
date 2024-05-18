import Line from "../../assets/img/Group 30.svg";
import { Element, SidebarWrapper } from "./style";
import Truck from "../../assets/icons/Group10.svg";
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <a className="HOME" href="#features">
        HOME
      </a>
      <a className="ABOUT" href="#features">
        ABOUT
      </a>
      <a className="FAQ" href="#features">
        FAQ
      </a>
      <a className="SERVICES" href="#features">
        SERVICES
      </a>
      <a className="CONTACT" href="#features">
        CONTACT
      </a>
      <Element>
        <img width={30} src={Truck} alt="" />
      </Element>
      <img height="100%" src={Line} alt="" />
    </SidebarWrapper>
  );
};

export default Sidebar;
