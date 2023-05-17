import React from 'react';

function CSSDeclaration(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>聲明(Declaration)</h1>
                <p>聲明用來表示對HTML元素所要設置的樣式修改。</p>
                <p>一條聲明由一個特性(property)和對應的值(value)組成，聲明之間以;分隔。</p>
            </div>
            <div className="flex content-div">
                <h1>特性</h1>
                <h2>佈局相關特性</h2>
                <h3>display</h3>
                <p>元素的佈局類型</p>
                <h3>position</h3>
                <p>元素的參考位置</p>
                <h3>top</h3>
                <p>元素與最上方之間的距離</p>
                <h3>bottom</h3>
                <p>元素與最下方之間的距離</p>
                <h3>left</h3>
                <p>元素與最左方之間的距離</p>
                <h3>right</h3>
                <p>元素與最右方之間的距離</p>

                <h2>Flex彈性盒相關特性</h2>
                <p>需要先設置display: flex</p>
                <h3>flex-direction</h3>
                <p>彈性盒的排列方向</p>
                <h3>flex-wrap</h3>
                <p>彈性盒的跨行設定</p>
                <h3>justify-content</h3>
                <p>項目與彈性盒排列方向的對齊設定(方向參考行列本身的方向)</p>
                <h3>justify-self</h3>
                <p>和justify-content一樣但只針對項目自身</p>
                <h3>align-items</h3>
                <p>項目與行列垂直方向的對齊設定(方向參考與行列相對的方向)</p>
                <h3>align-self</h3>
                <p>和align-items一樣但只針對項目自身</p>

                <h2>盒模型相關特性</h2>
                <h3>width</h3>
                <p>內容空間的寬度</p>
                <h3>height</h3>
                <p>內容空間的高度</p>
                <h3>max-width</h3>
                <p>內容空間的最大寬度(內容超過該範圍預設會顯示滑動條可滑動移動範圍)</p>
                <h3>max-height</h3>
                <p>內容空間的最大高度(內容超過該範圍預設會顯示滑動條可滑動移動範圍)</p>
                <h3>padding</h3>
                <p>填充空間的寬度(四方位都可以指定)</p>
                <h3>border-style</h3>
                <p>邊框的樣式(需設置該特性才能顯示邊框)</p>
                <h3>border-width</h3>
                <p>邊框的粗細(四方位都可以指定)</p>
                <h3>border-radius</h3>
                <p>邊框的頂點設置為圓角</p>
                <h3>border-color</h3>
                <p>邊框的顏色</p>
                <h3>margin</h3>
                <p>邊界的寬度(四方位都可以指定)，(兩個元素之間的margin邊緣預設是緊鄰的)</p>
                <h3>outline-style</h3>
                <p>輪廓線的樣式(需設置該特性才能顯示輪廓線)(輪廓線和border差不多但是跟盒模型無關是獨立出來的線條)</p>
                <h3>outline-width</h3>
                <p>輪廓線的粗細</p>
                <h3>outline-offset</h3>
                <p>輪廓線和邊框之間的距離</p>
                <h3>outline-color</h3>
                <p>輪廓線的顏色</p>

                <h2>盒模型額外相關特性</h2>
                <h3>overflow</h3>
                <p>內容溢出時的處理設定</p>
                <h3>resize</h3>
                <p>此元素是否可以被使用者任意調整大小</p>
                <h3>cursor</h3>
                <p>滑鼠懸浮在該元素上時顯示的圖示</p>

                <h2>背景相關特性</h2>
                <h3>opacity</h3>
                <p>透明度</p>
                <h3>background-color</h3>
                <p>背景的顏色</p>
                <h3>background-image: url()</h3>
                <p>背景嵌入圖片</p>
                <h3>background-repeat</h3>
                <p>背景圖片的延伸填滿設定</p>
                <h3>object-fit</h3>
                <p>背景圖片和內容空間的關聯設定</p>
                <h3>object-position</h3>
                <p>圖片如被裁切，圖片中心座標的調整設定</p>
                <h3>background-attachment</h3>
                <p>背景圖片與頁面滾動的關聯設定</p>

                <h2>文字相關特性</h2>
                <h3>color</h3>
                <p>內容文字的顏色</p>
                <h3>text-align</h3>
                <p>文字的水平對齊設定</p>
                <h3>text-indent</h3>
                <p>首行的縮排距離</p>
                <h3>letter-spacing</h3>
                <p>文字間距</p>
                <h3>word-spacing</h3>
                <p>單字間距(用空格隔開來辨別單字)</p>
                <h3>line-height</h3>
                <p>行距</p>
                <h3>white-space</h3>
                <p>對空白字元的的處理設定</p>
                <h3>word-break</h3>
                <p>文字到行尾的設定</p>
                <h3>text-transform</h3>
                <p>英文字母的大小寫設定</p>
                <h3>text-decoration-line</h3>
                <p>裝飾線的類型</p>
                <h3>text-decoration-style</h3>
                <p>裝飾線的樣式</p>
                <h3>text-decoration-thickness</h3>
                <p>裝飾線的粗細</p>
                <h3>text-decoration-color</h3>
                <p>裝飾線的顏色</p>
                <h3>text-shadow</h3>
                <p>文字的陰影設定(一次設置四個值，分別對應:橫向偏移、垂直偏移、模糊程度、顏色)</p>
                <h3>user-select</h3>
                <p>設置文字是否可以被滑鼠框選</p>

                <h2>字體相關特性</h2>
                <h3>font-family</h3>
                <p>使用的字體包(最多設置三個值，作為備用確保瀏覽器能支援到字體)</p>
                <h3>font-size</h3>
                <p>字體尺寸</p>
                <h3>font-weight</h3>
                <p>字體的粗細</p>
                <h3>font-style</h3>
                <p>字體的樣式設定</p>
                <h3>@font-face {'{'}font-family: 自訂字體名稱; src: url(); {'}'}</h3>
                <p>特殊函式，引用字體包(若是用戶端無該字體包，瀏覽器會自動下載該字體包)</p>

                <h2>列表相關特性</h2>
                <h3>list-style-type</h3>
                <p>列表的標記圖示</p>
                <h3>list-style-image: url("");</h3>
                <p>列表的標記圖示使用圖片</p>
                <h3>list-style-position</h3>
                <p>標記圖示的位置設定(位置在內部會推擠到文字)</p>

                <h2>狀態過渡相關特性</h2>
                <h3>transition-delay</h3>
                <p>延遲指定秒數後執行(單位s=秒)</p>
                <h3>transition-timing-function</h3>
                <p>過渡的速度曲線設定</p>
                <h3>transition-duration</h3>
                <p>完成過渡的總時長(單位s=秒)</p>

                <h2>動畫相關特性</h2>
                <h3>@keyframes AnimationName {'{'}0% {'{'} {'}'} 50%{'{'} {'}'} 100%{'{'} {'}'} {'}'}</h3>
                <p>特殊函式，創建動畫(聲明塊內可以聲明比例單位的聲明塊，代表動畫執行時間的比例)</p>
                <h3>animation-name</h3>
                <p>播放指定名稱的動畫</p>
                <h3>animation-delay</h3>
                <p>延遲指定秒數後播放(單位s=秒)</p>
                <h3>animation-timing-function</h3>
                <p>動畫播放的速度曲線設定</p>
                <h3>animation-duration</h3>
                <p>完成播放的總時長(單位s=秒)</p>
                <h3>animation-iteration-count</h3>
                <p>動畫播放的次數</p>
                <h3>animation-fill-mode</h3>
                <p>動畫播放完的狀態設定</p>
            </div>
        </div>
    );
}
export default CSSDeclaration;