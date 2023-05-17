import React from 'react';

function HTMLImage(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Image</h1>
            </div>
            <div className="flex content-div">
                <h1>img</h1>
                <p>專用於嵌入圖片格式的資源</p>
                <p>使用src屬性指定要嵌入的圖片資源。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <img src="/Asset/Image/Icon.png" style={{ width: "250px", height: "250px;" }} alt="" />
                    </div>
                </div>
                <p>使用alt屬性設置圖片嵌入失敗時替代顯示的文本。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <img src="" alt="圖片顯示失敗" />
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>map & area</h1>
                <h3>map</h3>
                <p>建立圖像映射(滑鼠點擊可以回饋的區域)。</p>
                <p>使用name屬性設置連結命名(要和&lt;img&gt;連結)</p>
                <p>(img元素必須使用usemap屬性設置要連結的map的name屬性名稱[前方要加上#])</p>
                <h3>area</h3>
                <p>建立映射區域，此元素必須作為map的子元素使用。</p>
                <p>使用href屬性設置要開啟的URL。</p>
                <p>使用sharp屬性設置映區域的形狀。</p>
                <p>使用coords屬性設置映射區域的詳細座標。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <img src="/Asset/Image/Icon.png" style={{ width: "250px", height: "250px;" }} usemap="#TestMap" alt="" />
                        <map name="TestMap">
                            <area herf="/" target="_blank" shape="rect" coords="0,0,250,250" alt="" />
                        </map>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HTMLImage;