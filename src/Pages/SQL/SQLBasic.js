import React from 'react';

function SQLBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>SQL是什麼</h1>
                <p>SQL全稱 Structured Query Language。中文稱做結構化查詢語言。在了解SQL之前先了解資料庫的概念。</p>
                <p>資料庫就是專門存放資料的地方，在網路世界上，資料庫通常由專門的資料庫管理系統來管理和處理，</p>
                <p>而資料庫管理系統會使用特定的程式指令來操作資料庫，這類資料庫管理系統使用的程式指令統稱為查詢語言，</p>
                <p>而不同的資料庫管理系統所使用的查詢語言必定會有所差異，因此網上訂立了一個查詢語言的標準，而這就是SQL</p>
                <p>使用遵照SQL標準的程式指令的資料庫稱為關聯式資料庫，不是的就是非關聯式資料庫。</p>
            </div>
            <div className="flex content-div">
                <h1>資料庫的結構</h1>
                <p>資料庫管理系統以用戶做區別，一個用戶可以含有多個資料庫(database)，一個資料庫由許多表格(table)組成，一個表由2維空間的行跟列組成</p>
                <p>每一列代表一個分類字段(field)，每一行代表了一筆紀錄(record)，每個欄位代表了一筆資料(data)</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <table>
                            <tr>
                                <th></th>
                                <th>姓名</th>
                                <th>性別</th>
                                <th>年齡</th>
                            </tr>
                            <tr>
                                <td>001</td>
                                <td>小明</td>
                                <td>男</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>小美</td>
                                <td>女</td>
                                <td>16</td>
                            </tr>
                        </table>
                        <style>
                            {
                                "table { border-style: solid; }"
                            }
                            {
                                "th,td { padding: 5px; border-style: dotted; }"
                            }
                        </style>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>字段</h1>
                <p>根據資料的特性，部分字段的資料具有重複性以至於不能獨立辨別每一筆紀錄，ex: 性別、年齡，</p>
                <p>而部分字段的資料具有單一性不會重複可以獨立辨別每一筆紀錄的字段，ex: 身分證字號，這類字段可以設置為主鍵(primary key)，</p>
                <p>一個表格只能設置一個主鍵，且設置為主鍵的字段不可以有重複資料也不可以有空的資料，</p>
                <p>主鍵用做為該表格被其他表格連接時的指定連接字段，以下舉例A表格連接B表格的範例，</p>
                <p>A表格新增一個字段，該字段連接B表格的主鍵，A表格連接B表格主鍵的該字段稱為外鍵(foreign key)，一個表格可以設置多個外鍵，</p>
                <p>一個表格需要透過外鍵才能與其他表格連接，而只能連接主鍵是為了避免連接非主鍵的字段可能會因資料具有重複性以至於無法獨立辨別每一筆紀錄。</p>
            </div>
        </div>
    );
}
export default SQLBasic;