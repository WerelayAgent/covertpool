import{b as z}from"./c-JU6XFYD2.js";import{c as t,d as y,e as w,f as R,h as u,i as A,m as k,o as P,s as b,v as S}from"./c-DEKGIYDC.js";import{d as D}from"./c-FH6BK3WO.js";var U=4;var O=a=>a==="rehearsal"||a==="testing"?'<em class="em-st-tag">Testing</em>':"";function F(a){let e=T(a),s=Number(e.replace(/,/g,""));return!Number.isFinite(s)||s<1e4?e:s>=1e9?`${(s/1e9).toFixed(2)}B`:s>=1e6?`${(s/1e6).toFixed(1)}M`:`${(s/1e3).toFixed(1)}k`}function T(a){if(a.amount==null||!/^\d+$/.test(String(a.amount)))return"\u2013";let e=Number(a.decimals??0);if(!Number.isInteger(e)||e<0||e>255)return"\u2013";let s=BigInt(a.amount),n=10n**BigInt(e);if(s>0n&&s*1000n<n)return"&lt;0.001";let i=(s*10000n+n/2n)/n,r=String(i/10000n).replace(/\B(?=(\d{3})+(?!\d))/g,","),l=String(i%10000n).padStart(4,"0").replace(/0+$/,"");return`${r}${l?`.${l}`:""}`}function M(a,e=U){let s=[];for(let n of a?.latest||[]){if(!n||!n.sig)continue;let i=s[s.length-1];n.kind==="transfer"&&n.payer&&i?.kind==="transfer"&&i.payer===n.payer?i.count+=1:s.push({...n,count:1})}return s.slice(0,e)}function $a(a){if(!a)return null;let e=Number(a.tx24h)||0,s=Number(a.classified24h)||0;return Number(a.lastOk)>0&&Date.now()-Number(a.lastOk)<15*6e4&&e>0&&s>=e*.9?a:null}var $=a=>Number.isFinite(Number(a))?Math.max(0,Number(a)):0;var p='<svg class="ar" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',v=(a,e,s="")=>`<span class="em-dots ${s}" role="img" aria-label="${t(e)}">${a}</span>`,_=a=>a==null?"\u2013":`+${u(a*100,a>=.01?1:a>=.001?2:3)}%`;function B(a,e="buy",s=5){if(!a?.mint)return N;let n=e==="sell"?a.priceSol>0?String(Math.round(s/a.priceSol)):"":String(s);return`/c/${encodeURIComponent(a.mint)}?route=dark&side=${e}${n?`&amount=${n}`:""}#ticket`}function K(a,e={}){let s=e.cap??5,n=Number(a?.ch1h),i=z(a,e.solUsd,s),r=a?`<img src="${t(a.image)}" alt="" width="38" height="38" loading="eager"><span class="nm"><b>$${t(a.symbol)}</b><small>${t(w(a.mcap))} market cap</small></span><span class="px"><b>${t(R(a.priceUsd,"$"))}</b><small class="${Number.isFinite(n)?n>=0?"up":"down":""}">${Number.isFinite(n)?`${t(A(n))} 1h`:"&nbsp;"}</small></span>`:'<span class="ph"></span><span class="nm"><b><span class="em-skel" style="width:74px"></span></b><small><span class="em-skel" style="width:110px;height:9px"></span></small></span><span class="px"><b><span class="em-skel" style="width:70px"></span></b><small>&nbsp;</small></span>';return`<div class="em-ch"><span class="ic">${b}<h3>OTC desk</h3></span>
      <div class="em-view" role="group" aria-label="View"><button type="button" data-hero-view="you" aria-pressed="true">Your view</button><button type="button" data-hero-view="chain" aria-pressed="false">Chain view</button></div></div>
    <div class="em-coin" aria-label="${a?`On the desk now: $${t(a.symbol)}`:"Reading a live coin"}">${r}</div>
    <div class="em-faces">
      <div class="em-face em-face-you">
        <div class="em-spend"><div><label>You buy</label><b>${t(String(s))}<small>SOL</small></b></div><div class="em-sizes" aria-hidden="true">${[1,2,s].filter((l,c,h)=>h.indexOf(l)===c).map(l=>`<span class="${l===s?"on":""}">${l}</span>`).join("")}</div></div>
        <dl class="em-quote"><div><dt>Through the public pool<small>every tracker sees it</small></dt><dd class="up">${a?t(_(i)):'<span class="em-skel" style="width:48px"></span>'}</dd></div><div class="dark"><dt>Private fill<small>nothing prints</small></dt><dd>0.00%</dd></div></dl>
      </div>
      <div class="em-face em-face-chain" aria-label="What the chain records for this fill">
        <p class="em-face-h"><b>Private transfer</b><span>one transaction, both legs</span></p>
        <dl class="em-sealed"><div><dt>Coin</dt><dd>${v("\u2022\u2022\u2022\u2022","Coin: dark")}</dd></div><div><dt>Size</dt><dd>${v("\u2022\u2022\u2022\u2022\u2022\u2022","Size: dark")}</dd></div><div><dt>Price</dt><dd>${v("\u2022\u2022\u2022\u2022","Price: dark")}</dd></div></dl>
        <ul class="em-rows"><li class="pub"><span>The two accounts, the time</span><em>Public</em></li><li class="nil"><span>Nothing prints on the chart</span></li></ul>
      </div>
    </div>
    <a class="em-btn em-btn-main" href="${B(a,"buy",s)}">Post an OTC deal${p}</a>`}function W(a){let e=M(a,12).filter(i=>["transfer","deposit","withdraw","register"].includes(i.kind)).slice(0,3),s=i=>{let r=i.kind==="transfer",l=i.kind==="deposit"||i.kind==="withdraw",c=r?"Private transfer":i.kind==="deposit"?"Moved in":i.kind==="withdraw"?"Taken out":"Account opened",h=r?`${i.count>1?`\xD7${i.count} `:""}${v("\u2022\u2022\u2022\u2022 \u2022\u2022","Coin and size hidden")}`:l?`<span title="${T(i)}">${F(i)}</span> ${t(i.symbol||y(i.asset,3)||"")}`:"",m=Number(i.bt);return`<li class="${r?"":"pub"}"><i aria-hidden="true"></i><span class="w">${c}</span><span class="v">${h}</span><span class="t">${m>0?t(k(m*1e3)):""}</span></li>`},n=Array.from({length:3-e.length},()=>'<li aria-hidden="true"></li>').join("");return`<div class="em-ch"><h3>Solana Privacy Rings</h3><span>All apps \xB7 24h</span></div>
    <div class="em-big"><b data-tk="hcount">${a?t(u(a.private24h,0)):"\u2013"}</b><span>private transfers</span></div>
    <ul class="em-feed">${a?`${e.map(s).join("")}${n}`:'<li class="em-feed-warm" role="status"><span class="dot" aria-hidden="true"></span><span>Live activity shows here shortly.</span></li>'}</ul>`}function E(a){return`<div class="em-ch"><h3>Private balance</h3><span>${a?"Your account is open":"Dark"}</span></div>
    <div class="em-vault"><span class="lbl">Balance</span><div class="val">${v("\u2022\u2022\u2022\u2022\u2022\u2022","Your private balance: dark","big")}</div>
      <ul><li><span>SOL</span>${v("\u2022\u2022\u2022\u2022 \u2022\u2022","Dark")}</li><li><span>Coins</span>${v("\u2022\u2022\u2022\u2022 \u2022\u2022","Dark")}</li><li><span>Trades inside</span>${v("\u2022\u2022\u2022\u2022 \u2022\u2022","Dark")}</li></ul></div>`}function V(a){return`<div class="em-token"><a href="/covertpool">${b}$COVERTPOOL</a><span class="sep" aria-hidden="true"></span>${a?`<button type="button" data-ca="${t(a)}" aria-label="Copy $COVERTPOOL contract address" title="${t(a)}">CA ${t(y(a,5))}${S.copy}</button>`:"<span>CA at launch</span>"}</div>`}function q(a){let e=a.kind==="transfer",s=a.kind==="deposit"||a.kind==="withdraw",n=e?"Private transfer":a.kind==="deposit"?"Moved in":a.kind==="withdraw"?"Taken out":a.kind==="register"?"Account opened":"Transaction",i=e?`${a.count>1?`<em>\xD7${a.count}</em>`:""}${v("\u2022\u2022\u2022\u2022 \u2022\u2022","Coin, size and price hidden")}`:s?`<b title="${T(a)}">${F(a)}</b> ${t(a.symbol||y(a.asset,3)||"")}`:"",r=Number(a.bt);return`<a class="em-tk${e?"":" pub"}" href="https://orbmarkets.io/tx/${t(encodeURIComponent(String(a.sig)))}" rel="noopener" target="_blank" tabindex="-1"><i></i><span class="k">${n}</span><span class="w">${i}</span><span class="p">${t(y(a.payer,4))}</span><span class="t">${r>0?t(k(r*1e3)):""}</span></a>`}function G(a){let e=M(a,16);if(!e.length)return`<div class="em-tape-track em-tape-idle"><span>${a?"No activity on Solana Privacy Rings in the last minutes.":"Reading Solana Privacy Rings\u2026"}</span></div>`;let s=e.map(q).join(""),n=s.repeat(Math.ceil(10/e.length));return`<div class="em-tape-track" style="--n:${Math.ceil(10/e.length)*e.length}"><div class="em-tape-run">${n}</div><div class="em-tape-run" aria-hidden="true">${n}</div></div>`}function X(a){let e=[...a?.hourly||[]].filter(l=>l&&Number.isFinite(Number(l.h))).sort((l,c)=>Number(l.h)-Number(c.h)).slice(-24);for(;e.length<24;)e.unshift({private:0,deposit:0,withdraw:0});let s=l=>$(l.private)+$(l.deposit)+$(l.withdraw),n=Math.max(1,...e.map(s)),i=e.map(l=>`<span class="em-bar" title="${t(u($(l.private),0))} private \xB7 ${t(u($(l.deposit),0))} in \xB7 ${t(u($(l.withdraw),0))} out">${[["withdraw","o"],["deposit","i"],["private","p"]].map(([c,h])=>`<i class="${h}" style="height:${($(l[c])/n*100).toFixed(2)}%"></i>`).join("")}</span>`).join(""),r=l=>a?`<b data-tk="${l}">${t(u(a[l],0))}</b>`:'<b><span class="em-skel" style="width:3ch;height:.7em"></span></b>';return`<div class="em-stats-head"><h2 id="em-stats-title">The network, right now.</h2><p>Solana Privacy Rings is the shared privacy layer CovertPool settles in. Every app on it, the last 24 hours, read from the chain. Not CovertPool\u2019s own volume.</p></div>
    <div class="em-stats-grid">
      <div class="em-stats-nums">
        <div class="em-n1">${r("tx24h")}<span>transactions in 24 hours</span></div>
        <dl class="em-n3">
          <div><dt><i class="p"></i>Private transfers</dt><dd>${r("private24h")}</dd></div>
          <div><dt><i class="i"></i>Moved in</dt><dd>${r("deposits24h")}</dd></div>
          <div><dt><i class="o"></i>Taken out</dt><dd>${r("withdrawals24h")}</dd></div>
        </dl>
      </div>
      <figure class="em-chart" aria-label="Solana Privacy Rings transactions per hour, last 24 hours: private transfers, moved in, taken out">
        <div class="em-bars${a?"":" em-bars-wait"}">${i}</div>
        <figcaption><span>24 hours ago</span><span>12 h</span><span>Now</span></figcaption>
      </figure>
    </div>`}var Z=a=>Number.isFinite(a)?a>=1e9?`${(a/1e9).toFixed(2)}B`:a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e4?`${(a/1e3).toFixed(1)}k`:u(a,a>=100?0:2):"\u2013";function Y(a,e=""){let s=a?`$${t(a.symbol)}`:"a memecoin";return`<div class="em-you"><span class="em-lab">You</span>
      <div class="em-act">${a?`<img src="${t(a.image)}" alt="" width="34" height="34">`:'<span class="ph"></span>'}<p>Buy <b>1 SOL</b> of <b>${s}</b><small>From your private balance, through one fresh wallet</small></p></div></div>
    <div class="em-line" aria-hidden="true"></div>
    <div class="em-chain"><span class="em-lab">The chain</span>
      <ul class="em-rows">
        <li class="nil"><span>Your wallet signs nothing in the trade</span></li>
        <li class="pub"><span>A fresh wallet, funded out of Solana Privacy Rings</span><em>Public</em></li>
        <li class="pub"><span>It buys ${s} on the chart</span><em>Public</em></li>
        <li class="pub"><span>The path back to you: that funding</span><em>Public</em></li>
      </ul>
      ${e?`<p class="em-fine">${t(e)}</p>`:""}</div>`}function J(a,e){let s=a&&e?2*e/a.priceUsd:null;return`<div class="em-you"><span class="em-lab">You</span>
      <p class="em-trade">Buy <b data-m="size">${s?t(Z(s)):"a bag of"}</b> <b data-m="coin">${a?`$${t(a.symbol)}`:"a memecoin"}</b> for <b data-m="price">2 SOL</b></p>
      <ul class="em-hold"><li><span>Private balance</span><b>Dark</b></li></ul></div>
    <div class="em-line" aria-hidden="true"></div>
    <div class="em-chain"><span class="em-lab">The chain</span>
      <p class="em-trade em-trade-chain">Private transfer</p>
      <dl class="em-sealed"><div data-m="coin"><dt>Coin</dt><dd>${v("\u2022\u2022\u2022\u2022","Coin: dark")}</dd></div><div data-m="size"><dt>Size</dt><dd>${v("\u2022\u2022\u2022\u2022\u2022\u2022","Size: dark")}</dd></div><div data-m="price"><dt>Price</dt><dd>${v("\u2022\u2022\u2022\u2022","Price: dark")}</dd></div></dl>
      <p class="em-fine">Public: the fee payer, the time and the signature. Moving in and out is public too.</p></div>`}function Q(a,e,s=5){let n=s,i=a?`$${t(a.symbol)}`:"the coin";return`<div class="em-you"><span class="em-lab">You</span>
      <div class="em-act">${a?`<img src="${t(a.image)}" alt="" width="34" height="34">`:'<span class="ph"></span>'}<p>Buy <b>${n} SOL</b> of <b>${i}</b><small>${a?.liq?`Its public pool holds ${t(w(a.liq))}`:"Reading its public pool"}</small></p></div></div>
    <div class="em-line" aria-hidden="true"></div>
    <div class="em-chain"><span class="em-lab">The chain</span>
      <ul class="em-rows em-record">
        <li><span>Coin</span><em>Dark</em></li>
        <li><span>Size</span><em>Dark</em></li>
        <li><span>Price</span><em>Dark</em></li>
        <li class="pub"><span>The two accounts, the time</span><em>Public</em></li>
        <li class="nil"><span>Nothing prints on the chart</span></li>
      </ul>
      <p class="em-fine">Private fills match with another CovertPool trader and settle in one Solana transaction.</p></div>`}var aa=[{id:"terminal",kicker:"OTC desk",title:"Off the chart.",body:"Size moves thin pools, and every tracker sees it. On the OTC desk two traders fill a deal privately, at the mid price or at yours. Nothing prints on the chart.",link:["/terminal","Open the OTC desk"]},{id:"balance",kicker:"Private balance",title:"Held in the dark.",body:"Hold, send, receive and trade from one private balance. The coins in it and every trade inside it stay off the public chain: the chain records a private transfer, not a coin, a size or a price.",link:["/me","Open your balance"]},{id:"stealth",kicker:"Stealth",title:"Buy from a fresh wallet.",body:"Stealth buys on the open market from a fresh wallet funded out of your private balance. Your own wallet signs nothing in the trade, so the buy is harder to tie back to you.",link:["/stealth","Open Stealth"]}];function sa(a={}){let e={stealth:Y(a.coin),balance:J(a.coin,a.solUsd),terminal:Q(a.coin,a.solUsd,a.cap)};return`<section class="em-story" aria-labelledby="em-story-title">
    <div class="em-wrap">
      <div class="em-story-head"><h2 id="em-story-title">Above the line, what you do.<br><span>Below it, what the chain keeps.</span></h2></div>
      ${aa.map(s=>`<article class="em-chapter" id="em-ch-${s.id}" aria-labelledby="em-ch-${s.id}-t">
        <div class="em-ch-copy"><span class="em-kick">${s.kicker}${s.id==="stealth"?O(a.live?.stealthStatus):""}</span><h3 id="em-ch-${s.id}-t">${s.title}</h3><p>${s.body}</p><a class="em-more" href="${s.link[0]}">${s.link[1]}${p}</a></div>
        <div class="em-split" data-card="${s.id}">${e[s.id]}</div>
      </article>`).join("")}
    </div>
  </section>`}var N="/terminal?route=dark#ticket",ea=[["Private OTC","/terminal"],["Private balance","/me"],["Private launches","/launch"]];function ta(){return`<nav class="em-hp" aria-label="What CovertPool does">${ea.map(([a,e],s)=>`${s?'<i aria-hidden="true"></i>':""}<a href="${e}">${t(a)}</a>`).join("")}</nav>`}var na=3;function ia(a,e={}){let s=(a?.launches||[]).slice(0,na),n=Number(a?.count)||s.length,i=Math.max(0,n-s.length),r=Number(e.solUsd)>0?Number(e.solUsd):null,l=o=>o>=1e4||o<1e3?w(o):`$${(o/1e3).toFixed(1)}k`,c=o=>o?.mcapUsd!=null?l(o.mcapUsd):o?.mcapSol!=null?r?l(o.mcapSol*r):`${u(o.mcapSol,1)} SOL`:"\u2013",h=o=>{let g=o.market,f=g?Math.max(0,Math.min(100,g.bondingBps/100)):null;return`<a class="lx-coin" href="https://pump.fun/coin/${t(o.mint)}" target="_blank" rel="noopener" title="${t(o.mint)}">
      <span class="lx-top">${o.image?`<img class="lx-art" src="${t(o.image)}" alt="" width="52" height="52" loading="lazy">`:`<span class="lx-art">${b}</span>`}
        <span class="lx-id"><b>${t(o.name)}</b><span class="mono">$${t(o.symbol)}</span></span><span class="lx-age mono" title="Launched">${t(k(Number(o.at)*1e3))}</span></span>
      <span class="lx-nums"><span><small>Market cap</small><b class="mono">${c(g)}</b></span><span><small>${g?.complete?"Graduated":"Bonding curve"}</small><b class="mono">${f==null?"\u2013":`${f>=10?Math.floor(f):f.toFixed(1)}%`}</b></span></span>
      <span class="lx-bar" aria-hidden="true">${f?`<i style="width:${f}%"></i>`:""}</span>
      <span class="lx-foot"><span class="lx-dev"><i aria-hidden="true"></i>Created by a fresh wallet</span><span class="lx-pump">pump.fun ${S.out}</span></span>
    </a>`},m=a===null,d=a===!1,x=Math.max(1,4-s.length),C=!s.length&&!m&&!d,j='<ul class="lx-facts"><li><b>Your key</b><span>Made in your browser</span></li><li><b>80% creator fees</b><span>Claimed to your dev wallet</span></li><li><b>No launch fee</b><span>Only network and pump.fun costs</span></li></ul>',L=o=>`<div class="lx-go lx-s${o}">
      <div class="lx-go-copy"><span class="lx-go-k">${C?"The first private launch lands here":s.length?"Next on this list":"Launch privately"}</span>
        <b>${C?"Launch from a wallet nobody has seen.":"Your coin, from a fresh wallet."}</b>
        ${o>=2?"<p>A fresh dev wallet funded out of your private balance creates the coin on pump.fun. You are the creator on chain.</p>":""}</div>
      ${o>=3?j:""}
      <a class="em-btn em-btn-main lx-cta" href="/launch">Launch privately${p}</a>
    </div>`,H="<p>Coins launched through CovertPool, live from pump.fun. The creator on chain is a fresh wallet, not your main wallet. <b>Your key. Your coin. 80% of creator fees yours.</b></p>",I=n>0?`<a class="em-more" href="/launch#ls">${i>0?`All ${u(n,0)} launches`:"Open Launch"}${p}</a>`:"";return`<div class="lx-head"><div><span class="lx-k">${b}<span>Private launches</span></span><h2 id="lx-title">Launched on CovertPool</h2>${H}</div>${I}</div>
    <div class="lx-row" aria-busy="${m}">${m?`<div class="lx-skel" aria-hidden="true"></div>${L(3)}`:`${s.map(h).join("")}${L(x)}`}</div>
    ${d?'<p class="lx-note">The list did not load. Reload to try again.</p>':""}`}function la(a){return`<nav class="em-links" aria-label="What CovertPool does">${[["OTC desk","Private fills. Nothing prints on the chart.","/terminal",""],["Private balance","A balance only you can read.","/me",""],["Stealth","Buy from a fresh wallet.","/stealth",O(a)],["Private launches","Launch a pump.fun coin from a fresh wallet. 80% of creator fees yours, 20% feeds $COVERTPOOL.","/launch",""]].map(([s,n,i,r])=>`<a href="${i}"><b>${t(s)}${r?` ${r}`:""}</b><span>${t(n)}</span>${p}</a>`).join("")}</nav>`}var ra=a=>a.pm==="pct"&&Number.isFinite(Number(a.pct))?`mid ${Number(a.pct)>0?"+":""}${Number(a.pct)}%`:a.pm==="fixed"?"fixed price":"at mid",oa=a=>`${P[D(a).id]} SOL`,ca=(a=5)=>Math.min(2,a);function da(a){let e=a.coin||null,s=a.cap??5,n=ca(s),i=[1,2,s].filter((c,h,m)=>m.indexOf(c)===h),r=(c,h,m)=>h.map(([d,x])=>`<button type="button" data-post-${c}="${d}" aria-pressed="${String(d)===String(m)}">${x}</button>`).join(""),l=e?`<img src="${t(e.image)}" alt="" width="30" height="30" loading="lazy"><b>$${t(e.symbol)}</b>`:'<span class="ph"></span><b>Your coin</b>';return`<div class="em-post" data-post data-side="buy" data-size="${n}"${e?` data-mint="${t(e.mint)}" data-px="${Number(e.priceSol)>0?Number(e.priceSol):""}"`:""}>
      <div class="em-post-form">
        <p class="em-post-h"><b>Post a deal.</b> Pick a side and a size.</p>
        <div class="em-post-row">
          <span class="c">${l}</span>
          <div class="em-seg" role="group" aria-label="Side">${r("side",[["buy","Buy"],["sell","Sell"]],"buy")}</div>
          <div class="em-seg em-seg-size" role="group" aria-label="Size in SOL">${r("size",i.map(c=>[c,String(c)]),n)}<i>SOL</i></div>
          <a class="em-btn em-btn-main" data-post-go href="${B(e,"buy",n)}">Post a deal${p}</a>
        </div>
      </div>
      <div class="em-post-view">
        <span class="em-lab">What the book will show</span>
        <div class="em-desk-head" aria-hidden="true"><span>Coin</span><span>Side</span><span>Size band</span><span>Price</span><span>Age</span></div>
        <div class="em-desk-row em-desk-draft"><span class="c">${l}</span><span class="s buy" data-post-out="side">Buying</span><span class="b" data-post-out="band">${t(oa(n))}</span><span class="p">at mid</span><span class="a">now</span></div>
        <p class="em-fine">Never your size, never your price. A fill settles whole in one Solana transaction, ${t(a.settle||"~16 s")}.</p>
      </div>
    </div>`}function pa(a,e={}){let s=a?.stats,n=(a?.offers||[]).filter(d=>d.status==="open").slice(0,5),i=Number(s?.open??n.length)||0,r=Number(s?.fills24h)||0,l=e.net==="mainnet"?'<span class="em-desk-pill"><i aria-hidden="true"></i>Live</span>':"",c=d=>`<a class="em-desk-row" href="/d/${t(d.id)}">
      <span class="c">${d.img?`<img src="${t(d.img)}" alt="" width="30" height="30" loading="lazy">`:'<span class="ph"></span>'}<b>$${t(d.sym||"coin")}</b></span>
      <span class="s ${d.side==="sell"?"sell":"buy"}">${d.side==="sell"?"Selling":"Buying"}</span>
      <span class="b">${t(P[d.band]||"\u2013")} SOL</span>
      <span class="p">${t(ra(d))}</span>
      <span class="a">${d.online?'<i class="on" aria-label="Maker online"></i>':""}${t(k(d.created*1e3))}</span>
    </a>`,h=a?n.length?`<div class="em-desk-head" aria-hidden="true"><span>Coin</span><span>Side</span><span>Size band</span><span>Price</span><span>Age</span></div>${n.map(c).join("")}`:da(e):'<div class="em-desk-empty"><p>Reading the desk\u2026</p></div>',m=`${i>0?`<div><span>Open deals</span><b>${u(i,0)}</b></div>`:""}${r>0?`<div><span>Settled, last 24h</span><b>${u(r,0)}</b></div>`:""}`;return`<div class="em-desk-top">
      <div><h2 id="em-desk-title">OTC desk ${l}</h2><p>${n.length?"Open deals on the private book.":"The private book."} It shows the coin, the side and a size band, never the size or the price.</p></div>
      ${m?`<div class="em-desk-nums">${m}</div>`:""}
    </div>
    <div class="em-desk-board${a&&!n.length?" em-desk-first":""}">${h}</div>
    <div class="em-desk-foot"><span>Fills are whole and settle in one transaction inside Solana Privacy Rings. Up to ${t(String(e.cap??5))} SOL a deal during the beta.</span>${n.length?`<a class="em-btn em-btn-main" href="${N}">Post a deal${p}</a>`:""}<a class="em-more" href="/terminal#book">Open the OTC desk${p}</a></div>`}function fa(a={}){let e=[[0,760],[22,600],[44,460],[66,320]].map(([s,n])=>`<i class="em-water" style="top:${92+s}px;width:${n}px"></i>`).join("");return`<div class="em-home">
    <div class="em-sky" aria-hidden="true"></div>
    <section class="em-hero em-wrap" aria-labelledby="hc-title">
      <a class="em-kicker em-kicker-wrap em-chip" href="/docs#dark-pool">${b}<span><b>Private trading and launches on Solana</b> <i aria-hidden="true">\xB7</i> <span class="em-chip-credit">Built on Solana Privacy Rings by Helius</span></span>${p}</a>
      <h1 id="hc-title"><span>The dark pool</span> <span>for Solana.</span></h1>
      ${ta()}
      <p class="em-sub">Private launches, private OTC, hidden balances and stealth buys. Launch from a fresh wallet, move size without moving the chart, and give copytraders no wallet to follow.</p>
      <div class="em-actions"><a class="em-btn em-btn-main" href="/terminal">Open the dark pool${p}</a><a class="em-btn em-btn-glass em-btn-launch" href="/launch">Launch a coin privately${p}</a></div>
      <p class="em-hero-note"><span><b>Private launches:</b> Your key. Your coin. 80% of creator fees, 20% feeds $COVERTPOOL.</span><a href="/docs">How it works${p}</a></p>
      ${V(a.ca)}
      <div class="em-stage"><span class="em-horizon" aria-hidden="true"></span><span aria-hidden="true">${e}</span>
        <div class="em-stack">
          <article class="em-card em-back em-left" id="em-vault" aria-label="Private balance">${E(a.open)}</article>
          <article class="em-card em-back em-right" id="em-rings" aria-label="Solana Privacy Rings, live">${W(a.activity)}</article>
          <article class="em-card em-front" id="em-otc" data-view="you" aria-label="OTC desk">${K(a.coin,a)}</article>
        </div>
      </div>
    </section>
    <section class="em-wrap lx" id="lx" aria-labelledby="lx-title">${ia(a.launches,a)}</section>
    <section class="em-wrap em-pillars">${la(a.live?.stealthStatus)}</section>
    <section class="em-proof" aria-labelledby="em-stats-title">
      <div class="em-tape" id="em-tape" aria-label="Latest Solana Privacy Rings transactions, all apps">${G(a.activity)}</div>
      <div class="em-wrap em-stats" id="em-stats">${X(a.activity)}</div>
    </section>
    <section class="em-wrap em-desk" id="em-desk" aria-labelledby="em-desk-title">${pa(a.board,a)}</section>
    ${sa(a)}
    <section class="em-wrap em-cta" aria-labelledby="em-cta-title">
      <div class="em-cta-band">
        <span class="em-cta-sun" aria-hidden="true">${b}</span>
        <h2 id="em-cta-title">Step below the line.</h2>
        <p>Open a private balance with one signature. No transaction, no fee to open it.</p>
        <div class="em-actions"><a class="em-btn em-btn-main" href="/terminal">Open the dark pool${p}</a><a class="em-btn em-btn-glass" href="${N}">Post an OTC deal</a></div>
      </div>
    </section>
    <div class="em-wrap em-foot-wrap">
    ${a.foot||""}
    </div>
  </div>`}function ya(a={}){let e=!!a.live?.stealth,s='<div class="em-sky em-sky-st" aria-hidden="true"></div>',n=`<section class="em-wrap em-st-hero" aria-labelledby="st-title">
      <a class="em-kicker" href="/docs#routes">${b}<span>Stop getting copytraded.</span>${O(a.live?.stealthStatus)}${p}</a>
      <h1 id="st-title">Buy from a fresh wallet.</h1>
      <p class="em-sub">Buy any coin on the open market from a fresh wallet funded out of your private balance. Your own wallet signs nothing in the trade.</p>
    </section>`,i=e?'<section class="em-wrap em-st-desk" aria-label="Stealth trade"><div class="sf em-ticket" id="st-flow" aria-live="polite"><div class="sf-skel" aria-hidden="true"></div></div></section>':`<section class="em-wrap em-st-desk" aria-label="Stealth"><div class="em-ticket em-st-closed"><p>Stealth is not open on this site yet. The OTC desk is: trade size off the chart there.</p><a class="em-btn em-btn-main" href="/terminal">Open the OTC desk${p}</a></div></section>`;return`<div class="em-home em-st">
    ${s}${n}${i}
    <section class="em-wrap em-st-how" aria-labelledby="st-how-title">
      <div class="em-ch-copy"><span class="em-kick">What the chain sees</span><h2 id="st-how-title">The chart sees a fresh wallet.</h2>
        <p>A fresh wallet is funded out of Solana Privacy Rings and buys on the chart. Your own wallet signs nothing in the trade. Choose 1 to 3 wallets and a random wait, then move the coins back into your private balance or hold them there.</p>
        <a class="em-more" href="/docs#privacy">Read the privacy model${p}</a></div>
      <div class="em-split" data-card="stealth">${Y(a.coin,a.trace)}</div>
    </section>
    <div class="em-wrap em-foot-wrap">${a.foot||""}</div>
  </div>`}export{$a as a,B as b,K as c,W as d,E as e,G as f,X as g,Y as h,J as i,Q as j,ia as k,la as l,oa as m,ca as n,pa as o,fa as p,ya as q};
