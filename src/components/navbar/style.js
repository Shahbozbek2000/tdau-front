import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Select } from "antd";
import { systemColors } from "assets/styles/colors";

export const Nav = styled.nav`
  position: ${props => props.pathName === '/about' ? 'absolute' : 'static'};
  top: 0;
  width: 100%;
  margin: 0 auto;
  background:  ${props => props.pathName === '/about' ? 'rgba(255, 255, 255, 0.1);' : 'transparent'}; 
  /* backdrop-filter: ${props => props.pathName === '/about' ? 'blur(150px)' : 'blur(0px)'}; */
  font-family: "DM Sans", sans-serif;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  @media (max-width: 676px) {
    width: calc(100% - 20px);
  }
`;
export const NavContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: calc(100% - 100px);
 margin: 0 auto;
 @media (max-width: 400px) {
   width: 100%;
 }
 & img {
   width: 180px;
 }
`
export const AntdSelect = styled(Select)`
color: ${systemColors.mainBlue} !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500 !important;
  text-decoration: none !important;
  transition: 0.4s ease-in-out;
  padding: 0 1rem;
  margin-top: 13px;
  font-size: 18.6px;
`
export const NavLink = styled.a`
  color: #142F38 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500 !important;
  text-decoration: none !important;
  transition: 0.4s ease-in-out;
  padding: 0 1rem;
  height: 10%;
  cursor: pointer;
  &.antd-select {
    font-weight: 500 !important;
    color: ${systemColors.mainBlue} !important;
  }
  &:after {
      content: "";
      position: absolute;
      width: 0px;
      height: 5px;
      left: 50%;
      bottom: 0;
      background-color: ${systemColors.mainBlue};
      transition: all ease-in-out 0.2s;
    }
    &:after:hover {
      width: 100%;
      left:0;
    }
  &:hover {
    text-decoration: none !important;
  }
  .logo-image {
    width: 176.64px;
  }
  .nav-btn {
    margin-top: 13px;
    font-family: "DM Sans", sans-serif;
    transition: all 0.5s;
    background-color: transparent;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #142F38;
    font-size: 16px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  .language-select {
    &:focus {
      border: none !important;
      box-shadow: none !important; 
    }
  }
  @media (max-width: 576px) {
    img {
      width: 130px !important;
    }
  }
  @media (max-width: 960px) {
    color: black;
  }
`;
// export const BtnLink = styled(Link)`
//   .login-btn {
//     width: 160px;
//     height: 40px;
//     background: var(--btn_color);
//     border-radius: 8px;
//     color: white;
//     border: none;
//     &:focus {
//       outline: none;
//     }
//     img {
//       width: 220px;
//     }
//   }
// `;
export const PhoneLink = styled.a`
  color: #000;
  display: none;
  font-weight: 500 !important;
  text-decoration: none !important;
  transition: 0.4s ease-in-out;
  padding: 0 1rem;
  /* height: 100%; */
  @media (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  width: 20px;
  svg {
    width: 18px;
    font-weight: lighter !important;
  }
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    width: 20px;
    color: black;
    top: -2px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.5s linear;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    width: 100%;
    height: 90vh;
    padding: 0;
    z-index: 10000;
    top: 90px;
    /* top: ${({ click }) => (click ? '90px' : '-90vh')}; */
    /* left: 0; */
    left: ${({ click }) => (click ? 0 : "-105%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: red;
    /* backdrop-filter: blur(3px) !important; */
  }
  @media (max-width: 676px) {
    width: 100%;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  right: 20px;
  margin-top: 13px;
  & .chevron-down {
    position: absolute;
    top: 10px;
    right: 15px;
    z-index: 10000;
  }
  &:hover ul li {
    opacity: 1;
  }
  ul li:first-child {
    opacity: 1;
  }
 
  
`;

export const LanguageStyled = styled.ol`
  position: relative;
  width: 140px;
  height: 44.4px;
  border-radius: 12px;
  padding: 0; 
  margin-bottom: 0 !important;
  font-size: 18.6px !important;
  font-weight: 400;
  list-style: none;
  color: #3D68FF;
  cursor: pointer;

  & li > ol {
    position: absolute;
    list-style: none;
    top: 0;
    left: 0;
    margin: 0px;
    padding: 0;
    text-align: center;
    width: 140px;
    font-size: 18.6px !important;
    font-weight: 400;
    opacity: 0;
    z-index: -1;
    color: #3D68FF;
    padding-top: 38px;
    padding-bottom: 10px;
    /* line-height: 30px; */
    box-shadow: 5px 0 20px rgb(0 0 0 / 20%);
    transition: all 0.3s ease-in-out;
    & li.active {
      display: none;
    }
    & li {
      line-height: 35px;
    }
  }

  &:hover > li > ol {
    background: #ffffff;
    opacity: 1;
    z-index: 1;
    border-radius: 12px;
    text-align: center;
    font-weight: 400;
    font-size: 18.6px !important;
    & li:hover {
      color: blue;
    }
  }
`;

export const LanguageBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  /* height: 44.4px; */
  display: flex;
  flex-wrap: wrap;
  font-size: 18.6px !important;
  /* justify-content: center; */
  align-items: center;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 9px 0;
  &:hover {
  }
`;
export const Language = styled.div`
  width: 100%;
  /* font-weight: bold; */
  display: flex;
  justify-content: center;
  z-index: 2;
  font-size: 18.6px !important;
`;

// ==== Nav Drop Down Menu Style ====

export const NavDropMenu = styled.ul`
  position: absolute;
  top: 100%;
  display: none;
  white-space: nowrap;
  left: 0;
  list-style-type: none;
  padding: 1.2rem;
  margin: 0;
  z-index: 99999;
  color: #142F38;
  font-family: 'Poppins', "Inter";
  text-align: start;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 23px;
  /* opacity: 0.75; */
  box-shadow: 0px 10px 25px #DFD9CE;
  li {
    font-weight: 700;
    font-size: 16px;
    width: 100%;
  }
  li:hover {
    color: #000;
  }
`

export const NavDropMenuWrapper = styled.span`
position: relative;
color: #142F38 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500 !important;
  transition: 0.4s ease-in-out;
  padding: 0 1rem;
  height: 10%;
  cursor: pointer;
  &:hover ul {
    display: inline-block;
  }
  &:after {
      content: "";
      position: absolute;
      width: 0px;
      height: 5px;
      left: 50%;
      bottom: 0;
      background-color: ${systemColors.mainBlue};
      transition: all ease-in-out 0.2s;
    }
    &:after:hover {
      width: 100%;
      left:0;
    }
  .nav-btn {
    margin-top: 13px;
    font-family: "DM Sans", sans-serif;
    transition: all 0.5s;
    background-color: transparent;
    border: none;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: #142F38;
    font-size: 16px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 960px) {
    color: black;
  }
`
