import Line from "../../assets/img/Group 30.svg";
import { Element, SidebarWrapper } from "./style";
import Truck from "../../assets/icons/Group10.svg";
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <a className="HOME" href="#home">
        HOME
      </a>
      <a className="ABOUT" href="#about">
        ABOUT
      </a>
      <a className="FAQ" href="#FAQ">
        FAQ
      </a>
      <a className="SERVICES" href="#services">
        SERVICES
      </a>
      <a className="CONTACT" href="#contacts">
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
