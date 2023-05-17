import React from 'react';

function ReactHook(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Hook</h1>
                <h2>Hook是什麼</h2>
                <p>Hook稱為掛鉤，在React中是用於與React元件的生命週期掛勾的一種技術，</p>
                <p>React重新渲染意味著再次刷新元件內容，舊的元件內容會消失，其狀態無法保存，</p>
                <p>因此使用Hook的主要目的就在於對元件的狀態保留。</p>
                <h2>Hook使用限制</h2>
                <p>1.只能執行於React元件函式內部</p>
                <p>2.只能在元件函式的頂層調用</p>
                <p>3.不能有條件式</p>
            </div>
            <div className="flex content-div">
                <h1>useRef()</h1>
                <h2>功能</h2>
                <p>useRef()可用於保存數據，數據獨立於元件之外被保存於React內部，因此數據並不會隨著元件被重新渲染而消失，</p>
                <p>而數據以DOM位置做為參考依據，只要元件的DOM位置不變，就算元件經過重新渲染也會匹配相同的數據。</p>
                <p>useRef()最常用於保存React元件的DOM節點，因為React重新渲染的機制導致DOM節點的相關狀態很難保留，ex: EventListener</p>
                <p>因此需要透過useRef()將DOM節點保存住，並在每次React重新渲染時叫出這個固定的DOM節點。</p>
                <h2>用法</h2>
                <p>需要先<code>import {'{'} useRef {'}'} from 'react';</code>後才能使用。</p>
                <p>useRef()必須填入一個參數，參數可以是任意類型，參數值會做為數據的起始值。</p>
                <p>useRef()回傳一個{'{'} current:value {'}'}的Object類型，透過current可獲取數據。</p>
                <h2>範例</h2>
                <code>  </code>
                <code>  import {'{'} useRef {'}'} from 'react';</code>
                <code>  </code>
                <code>  function App() {'{'}</code>
                <code>  </code>
                <code>      const pp = useRef({'<'}p{'>'}你好{'<'}/p{'>'});</code>
                <code>  </code>
                <code>      return {'('}</code>
                <code>          {'<'}{'>'}</code>
                <code>          {'{'} pp.current {'}'}</code>
                <code>          {'<'} /{'>'}</code>
                <code>      {')'};</code>
                <code>  {'}'}</code>
                <code>  </code>
                <h2>陷阱</h2>
                <h3>丟失數據的可能</h3>
                <p>前面說到數據以DOM位置來匹配元件，因此只要DOM結構發生改變就可能導致元件丟失數據，以下說明幾種可能，</p>
                <p>1. 直接卸載元件，DOM位置隨之刪除，數據也刪除</p>
                <p>2. 卸載上層元件同時也會使其下層的子元件也會跟著被卸載，子元件的數據也刪除</p>
                <p>3. 在同個DOM位置更換不同元件，雖在同個DOM位置，但更換不同元件的這個行為已觸發到卸載操作，因此數據還是會刪除</p>
            </div>
            <div className="flex content-div">
                <h1>useState()</h1>
                <h2>功能</h2>
                <p>useState()和useRef()同樣可以保存數據，但另外增加了一個和React渲染掛勾的方法，每當執行方法時會觸發React重新渲染的同時改變數據，</p>
                <p>由於數據的改變會跟著重新渲染同步的特性使得useState()很適合用於元件保存和改變狀態。</p>
                <h2>用法</h2>
                <p>需要先<code>import {'{'} useState {'}'} from 'react';</code>後才能使用。</p>
                <p>useState()必須填入一個參數，參數可以是任意類型，參數值會做為數據的起始值。</p>
                <p>useState()回傳一個含有兩個值的Array類型，第一個值是狀態值(state)，</p>
                <p>第二個值是改變state同時也觸發React渲染的狀態設置函式(setState)，setState函式必須填入一個參數，state會變更為參數值。</p>
                <h2>範例</h2>
                <code>  </code>
                <code>  import {'{'} useState {'}'} from 'react';</code>
                <code>  </code>
                <code>  function App () {'{'}</code>
                <code>  </code>
                <code>      const [state, setState] = useState(null);</code>
                <code>  </code>
                <code>      return {'('}</code>
                <code>          {'<'}{'>'}</code>
                <code>          {'<'}input value={'{'}state{'}'} onChange={'{'}(event) ={'>'} {'{'} setState(event.target.value) {'}'}{'}'}{'>'}{'{'}state{'}'}{'<'}/input{'>'}</code>
                <code>          {'<'} /{'>'}</code>
                <code>      {')'};</code>
                <code>  {'}'}</code>
                <code>  </code>
                <p>以上例子是React中的{'<'}input{'>'}的常規作法，因為瀏覽器處理{'<'}input{'>'}的預設行為在React中並不管用。</p>
                <p>onChange監聽輸入事件，透過回傳參數event的target.value可獲取使用者輸入的值，</p>
                <p>將此值傳遞給setState以改變state值也同步改變中間內容和value值，觸發React渲染讓使用者看見輸入值的改變。</p>
                <h2>陷阱</h2>
                <h3>直接更改state的值</h3>
                <p>應該將state視為一個已讀的變數不直接對其更改，因為直接更改state的值並不會觸發React渲染，因此雖然state的值已改變但網頁並不會更新。</p>
                <h3>Object類型的state</h3>
                <p>如果state是Object類型的<code>const [state, setState] = useState({'{'} a: 1, b:"你好" {'}'})</code></p>
                <p>若要單獨更改state其中的一個值，不能這麼做<code>setState({'{'} a: 2 {'}'})</code></p>
                <p>應使用特殊語法複製state的Object鏡像後再更改其中的值<code>setState({'{'} ...state, a: 2 {'}'})</code></p>
            </div>
            <div className="flex content-div">
                <h1>useEffect()</h1>
                <h2>功能</h2>
                <p>useEffect()函式在每次React渲染完成後會執行，因此適合用於處理副作用，</p>
                <p>渲染React元件的HTML內容的行為應該要是純淨的JSX計算，像改變DOM結構或添加移除屬性等等會給元件的JSX計算造成影響的破壞性行為統稱為副作用。</p>
                <h2>用法</h2>
                <p>需要先<code>import {'{'} useEffect {'}'} from 'react';</code>後才能使用。</p>
                <p>useEffect()含有兩個參數，參數1是函式類型，參數2是Array類型(可選)。</p>
                <p>每次React渲染完成後會執行參數1的函式，等同是callback函式 (!!是渲染完成後才執行!!)</p>
                <p>由於每次React渲染完成後都會執行，因此如果參數1函式也觸發了React渲染，這會導致無限渲染的死循環，</p>
                <p>而參數2就是用於限制參數1函式的執行，只要參數2陣列內的所有值在渲染前渲染後都沒有改變，則參數1函式不會執行。</p>
                <p>(!!參數2設置為空陣列[]，這代表只有在掛載元件時會執行，因此非常適合用於初始化任務!!)</p>
                <h2>清理機制</h2>
                <p>useEffect()具有清理機制，參數1函式可以return一個函式用於清理，這個清理函式會在下次useEffect()參數1函式執行前或是元件被刪除前先執行。</p>
                <p>首先需知道在嚴格模式下開發React，重新渲染總是會執行兩次，這是React有意為之的壓力測試，為了使開發者解決重複渲染可能造成的BUG，</p>
                <p>很多useEffect()所處理的副作用任務是具有不穩定性的，重複渲染可能會產生意外行為，這些問題就是要交由清理函式來解決。</p>
                <h2>範例</h2>
                <code>  </code>
                <code>  import {'{'} useEffect, useState {'}'} from 'react';</code>
                <code>  </code>
                <code>  function App () {'{'}</code>
                <code>  </code>
                <code>      const [state, setState] = useState(0);</code>
                <code>  </code>
                <code>      function Foo() {'{'}</code>
                <code>          console.log("你好");</code>
                <code>          setState(state + 1);</code>
                <code>      {'}'}</code>
                <code>  </code>
                <code>      useEffect(() ={'>'} {'{'}</code>
                <code>          console.log("再見");</code>
                <code>          return () ={'>'} {'{'}</code>
                <code>              console.log("等等");</code>
                <code>          {'}'};</code>
                <code>      {'}'},[state]);</code>
                <code>  </code>
                <code>      return {'('}</code>
                <code>          {'<'}{'>'}</code>
                <code>          {'<'}p{'>'}{'{'}Foo(){'}'}{'<'}/p{'>'}</code>
                <code>          {'<'} /{'>'}</code>
                <code>      {')'};</code>
                <code>  {'}'}</code>
                <code>  </code>
                <p>以上例子，第一次執行Foo函式得到 "你好"{'>'}"再見"，而第二次以後執行得到 "你好"{'>'}"等等"{'>'}"再見"</p>
            </div>
        </div>
    );
}
export default ReactHook;