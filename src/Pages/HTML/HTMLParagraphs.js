import React from 'react';

function HTMLParagraphs(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>段落元素</h1>
                <p>段落元素用來處理網頁的段落之間的排版。</p>
            </div>
            <div className="flex content-div">
                <h1>Div</h1>
                <p>Div用來建立一個空的block區塊，是網頁最常用的元素。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <div style={{ borderStyle: "solid" }}>div</div>
                        <div style={{ borderStyle: "solid" }}>div</div>
                        <div style={{ borderStyle: "solid" }}>div</div>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>Span</h1>
                <p>Span用來建立一個空的inline區塊。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ borderStyle: "solid" }}>span</span>
                        <span style={{ borderStyle: "solid" }}>span</span>
                        <span style={{ borderStyle: "solid" }}>span</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>h1</h1>
                <p>h1用來建立一個最大的一級標題，h6是最小的標題。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <h1 style={{ borderStyle: "solid" }}>h1 一級標題</h1>
                        <h2 style={{ borderStyle: "solid" }}>h2 二級標題</h2>
                        <h3 style={{ borderStyle: "solid" }}>h3 三級標題</h3>
                        <h4 style={{ borderStyle: "solid" }}>h4 四級標題</h4>
                        <h5 style={{ borderStyle: "solid" }}>h5 五級標題</h5>
                        <h6 style={{ borderStyle: "solid" }}>h6 六級標題</h6>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>p</h1>
                <p>p用來建立一個文字內容段落。</p>
                <p>(p元素並非inline區塊而是block區塊，因此中間內容的跨行並沒有意義)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <p style={{ borderStyle: "solid" }}>第一段文字</p>
                        <p style={{ borderStyle: "solid" }}>第二段文字</p>
                        <p style={{ borderStyle: "solid" }}>第三段文字</p>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>pre</h1>
                <p>pre用來建立一個與程式碼區塊相同排版的文字內容段落。</p>
            </div>
            <div className="flex content-div">
                <h1>br</h1>
                <p>br用來跨行，適用於兩個span區塊的分隔。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ borderStyle: "solid" }}>span區塊</span>
                        <br />
                        <span style={{ borderStyle: "solid" }}>span區塊</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>hr</h1>
                <p>hr用來跨行，且會繪製一條線條。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <span style={{ borderStyle: "solid" }}>span區塊</span>
                        <hr />
                        <span style={{ borderStyle: "solid" }}>span區塊</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>details & summary</h1>
                <h3>details</h3>
                <p>建立一個細節欄，細節欄帶有一個箭頭UI的按鈕，按下就會展開隱藏的欄位，再次按下就會收回欄位。</p>
                <p>(open屬性可設置details元素是展開狀態)</p>
                <h3>summary</h3>
                <p>設置細節欄的名稱，此元素必須作為details的子元素使用</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <details style={{ borderStyle: "solid" }}>
                            <summary>Bury the Light</summary>
                            <p style={{ fontSize: "30px" }}>
                                I am the storm that is approaching.
                                Provoking black clouds in isolation.
                                I am reclaimer of my name.
                                Born in flames, I have been blessed.
                                My family crest is a demon of death.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HTMLParagraphs;