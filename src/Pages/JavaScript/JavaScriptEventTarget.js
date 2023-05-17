import React from 'react';
import { useState, useEffect } from 'react';
import './JavaScriptEventTarget.css';

function JavaScriptEventTarget(props) {

    const [styleColor, setStyleColor] = useState("black");
    const [target, setTarget] = useState(document.querySelector("#target"));
    const [audio, setAudio] = useState(document.querySelector("#audio"));
    const [form, setForm] = useState(document.querySelector("#form"));
    const [input2, setInput2] = useState(document.querySelector("#input"));
    useEffect(() => {
        setTarget(document.querySelector("#target"));
        setAudio(document.querySelector("#audio"));
        setForm(document.querySelector("#form"));
        setInput2(document.querySelector("#input"));
    }, [target]);

    function changeColor(event) {
        let randomColor = `rgb( ${Math.random() * 255}, ${Math.random() * 255} ,${Math.random() * 255} )`;
        setStyleColor(randomColor);
    }
    const [keydown, setKeydown] = useState(false);
    const [keyup, setKeyup] = useState(false);
    const [copy, setCopy] = useState(false);
    const [cut, setCut] = useState(false);
    const [paste, setPaste] = useState(false);
    const [mouseover, setMouseover] = useState(false);
    const [mousemove, setMousemove] = useState(false);
    const [mouseout, setMouseout] = useState(false);
    const [mousedown, setMousedown] = useState(false);
    const [mouseup, setMouseup] = useState(false);
    const [click, setClick] = useState(false);
    const [dblclick, setDblclick] = useState(false);
    const [contextmenu, setContextmenu] = useState(false);
    const [wheel, setWheel] = useState(false);
    const [touchenter, setTouchenter] = useState(false);
    const [touchmove, setTouchmove] = useState(false);
    const [touchleave, setTouchleave] = useState(false);
    const [touchstart, setTouchstart] = useState(false);
    const [touchend, setTouchend] = useState(false);
    const [play, setPlay] = useState(false);
    const [timeupdate, setTimeupdate] = useState(false);
    const [pause, setPause] = useState(false);
    const [ended, setEnded] = useState(false);
    const [ratechange, setRatechange] = useState(false);
    const [volumechange, setVolumechange] = useState(false);
    const [input, setInput] = useState(false);
    const [change, setChange] = useState(false);
    const [invaild, setInvaild] = useState(false);
    const [reset, setReset] = useState(false);
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (target != null) {
            if (keydown === true)
                target.addEventListener("keydown", changeColor);
            if (keyup === true)
                target.addEventListener("keyup", changeColor);
            if (copy === true)
                target.addEventListener("copy", changeColor);
            if (cut === true)
                target.addEventListener("cut", changeColor);
            if (paste === true)
                target.addEventListener("paste", changeColor);
            if (mouseover === true)
                target.addEventListener("mouseover", changeColor);
            if (mousemove === true)
                target.addEventListener("mousemove", changeColor);
            if (mouseout === true)
                target.addEventListener("mouseout", changeColor);
            if (mousedown === true)
                target.addEventListener("mousedown", changeColor);
            if (mouseup === true)
                target.addEventListener("mouseup", changeColor);
            if (click === true)
                target.addEventListener("click", changeColor);
            if (dblclick === true)
                target.addEventListener("dblclick", changeColor);
            if (contextmenu === true)
                target.addEventListener("contextmenu", changeColor);
            if (wheel === true)
                target.addEventListener("wheel", changeColor);
            if (touchenter === true)
                target.addEventListener("touchenter", changeColor);
            if (touchmove === true)
                target.addEventListener("touchmove", changeColor);
            if (touchleave === true)
                target.addEventListener("touchleave", changeColor);
            if (touchstart === true)
                target.addEventListener("touchstart", changeColor);
            if (touchend === true)
                target.addEventListener("touchend", changeColor);
            if (play === true)
                audio.addEventListener("play", changeColor);
            if (timeupdate === true)
                audio.addEventListener("timeupdate", changeColor);
            if (pause === true)
                audio.addEventListener("pause", changeColor);
            if (ended === true)
                audio.addEventListener("ended", changeColor);
            if (ratechange === true)
                audio.addEventListener("ratechange", changeColor);
            if (volumechange === true)
                audio.addEventListener("volumechange", changeColor);
            if (input === true)
                input2.addEventListener("input", changeColor);
            if (change === true)
                input2.addEventListener("change", changeColor);
            if (invaild === true)
                input2.addEventListener("invaild", changeColor);
            if (reset === true)
                form.addEventListener("reset", changeColor);
            if (submit === true)
                form.addEventListener("submit", changeColor);
        }
        return () => {
            if (target != null) {
                target.removeEventListener("keydown", changeColor);
                target.removeEventListener("keyup", changeColor);
                target.removeEventListener("copy", changeColor);
                target.removeEventListener("cut", changeColor);
                target.removeEventListener("paste", changeColor);
                target.removeEventListener("mouseover", changeColor);
                target.removeEventListener("mousemove", changeColor);
                target.removeEventListener("mouseout", changeColor);
                target.removeEventListener("mousedown", changeColor);
                target.removeEventListener("mouseup", changeColor);
                target.removeEventListener("click", changeColor);
                target.removeEventListener("dblclick", changeColor);
                target.removeEventListener("contextmenu", changeColor);
                target.removeEventListener("wheel", changeColor);
                target.removeEventListener("touchenter", changeColor);
                target.removeEventListener("touchmove", changeColor);
                target.removeEventListener("touchleave", changeColor);
                target.removeEventListener("touchstart", changeColor);
                target.removeEventListener("touchend", changeColor);
                audio.removeEventListener("play", changeColor);
                audio.removeEventListener("timeupdate", changeColor);
                audio.removeEventListener("pause", changeColor);
                audio.removeEventListener("ended", changeColor);
                audio.removeEventListener("ratechange", changeColor);
                audio.removeEventListener("volumechange", changeColor);
                input2.removeEventListener("input", changeColor);
                input2.removeEventListener("change", changeColor);
                input2.removeEventListener("invaild", changeColor);
                form.removeEventListener("reset", changeColor);
                form.removeEventListener("submit", changeColor);
            }
        }
    });

    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>EventTarget</h1>
                <p>EventTarget是一個介面，實作了該介面的對象具有監聽事件的能力 (window和document都實作了EventTarget)</p>
                <h2>EventListener</h2>
                <p>對象可以添加特定事件的監聽器 (事件的觸發皆有其條件，ex: click是滑鼠點擊該對象時)</p>
                <p>當特定事件被觸發時，將會執行監聽器設定的callback方法 (一個特定事件可以設定多個callback方法，預設執行順序是按照方法的設定順序)</p>
                <h2>EventBubbling</h2>
                <p>DOM的事件觸發具有傳播性，觸發事件時會以該元素的層級依序往上層傳遞觸發直到&lt;html&gt;層級，此概念稱為事件氣泡。</p>
                <h2>EventObject</h2>
                <p>大部分的事件監聽器觸發時會對執行方法傳遞回調參數，透過回調參數可以得知該觸發事件的詳細資訊，此傳遞參數稱為事件物件。</p>
                <p>(ex: 觸發keydown事件時會傳遞KeyboardEvent類型的事件物件，其中的key屬性可以返回按下的按鍵名稱)</p>
            </div>
            <div className="flex content-div">
                <h1>function</h1>
                <h2>EventTarget</h2>
                <h3>EventTarget.addEventListener(eventType:string, callback:function(par:EventObject))</h3>
                <p>該對象添加一個指定事件的監聽器</p>
                <h3>EventTarget.removeEventListener(eventType:string, foo:function)</h3>
                <p>該對象移除指定事件監聽器的執行方法</p>
                <p>(執行方法必須是具名函式才可以移除，如果執行方法是匿名函式是無法移除的)</p>
                <h2>EventObject</h2>
                <h3>EventObject.stopPropagation()</h3>
                <p>取消事件氣泡傳遞</p>
                <h3>EventObject.preventDefault()</h3>
                <p>取消瀏覽器預設的行為</p>
                <p>(ex: 對&lt;a&gt;觸發click事件會自動開啟新網頁)</p>
            </div>
            <div className="flex content-div">
                <h1>EventType</h1>
                <p>以下是可使用的事件類型(eventType參數)和其傳遞的事件物件類型(callback函式的par參數) </p>
                <p>括號後方標註的是 (eventType參數可填入的值)</p>
                <p>(事件類型若只針對特定HTML元素運作會額外註記)</p>

                <h3>keydown =&gt; KeyboardEvent</h3>
                <p>按下鍵盤任意鍵時</p>
                <h3>keyup =&gt;
                    KeyboardEvent</h3>
                <p>按下並鬆開鍵盤任意鍵時</p>
                <h3>copy =&gt; ClipboardEvent</h3>
                <p>Ctrl+C 複製該對象時</p>
                <h3>cut =&gt; ClipboardEvent</h3>
                <p>Ctrl+X 剪下該對象時</p>
                <h3>paste =&gt; ClipboardEvent</h3>
                <p>Ctrl+V 貼上該對象時</p>

                <h3>mouseover =&gt; MouseEvent</h3>
                <p>鼠標進入該對象的範圍時</p>
                <h3>mousemove =&gt; MouseEvent</h3>
                <p>鼠標在該對象的範圍內移動時持續觸發</p>
                <h3>mouseout =&gt; MouseEvent</h3>
                <p>鼠標離開該對象的範圍時</p>
                <h3>mousedown =&gt; MouseEvent</h3>
                <p>滑鼠任意鍵按下該對象時</p>
                <h3>mouseup =&gt; MouseEvent</h3>
                <p>滑鼠任意鍵按下並鬆開該對象時</p>
                <h3>click =&gt; MouseEvent</h3>
                <p>滑鼠左鍵按下並鬆開該對象時</p>
                <h3>dblclick =&gt; MouseEvent</h3>
                <p>滑鼠左鍵快速兩次按下並鬆開該對象時</p>
                <h3>contextmenu =&gt; MouseEvent</h3>
                <p>滑鼠右鍵按下並鬆開該對象開啟選單時</p>
                <h3>wheel =&gt; WheelEvent</h3>
                <p>滑鼠滾輪滾動時持續觸發</p>

                <h3>touchenter =&gt; TouchEvent</h3>
                <p>手指滑動進入該對象的範圍時</p>
                <h3>touchmove =&gt; TouchEvent</h3>
                <p>手指在該對象的範圍內滑動時持續觸發</p>
                <h3>touchleave =&gt; TouchEvent</h3>
                <p>手指滑動離開該對象的範圍時</p>
                <h3>touchstart =&gt; TouchEvent</h3>
                <p>手指觸碰該對象時</p>
                <h3>touchend =&gt; TouchEvent</h3>
                <p>手指觸碰並離開該對象時</p>

                <h3>transitionend =&gt; TransitionEvent</h3>
                <p>CSS過渡完成時</p>
                <h3>animationstart =&gt; AnimationEvent</h3>
                <p>CSS動畫播放開始時</p>
                <h3>animationend =&gt; AnimationEvent</h3>
                <p>CSS動畫播放完畢時</p>
                <h3>animationiteration =&gt; AnimationEvent</h3>
                <p>CSS動畫重複播放完畢時 (只播放一次不會觸發該事件)</p>

                <h3>load =&gt; Event</h3>
                <p>對象加載完畢時</p>
                <i>可用元素: &lt;body&gt;,&lt;link&gt;,&lt;style&gt;,&lt;script&gt;,&lt;iframe&gt;,&lt;img&gt;,&lt;input type="image"&gt;</i>
                <h3>error =&gt; Event</h3>
                <p>對象加載失敗時</p>
                <i>可用元素: &lt;link&gt;,&lt;script&gt;,&lt;object&gt;,&lt;img&gt;,&lt;input type="image"&gt;</i>
                <h3>unload =&gt; Event</h3>
                <p>網頁關閉或是重新整理時</p>
                <h3>resize =&gt; UIEvent</h3>
                <p>視窗大小改變時</p>
                <h3>scroll =&gt; Event</h3>
                <p>拖動網頁視窗時</p>
                <h3>focus =&gt; FocusEvent</h3>
                <p>獲得焦點時</p>
                <h3>blur =&gt; FocusEvent</h3>
                <p>失去焦點時</p>
                <h3>toggle =&gt; Event</h3>
                <p>&lt;details&gt;展開和收回時</p>
                <i>可用元素: &lt;details&gt;</i>
                <h3>show =&gt; Event</h3>
                <p>&lt;menu&gt;展開時</p>
                <i>可用元素: &lt;menu&gt;</i>
                <h3>abort =&gt; Event</h3>
                <p>多媒體資源加載失敗時</p>
                <i>可用元素: &lt;audio&gt;,&lt;video&gt;</i>
                <h3>canplay =&gt; Event</h3>
                <p>多媒體資源可以播放時</p>
                <i>可用元素: &lt;audio&gt;,&lt;video&gt;</i>
                <h3>play =&gt; Event</h3>
                <p>多媒體資源被播放或從暫停狀態繼續播放時</p>
                <i>可用元素: &lt;audio&gt;,&lt;video&gt;</i>
                <h3>timeupdate =&gt; Event</h3>
                <p>多媒體資源播放進行時持續觸發</p>
                <i>可用元素: &lt;audio&gt;,&lt;video&gt;</i>
                <h3>pause =&gt; Event</h3>
                <p>多媒體資源暫停播放時</p>
                <i>可用元素: &lt;audio&gt;,&lt;video&gt;</i>
                <h3>ended =&gt; Event</h3>
                <p>多媒體資源播放完畢時</p>
                <i>可用元素: &lt;audio&gt;,&lt;video&gt;</i>
                <h3>ratechange =&gt; Event</h3>
                <p>改變多媒體資源的播放速度時</p>
                <i>可用元素: &lt;audio&gt;,&lt;video&gt;</i>
                <h3>volumechange =&gt; Event</h3>
                <p>改變多媒體資源的音量時</p>
                <i>可用元素: &lt;audio&gt;,&lt;video&gt;</i>
                <h3>input =&gt; InputEvent</h3>
                <p>用戶對&lt;input&gt;輸入時</p>
                <i>可用元素: &lt;input&gt;</i>
                <h3>change =&gt; Event</h3>
                <p>數值改變時</p>
                <i>可用元素: &lt;input&gt;,&lt;textarea&gt;,&lt;select&gt;</i>
                <h3>invaild =&gt; Event</h3>
                <p>&lt;input&gt;的輸入值無效時</p>
                <i>可用元素: &lt;input&gt;</i>
                <h3>reset =&gt; Event</h3>
                <p>重置表單時</p>
                <i>可用元素: &lt;form&gt;</i>
                <h3>submit =&gt; Event</h3>
                <p>提交表單時</p>
                <i>可用元素: &lt;form&gt;</i>
                <h3>close =&gt; Event</h3>
                <p>&lt;dialog&gt;提示框被關閉時</p>
                <i>可用元素: &lt;dialog&gt;</i>
            </div>
            <div className="flex content-div">
                <div style={{ borderStyle: "solid" }}>
                    <span id="target"
                        style={{ display: "inline-block", position: "fixed", top: "15%", right: "300px", width: "200px", height: "200px", margin: "10px", backgroundColor: styleColor }}></span>
                    <hr />
                    <p style={{ marginLeft: "25px" }}>按鍵:</p>
                    <label className="test-label">keydown:</label>
                    <input className="test-radio" id="keydownE" type="radio" name="keydown"
                        onClick={() => { setKeydown(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="keydownD" type="radio" name="keydown"
                        onClick={() => { setKeydown(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">keyup:</label>
                    <input className="test-radio" id="keyupE" type="radio" name="keyup"
                        onClick={() => { setKeyup(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="keyupD" type="radio" name="keyup"
                        onClick={() => { setKeyup(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">copy:</label>
                    <input className="test-radio" id="copyE" type="radio" name="copy"
                        onClick={() => { setCopy(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="copyD" type="radio" name="copy"
                        onClick={() => { setCopy(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">cut:</label>
                    <input className="test-radio" id="cutE" type="radio" name="cut"
                        onClick={() => { setCut(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="cutD" type="radio" name="cut"
                        onClick={() => { setCut(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">paste:</label>
                    <input className="test-radio" id="pasteE" type="radio" name="paste"
                        onClick={() => { setPaste(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="pasteD" type="radio" name="paste"
                        onClick={() => { setPaste(false); }}></input>
                    <span>Disable</span>
                    <hr />
                    <p style={{ marginLeft: "25px" }}>滑鼠:</p>
                    <label className="test-label">mouseover:</label>
                    <input className="test-radio" id="mouseoverE" type="radio" name="mouseover"
                        onClick={() => { setMouseover(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="mouseoverD" type="radio" name="mouseover"
                        onClick={() => { setMouseover(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">mousemove:</label>
                    <input className="test-radio" id="mousemoveE" type="radio" name="mousemove"
                        onClick={() => { setMousemove(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="mousemoveD" type="radio" name="mousemove"
                        onClick={() => { setMousemove(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">mouseout:</label>
                    <input className="test-radio" id="mouseoutE" type="radio" name="mouseout"
                        onClick={() => { setMouseout(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="mouseoutD" type="radio" name="mouseout"
                        onClick={() => { setMouseout(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">mousedown:</label>
                    <input className="test-radio" id="mousedownE" type="radio" name="mousedown"
                        onClick={() => { setMousedown(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="mousedownD" type="radio" name="mousedown"
                        onClick={() => { setMousedown(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">mouseup:</label>
                    <input className="test-radio" id="mouseupE" type="radio" name="mouseup"
                        onClick={() => { setMouseup(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="mouseupD" type="radio" name="mouseup"
                        onClick={() => { setMouseup(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">click:</label>
                    <input className="test-radio" id="clickE" type="radio" name="click"
                        onClick={() => { setClick(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="clickD" type="radio" name="click"
                        onClick={() => { setClick(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">dblclick:</label>
                    <input className="test-radio" id="dblclickE" type="radio" name="dblclick"
                        onClick={() => { setDblclick(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="dblclickD" type="radio" name="dblclick"
                        onClick={() => { setDblclick(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">contextmenu:</label>
                    <input className="test-radio" id="contextmenuE" type="radio" name="contextmenu"
                        onClick={() => { setContextmenu(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="contextmenuD" type="radio" name="contextmenu"
                        onClick={() => { setContextmenu(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">wheel:</label>
                    <input className="test-radio" id="wheelE" type="radio" name="wheel"
                        onClick={() => { setWheel(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="wheelD" type="radio" name="wheel"
                        onClick={() => { setWheel(false); }}></input>
                    <span>Disable</span>
                    <hr />
                    <p style={{ marginLeft: "25px" }}>觸碰:</p>
                    <label className="test-label">touchenter:</label>
                    <input className="test-radio" id="touchenterE" type="radio" name="touchenter"
                        onClick={() => { setTouchenter(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="touchenterD" type="radio" name="touchenter"
                        onClick={() => { setTouchenter(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">touchmove:</label>
                    <input className="test-radio" id="touchmoveE" type="radio" name="touchmove"
                        onClick={() => { setTouchmove(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="touchmoveD" type="radio" name="touchmove"
                        onClick={() => { setTouchmove(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">touchleave:</label>
                    <input className="test-radio" id="touchleaveE" type="radio" name="touchleave"
                        onClick={() => { setTouchleave(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="touchleaveD" type="radio" name="touchleave"
                        onClick={() => { setTouchleave(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">touchstart:</label>
                    <input className="test-radio" id="touchstartE" type="radio" name="touchstart"
                        onClick={() => { setTouchstart(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="touchstartD" type="radio" name="touchstart"
                        onClick={() => { setTouchstart(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">touchend:</label>
                    <input className="test-radio" id="touchendE" type="radio" name="touchend"
                        onClick={() => { setTouchend(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="touchendD" type="radio" name="touchend"
                        onClick={() => { setTouchend(false); }}></input>
                    <span>Disable</span>
                    <hr />
                </div>
                <div style={{ borderStyle: "solid" }}>
                    <hr />
                    <audio id="audio" src="/Asset/Audio/Bury the Light.mp3" controls style={{ width: "50%" }}></audio>
                    <hr />
                    <p style={{ marginLeft: "25px" }}>多媒體:</p>
                    <label className="test-label">play:</label>
                    <input className="test-radio" id="playE" type="radio" name="play"
                        onClick={() => { setPlay(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="playD" type="radio" name="play"
                        onClick={() => { setPlay(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">timeupdate:</label>
                    <input className="test-radio" id="timeupdateE" type="radio" name="timeupdate"
                        onClick={() => { setTimeupdate(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="timeupdateD" type="radio" name="timeupdate"
                        onClick={() => { setTimeupdate(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">pause:</label>
                    <input className="test-radio" id="pauseE" type="radio" name="pause"
                        onClick={() => { setPause(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="pauseD" type="radio" name="pause"
                        onClick={() => { setPause(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">ended:</label>
                    <input className="test-radio" id="endedE" type="radio" name="ended"
                        onClick={() => { setEnded(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="endedD" type="radio" name="ended"
                        onClick={() => { setEnded(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">ratechange:</label>
                    <input className="test-radio" id="ratechangeE" type="radio" name="ratechange"
                        onClick={() => { setRatechange(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="ratechangeD" type="radio" name="ratechange"
                        onClick={() => { setRatechange(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">volumechange:</label>
                    <input className="test-radio" id="volumechangeE" type="radio" name="volumechange"
                        onClick={() => { setVolumechange(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="volumechangeD" type="radio" name="volumechange"
                        onClick={() => { setVolumechange(false); }}></input>
                    <span>Disable</span>
                    <hr />
                </div>
                <div style={{ borderStyle: "solid" }}>
                    <hr />
                    <form id="form" style={{ width: "50%", padding: "10px", borderStyle: "double", margin: "10px" }} target="_blank"
                        action="/null">
                        <p>表單</p>
                        <label>請輸入數字:</label>
                        <input id="input" type="number" required />
                        <br />
                        <button type="reset">reset</button><button type="submit">submit</button>
                    </form>
                    <hr />
                    <p style={{ marginLeft: "25px" }}>表單:</p>
                    <label className="test-label">input:</label>
                    <input className="test-radio" id="inputE" type="radio" name="input"
                        onClick={() => { setInput(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="inputD" type="radio" name="input"
                        onClick={() => { setInput(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">change:</label>
                    <input className="test-radio" id="changeE" type="radio" name="change"
                        onClick={() => { setChange(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="changeD" type="radio" name="change"
                        onClick={() => { setChange(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">invaild:</label>
                    <input className="test-radio" id="invaildE" type="radio" name="invaild"
                        onClick={() => { setInvaild(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="invaildD" type="radio" name="invaild"
                        onClick={() => { setInvaild(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">reset:</label>
                    <input className="test-radio" id="resetE" type="radio" name="reset"
                        onClick={() => { setReset(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="resetD" type="radio" name="reset"
                        onClick={() => { setReset(false); }}></input>
                    <span>Disable</span>
                    <br />
                    <label className="test-label">submit:</label>
                    <input className="test-radio" id="submitE" type="radio" name="submit"
                        onClick={() => { setSubmit(true); }}></input>
                    <span>Enable</span>
                    <input className="test-radio" id="submitD" type="radio" name="submit"
                        onClick={() => { setSubmit(false); }}></input>
                    <span>Disable</span>
                    <hr />
                </div>
            </div>
        </div>
    );
}
export default JavaScriptEventTarget;