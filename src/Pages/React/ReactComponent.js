import React from 'react';

function ReactComponent(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Component</h1>
                <h2>功能</h2>
                <p>一個React元件由一個導出HTML內容的JS腳本構成，使用JSX語法&lt; /&gt;掛載元件並觸發React渲染出該元件的HTML內容。</p>
                <h2>範例</h2>
                <h3>創建元件</h3>
                <p>(!!導出的命名首個英文字母必須是大寫，這是JSX語法的規範，JSX會將小寫識別為原生的HTML元素，大寫識別為元件!!)</p>
                <p>(如果元件要調用CSS樣式，只需添加<code>import "./檔案.css"</code>)</p>
                <code>  </code>
                <code>App.js:</code>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  </code>
                <code>  function Component() {"{"}</code>
                <code>      return {"("}</code>
                <code>          &lt;&gt;</code>
                <code>          &lt;p&gt;你好&lt;/p&gt;</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
                <code>  export default App;</code>
                <code>  </code>
                <h3>父元件掛載元件</h3>
                <code>  </code>
                <code>Parent.js:</code>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  import App from './App';</code>
                <code>  </code>
                <code>  function Parent() {"{"}</code>
                <code>      return {"("}</code>
                <code>          &lt;&gt;</code>
                <code>          &lt;App /&gt;</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
                <p>該例子產生一行內容為"你好"的文字</p>
            </div>
            <div className="flex content-div">
                <h1>map()</h1>
                <h2>功能</h2>
                <p>map()函式用於陣列，需填入一個參數，參數為帶有一個回調參數的函式類型</p>
                <code>  </code>
                <code>let ar = ["你好","謝謝","再見"];</code>
                <code>ar.map((param) =&gt; {"{"} {"}"});</code>
                <code>  </code>
                <p>map()函式用於遍歷陣列，依據陣列的長度執行同等次數的函式，而回調參數param代表遍歷的當前陣列值。</p>
                <p>因此這個特性使得map()很適合搭配React用於一次掛載多個元件。</p>
                <h2>範例</h2>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  </code>
                <code>  let ar = ["你好","謝謝","再見"];</code>
                <code>  </code>
                <code>  function App() {"{"}</code>
                <code>      return {"("}</code>
                <code>          &lt;&gt;</code>
                <code>          ar.map((param) =&gt; {"{"}</code>
                <code>              &lt;p&gt;{"{"}param{"}"}&lt;/p&gt;</code>
                <code>          {"}"});</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
                <p>該例子產生三行內容，內容分別為"你好"、"謝謝"、"再見"</p>
            </div>
            <div className="flex content-div">
                <h1>key</h1>
                <h2>功能</h2>
                <p>在理解key的用法前，需要先理解React渲染機制，</p>
                <p>上面提到的map()只是簡化了掛載多個元件的流程，這些元件依然都是佔據獨立的DOM位置，</p>
                <p>以陣列[A,B,C]為例，透過map()掛載三個元件，</p>
                <p>將陣列改為[A,B,C,D]，React計算得出前面ABC元件不變，在C元件後面新增D元件，這個結果對於ABC元件不產生影響，</p>
                <p>但是改為[Z,A,B,C]，React計算得出原本同個DOM位置的A元件已改變為Z元件，後面的元件同樣都改變，這會觸發卸載機制，</p>
                <p>結果是原本的ABC元件都被卸載，React重新掛載了新的ZABC四個元件，</p>
                <p>因此需要有能夠獨立辨識每一個元件的功能，而並非只以DOM位置來辨識元件，而這就是key的功能，</p>
                <p>使用key的元件會被React記住，key元件不論在任何DOM位置都能被React辨識。</p>
                <p>(!!key不是全局變量，作用範圍只限於同個元件!!)</p>
                <h2>範例</h2>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  </code>
                <code>  let ar = ["你好","謝謝","再見"];</code>
                <code>  </code>
                <code>  function App() {"{"}</code>
                <code>      return {"("}</code>
                <code>          &lt;&gt;</code>
                <code>          ar.map((param) =&gt; {"{"}</code>
                <code>              &lt;p key={"{"}param{"}"}&gt;{"{"}param{"}"}&lt;/p&gt;</code>
                <code>          {"}"});</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
            </div>
            <div className="flex content-div">
                <h1>props</h1>
                <h2>功能</h2>
                <p>props用於讓父元件在掛載子元件的同時向其傳遞數據，props可任意添加成員，</p>
                <p>父元件對子元件指定props成員和其數值以此將數據傳遞給子元件，而子元件可存取props本身或特定的props成員從而獲取數據，</p>
                <p>父元件對子元件指定props成員的方式如同HTML設置屬性的方式。</p>
                <h2>範例</h2>
                <h3>父元件傳遞數據</h3>
                <code>  </code>
                <code>Parent.js:</code>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  import Child from './Child';</code>
                <code>  </code>
                <code>  function Parent() {"{"}</code>
                <code>      return {"("}</code>
                <code>          &lt;&gt;</code>
                <code>          &lt;Child nnn="你好" /&gt;</code>
                <code>          &lt;Child nnn="再見" /&gt;</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
                <h3>子元件讀取數據</h3>
                <code>  </code>
                <code>Child.js:</code>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  </code>
                <code>  function Child({"{"}nnn{"}"}) {"{"}</code>
                <code>      return {"("}</code>
                <code>          &lt;&gt;</code>
                <code>          &lt;p&gt;{"{"}nnn{"}"}&lt;/p&gt;</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
                <code>  export default Child;</code>
                <code>  </code>
                <p>該例子產生兩行內容，內容分別為"你好"、"再見"</p>
            </div>
            <div className="flex content-div">
                <h1>context元件</h1>
                <h2>功能</h2>
                <p>上面提到props可以讓父元件在掛載子元件的同時向其傳遞數據，但是這範圍僅限於父子層級，</p>
                <p>如果是到孫輩以下的層級，則父元件傳遞數據給子元件的同時，子元件也需在掛載孫元件的同時再傳遞同樣的數據，</p>
                <p>這個情況被稱為prop drilling，所以需要有父元件能夠跨越層級傳遞數據的方法，而這個方法就是context元件。</p>
                <h2>用法</h2>
                <p>需要先<code>import {"{"} createContext {"}"} from 'react';</code>後才能使用。</p>
                <p>createContext()用於創建context元件，context元件同為React元件，因此同樣可以使用&lt; /&gt;掛載，</p>
                <p>createContext()回傳一個一個含有兩個成員的Object類型，第一個成員用於傳遞value(Provider)，第二個成員用於接收value(Consumer)，</p>
                <p>包含在context.Provider元件內的所有子輩以下的元件都可以透過context.Consumer元件獲取value。</p>
                <h2>範例</h2>
                <h3>父元件創建context元件，並透過context.Provider元件傳遞value</h3>
                <code>  </code>
                <code>Parent.js:</code>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  import {"{"} createContext {"}"} from 'react';</code>
                <code>  import Child from './Child';</code>
                <code>  </code>
                <code>  const MyContext = createContext();</code>
                <code>  {"//"} myContext = {"{"}Provider, Consumer{"}"}</code>
                <code>  </code>
                <code>  let a = "你好";</code>
                <code>  </code>
                <code>  function Parent.js() {"{"}</code>
                <code>      return {"()"}</code>
                <code>          &lt;&gt;</code>
                <code>          &lt;MyContext.Provider value={"{"}a{"}"}&gt;</code>
                <code>          &lt;Child /&gt;</code>
                <code>          &lt;/MyContext.Provider&gt;</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
                <code>Child.js:</code>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  import Grandson from './Grandson';</code>
                <code>  </code>
                <code>  function Child.js() {"{"}</code>
                <code>      return {"("}</code>
                <code>          &lt;&gt;</code>
                <code>          &lt;Grandson /&gt;</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
                <code>  export default Child;</code>
                <code>  </code>
                <h3>孫元件透過context.Consumer元件取得value</h3>
                <code>  </code>
                <code>Grandson.js:</code>
                <code>  </code>
                <code>  import React from 'react';</code>
                <code>  </code>
                <code>  function Grandson() {"{"}</code>
                <code>      return {"("}</code>
                <code>          &lt;&gt;</code>
                <code>          &lt;MyContext.Consumer&gt;</code>
                <code>          &lt;p&gt;{"{"}a{"}"}&lt;/p&gt;</code>
                <code>          &lt;/MyContext.Consumer&gt;</code>
                <code>          &lt; /&gt;</code>
                <code>      {")"};</code>
                <code>  {"}"}</code>
                <code>  </code>
                <code>  export default Grandson;</code>
                <code>  </code>
            </div>
        </div>
    );
}
export default ReactComponent;