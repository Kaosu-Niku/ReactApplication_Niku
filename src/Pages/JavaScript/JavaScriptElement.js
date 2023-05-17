import React from 'react';
import { useState, useEffect } from 'react';

function JavaScriptElement(props) {
    const [stateTextContent, setStateTextContent] = useState();
    const [stateInnerHTML, setStateInnerHTML] = useState();
    const [stateOuterHTML, setStateOuterHTML] = useState();
    useEffect(() => {
        setStateTextContent(document.querySelector("#text").textContent);
        setStateInnerHTML(document.querySelector("#text").innerHTML);
        setStateOuterHTML(document.querySelector("#text").outerHTML);
    }, [stateTextContent])
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Element</h1>
                <p>透過document.querySelector()搜尋到的對象會以Element類型表示，Element類型包含HTML元素的資訊。</p>
                <h2>property</h2>
                <h3>Element.textContent</h3>
                <p>返回該元素和其後代的中間內容</p>
                <h3>Element.innerHTML</h3>
                <p>返回該元素的中間內容和其後代的HTML內容</p>
                <h3>Element.outerHTML</h3>
                <p>返回該元素和其後代的完整HTML內容</p>
                <div className="example">
                    <h4>範例</h4>
                    <code style={{ marginBottom: "25px" }}>{'<'}div id="text"{'>'} Hello {'<'}p{'>'}ByeBye{'<'}/p{'>'} {'<'}/div{'>'}</code>
                    <div style={{ height: "25px" }}></div>
                    <div hidden>
                        <div id="text">
                            Hello
                            <p>ByeBye</p>
                        </div>
                    </div>
                    <span>textContent:</span>
                    <output>{`${stateTextContent}`}</output>
                    <div style={{ height: "20px" }}></div>
                    <span>innerHTML:</span>
                    <output>{`${stateInnerHTML}`}</output>
                    <div style={{ height: "20px" }}></div>
                    <span>outerHTML:</span>
                    <output>{`${stateOuterHTML}`}</output>
                </div>
                <h3>Element.previousSibling</h3>
                <p>返回該元素的同層級的上一個節點</p>
                <h3>Element.nextSibling</h3>
                <p>返回該元素的同層級的下一個節點</p>
                <h3>Element.previousElementSibling</h3>
                <p>返回該元素的同層級的上一個元素</p>
                <h3>Element.nextElementSibling</h3>
                <p>返回該元素的同層級的下一個元素</p>
                <h3>Element.childNodes</h3>
                <p>返回該元素的子節點集合 (子節點集合包含其所有子節點的相關資訊)</p>
                <h3>Element.firstChild</h3>
                <p>返回該元素的第一個子節點</p>
                <h3>Element.lastChild</h3>
                <p>返回該元素的最後一個子節點</p>
                <h3>Element.firstElementChild</h3>
                <p>返回該元素的第一個子元素</p>
                <h3>Element.lastElementChild</h3>
                <p>返回該元素的最後一個子元素</p>
                <h3>Element.parentNode</h3>
                <p>返回該元素的父節點</p>
                <h3>Element.parentElement</h3>
                <p>返回該元素的父元素</p>
                <h2>function</h2>
                <h3>Element.cloneNode()</h3>
                <p>複製該元素的節點</p>
                <h3>Element.remove()</h3>
                <p>刪除該元素</p>
                <h3>Element.hasAttribute(key:string)</h3>
                <p>確認該元素是否含有指定屬性</p>
                <h3>Element.getAttribute(key:string)</h3>
                <p>返回該元素的指定屬性的值</p>
                <h3>Element.setAttribute(key:string, value:string)</h3>
                <p>對該元素添加指定屬性和值</p>
                <h3>Element.removeAttribute(key:string)</h3>
                <p>對該元素刪除指定屬性</p>
                <h3>Element.before(element:Node)</h3>
                <p>在該元素的同層級上方插入指定節點</p>
                <h3>Element.after(element:Node)</h3>
                <p>在該元素的同層級下方插入指定節點</p>
                <h3>Element.hasChildNodes()</h3>
                <p>確認該元素是否含有子節點</p>
                <h3>Element.appendChild(element:Node)</h3>
                <p>對該元素添加指定節點為子節點</p>
                <h3>Element.removeChild(element:Node)</h3>
                <p>對該元素刪除指定子節點</p>
                <h3>Element.cantains(element:Node)</h3>
                <p>確認該元素是否是指定對象的子節點</p>
                <div className="function-div">
                    <div id="Element">參考元素</div>
                    <hr />
                    <button onClick={() => {
                        let e = document.querySelector("#Element");
                        let p = document.createElement("p"); p.textContent = "新元素";
                        e.before(p);
                    }}>before</button>
                    <br />
                    <button onClick={() => {
                        let e = document.querySelector("#Element");
                        let p = document.createElement("p"); p.textContent = "新元素";
                        e.after(p);
                    }}>after</button>
                    <br />
                    <button onClick={() => {
                        let e = document.querySelector("#Element");
                        let p = document.createElement("p"); p.textContent = "子元素";
                        e.appendChild(p);
                    }}>appendChild</button>
                </div>
            </div>
        </div>
    );
}
export default JavaScriptElement;