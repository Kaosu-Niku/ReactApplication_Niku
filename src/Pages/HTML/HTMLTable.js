import React from 'react';

function HTMLTable(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>表格元素</h1>
            </div>
            <div className="flex content-div">
                <h1>table</h1>
                <p>以下元素皆需建立於{'<'}table{'>'}內。</p>
                <h3>caption</h3>
                <p>設置表格的標題。</p>
                <h3>tr</h3>
                <p>建立表格的一行。</p>
                <h3>th</h3>
                <p>建立表格行的一格(表格的首行格子都建議使用此元素)。</p>
                <h3>td</h3>
                <p>設置表格行的一格(做為表格的內容)。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <table>
                            <caption>表格標題</caption>
                            <tr className="trh">
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                            </tr>
                            <tr className="trd">
                                <td>四</td>
                                <td>五</td>
                                <td>六</td>
                            </tr>
                            <tr className="trd">
                                <td>七</td>
                                <td>八</td>
                                <td>九</td>
                            </tr>
                        </table>
                        <style>
                            {
                                "table { border-style: solid; }"
                            }
                            {
                                "th { border-style: dashed; width: 200px; }"
                            }
                            {
                                "td { border-style: dotted; width: 200px; }"
                            }
                        </style>
                    </div>
                </div>
                <h3>colgroup</h3>
                <p>建立表格列組。</p>
                <h3>col</h3>
                <p>設置表格列組的一列，此元素必須作為colgroup的子元素使用。</p>
                <h3>其餘方便表格分類用的元素</h3>
                <p>thead、tbody、tfoot。</p>
            </div>
        </div>
    );
}
export default HTMLTable;