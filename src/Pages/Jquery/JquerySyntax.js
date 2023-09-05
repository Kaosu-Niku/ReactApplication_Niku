import React from 'react';
import { useState } from 'react';
import $ from 'jquery';
import './JquerySyntax.css';

function JquerySyntax(props) {
    const [effectOneTime, setEffectOneTime] = useState(0);

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
                <h1>動畫效果</h1>
                <p>以下函式皆有以下參數可使用</p>
                <p>參數1指定時間(單位為毫秒)，根據指定時間表現過渡效果，參數2指定效果表現完後調用的callback函式</p>
                <h3>show</h3>
                <p>元素顯示</p>
                <code>$('#id').show()</code>
                <h3>hide</h3>
                <p>元素隱藏</p>
                <code>$('#id').hide()</code>
                <h3>toggle</h3>
                <p>元素在顯示和隱藏狀態之間切換</p>
                <code>$('#id').toggle()</code>
                <h3>fadeIn</h3>
                <p>元素淡入顯示</p>
                <code>$('#id').fadeIn()</code>
                <h3>fadeOut</h3>
                <p>元素淡出隱藏</p>
                <code>$('#id').fadeOut()</code>
                <h3>fadeToggle</h3>
                <p>元素在淡入和淡出狀態之間切換</p>
                <code>$('#id').fadeToggle()</code>
                <h3>fadeTo</h3>
                <p>元素過渡到一個特定的透明度</p>
                <code>$('#id').fadeTo()</code>
                <h3>slideDown</h3>
                <p>元素向下展開</p>
                <code>$('#id').slideDown()</code>
                <h3>slideUp</h3>
                <p>元素向上收縮</p>
                <code>$('#id').slideUp()</code>
                <h3>slideToggle</h3>
                <p>元素在展開和收縮狀態之間切換</p>
                <code>$('#id').slideToggle()</code>
                <div className="function-div">
                    <h4>範例</h4>
                    <p>效果:</p>
                    <button className='effect-button' onClick={() => { $('.effect-result').show(effectOneTime) }}>show</button>
                    <button className='effect-button' onClick={() => { $('.effect-result').hide(effectOneTime) }}>hide</button>
                    <button className='effect-button' onClick={() => { $('.effect-result').toggle(effectOneTime) }}>toggle</button>
                    <button className='effect-button' onClick={() => { $('.effect-result').fadeIn(effectOneTime) }}>fadeIn</button>
                    <button className='effect-button' onClick={() => { $('.effect-result').fadeOut(effectOneTime) }}>fadeOut</button>
                    <button className='effect-button' onClick={() => { $('.effect-result').fadeToggle(effectOneTime) }}>fadeToggle</button>
                    <button className='effect-button' onClick={() => { $('.effect-result').slideDown(effectOneTime) }}>slideDown</button>
                    <button className='effect-button' onClick={() => { $('.effect-result').slideUp(effectOneTime) }}>slideUp</button>
                    <button className='effect-button' onClick={() => { $('.effect-result').slideToggle(effectOneTime) }}>slideToggle</button>
                    <br></br>
                    <p>動畫過渡時間:</p>
                    <input type='number' value={effectOneTime} onChange={(event) => { setEffectOneTime(event.target.value) }}></input>
                    <br></br>
                    <div className='effect-result'></div>
                </div>
            </div>
        </div>
    );
}
export default JquerySyntax;