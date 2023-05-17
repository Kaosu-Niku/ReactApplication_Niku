import React from 'react';

function GitBasic(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Git是什麼</h1>
                <p>Git是一個分散式版本控制軟體，版本控制用途在於追蹤和記錄專案的內容改動，可以更好的管理和維護專案，</p>
                <p>而分散式版本控制其核心在於去中心化，在每位開發者的電腦中都保有一份本地的專案數據以及版本歷史紀錄，</p>
                <p>這可以使得每位開發者都可以在各自的本地進行開發作業不必顧慮其他人的狀態，還可以變相的達成更安全的分散式的專案備份，</p>
                <p>而分散式版本控制會透過一些方式來達成數據的同步以統一專案狀態和數據的更新，因此分散式版本控制軟體可以更好的協助多人共同開發和維護專案。</p>
            </div>
            <div className="flex content-div">
                <h1>Git運作原理</h1>
                <p>Git的運作主要拆分成三個區域，暫存區、本地倉庫、遠端倉庫。</p>
                <p>首先必須讓Git追蹤專案，Git才會開始記錄專案，</p>
                <p>開發者開發專案的任何改變專案狀態的操作(ex: 添加、刪除、修改)，都會被Git記錄在暫存區，</p>
                <p>將暫存區的數據提交給本地倉庫，本地倉庫會儲存暫存區紀錄的數據並更新本地倉庫的版本和歷史紀錄，</p>
                <p>而遠端倉庫可以視為是一個雲端倉庫(通常是Github倉庫)，所有開發者都是透過雲端倉庫來統一和更新專案數據。</p>
            </div>
            <div className="flex content-div">
                <h1>檔案的狀態</h1>
                <p>Untracked 未追蹤 = 還未被Git追蹤的檔案，Git不會記錄檔案的狀態，</p>
                <p><code>git add</code>使檔案被Git追蹤，狀態改為Unmodify。</p>
                <p>Modified 已修改 = 被Git追蹤的檔案其狀態發生改變被暫存區記錄著，</p>
                <p><code>git commit</code>將檔案的狀態提交至本地倉庫儲存，狀態改為Unmodify。</p>
                <p>Unmodify 已入庫 = 檔案的狀態與本地倉庫的狀態相符合。</p>
            </div>
            <div className="flex content-div">
                <h1>分支</h1>
                <p>分支用於為專案分離版本，提高專案的開發和維護性，</p>
                <p>大型專案的開發若所有人都使用相同的分支，這會導致更多可能的數據衝突以至於專案的開發和維護困難，</p>
                <p>分支適合用於劃分工作區域，因為分支之間的狀態皆是獨立的不會互相影響的，且分支可以透過合併來統一，</p>
                <p>分支也很適合用於保存版本，一個開發完成的穩定版本可以保存在一個分支中，</p>
                <p>往後要更新版本時可以分離一個新的分支開始新的開發工作，保證專案的穩定性。</p>
            </div>
            <div className="flex content-div">
                <h1>Git命令</h1>
                <h3>查看所有Git命令</h3>
                <code>  git help</code>
                <h3>設定使用者的名稱和電子信箱</h3>
                <code>  git config --global user.name "名稱"</code>
                <code>  git config --global user.email "信箱"</code>
                <h3>當前目錄下創建一個本地倉庫</h3>
                <code>  git init</code>
                <h3>當前目錄下創建一個本地倉庫並克隆遠端倉庫的內容</h3>
                <code>  git clone "遠端倉庫地址"</code>
                <h3>查詢Git當前的狀態</h3>
                <code>  git status</code>
                <h3>添加檔案使檔案被Git追蹤</h3>
                <p>(若想要一次添加所有未被Git追蹤的檔案可以輸入 git add .)</p>
                <code>  git add 檔案.txt</code>
                <h3>刪除檔案並使檔案不再被Git追蹤</h3>
                <code>  git rm 檔案.txt</code>
                <h3>提交暫存區的數據至本地倉庫</h3>
                <code>  git commit -m "提交訊息"</code>
                <h3>將檔案的狀態從暫存區移除</h3>
                <p>(檔案本身的數據依然是改動的，但是這個改動不被暫存區記錄)</p>
                <code>  git checkout 檔案.txt</code>
                <h3>檔案的數據回朔至本地倉庫的版本</h3>
                <p>(等同於回朔至該檔案最後一次被commit時的狀態)</p>
                <code>  git restore 檔案.txt</code>
                <h3>查看本地倉庫的所有版本</h3>
                <code>  git reflog</code>
                <h3>本地倉庫回朔至指定的版本</h3>
                <code>  git reset 版本</code>
                <h3>連接一個遠端倉庫並定義名稱</h3>
                <code>  git remote add 自訂連接名稱 "遠端倉庫地址"</code>
                <h3>刪除指定的遠端倉庫連接</h3>
                <code>  git remote rm 連接名稱</code>
                <h3>將本地倉庫的數據推送至遠端倉庫使遠端倉庫數據同步</h3>
                <p>(每一次推送都要重複輸入連接名稱和分支名稱會很繁瑣，可以輸入 git push -u 連接名稱 分支名稱)</p>
                <p>(-u會將此次推送設定為預設值，往後直接輸入 git push 就可使用預設的推送設定)</p>
                <code>  git push 連接名稱 分支名稱</code>
                <h3>將遠端倉庫的數據拉回至本地倉庫使本地倉庫數據同步</h3>
                <p>(同push，設定預設值後同樣可以省略直接輸入 git pull)</p>
                <code>  git pull 連接名稱 分支名稱</code>
                <h3>創建一個新的分支</h3>
                <code>  git branch 自訂分支名稱</code>
                <h3>查詢當前所在的分支</h3>
                <code>  git branch -v</code>
                <h3>刪除指定的分支</h3>
                <code>  git branch -b 分支名稱</code>
                <h3>切換至指定的分支</h3>
                <code>  git switch 分支名稱</code>
                <h3>與指定的分支合併</h3>
                <code>  git merge 分支名稱</code>
            </div>
            <div className="flex content-div">
                <h1>數據衝突</h1>
                <p>如果AB雙方對同一份檔案的同一個部分的內容進行修改，A先push後B再pull，</p>
                <p>這時會產生衝突，B打開產生衝突的檔案會看到以下內容</p>
                <code>  &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code>
                <code>  (A的內容)</code>
                <code>  =======</code>
                <code>  (B的內容)</code>
                <code>  &gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>
                <p>解決方法是必須手動修改該檔案，A或B的內容只能擇一保留，另一個必須清除，清除完後再一次 add commit 即可。</p>
            </div>
        </div>
    );
}
export default GitBasic;