import{d as u,r as _,o as i,c as d,a as t,t as f,F as p,b as l,e as m,f as h}from"./vendor.b31c6bb3.js";const g=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};g();const v=t("p",null,[l(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),l(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1),b=t("p",null,[l("See "),t("code",null,"README.md"),l(" for more information.")],-1),y=t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),l(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1),k=t("p",null,[l(" Edit "),t("code",null,"components/HelloWorld.vue"),l(" to test hot module replacement. ")],-1),V=u({props:{msg:null},setup(n){const r=_(0);return(c,s)=>(i(),d(p,null,[t("h1",null,f(n.msg),1),v,b,y,t("button",{type:"button",onClick:s[0]||(s[0]=e=>r.value++)},"count is: "+f(r.value),1),k],64))}});var E=(n,r)=>{const c=n.__vccOpts||n;for(const[s,e]of r)c[s]=e;return c};const N={};function x(n,r){return null}var D=E(N,[["render",x]]);const L=u({setup(n){return(r,c)=>(i(),d(p,null,[m(D),m(V,{msg:"Hello Vue 3 + TypeScript + Vite"})],64))}});h(L).mount("#app");
