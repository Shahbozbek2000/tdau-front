import { useState, useEffect } from "react";
import {
   Nav,
   NavLink,
   AntdSelect,
   MobileIcon,
   NavMenu,
   NavContainer,
   NavDropMenuWrapper,
   NavDropMenu,
} from "./style";
import { Twirl as Hamburger } from "hamburger-react";
// import "antd/dist/antd.css";
import logoTip from "../../assets/logo/logo.svg";
import { useLocation } from "react-router-dom";
import { Container } from "styles/globalStyle";
import { Link } from "react-router-dom";


export function Navigator() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);
   const location = useLocation()

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false);
      } else {
         setButton(true);
      }
   };
   useEffect(() => {
      showButton();
   }, []);
   window.addEventListener("resize", showButton);

   const handleClick = () => {
      setClick(!click);
   };


   return (
      <div>
         <Nav pathName={location.pathname}>
            <NavContainer>
               <Link to="/">
                  <img src={logoTip} alt="registon" className="logo-image" />
               </Link>
               <MobileIcon onClick={handleClick} click={click}>
                  <Hamburger
                     rounded
                     direction="right"
                     size={24}
                     toggled={click}
                     toggle={setClick}
                  />
               </MobileIcon>
               <NavMenu onClick={handleClick} click={click}>
                  <NavDropMenuWrapper >
                     <button className="nav-btn">University</button>
                     <NavDropMenu>
                        <li>Rector's Message</li>
                        <li>Vision,Mission, Core Values</li>
                        <li>Quality Policy and Objectives</li>
                        <li>History of university</li>
                        <li>University's structure</li>
                        <li>Programmes</li>
                        <li>Branches</li>
                     </NavDropMenu>
                  </NavDropMenuWrapper>
                  <NavLink href="#customers">
                     <button className="nav-btn">Interactive service</button>
                  </NavLink>
                  <NavLink href="#contact">
                     <button className="nav-btn">International partners</button>
                  </NavLink>
                  <NavLink href="#contact">
                     <button className="nav-btn">Double degree</button>
                  </NavLink>
                  <NavLink href="#contact">
                     <button className="nav-btn">Contacts</button>
                  </NavLink>
                  <NavLink href="#contact">
                     <button className="nav-btn">Eng</button>
                  </NavLink>
               </NavMenu>
            </NavContainer>
         </Nav>
      </div>
   );
}



