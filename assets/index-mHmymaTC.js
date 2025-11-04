(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const o=[{id:1,name:"綠島自由行套裝行程",image:"../assets/images/swim.png",place:"台東",price:1280,number:8,stars:8.6,description:"嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。"},{id:2,name:"清境高空觀景步道二日遊",image:"../assets/images/climbMountains.png",place:"南投",price:2580,number:12,stars:8.2,description:"清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。"},{id:3,name:"南庄度假村露營車二日遊",image:"../assets/images/camping.png",place:"台中",price:1280,number:2,stars:9.6,description:"南庄雲水豪華露營車，擁有最愜意的露營體驗吧！<br>一泊一食，輕鬆享受露營車樂趣。獨立衛浴與私人戶外露臺。入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。"},{id:4,name:"山林悠遊雙人套票",image:"../assets/images/waterfall.png",place:"台中",price:880,number:10,stars:8.6,description:"山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。<br>（含雙龍瀑布入場券 x2）"},{id:5,name:"漁樂碼頭釣魚體驗套票",image:"../assets/images/fishing.png",place:"台中",price:1280,number:5,stars:8.6,description:"中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！"},{id:6,name:"熊森公園親子二日遊套票",image:"../assets/images/swinging.png",place:"高雄",price:2480,number:3,stars:8.6,description:"來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！"}];let i=[];function g(e){return{id:e.id,name:e.name,image:e.imgUrl,place:e.area,price:e.price,number:e.group,stars:e.rate,description:e.description}}function u(e){return{name:e.packageName,image:e.packageWebsite,place:e.packagePlace,price:parseFloat(e.packagePrice)||0,number:parseInt(e.packageNum)||0,stars:parseFloat(e.packageStar)||0,description:e.packageDesc}}async function f(){const e="https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";try{const t=await axios.get(e);if(t.data&&Array.isArray(t.data.data)){const r=t.data.data.map(g);i=[...o,...r],console.log("Remote package data fetched and merged successfully.")}else i=[...o]}catch(t){console.error("Error fetching remote package data:",t),i=[...o]}}function h(){return i}function m(e){return e===""||e==="地區搜尋"?i:i.filter(t=>t.place===e)}function v(e){let t;if(i.length>0){const r=i.map(a=>a.id);t=Math.max(...r)+1}else t=0;e.id=t,i.push(e),console.log("New package added:",e)}const l=document.querySelector(".cards-wrapper"),p=document.getElementById("searchNum"),b=new Intl.NumberFormat("en-US");function d(e){if(!l){console.error("Card wrapper element not found");return}if(p&&(p.textContent=`本次搜尋共 ${e.length} 筆資料`),e.length===0){l.innerHTML='<p class="no-data">查無此關鍵字資料</p>';return}const t=e.map(r=>{const s=b.format(r.price);return`
        <li class="cards">
            <a href="#" class="card">
                <div class="card-img">
                    <img src="${r.image}" alt="${r.name}" class="img">
                </div>
                <div class="card-contents">
                    <div class="contents-top">
                        <h2 class="title label-lg">${r.name}</h2>
                        <p class="para para-md">${r.description}</p>
                    </div>
                    <div class="contents-bottom">
                        <div class="remain">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#00807E"/>
                            </svg>
                            <p class="label-sm">剩下最後 ${r.number} 組</p>
                         </div>
                        <div class="prices">
                            <p class="currency label-sm">TWD</p>
                            <p class="price label-xl">$${s}</p>
                        </div>
                    </div>
                    <div class="stars-tag">
                        <span class="para-md">${r.stars}</span>
                    </div>
                </div>
            </a>
            <div class="place-tag">
                <span class="label-md">${r.place}</span>
            </div>
        </li>
        `}).join("");l.innerHTML=t}function y(){const e=document.getElementById("addPackageForm");if(!e){console.error("Form element not found");return}e.addEventListener("submit",t=>{t.preventDefault();const r=new FormData(e),s=Object.fromEntries(r.entries()),a=u(s);v(a);const n=document.getElementById("filterPlace").value;d(m(n)),e.reset()})}function w(){const e=document.getElementById("filterPlace");if(!e){console.error("Filter select element not found");return}e.addEventListener("change",t=>{const r=e.value,s=m(r);d(s)})}function P(){y(),w()}async function L(){console.log("Initializing application..."),await f(),P();const e=h();console.log("Initial package data:",e),d(e),console.log("Application initialized.")}window.addEventListener("DOMContentLoaded",L);
