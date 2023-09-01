import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import Home from '../../Pages/Home/Home.js';
//HTML
import HTMLBasic from '../../Pages/HTML/HTMLBasic.js';
import HTMLElement from '../../Pages/HTML/HTMLElement.js';
import HTMLAttributes from '../../Pages/HTML/HTMLAttributes.js';
import HTMLMeta from '../../Pages/HTML/HTMLMeta.js';
import HTMLLink from '../../Pages/HTML/HTMLLink.js';
import HTMLLayout from '../../Pages/HTML/HTMLLayout.js';
import HTMLParagraphs from '../../Pages/HTML/HTMLParagraphs.js';
import HTMLFormatting from '../../Pages/HTML/HTMLFormatting.js';
import HTMLList from '../../Pages/HTML/HTMLList.js';
import HTMLTable from '../../Pages/HTML/HTMLTable.js';
import HTMLIframe from '../../Pages/HTML/HTMLIframe.js';
import HTMLObject from '../../Pages/HTML/HTMLObject.js';
import HTMLImage from '../../Pages/HTML/HTMLImage.js';
import HTMLMultimedia from '../../Pages/HTML/HTMLMultimedia.js';
import HTMLForms from '../../Pages/HTML/HTMLForms.js';
//CSS
import CSSBasic from '../../Pages/CSS/CSSBasic.js';
import CSSSelector from '../../Pages/CSS/CSSSelector.js';
import CSSDeclaration from '../../Pages/CSS/CSSDeclaration.js';
import CSSLayout from '../../Pages/CSS/CSSLayout.js';
import CSSBoxModel from '../../Pages/CSS/CSSBoxModel.js';
import CSSFlex from '../../Pages/CSS/CSSFlex.js';
import CSSBoxOther from '../../Pages/CSS/CSSBoxOther.js';
import CSSBackground from '../../Pages/CSS/CSSBackground.js';
import CSSText from '../../Pages/CSS/CSSText.js';
import CSSFont from '../../Pages/CSS/CSSFont.js';
import CSSList from '../../Pages/CSS/CSSList.js';
import CSSDynamic from '../../Pages/CSS/CSSDynamic.js';
import CSSRWD from '../../Pages/CSS/CSSRWD.js';
//JavaScript
import JavaScriptBasic from '../../Pages/JavaScript/JavaScriptBasic.js';
import JavaScriptSyntax from '../../Pages/JavaScript/JavaScriptSyntax.js';
import JavaScriptWindow from '../../Pages/JavaScript/JavaScriptWindow.js';
import JavaScriptWindowHistory from '../../Pages/JavaScript/JavaScriptWindowHistory.js';
import JavaScriptWindowLocation from '../../Pages/JavaScript/JavaScriptWindowLocation.js';
import JavaScriptWindowNavigator from '../../Pages/JavaScript/JavaScriptWindowNavigator.js';
import JavaScriptDocument from '../../Pages/JavaScript/JavaScriptDocument.js';
import JavaScriptElement from '../../Pages/JavaScript/JavaScriptElement.js';
import JavaScriptEventTarget from '../../Pages/JavaScript/JavaScriptEventTarget.js';
import JavaScriptEventObject from '../../Pages/JavaScript/JavaScriptEventObject.js';
//TypeScript
import TypeScriptBasic from '../../Pages/TypeScript/TypeScriptBasic.js';
import TypeScriptSyntax from '../../Pages/TypeScript/TypeScriptSyntax.js';
//Jquery
import JqueryBasic from '../../Pages/Jquery/JqueryBasic.js';
import JquerySyntax from '../../Pages/Jquery/JquerySyntax.js';
//React
import ReactBasic from '../../Pages/React/ReactBasic.js';
import ReactJSX from '../../Pages/React/ReactJSX.js';
import ReactComponent from '../../Pages/React/ReactComponent.js';
import ReactHook from '../../Pages/React/ReactHook.js';
import ReactTrap from '../../Pages/React/ReactTrap.js';
//NodeJS
import NodeJSBasic from '../../Pages/NodeJS/NodeJSBasic.js';
import NodeJSnpm from '../../Pages/NodeJS/NodeJSnpm.js';
import NodeJSModule from '../../Pages/NodeJS/NodeJSModule.js';
//ExpressJS
import ExpressJSBasic from '../../Pages/ExpressJS/ExpressJSBasic.js';
import ExpressJSApplication from '../../Pages/ExpressJS/ExpressJSApplication.js';
import ExpressJSRouter from '../../Pages/ExpressJS/ExpressJSRouter.js';
import ExpressJSMiddleware from '../../Pages/ExpressJS/ExpressJSMiddleware.js';
import ExpressJSRequest from '../../Pages/ExpressJS/ExpressJSRequest.js';
import ExpressJSResponse from '../../Pages/ExpressJS/ExpressJSResponse.js';
//SQL
import SQLBasic from '../../Pages/SQL/SQLBasic.js';
import SQLMySQL from '../../Pages/SQL/SQLMySQL.js';
//Git
import GitBasic from '../../Pages/Git/GitBasic.js';

