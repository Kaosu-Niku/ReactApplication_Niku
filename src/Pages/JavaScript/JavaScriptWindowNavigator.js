import React from 'react';
function JavaScriptWindowNavigator(props) {

    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>navigator</h1>
                <p>window.navigator包含用戶端的相關資訊</p>
                <h2>property</h2>
                <h3>navigator.userAgent</h3>
                <p>返回用戶端所使用的瀏覽器資訊</p>
                <p>(該資訊由 navigator.appCodeName + navigator.appVersoin 組成)</p>
                <output>{`${window.navigator.userAgent}`}</output>
                <h3>navigator.language</h3>
                <p>返回用戶端所使用的語言</p>
                <output>{`${window.navigator.language}`}</output>
                <h3>navigator.platform</h3>
                <p>返回用戶端所使用的作業系統名稱</p>
                <output>{`${window.navigator.platform}`}</output>
                <h3>navigator.cookieEnabled</h3>
                <p>確認用戶端是否允許使用Cookie</p>
                <output>{`${window.navigator.cookieEnabled}`}</output>
                <h3>navigator.onLine</h3>
                <p>確認用戶端是否有網路連線</p>
                <output>{`${window.navigator.onLine}`}</output>
                <h3>navigator.geolocation</h3>
                <p>包含用戶端的真實地理位置資訊</p>
                <output>{`${window.navigator.geolocation}`}</output>
            </div>
        </div>
    );
}
export default JavaScriptWindowNavigator;