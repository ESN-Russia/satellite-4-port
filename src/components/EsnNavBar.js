import React from "react";
import styled from "styled-components";

import EsnMenuButton from "./EsnMenuButton";

const MenuItems = ["Home", "About", "News", "Projects", "Partners", "Contact"];

const EsnNavBar = () => (
  <NavBarWrapper>
    <SectionSelectorWrapper>
      <span style={{ cursor: "pointer", padding: "0 10px" }}>ESN Russia</span>
      <span style={{ cursor: "pointer", padding: "0 10px" }}>ESN HSE MSK</span>
      <span style={{ cursor: "pointer", padding: "0 10px" }}>ESN Ural Federal</span>
      <span style={{ cursor: "pointer", padding: "0 10px" }}>ESN SFTU</span>
    </SectionSelectorWrapper>
    <BottomWrapper>
      <Logo src="/RU-DIGITAL-COLOR.png" />
      <BottomMenuWrapper>{MenuItems.map(item => <EsnMenuButton title={item} />)}</BottomMenuWrapper>
    </BottomWrapper>
  </NavBarWrapper>
);

const NavBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const SectionSelectorWrapper = styled.div`
  background: #333333 url(/header_topbg.png) 0 -5px repeat-x;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: #bbb;
  font-weight: bold;
  font-size: 16px;
  padding: 16px 0 10px 0;
`;

const BottomWrapper = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  width: 960px;
  max-width: 100vw;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 84px;
  margin: 0;
  padding: 0;
`;

const BottomMenuWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export default EsnNavBar;
