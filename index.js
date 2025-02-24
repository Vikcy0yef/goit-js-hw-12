import{a as w,S,i as d}from"./assets/vendor-BDaiwwc1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function m(r){const t="https://pixabay.com",a="/api",o=new URLSearchParams({key:"48897316-c1284323f9ede48e892c0fd4f",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await w.get(t+a+`?${o}`)).data}const C=new S(".gallery a",{captionsData:"alt",captionDelay:250,close:!0});function h(r){const t=document.querySelector(".gallery"),a=r.map(o=>`<li class="gallery-item">
            <a class='gallery-link' href="${o.largeImageURL}">
              <img class="li-img"
              src="${o.webformatURL}" 
              alt="${o.tags}"/> 
              <div class="li-text">
                <table class="table">
              <tr>
                <td>Likes</td>
                <td>Views</td>
                <td>Comments</td>
                <td>Downloads</td>
              </tr>
              <tr>
                <td>${o.likes}</td>
                <td>${o.views}</td>
                <td>${o.comments}</td>
                <td>${o.downloads}</td>
              </tr>
            </table>
              
                </div>
              </a>
            </li>
            
    `).join("");t.insertAdjacentHTML("afterbegin",a),C.refresh()}const f=document.querySelector(".form"),v=document.querySelector(".input-search"),c=document.querySelector(".wait-msg"),u=document.querySelector(".load-btn"),g=document.querySelector(".load-msg");let n="",i=null,p=1,y=40;f.addEventListener("submit",async r=>{if(r.preventDefault(),document.querySelector(".gallery").innerHTML="",n=v.value.trim(),i=1,!n){d.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"});return}c.innerHTML='"Wait, the image is loaded" <span class="loader"></span>';try{const t=await m(n,i,y);h(t.hits),p=t.total,t.hits.length==0&&d.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"})}catch{c.textContent="Ups ..."}c.textContent="",b(),f.reset()});u.addEventListener("click",async()=>{L(),g.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',i+=1,b();const r=await m(n);h(r.hits),g.textContent="",q()});function b(){const r=Math.ceil(p/y);i>=r?(L(),d.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",titleColor:"#fff",titleSize:"16px",message:"We are sorry, but you have reached the end of search results."})):x()}function x(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}function q(){const t=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:2*t})}
//# sourceMappingURL=index.js.map