function Content(props) {
    switch (props.setContent) {
        case "Home": return (<Home />);
        case "HTML/Basic": return (<HTMLBasic />);
        case "HTML/Element": return (<HTMLElement />);
        case "HTML/Attributes": return (<HTMLAttributes />);
        case "HTML/Meta": return (<HTMLMeta />);
        case "HTML/Link": return (<HTMLLink />);
        case "HTML/Layout": return (<HTMLLayout />);
        case "HTML/Paragraphs": return (<HTMLParagraphs />);
        case "HTML/Formatting": return (<HTMLFormatting />);
        case "HTML/List": return (<HTMLList />);
        case "HTML/Table": return (<HTMLTable />);
        case "HTML/Iframe": return (<HTMLIframe />);
        case "HTML/Object": return (<HTMLObject />);
        case "HTML/Image": return (<HTMLImage />);
        case "HTML/Multimedia": return (<HTMLMultimedia />);
        case "HTML/Forms": return (<HTMLForms />);

        case "CSS/Basic": return (<CSSBasic />);
        case "CSS/Selector": return (<CSSSelector />);
        case "CSS/Declaration": return (<CSSDeclaration />);
        case "CSS/Layout": return (<CSSLayout />);
        case "CSS/BoxModel": return (<CSSBoxModel />);
        case "CSS/Flex": return (<CSSFlex />);
        case "CSS/BoxOther": return (<CSSBoxOther />);
        case "CSS/Background": return (<CSSBackground />);
        case "CSS/Text": return (<CSSText />);
        case "CSS/Font": return (<CSSFont />);
        case "CSS/List": return (<CSSList />);
        case "CSS/Dynamic": return (<CSSDynamic />);
        case "CSS/RWD": return (<CSSRWD />);

        case "JavaScript/Basic": return (<JavaScriptBasic />);
        case "JavaScript/Syntax": return (<JavaScriptSyntax />);
        case "JavaScript/Window": return (<JavaScriptWindow />);
        case "JavaScript/WindowHistory": return (<JavaScriptWindowHistory />);
        case "JavaScript/WindowLocation": return (<JavaScriptWindowLocation />);
        case "JavaScript/WindowNavigator": return (<JavaScriptWindowNavigator />);
        case "JavaScript/Document": return (<JavaScriptDocument />);
        case "JavaScript/Element": return (<JavaScriptElement />);
        case "JavaScript/EventTarget": return (<JavaScriptEventTarget />);
        case "JavaScript/EventObject": return (<JavaScriptEventObject />);

        case "TypeScript/Basic": return (<TypeScriptBasic />);
        case "TypeScript/Syntax": return (<TypeScriptSyntax />);

        case "Jquery/Basic": return (<JqueryBasic />);
        case "Jquery/Syntax": return (<JquerySyntax />);

        case "React/Basic": return (<ReactBasic />);
        case "React/JSX": return (<ReactJSX />);
        case "React/Component": return (<ReactComponent />);
        case "React/Hook": return (<ReactHook />);
        case "React/Trap": return (<ReactTrap />);

        case "NodeJS/Basic": return (<NodeJSBasic />);
        case "NodeJS/npm": return (<NodeJSnpm />);
        case "NodeJS/Module": return (<NodeJSModule />);

        case "ExpressJS/Basic": return (<ExpressJSBasic />);
        case "ExpressJS/Application": return (<ExpressJSApplication />);
        case "ExpressJS/Router": return (<ExpressJSRouter />);
        case "ExpressJS/Middleware": return (<ExpressJSMiddleware />);
        case "ExpressJS/Request": return (<ExpressJSRequest />);
        case "ExpressJS/Response": return (<ExpressJSResponse />);

        case "SQL/Basic": return (<SQLBasic />);
        case "SQL/MySQL": return (<SQLMySQL />);

        case "Git/Basic": return (<GitBasic />);

        default: return (<Home />);
    }
}
export default Content;