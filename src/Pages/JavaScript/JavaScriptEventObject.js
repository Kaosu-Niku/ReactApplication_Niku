import React from 'react';
import { useState, useEffect } from 'react';
import './JavaScriptEventObject.css';

function JavaScriptEventObject(props) {

    const [body, setBody] = useState(document.body);
    useEffect(() => {
        setBody(document.body);
    }, []);

    const [stateEventType, setStateEventType] = useState(null);
    const [stateEventTarget, setStateEventTarget] = useState(null);
    const [stateEventCurrentTarget, setStateEventCurrentTarget] = useState(null);
    const [stateEventIsTrusted, setStateEventIsTrusted] = useState(null);
    const [stateEventBubbles, setStateEventBubbles] = useState(null);
    const [stateEventStopPropagation, setStateEventStopPropagation] = useState(false);
    const [stateEventPreventDefault, setStateEventPreventDefault] = useState(false);
    const [stateKeyboardKey, setStateKeyboardKey] = useState(null);
    const [stateClipboardClipboardData, setStateClipboardClipboardData] = useState(null);
    const [stateWheelDeltaY, setStateWheelDeltaY] = useState(null);
    const [stateTouchTouches, setStateTouchTouches] = useState(null);
    const [stateMouseButton, setStateMouseButton] = useState(null);
    const [stateMouseClientX, setStateMouseClientX] = useState(null);
    const [stateMouseClientY, setStateMouseClientY] = useState(null);
    const [stateMouseMovementX, setStateMouseMovementX] = useState(null);
    const [stateMouseMovementY, setStateMouseMovementY] = useState(null);
    const [stateTransitionPropertyName, setStateTransitionPropertyName] = useState(null);
    const [stateTransitionElapsedTime, setStateTransitionElapsedTime] = useState(null);
    const [stateInputData, setStateInputData] = useState(null);
    const [stateInputInputType, setStateInputInputType] = useState(null);

    function keydownF(event) {
        setStateKeyboardKey(event.key);
    }
    function copyF(event) {
        setStateClipboardClipboardData(event.clipboardData);
    }
    function wheelF(event) {
        setStateWheelDeltaY(event.deltaY);
    }
    function touchF(event) {
        setStateTouchTouches(event.touches);
    }
    function mousemoveF(event) {
        setStateMouseButton(event.button);
        setStateMouseClientX(event.clientX);
        setStateMouseClientY(event.clientY);
        setStateMouseMovementX(event.movementX);
        setStateMouseMovementY(event.movementY);
    }

    useEffect(() => {
        body.addEventListener("keydown", keydownF);
        body.addEventListener("copy", copyF);
        body.addEventListener("wheel", wheelF);
        body.addEventListener("touch", touchF);
        body.addEventListener("mousemove", mousemoveF);
        return (() => {
            body.removeEventListener("keydown", keydownF);
            body.removeEventListener("copy", copyF);
            body.removeEventListener("wheel", wheelF);
            body.removeEventListener("touch", touchF);
            body.removeEventListener("mousemove", mousemoveF);
        });
    }, [body]);

    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>EventObject</h1>
                <p>EventObject是事件監聽器觸發時會對執行方法傳遞的回調參數，透過回調參數可以得知該觸發事件的詳細資訊。</p>
                <p>EventObject的基底類型是Event，另外有多種繼承Event的延伸類型，根據監聽的事件決定返回的類型</p>
                <p>(ex: keydown事件傳遞KeyboardEvent類型，click事件傳遞MouseEvent類型)</p>
            </div>
            <div className="flex content-div">
                <h1>Event</h1>
                <h3>type</h3>
                <p>返回觸發的事件名稱</p>
                <output>{`${stateEventType}`}</output>
                <h3>target</h3>
                <p>返回觸發事件的開始對象</p>
                <output>{`${stateEventTarget}`}</output>
                <h3>currentTarget</h3>
                <p>返回觸發事件的結束對象</p>
                <p>(經事件氣泡傳播後的最後一個觸發對象)</p>
                <output>{`${stateEventCurrentTarget}`}</output>
                <h3>isTrusted</h3>
                <p>確認事件是否是可信的</p>
                <p>(用戶端觸發事件為可信，腳本觸發事件為不可信)</p>
                <output>{`${stateEventIsTrusted}`}</output>
                <h3>bubbles</h3>
                <p>確認事件是否是氣泡事件</p>
                <output>{`${stateEventBubbles}`}</output>
                <h3>stopPropagation()</h3>
                <p>停止事件氣泡傳遞</p>
                <div style={{ borderStyle: "outset" }}>
                    <input type="radio" name="stopPropagation" onClick={() => { setStateEventStopPropagation(true); }}></input>
                    <span>Yes</span>
                    <br />
                    <input type="radio" name="stopPropagation" onClick={() => { setStateEventStopPropagation(false); }}></input>
                    <span>No</span>
                </div>
                <h3>preventDefault()</h3>
                <p>禁止對象的瀏覽器自動操作 (ex: &lta&gt會自動開啟超連結、&ltbutton type=" submit"&gt會自動提交表單)</p>
                <div style={{ borderStyle: "outset" }}>
                    <input type="radio" name="preventDefault" onClick={() => { setStateEventPreventDefault(true); }}></input>
                    <span>Yes</span>
                    <br />
                    <input type="radio" name="preventDefault" onClick={() => { setStateEventPreventDefault(false); }}></input>
                    <span>No</span>
                </div>
                <hr />
                <div style={{ borderStyle: "outset" }}>
                    <p>按下按鈕查看Event的回調參數數值</p>
                    <form action="/error" target="_blank">
                        <button type="submit"
                            onClick={(event) => {
                                if (stateEventStopPropagation === true)
                                    event.stopPropagation();
                                if (stateEventPreventDefault === true)
                                    event.preventDefault();
                                setStateEventType(event.type);
                                setStateEventTarget(event.target);
                                setStateEventCurrentTarget(event.currentTarget);
                                setStateEventIsTrusted(event.isTrusted);
                                setStateEventBubbles(event.bubbles);
                            }}>event測試</button>
                    </form>
                </div>
            </div>
            <div className="flex content-div">
                <h1>KeyboardEvent</h1>
                <h3>key</h3>
                <p>返回按下的按鍵名稱</p>
                <output>{`${stateKeyboardKey}`}</output>
            </div>
            <div className="flex content-div">
                <h1>ClipboardEvent</h1>
                <h3>clipboardData</h3>
                <p>返回修改剪貼簿時的修改對象</p>
                <output>{`${stateClipboardClipboardData}`}</output>
            </div>
            <div className="flex content-div">
                <h1>MouseEvent</h1>
                <h3>button</h3>
                <p>返回滑鼠按下的按鍵編號(左鍵:0、滾輪:1、右鍵:2)</p>
                <output>{`${stateMouseButton}`}</output>
                <h3>clientX</h3>
                <p>返回鼠標與視窗的相對X軸位置</p>
                <output>{`${stateMouseClientX}`}</output>
                <h3>clientY</h3>
                <p>返回鼠標與視窗的相對Y軸位置</p>
                <output>{`${stateMouseClientY}`}</output>
                <h3>movementX</h3>
                <p>返回與上一次的mousemove事件的X軸位置的距離</p>
                <output>{`${stateMouseMovementX}`}</output>
                <h3>movementY</h3>
                <p>返回與上一次的mousemove事件的Y軸位置的距離</p>
                <output>{`${stateMouseMovementY}`}</output>
            </div>
            <div className="flex content-div">
                <h1>WheelEvent</h1>
                <h3>deltaY</h3>
                <p>返回滑鼠滾輪滾動的Y軸位移量 (向上負值，向下正值)</p>
                <output>{`${stateWheelDeltaY}`}</output>
                <i>(備註: 另外還有deltaX、deltaZ，但基本上沒有這兩個方向的滑鼠滾輪，所以基本只會返回0)</i>
            </div>
            <div className="flex content-div">
                <h1>TouchEvent</h1>
                <h3>touches</h3>
                <p>返回手指觸碰的所有對象的列表</p>
                <output>{`${stateTouchTouches}`}</output>
            </div>
            <div className="flex content-div">
                <h1>TransitionEvent</h1>
                <h3>propertyName</h3>
                <p>返回經過渡處理的CSS特性 (只能返回一個特性)</p>
                <output>{`${stateTransitionPropertyName}`}</output>
                <h3>elapsedTime</h3>
                <p>返回過渡的經過時間</p>
                <output>{`${stateTransitionElapsedTime}`}</output>
                <span id="transition-test"
                    onTransitionEnd={(event) => {
                        setStateTransitionPropertyName(event.propertyName);
                        setStateTransitionElapsedTime(event.elapsedTime);
                    }}></span>
            </div>
            <div className="flex content-div">
                <h1>AnimationEvent</h1>
                <h3>propertyName</h3>
                <p>返回經動畫處理的CSS特性 (只能返回一個特性)</p>
                <h3>elapsedTime</h3>
                <p>返回動畫的經過時間</p>
            </div>
            <div className="flex content-div">
                <h1>FocusEvent</h1>
                <h3>relatedTarget</h3>
                <p>返回焦點對象</p>
            </div>
            <div className="flex content-div">
                <h1>InputEvent</h1>
                <h3>data</h3>
                <p>返回輸入的字符</p>
                <output>{`${stateInputData}`}</output>
                <h3>inputType</h3>
                <p>返回操作類型 (新增或刪除)</p>
                <output>{`${stateInputInputType}`}</output>
                <div>
                    <input id="input-test" placeholder="請任意輸入並查看InputEvent的回條參數數值"
                        style={{ display: "inline-block", width: "500px", marginTop: "20px", marginBottom: "20px" }}
                        onInput={(event) => {
                            setStateInputData(event.data);
                            setStateInputInputType(event.inputType);
                        }}></input>
                </div>
            </div>
        </div >
    );
}
export default JavaScriptEventObject;