import React from 'react';

function CSSFlex(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>彈性盒(Flex)</h1>
                <p>彈性盒是盒模型的一種類型，使用 display:flex 改變盒模型為彈性盒類型。</p>
                <p>彈性盒內的所有項目(子元素)在網頁上會以橫向或垂直的排列，且這些項目可以任意改變寬高，表現行為如同inline-block。</p>
                <p>以橫向排列為例，彈性盒的寬度預設是佔滿一行，高度取決於高度最高的項目。</p>
            </div>
            <div className="flex content-div">
                <h1>flex-direction</h1>
                <p>彈性盒的排列方向</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>橫向排列的彈性盒</p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <span style={{ borderStyle: "solid" }}>row</span>
                        <span style={{ borderStyle: "solid" }}>row</span>
                        <span style={{ borderStyle: "solid" }}>row</span>
                    </div>
                    <p>垂直排列的彈性盒</p>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ borderStyle: "solid" }}>column</span>
                        <span style={{ borderStyle: "solid" }}>column</span>
                        <span style={{ borderStyle: "solid" }}>column</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>flex-wrap</h1>
                <p>彈性盒是否能跨行</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處範例的彈性盒是橫向排列</p>
                    <p>不能跨行(項目會被強制縮放寬度以符合彈性盒寬度)</p>
                    <div style={{ display: "flex", borderStyle: "dashed", flexDirection: "row" }} >
                        <span style={{ width: "40%", borderStyle: "solid" }}>nowrap</span>
                        <span style={{ width: "40%", borderStyle: "solid" }}>nowrap</span>
                        <span style={{ width: "40%", borderStyle: "solid" }}>nowrap</span>
                    </div>
                    <p>可以跨行(超過彈性盒寬度的項目會跨到下一行開始排列)</p>
                    <div style={{ display: "flex", borderStyle: "dashed", flexDirection: "row", flexWrap: "wrap" }}>
                        <span style={{ width: "40%", borderStyle: "solid" }}>wrap</span>
                        <span style={{ width: "40%", borderStyle: "solid" }}>wrap</span>
                        <span style={{ width: "40%", borderStyle: "solid" }}>wrap</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>justify-content</h1>
                <p>項目與彈性盒排列方向的對齊設定</p>
                <p>對項目設置justify-self可只改變項目自身的對齊設定</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處範例的彈性盒是橫向排列</p>
                    <p>對齊起點</p>
                    <div style={{ display: "flex", borderStyle: "dashed", justifyContent: "flex-start" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                    </div>
                    <p>對齊中心</p>
                    <div style={{ display: "flex", borderStyle: "dashed", justifyContent: "center" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                    </div>
                    <p>對齊尾部</p>
                    <div style={{ display: "flex", borderStyle: "dashed", justifyContent: "flex-end" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                    </div>
                    <p>此處範例的彈性盒是垂直排列</p>
                    <p>對齊起點</p>
                    <div
                        style={{ display: "flex", borderStyle: "dashed", flexDirection: "column", justifyContent: "flex-start", width: "25%", height: "150px" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                    </div>
                    <p>對齊中心</p>
                    <div
                        style={{ display: "flex", borderStyle: "dashed", flexDirection: "column", justifyContent: "center", width: "25%", height: "150px" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                    </div>
                    <p>對齊尾部</p>
                    <div
                        style={{ display: "flex", borderStyle: "dashed", flexDirection: "column", justifyContent: "flex-end", width: "25%", height: "150px" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>align-item</h1>
                <p>項目與行列垂直方向的對齊設定</p>
                <p>對項目設置align-self可只改變項目自身的對齊設定</p>
                <div className="example">
                    <h4>範例</h4>
                    <p>此處範例的彈性盒是橫向排列</p>
                    <p>對齊起點</p>
                    <div style={{ display: "flex", borderStyle: "dashed", alignItems: "flex-start", height: "75px" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                    </div>
                    <p>對齊中心</p>
                    <div style={{ display: "flex", borderStyle: "dashed", alignItems: "center", height: "75px" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                    </div>
                    <p>對齊尾部</p>
                    <div style={{ display: "flex", borderStyle: "dashed", alignItems: "flex-end", height: "75px" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                    </div>
                    <p>此處範例的彈性盒是垂直排列</p>
                    <p>對齊起點</p>
                    <div
                        style={{ display: "flex", borderStyle: "dashed", flexDirection: "column", alignItems: "flex-start", width: "25%" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-start</span>
                    </div>
                    <p>對齊中心</p>
                    <div style={{ display: "flex", borderStyle: "dashed", flexDirection: "column", alignItems: "center", width: "25%" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>center</span>
                    </div>
                    <p>對齊尾部</p>
                    <div
                        style={{ display: "flex", borderStyle: "dashed", flexDirection: "column", alignItems: "flex-end", width: "25%" }}>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                        <span style={{ width: "30%", borderStyle: "solid" }}>flex-end</span>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default CSSFlex;