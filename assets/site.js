/* ============================================================
   OKO Holding — site engine
   Lenis smooth-scroll · GSAP ScrollTrigger reveals · WebGL substrate
   · the receipt flow. Degrades safely: content is visible without JS.
   ============================================================ */
(function(){
  "use strict";
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ---------- 1. charged-substrate WebGL background ---------- */
  (function substrate(){
    var cv = document.getElementById('gl'); if(!cv) return;
    var gl = null; try{ gl = cv.getContext('webgl') || cv.getContext('experimental-webgl'); }catch(e){}
    if(!gl){ cv.style.display='none'; return; }
    var vs = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
    var fs = [
    "precision highp float;uniform vec2 R;uniform float T;uniform vec2 M;",
    "float hash(vec2 x){return fract(sin(dot(x,vec2(27.17,113.5)))*43758.5453);}",
    "float noise(vec2 x){vec2 i=floor(x),f=fract(x);float a=hash(i),b=hash(i+vec2(1,0)),c=hash(i+vec2(0,1)),d=hash(i+vec2(1,1));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}",
    "float fbm(vec2 x){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(x);x*=2.03;a*=.5;}return v;}",
    "void main(){vec2 uv=(gl_FragCoord.xy-.5*R)/R.y;vec2 mo=(M-.5*R)/R.y;float t=T*.045;",
    "vec2 q=uv*1.35;float f=fbm(q+vec2(t,t*.6)+fbm(q-t*.4)*0.8);float fil=smoothstep(.55,.95,f)*1.1;",
    "vec2 g=uv*7.0;vec2 gf=abs(fract(g)-.5);float grid=smoothstep(.02,.0,min(gf.x,gf.y));",
    "grid*=(.35+.65*noise(floor(g)*.5+t*2.0))*0.5;",
    "float d=length(uv);float core=exp(-d*1.7)*(.5+.5*sin(t*6.0));",
    "float mg=exp(-length(uv-mo)*3.2)*.6;",
    "vec3 volt=vec3(.30,.64,1.0),copper=vec3(.88,.65,.40),col=vec3(.02,.035,.06);",
    "col+=volt*fil*.6;col+=mix(volt,copper,smoothstep(.4,.9,f))*grid*1.4;col+=volt*core*.35;col+=copper*mg;",
    "col+=volt*pow(max(0.,1.-d*.9),3.0)*.08;col*=1.0-.55*smoothstep(.6,1.5,d);col=pow(col,vec3(.85));",
    "gl_FragColor=vec4(col,1.0);}"].join("\n");
    function mk(t,s){var sh=gl.createShader(t);gl.shaderSource(sh,s);gl.compileShader(sh);return sh;}
    var pr=gl.createProgram();gl.attachShader(pr,mk(gl.VERTEX_SHADER,vs));gl.attachShader(pr,mk(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
    if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){cv.style.display='none';return;}
    gl.useProgram(pr);
    var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
    var pl=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(pl);gl.vertexAttribPointer(pl,2,gl.FLOAT,false,0,0);
    var uR=gl.getUniformLocation(pr,'R'),uT=gl.getUniformLocation(pr,'T'),uM=gl.getUniformLocation(pr,'M');
    var mouse;
    function size(){var dp=Math.min(window.devicePixelRatio||1,1.6);cv.width=innerWidth*dp;cv.height=innerHeight*dp;cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';gl.viewport(0,0,cv.width,cv.height);mouse=[cv.width/2,cv.height/2];}
    size();addEventListener('resize',size);
    addEventListener('pointermove',function(e){var dp=Math.min(window.devicePixelRatio||1,1.6);mouse=[e.clientX*dp,(innerHeight-e.clientY)*dp];});
    var t0=performance.now();
    (function frame(now){var t=(now-t0)/1000;gl.uniform2f(uR,cv.width,cv.height);gl.uniform1f(uT,reduce?6.0:t);gl.uniform2f(uM,mouse[0],mouse[1]);gl.drawArrays(gl.TRIANGLES,0,3);if(!reduce)requestAnimationFrame(frame);})(performance.now());
  })();

  /* ---------- 2. nav solid on scroll ---------- */
  var nav=document.querySelector('nav.site');
  if(nav) addEventListener('scroll',function(){nav.classList.toggle('solid',window.scrollY>40);},{passive:true});

  /* ---------- 3. Lenis + GSAP reveals ---------- */
  var hasGSAP = typeof window.gsap!=='undefined' && typeof window.ScrollTrigger!=='undefined';
  var hasLenis = typeof window.Lenis!=='undefined';

  if(hasGSAP && !reduce){
    gsap.registerPlugin(ScrollTrigger);

    if(hasLenis){
      var lenis=new Lenis({duration:1.1, easing:function(x){return Math.min(1,1.001-Math.pow(2,-10*x));}, smoothWheel:true});
      lenis.on('scroll',ScrollTrigger.update);
      gsap.ticker.add(function(time){lenis.raf(time*1000);});
      gsap.ticker.lagSmoothing(0);
    }

    // single-element reveals
    gsap.utils.toArray('.rv').forEach(function(el){
      gsap.fromTo(el,{y:26,opacity:0},{y:0,opacity:1,duration:.95,ease:'expo.out',
        scrollTrigger:{trigger:el,start:'top 88%'}});
    });
    // staggered groups
    gsap.utils.toArray('.stg').forEach(function(group){
      gsap.fromTo(group.children,{y:22,opacity:0},{y:0,opacity:1,duration:.8,ease:'expo.out',stagger:.07,
        scrollTrigger:{trigger:group,start:'top 86%'}});
    });
    // mark reveal handled so CSS gate releases (we control opacity via gsap)
    document.documentElement.classList.remove('reveal');
  } else {
    // no gsap or reduced-motion → make sure everything is shown
    document.documentElement.classList.remove('reveal');
  }

  /* ---------- 4. the receipt flow (self-advancing) ---------- */
  (function receiptFlow(){
    var steps=document.querySelectorAll('.flow .fstep');
    if(!steps.length) return;
    var i=0;
    function light(){
      steps.forEach(function(s,k){ s.classList.toggle('on',k<=i); s.classList.toggle('live',k===i); });
      i=(i+1)%(steps.length+1);
      if(i===steps.length){ setTimeout(function(){ steps.forEach(function(s){s.classList.remove('on','live');}); i=0; light(); }, 1400); return; }
    }
    if(reduce){ steps.forEach(function(s){s.classList.add('on');}); return; }
    light(); setInterval(function(){ if(i<steps.length) light(); }, 1100);
  })();

  /* ---------- 5. count-up metrics ---------- */
  (function counters(){
    var els=document.querySelectorAll('[data-count]');
    if(!els.length || !hasGSAP || reduce){ els.forEach(function(e){e.textContent=e.getAttribute('data-count');}); return; }
    els.forEach(function(el){
      var end=parseFloat(el.getAttribute('data-count'))||0, pre=el.getAttribute('data-pre')||'', suf=el.getAttribute('data-suf')||'';
      var o={v:0};
      gsap.to(o,{v:end,duration:1.6,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%'},
        onUpdate:function(){el.textContent=pre+Math.round(o.v).toLocaleString()+suf;}});
    });
  })();
})();
