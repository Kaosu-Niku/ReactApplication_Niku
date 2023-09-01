import React from 'react';
import $ from 'jquery';
import './JquerySyntax.css';

function JquerySyntax(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>基礎用法</h1>
                <h3>文檔加載完畢後才執行jQuery代碼</h3>
                <p>盡量避免在文檔還未加載完畢之前就調用jQuery代碼</p>
                <code>$(document).ready(function(){'{'}</code>
                <code>  {'//'} jQuery代碼</code>
                <code>{'}'});</code>
                <p>還可以這麼寫</p>
                <code>$(function(){'{'}</code>
                <code>  {'//'} jQuery代碼</code>
                <code>{'}'});</code>
                <h3>以CSS選擇器格式來尋找HTML元素</h3>
                <p>jQuery寫法</p>
                <code>$('#id')</code>
                <p>JavaScript寫法</p>
                <code>document.querySelector('#id')</code>
                <h3>為HTML元素添加事件</h3>
                <p>jQuery寫法</p>
                <code>$('#id').click(() ={'>'} {'{}'})</code>
                <p>JavaScript寫法</p>
                <code>document.querySelector('#id').addEventListener('click',() ={'>'} {'{}'})</code>
            </div>
            <div className="flex content-div">
                <h1>效果</h1>
                <p>以下函式皆有以下參數可使用</p>
                <p>參數1指定時間(單位為毫秒)，根據指定時間表現效果，參數2指定效果表現完後調用的callback函式</p>
                <h3>show</h3>
                <p>元素顯示</p>
                <code>$('#id').show()</code>
                <h3>hide</h3>
                <p>元素隱藏</p>
                <code>$('#id').hide()</code>
                <h3>toggle</h3>
                <p>元素在顯示和隱藏狀態之間切換</p>
                <code>$('#id').hide()</code>
                <div className="function-div">
                    <h4>範例</h4>
                    <button onClick={() => { $('.test-effect-one').show() }}>show</button>
                    <br></br>
                    <button onClick={() => { $('.test-effect-one').hide() }}>hide</button>
                    <br></br>
                    <button onClick={() => { $('.test-effect-one').toggle() }}>toggle</button>
                    <br></br>
                    <div className='test-effect-one'></div>
                </div>
            </div>
        </div>
    );
}
export default JquerySyntax;