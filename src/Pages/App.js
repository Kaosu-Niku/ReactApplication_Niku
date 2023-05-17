import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './Content.css';
import HeaderButton from './../Component/APP/HeaderButton.js';
import SidebarButton from './../Component/APP/SidebarButton.js';
import Content from '../Component/APP/Content.js';

function App(props) {
  const [stateContent, setStateContent] = useState("Home");
  const [stateTag, setStateTag] = useState("Home");
  return (
    <div className="flex root-div">
      <div className="header-position-div">
        <div className="flex header-flex-div">
          <img id="headerImg" className="header-div-img" src="/Asset/Image/Icon.png" alt="icon" />
          <HeaderButton headerButtonId="buttonHome" headerButtonContent="Home" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonHTML" headerButtonContent="HTML" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonCSS" headerButtonContent="CSS" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonJavaScript" headerButtonContent="JavaScript" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonTypeScript" headerButtonContent="TypeScript" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonReact" headerButtonContent="React" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonNodeJS" headerButtonContent="NodeJS" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonExpressJS" headerButtonContent="ExpressJS" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonSQL" headerButtonContent="SQL" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonGit" headerButtonContent="Git" headerButtonSetStateContent={setStateContent} headerButtonSetStateTag={setStateTag} />
          <HeaderButton headerButtonId="buttonHelp" headerButtonContent="Help" />
        </div>
      </div>
      <div className="main-position-div">
        <div className="flex main-flex-div">
          <div className="main-sidebar-position-div">
            <div id="mainSidebarFlexDiv" className="flex main-sidebar-flex-div">
              <SidebarButton sideButtonStateTag={stateTag} sideButtonSetStateContent={setStateContent} />
            </div>
          </div>
          <div className="main-content-position-div">
            <div className="flex main-content-flex-div">
              <Content setContent={stateContent} />
            </div>
          </div>
          <div className="main-section-position-div">
            <div id="mainSectionFlexDiv" className="flex main-section-flex-div">
              {/* 塞Section的地方 */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-position-div">
        <div className="flex footer-flex-div">
          <p className="footer-div-child">網頁製作者: Kaosu-Niku</p>
          <p className="footer-div-child">作者電子信箱: s9613010@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
