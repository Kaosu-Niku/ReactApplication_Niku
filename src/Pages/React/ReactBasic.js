import React from 'react';

function ReactBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>React是什麼</h1>
                <p>React是一個運用AJAX技術的JavaScript的函式庫，是當前主流的用於前端開發網頁UI介面的前端框架，</p>
                <h2>AJAX是什麼</h2>
                <p>AJAX是一個網頁技術，其技術基底實現於JavaScript的XMLHttpRequest對象，</p>
                <p>AJAX可以實現更好的網頁運作，主要有以下幾點，</p>
                <p>1. 不觸發網頁重新加載的情況下變更網頁的內容</p>
                <p>2. 向伺服器讀取和發送數據</p>
                <h2>React概念。</h2>
                <h3>元件式開發</h3>
                <p>React以元件為基礎，將HTML內容包裝成一個個元件，並以多個元件的互相組合構成整個網頁內容，透過掛載或卸載元件可以靈活的改變網頁結構。</p>
                <h3>React DOM</h3>
                <p>React使用自己的DOM，以特殊算法來計算元件渲染結果，並更新瀏覽器DOM呈現對應的渲染結果，React的特殊算法可節省許多不必要的渲染效能損耗。</p>
            </div>
            <div className="flex content-div">
                <h1>React應用程式</h1>
                <h2>建構React應用程式</h2>
                <p>1. 安裝Node.js <a href="https://nodejs.org/en/">Node.js官網</a></p>
                <p>2. CMD執行<code>npx create-react-app [自訂名稱]</code>即可建構一個React應用程式</p>
                <h2>相關指令</h2>
                <h3>npm start</h3>
                <p>啟動應用程式</p>
                <h3>npm run build</h3>
                <p>將應用程序捆綁到靜態文件中。</p>
                <h3>npm test</h3>
                <p>啟動測試運行器</p>
                <h2>React檔案結構解析</h2>
                <p>建構React應用程式後會於路徑下新增一個自訂名稱的資料夾，裡面含有應用程式的內容以及連帶安裝的模塊。</p>
                <p>public資料夾內的index.html和src資料夾內的index.js是React應用程式預設執行的HTML主文件和JS文件，</p>
                <p>React的運作原理是通過掛載或卸載元件或改變元件狀態觸發對一個HTML主文件重新渲染重新呈現新的網頁狀態內容，</p>
                <p>因此使用React開發相比於原生的開發方式，可省去了大量的重複性內容，還使得開發效率和維護性都大幅提升。</p>
                <p>index.js已經預設使用了一個範例元件App.js，在啟動一個預設的React應用程式時見到的初始網頁內容就是App.js的內容。</p>
            </div>
            <div className="flex content-div">
                <h1>開發環境測試</h1>
                <h2>運行模擬頁面</h2>
                <p>CMD運行<code>npm start</code>，稍後會自動於瀏覽器開啟"http://localhost:3000/"的模擬React頁面，</p>
                <p>npm start命令所顯示的React頁面是模擬運行所呈現的，是為了方便開發者查看方便開發，</p>
                <h2>proxy代理設置</h2>
                <p>開發環境中要測試React應用程式向不同端口的伺服器端發送HTTP請求，由於React應用程式和伺服器兩者處於不同的端口，</p>
                <p>因此React應用程式需要設置url代理，透過代理發送請求給伺服器。</p>
                <p>對React應用程式路徑下的package.json檔案添加內容<code>"proxy":"http://localhost:[server port]/"</code></p>
                <p>如此當React應用程式在發送HTTP請求時會以proxy的路徑作為預設路徑參考。</p>
                <p>(!!proxy代理功能只能在開發環境中用於測試，在實際部屬網站時需將proxy移除，否則會產生問題!!)</p>
            </div>
            <div className="flex content-div">
                <h1>打包靜態文件</h1>
                <h2>打包</h2>
                <p>開發環境的React檔案實際上不能直接使用，必須經過打包成靜態文件後才能將靜態文件交由瀏覽器或是伺服器使用，</p>
                <p>CMD運行<code>npm run build</code>即可運行React內建的打包流程，打包完成後於同路徑下新增一個build資料夾</p>
                <p>build資料夾下包含的就是打包完的靜態文件，build資料夾下的index.html文件就是要提供給瀏覽器或是伺服器的HTML靜態文件，</p>
                <p>查看index.html靜態文件的內容可以發現該文件引用了一個CSS文件和JS文件，這兩個文件是React應用程式所有的CSS和JS內容經過集合打包產生的靜態文件，</p>
                <p>因此只需要這三個靜態文件即可完整運行React應用程式的所有內容，但index.html還無法直接取得這兩個靜態文件，</p>
                <p>除了伺服器端在根路徑"/"回應index.html文件的同持，也需要根據index.html的請求路徑回應兩個相應的靜態文件</p>
                <p>(!!每一次重新打包，只要CSS或JS的內容有改變，則產生的靜態文件其名稱以及index.html的請求路徑都會改變，因此伺服器端也需要更新!!)</p>
            </div>
        </div >
    );
}
export default ReactBasic;