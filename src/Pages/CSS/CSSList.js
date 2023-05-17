import React from 'react';

function CSSList(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>列表(List)</h1>
            </div>
            <div className="flex content-div">
                <h1>list-style-type</h1>
                <p>設置列表的標記圖示的圖案</p>
                <h3>disc</h3>
                <p>實心圓</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "disc" }}>disc</li>
                            <li style={{ listStyleType: "disc" }}>disc</li>
                            <li style={{ listStyleType: "disc" }}>disc</li>
                        </ul>
                    </div>
                </div>
                <h3>circle</h3>
                <p>空心圓</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "circle" }}>circle</li>
                            <li style={{ listStyleType: "circle" }}>circle</li>
                            <li style={{ listStyleType: "circle" }}>circle</li>
                        </ul>
                    </div>
                </div>
                <h3>square</h3>
                <p>方塊</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "square" }}>square</li>
                            <li style={{ listStyleType: "square" }}>square</li>
                            <li style={{ listStyleType: "square" }}>square</li>
                        </ul>
                    </div>
                </div>
                <h3>decimal</h3>
                <p>數字</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "decimal" }}>decimal</li>
                            <li style={{ listStyleType: "decimal" }}>decimal</li>
                            <li style={{ listStyleType: "decimal" }}>decimal</li>
                        </ul>
                    </div>
                </div>
                <h3>decimal-leading-zero</h3>
                <p>帶有零的數字</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "decimal-leading-zero" }}>decimal-leading-zero</li>
                            <li style={{ listStyleType: "decimal-leading-zero" }}>decimal-leading-zero</li>
                            <li style={{ listStyleType: "decimal-leading-zero" }}>decimal-leading-zero</li>
                        </ul>
                    </div>
                </div>
                <h3>lower-latin</h3>
                <p>小寫英文字母</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "lower-latin" }}>lower-latin</li>
                            <li style={{ listStyleType: "lower-latin" }}>lower-latin</li>
                            <li style={{ listStyleType: "lower-latin" }}>lower-latin</li>
                        </ul>
                    </div>
                </div>
                <h3>upper-latin</h3>
                <p>大寫英文字母</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "upper-latin" }}>upper-latin</li>
                            <li style={{ listStyleType: "upper-latin" }}>upper-latin</li>
                            <li style={{ listStyleType: "upper-latin" }}>upper-latin</li>
                        </ul>
                    </div>
                </div>
                <h3>lower-roman</h3>
                <p>小寫羅馬數字</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "lower-roman" }}>lower-roman</li>
                            <li style={{ listStyleType: "lower-roman" }}>lower-roman</li>
                            <li style={{ listStyleType: "lower-roman" }}>lower-roman</li>
                        </ul>
                    </div>
                </div>
                <h3>upper-roman</h3>
                <p>大寫羅馬數字</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "upper-roman" }}>upper-roman</li>
                            <li style={{ listStyleType: "upper-roman" }}>upper-roman</li>
                            <li style={{ listStyleType: "upper-roman" }}>upper-roman</li>
                        </ul>
                    </div>
                </div>
                <h3>lower-greek</h3>
                <p>小寫希臘字母</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ marginLeft: "50px" }}>
                            <li style={{ listStyleType: "lower-greek" }}>lower-greek</li>
                            <li style={{ listStyleType: "lower-greek" }}>lower-greek</li>
                            <li style={{ listStyleType: "lower-greek" }}>lower-greek</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>list-style-image</h1>
                <p>列表的標記圖示嵌入圖片</p>
                <p>由於嵌入的圖片會按照圖片原尺寸的大小且無法修改。因此想要針對該方面做修改建議使用以下方式。</p>
                <p>移除所有&ltli&gt原本的圖案，並在每個&ltli&gt前方加上一個&ltimg&gt。</p>
            </div>
            <div className="flex content-div">
                <h1>list-style-position</h1>
                <p>列表的標記圖示在外部還是內部</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <ul style={{ width: "10%", marginLeft: "50px", listStylePosition: "outside" }}>
                            <li style={{ borderStyle: "solid", listStyleType: "disc" }}>outside</li>
                            <li style={{ borderStyle: "solid", listStyleType: "disc" }}>outside</li>
                            <li style={{ borderStyle: "solid", listStyleType: "disc" }}>outside</li>
                        </ul>
                        <ul style={{ width: "10%", marginLeft: "50px", listStylePosition: "inside" }}>
                            <li style={{ borderStyle: "solid", listStyleType: "disc" }}>inside</li>
                            <li style={{ borderStyle: "solid", listStyleType: "disc" }}>inside</li>
                            <li style={{ borderStyle: "solid", listStyleType: "disc" }}>inside</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CSSList;