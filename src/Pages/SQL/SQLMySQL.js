import React from 'react';

function SQLMySQL(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>MySQL</h1>
            </div>
            <div className="flex content-div">
                <h1>環境建置</h1>
                <p>1. 官網安裝 MySQL Community Server</p>
                <a href="https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.31-winx64.zip">安裝 MySQL Community Server</a>
                <p>(MySQL Community Server只是安裝輔助介面，用於輔助用戶安裝真正需要的MySQL相關應用程式)</p>
                <p>2. 打開安裝輔助介面後，選擇安裝 MySQL Sever，等待安裝完畢後顯示完成介面</p>
                <p>3. 持續下一步到 Accounts and Roles 步驟，設定用戶密碼 (!!此密碼必須記住!! 使用該密碼登入MySQL資料庫管理系統)</p>
                <p>3. 持續下一步到 Windows Service 步驟，設定服務名稱 (此名稱作為查詢 Windows Service 服務時的辨識名稱，系統搜尋 Service 可查看服務)</p>
            </div>
            <div className="flex content-div">
                <h1>CMD操作MySQL資料庫管理系統</h1>
                <p>1. CMD輸入<code>cd [儲存的位置]\MySQL\MySQL Server (版本號)\bin</code>切換到指定路徑，在該路徑下才可以使用MySQL指令</p>
                <p>2. CDM輸入<code>mysql -u [使用者名稱(如未設定預設是root)] -p</code>登入MySQL資料庫管理系統，執行該指令後下一行會需要輸入用戶密碼</p>
                <p>3. 如果輸入用戶密碼後成功登入MySQL資料庫管理系統，就可以輸入MySQL指令開始操作資料庫</p>
            </div>
            <div className="flex content-div">
                <h1>MySQL指令</h1>
                <h2>資料庫 database</h2>
                <h3>查看所有資料庫的名稱</h3>
                <code>show databases;</code>
                <h3>創建資料庫</h3>
                <code>create database 資料庫A;</code>
                <h3>使用資料庫</h3>
                <p>(!!需要先use資料庫後才可以開始操作該資料庫!!)</p>
                <code>use 資料庫A;</code>
                <h3>刪除資料庫</h3>
                <code>drop database 資料庫A;</code>
                <h3>備份資料庫的資料至指定路徑的備份擋</h3>
                <code>backup database 資料庫A to disk = "[路徑]/備份檔.bak";</code>
                <h3>還原指定路徑的備份檔的備份資料給資料庫</h3>
                <code>restore database 資料庫A from disk = "[路徑]/備份檔.bak";</code>

                <h2>表格 table</h2>
                <h3>查看所有表格的名稱</h3>
                <code>show tables;</code>
                <h3>創建表格</h3>
                <code>create table 表格A;</code>
                <h3>創建表格並初始化設置字段</h3>
                <code>create table 表格A (字段A int, 字段B boolean);</code>
                <h3>刪除表格</h3>
                <code>drop table 表格A;</code>
                <h3>複製表格A的資料給表格B</h3>
                <p>(!!表格B的原資料都會被覆蓋消失!!)</p>
                <code>select * into 表格B from 表格A;</code>

                <h2>字段 field</h2>
                <h3>查看表格的所有字段的資訊</h3>
                <code>desc 表格A;</code>
                <h3>表格添加字段並指定類型</h3>
                <code>alter table 表格A add 字段C int;</code>
                <h3>表格更新字段的類型和添加約束</h3>
                <code>alter table 表格A modify 字段A text(16) no null;</code>
                <h3>表格刪除字段</h3>
                <code>alter table 表格A drop 字段C;</code>

                <h2>資料類型</h2>
                <a
                    href="https://learn.microsoft.com/zh-tw/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver16">type參考</a>
                <p>以下舉例常用的</p>
                <h3>整數 int; 4bytes</h3>
                <h3>浮點數 float; 4bytes</h3>
                <h3>固定長度字節 char(5); 必須剛好五個字</h3>
                <h3>可變長度字節 varchar(5); 五個字以內即可</h3>
                <h3>日期 date; ex: "0000-00-00"</h3>
                <h3>時間 time; ex: "00:00:00"</h3>
                <h3>日期時間 datetime; ex: "0000-00-00 00:00:00"</h3>

                <h2>字段約束</h2>
                <p>字段約束用於為字段添加一些運作規則，</p>
                <p>透過modify更新字段可以除舊換新，只保留modify後添加的約束。</p>
                <h3>no null = 資料不可為空</h3>
                <h3>unique = 該字段的資料不可重複</h3>
                <h3>default = 如果未設置資料則預設資料為該值</h3>
                <h3>check = 確保設置的資料符合類型和規則</h3>
                <h3>primary key = 設置該字段為主鍵</h3>
                <h3>foreign key = 設置該字段為外鍵</h3>
                <h3>AUTO_INCREMENT = 自動增量，新增一筆紀錄時自動為該紀錄設置資料為上一筆紀錄的值+1</h3>

                <h2>紀錄 record</h2>
                <h3>表格新增一筆紀錄並指定字段設置對應資料</h3>
                <code>insert into 表格A (字段A,字段B) values ("你好",true);</code>
                <p>也可以這樣寫</p>
                <code>insert into 表格A values (字段A, "你好"),(字段B, true);</code>
                <p>(如果要設置所有字段的資料可以省略(字段A,字段B)但value()必須按照字段的順序依序設置資料)</p>
                <code>insert into 表格A values ("你好",true);</code>
                <h3>表格更新符合條件的紀錄的指定字段的資料</h3>
                <p>(!!如果省略條件會導致該字段的所有紀錄的資料都更新!!)</p>
                <code>update 表格A set 字段A = "再見" where 條件式;</code>
                <h3>表格刪除符合條件的紀錄</h3>
                <p>(!!如果省略條件會導致所有紀錄被刪除!!)</p>
                <code>delete from 表格A where 條件式;</code>

                <h2>基本查詢</h2>
                <h3>取得表格內的所有資料</h3>
                <code>select * from 表格;</code>
                <h3>取得表格內指定字段的所有資料</h3>
                <code>select 字段 from 表格;</code>
                <h3>只取得前10筆資料</h3>
                <code>select top 10 * from 表格;</code>
                <h3>將取得的資料中重複的結果刪除只保留第一個</h3>
                <code>select distinct * from 表格;</code>
                <h3>將取得的資料以指定字段為基準升序排列或降序排列</h3>
                <p>(asc為升序[默認選項，可以省略]，desc為降序)</p>
                <code>select * from 表格 order by 字段 asc;</code>

                <h2>文字查詢</h2>
                <h3>取得文字符合條件的所有資料</h3>
                <code>select * from 表格 like "a";</code>
                <h3>通配符</h3>
                <p>文字查詢的條件指定文字可以使用_和&符號，_代表一個文字，&代表不限數量的文字。</p>
                <p>"a" = 文字為a</p>
                <p>"a%" = 第一個字為a</p>
                <p>"%a" = 最後一個字為a</p>
                <p>"%a%" = 只要文字中含有一個a</p>
                <p>"_a%" = 第二個字為a</p>
                <p>"%a_" = 倒數第二個字為a</p>
                <p>"_a_" = 只有三個字且第二個字為a</p>

                <h2>條件查詢</h2>
                <h3>取得表格內符合條件的所有資料</h3>
                <code>select * from 表格 where 條件式;</code>
                <h3>條件式範例</h3>
                <p>where 條件 and 條件 =&gt; 所有條件皆符合就true</p>
                <p>where 條件 or 條件 =&gt; 只需其中一個條件符合就true</p>
                <p>where not 條件 =&gt; 條件不符合就true</p>
                <p>where 字段 in ("你好","愛你","再見") =&gt; 資料符合其中一個值就true</p>
                <p>where 字段 between 10 and 20 =&gt 資料的值在該範圍內就true</p>
                <p>where 字段 is null =&gt; 資料是空值就true</p>
                <p>where 條件 and 條件 =&gt; 所有條件皆符合就true</p>

                <h2>函式計算</h2>
                <a href="https://zh.wikipedia.org/zh-tw/SQL#SQL.E5.87.BD.E6.95.B0">SQL函式參考</a>
                <h3>取得的紀錄數量(不含資料為null的紀錄)</h3>
                <code>select count(字段) from 表格;</code>
                <h3>取得所有紀錄中最小的數字</h3>
                <code>select min(字段) from 表格;</code>
                <h3>取得所有紀錄中最大的數字</h3>
                <code>select max(字段) from 表格;</code>
                <h3>取得所有紀錄的數字的加總</h3>
                <code>select sum(字段) from 表格;</code>
                <h3>取得所有紀錄的數字的平均</h3>
                <code>select avg(字段) from 表格;</code>

                <h2>表格連接</h2>
                <h3>表格A的字段A(外鍵)連接表格B的字段B(主鍵)，並取得連接結果</h3>
                <code>select * from 表格A inner join 表格B on 表格A.字段A = 表格B.字段B;</code>
                <p>(除了inner，還可以使用left、right、full)</p>
            </div>
        </div>
    );
}
export default SQLMySQL;