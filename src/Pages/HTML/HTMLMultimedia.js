import React from 'react';

function HTMLMultimedia(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>Multimedia</h1>
            </div>
            <div className="flex content-div">
                <h1>audio</h1>
                <p>專用於嵌入音訊格式的資源</p>
                <p>使用src屬性指定要嵌入的音訊資源。</p>
                <p>使用controls屬性顯示控制面板。</p>
                <p>使用muted屬性靜音音訊。</p>
                <p>使用autoplay屬性自動播放音訊。</p>
                <p>使用loop屬性循環播放音訊。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <audio src="/Asset/Audio/Bury the Light.mp3" controls style={{ width: "50%" }}></audio>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>video</h1>
                <p>專用於嵌入影片格式的資源</p>
                <p>使用src屬性指定要嵌入的影片資源。</p>
                <p>使用controls屬性顯示控制面板。</p>
                <p>使用muted屬性靜音影片。</p>
                <p>使用autoplay屬性自動播放影片。</p>
                <p>使用loop屬性循環播放影片。</p>
                <p>使用poster屬性設置影片封面。</p>
                <div className="example">
                    <h4>範例</h4>
                    <div>
                        <video src="/Asset/Video/A.mp4" controls poster="/Asset/Image/Icon.png" style={{ width: "50%" }}></video>
                    </div>
                </div>
            </div>
            <div className="flex content-div">
                <h1>track</h1>
                <p>專用於為影片嵌入字幕資源</p>
                <p>使用src屬性指定要嵌入的字幕資源。</p>
                <h3>kind</h3>
                <p>設置字幕的類型</p>
                <h3>label</h3>
                <p>設置字幕的標題</p>
                <h3>srclang</h3>
                <p>設置字幕使用的語言</p>
                <h3>default</h3>
                <p>設置默認使用的字幕</p>
            </div>
        </div>
    );
}
export default HTMLMultimedia;