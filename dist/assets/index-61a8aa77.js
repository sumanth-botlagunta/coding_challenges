(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let n=parseInt(localStorage.getItem("upcount"))||0,o=parseInt(localStorage.getItem("totalcount"))||0;function i(r){r==="up"&&n++,o++,l(),localStorage.setItem("upcount",n),localStorage.setItem("totalcount",o)}function l(){const r=o===0?"please share the feedback":`${Math.trunc(n/o*100)}% found this helpful `;document.querySelector(".helpful-count").textContent=r}function d(){localStorage.clear(),n=0,o=0,l()}const f=document.querySelector(".thumb-up"),p=document.querySelector(".thumb-down"),m=document.querySelector(".clear-button");f.addEventListener("click",()=>{i("up")});p.addEventListener("click",()=>{i("down")});m.addEventListener("click",()=>{d()});l();