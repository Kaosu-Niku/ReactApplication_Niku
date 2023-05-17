import React from 'react';

function ReactTrap(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>React陷阱</h1>
                <p>此處介紹React開發中可能接觸的各種陷阱。</p>
            </div>
            <div className="flex content-div">
                <h1>EventListener</h1>
                <p>React元件必須將添加與移除EventListener的行為交由useEffect()的Hook處理，</p>
                <p>並且removeEventListener()需要經由useEffect()的清理函式來執行，</p>
                <p>因為如果沒有先經過清理函式先移除已有的事件監聽器，重新渲染後如果再次執行添加事件聽器，</p>
                <p>這時會有兩個重複的事件監聽器，所以必須確保每次重新渲染時都是乾淨的無事件狀態無論是否有添加。</p>
                <h3>原生開發方式</h3>
                <code>  </code>
                <code>HTML:</code>
                <code>  </code>
                <code>  {'<'}body{'>'}</code>
                <code>      {'<'}p id="test"{'>'}{'<'}/p{'>'}</code>
                <code>      {'<'}button id="add"{'>'}{'<'}/button{'>'}</code>
                <code>      {'<'}button id="remove"{'>'}{'<'}/button{'>'}</code>
                <code>      {'<'}script src="JavaScript.js"{'>'}{'<'}/script{'>'}</code>
                <code>  {'<'}/body{'>'}</code>
                <code>  </code>
                <code>JavaScript:</code>
                <code>  </code>
                <code>  function doSomething(){'{'} {'}'}</code>
                <code>  const testP = document.querySelector("#test");</code>
                <code>  document.querySelector("#add").addEventListener("click", () ={'>'} {'{'} testP.addEventListener("click", doSomething); {'}'});</code>
                <code>  document.querySelector("#remove").addEventListener("click", () ={'>'} {'{'} testP.removeEventListener("click", doSomething); {'}'});</code>
                <code>  </code>
                <h3>React開發方式</h3>
                <code>  </code>
                <code>  function App(){'{'}</code>
                <code>  </code>
                <code>      function doSomething() {'{'} {'}'}</code>
                <code>  </code>
                <code>      const [testP, setTestP] = useState();</code>
                <code>  </code>
                <code>      useEffect(() ={'>'} {'{'} setTestP(document.querySelector("#test")); {'}'}, [testP]);</code>
                <code>  </code>
                <code>      const [foo, setFoo] = useState(false);</code>
                <code>  </code>
                <code>      useEffect(() ={'>'} {'{'}</code>
                <code>          if(foo === true) testP.addEventListener("click",doSomething);</code>
                <code>          return () ={'>'} {'{'}</code>
                <code>              testP.removeEventListener("click", doSomething);</code>
                <code>          {'}'}</code>
                <code>      {'}'}, [foo]);</code>
                <code>      </code>
                <code>      return(</code>
                <code>          {'<'}{'>'}</code>
                <code>          {'<'}p id="test"{'>'}{'<'}/p{'>'}</code>
                <code>          {'<'}button onClick={'{'} setFoo(true); {'}'}{'>'}{'<'}/button{'>'}</code>
                <code>          {'<'}button{'>'}{'<'}/button{'>'}</code>
                <code>          {'<'} /{'>'}</code>
                <code>      );</code>
                <code>  {'}'}</code>
                <code>  </code>
            </div>
        </div>
    );
}
export default ReactTrap;