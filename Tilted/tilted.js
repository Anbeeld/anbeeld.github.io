var Tilted;(()=>{var t={853:t=>{var e=.1,i="function"==typeof Float32Array;function s(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function r(t){return 3*t}function o(t,e,i){return((s(e,i)*t+n(e,i))*t+r(e))*t}function a(t,e,i){return 3*s(e,i)*t*t+2*n(e,i)*t+r(e)}function u(t){return t}t.exports=function(t,s,n,r){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===s&&n===r)return u;for(var c=i?new Float32Array(11):new Array(11),h=0;h<11;++h)c[h]=o(h*e,t,n);return function(i){return 0===i?0:1===i?1:o(function(i){for(var s=0,r=1;10!==r&&c[r]<=i;++r)s+=e;--r;var u=s+(i-c[r])/(c[r+1]-c[r])*e,h=a(u,t,n);return h>=.001?function(t,e,i,s){for(var n=0;n<4;++n){var r=a(e,i,s);if(0===r)return e;e-=(o(e,i,s)-t)/r}return e}(i,u,t,n):0===h?u:function(t,e,i,s,n){var r,a,u=0;do{(r=o(a=e+(i-e)/2,s,n)-t)>0?i=a:e=a}while(Math.abs(r)>1e-7&&++u<10);return a}(i,s,s+e,t,n)}(i),s,r)}}}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var s={};(()=>{"use strict";i.d(s,{default:()=>G});const t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let e;const n=new Uint8Array(16);function r(){if(!e){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");e=crypto.getRandomValues.bind(crypto)}return e(n)}const o=[];for(let t=0;t<256;++t)o.push((t+256).toString(16).slice(1));const a=function(e,i,s){if(t.randomUUID&&!i&&!e)return t.randomUUID();const n=(e=e||{}).random||(e.rng||r)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,i){s=s||0;for(let t=0;t<16;++t)i[s+t]=n[t];return i}return function(t,e=0){return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}(n)};function u(t,e){return parseFloat(t.toFixed(e))}var c,h;function d(t,e,i){return Math.min(i,Math.max(e,t))}function l(t){return d(t,-1,1)}function E(t,e){let i=e.elements.container.getBoundingClientRect();return{button:t instanceof TouchEvent?0:t.button,x:t instanceof TouchEvent?t.touches[0].clientX-i.left:t.clientX-i.left,y:t instanceof TouchEvent?t.touches[0].clientY-i.top:t.clientY-i.top}}function f(t,e){let i=E(t,e);0===i.button&&e.animationStorage.createSurfaceDrag(i)}function m(t){t.elements.container.addEventListener("mousemove",(e=>{!function(t,e){1===e.CONFIG.EDGE_MOVE_ENABLED.VALUE&&function(t,e){if(t.animationStorage.surfaceDragIsSet())return!1;let i={x:c.None,y:c.None};e.y<=t.CONFIG.EDGE_MOVE_AREA.VALUE?e.x<=t.CONFIG.EDGE_MOVE_AREA.VALUE?(i.x=c.Left,i.y=c.Top):e.x>=t.containerWidth-t.CONFIG.EDGE_MOVE_AREA.VALUE?(i.x=c.Right,i.y=c.Top):i.y=c.Top:e.y>=t.containerHeight-t.CONFIG.EDGE_MOVE_AREA.VALUE?e.x<=t.CONFIG.EDGE_MOVE_AREA.VALUE?(i.x=c.Left,i.y=c.Bottom):e.x>=t.containerWidth-t.CONFIG.EDGE_MOVE_AREA.VALUE?(i.x=c.Right,i.y=c.Bottom):i.y=c.Bottom:e.x<=t.CONFIG.EDGE_MOVE_AREA.VALUE?i.x=c.Left:e.x>=t.containerWidth-t.CONFIG.EDGE_MOVE_AREA.VALUE&&(i.x=c.Right);let s=0,n=0;i.y===c.None&&i.x===c.None||(i.y===c.Top?n=(t.CONFIG.EDGE_MOVE_AREA.VALUE+1-e.y)/(t.CONFIG.EDGE_MOVE_AREA.VALUE+1)*-1:i.y===c.Bottom&&(n=(t.CONFIG.EDGE_MOVE_AREA.VALUE+1-(t.containerHeight-e.y))/(t.CONFIG.EDGE_MOVE_AREA.VALUE+1)),i.x===c.Left?s=(t.CONFIG.EDGE_MOVE_AREA.VALUE+1-e.x)/(t.CONFIG.EDGE_MOVE_AREA.VALUE+1)*-1:i.x===c.Right&&(s=(t.CONFIG.EDGE_MOVE_AREA.VALUE+1-(t.containerWidth-e.x))/(t.CONFIG.EDGE_MOVE_AREA.VALUE+1)));let r=!1;(0===s||s>0&&t.coords.x>=t.max.x||s<0&&t.coords.x<=t.min.x)&&(r=!0);let o=!1;(0===n||n>0&&t.coords.y>=t.max.y||n<0&&t.coords.y<=t.min.y)&&(o=!0),r&&o?t.animationStorage.surfaceEdgeIsSet()&&t.animationStorage.destroySurfaceEdge():t.animationStorage.surfaceEdgeIsSet()?t.animationStorage.surfaceEdge.update({x:s,y:n}):(t.animationStorage.createSurfaceEdge({x:s,y:n}),t.animationExecutor.initiate())}(e,E(t,e))}(e,t)})),t.elements.container.addEventListener("wheel",(e=>{!function(t,e){t.preventDefault(),e.scale.stepAndGlide(function(t){return{x:t.deltaX,y:t.deltaY}}(t).y<0?1:-1,E(t,e))}(e,t)})),function(t){function e(e){t.animationStorage.surfaceDragIsSet()&&t.animationStorage.surfaceDrag.step(E(e,t))}function i(){t.animationStorage.destroySurfaceDrag()}t.elements.container.addEventListener("mousemove",e),t.elements.container.addEventListener("touchmove",e),document.body.addEventListener("mouseup",i),document.body.addEventListener("touchend",i)}(t),t.elements.container.addEventListener("mousedown",(e=>{f(e,t)})),t.elements.container.addEventListener("touchstart",(e=>{f(e,t)})),document.body.addEventListener("keydown",(e=>{!function(t,e){e.elements.container.matches(":hover")&&("Add"===t.key||"+"===t.key?e.scale.step(1):"Subtract"!==t.key&&"-"!==t.key||e.scale.step(-1))}(e,t)})),t.elements.controlsZoomIn.addEventListener("click",(()=>{t.scale.stepAndGlide(1)})),t.elements.controlsZoomOut.addEventListener("click",(()=>{t.scale.stepAndGlide(-1)})),t.elements.container.ondragstart=()=>!1}!function(t){t.Top="top",t.Bottom="bottom",t.Left="left",t.Right="right",t.None="none"}(c||(c={})),function(t){t.Angle="angle",t.Color="color",t.Integer="integer",t.Number="number",t.Length="length",t.Time="time"}(h||(h={}));class A{constructor(t,e){this.executing=!1,this.surface=t,this.animationStorage=e}initiate(){this.executing||(this.executing=!0,this.step())}step(){let t=performance.now();requestAnimationFrame((()=>{this.executing=this.stepSurfaceGlide(t)||this.stepSurfaceEdge(t),this.executing&&this.step()}))}stepSurfaceGlide(t){if(!this.animationStorage.surfaceGlideIsSet())return!1;let e=this.animationStorage.surfaceGlide.step(t);return e||this.animationStorage.destroySurfaceGlide(),e}stepSurfaceEdge(t){if(!this.animationStorage.surfaceEdgeIsSet())return!1;let e=this.animationStorage.surfaceEdge.step(t);return e||this.animationStorage.destroySurfaceEdge(),e}}class I{constructor(t){this.timestampStart=0,this.timestampLast=0,this.destroyed=!1,this.surface=t,this.timestampStart=this.timestampLast=performance.now()}destroy(){this.destroyed=!0}}var x=i(853),y=i.n(x);class _ extends I{constructor(t,e,i,s){super(t),this.current={x:0,y:0},this.initial={x:t.coords.x,y:t.coords.y},this.target={x:this.initial.x+e.x,y:this.initial.y+e.y},this.vector={x:{value:Math.abs(e.x),sign:e.x>0?1:-1},y:{value:Math.abs(e.y),sign:e.y>0?1:-1}},this.animationTime=i,this.bezierEasing=y()(s[0],s[1],s[2],s[3]),this.surface.CONFIG.DEBUG_MODE.VALUE&&console.log("Glide created: x "+this.vector.x.value+", y "+this.vector.y.value+", initial.x "+this.initial.x+", initial.y "+this.initial.y+", target.x "+this.target.x+", target.y "+this.target.y)}step(t){if(this.destroyed)return!1;let e=l((t-this.timestampStart)/this.animationTime),i=l(this.bezierEasing(e));if(i>=1)return this.surface.CONFIG.DEBUG_MODE.VALUE&&console.log("Glide finished: "+(t-this.timestampStart)+"ms, surface.coords.x "+this.surface.coords.x+", surface.coords.y "+this.surface.coords.y+", target.x "+this.target.x+", target.y "+this.target.y),this.surface.moveTo({x:this.target.x,y:this.target.y}),!1;{let s={x:0,y:0};return this.vector.x.value>0&&this.vector.x.value>this.current.x&&(s.x=u(Math.max(0,this.vector.x.value*i-this.current.x),this.surface.CONFIG.COORD_ROUNDING_INTERIM.VALUE)),this.vector.y.value>0&&this.vector.y.value>this.current.y&&(s.y=u(Math.max(0,this.vector.y.value*i-this.current.y),this.surface.CONFIG.COORD_ROUNDING_INTERIM.VALUE)),(s.x>0||s.y>0)&&(this.surface.move({x:s.x*this.vector.x.sign,y:s.y*this.vector.y.sign},this.surface.CONFIG.COORD_ROUNDING_INTERIM.VALUE,this.surface.CONFIG.COORD_ROUNDING_INTERIM.VALUE),this.current.x=u(this.current.x+s.x,this.surface.CONFIG.COORD_ROUNDING_INTERIM.VALUE),this.current.y=u(this.current.y+s.y,this.surface.CONFIG.COORD_ROUNDING_INTERIM.VALUE),this.timestampLast=t,this.surface.CONFIG.DEBUG_MODE.VALUE&&console.log("time "+(t-this.timestampStart)+"ms, timeRatio "+e+", moveRatio "+i+", x "+s.x+", y "+s.y)),!0}}}class O extends I{constructor(t,e){super(t),this.vector=e}update(t){this.vector.x!==t.x&&(this.vector.x=t.x),this.vector.y!==t.y&&(this.vector.y=t.y)}step(t){if(this.destroyed)return!1;let e=Math.max(1,t-this.timestampLast)/10,i=this.surface.CONFIG.EDGE_MOVE_SPEED.VALUE*this.vector.x/this.surface.scale.value*e,s=this.surface.CONFIG.EDGE_MOVE_SPEED.VALUE*this.vector.y/this.surface.scale.value*e;return this.timestampLast=t,this.surface.move({x:i,y:s})}}class p extends I{constructor(t,e){super(t),this.prev={x:0,y:0},this.cumulated={x:0,y:0},this.surface.cancelOngoingMoves(),this.id=a(),this.prev={x:e.x,y:e.y}}step(t){let e=this.surface.move({x:(this.prev.x-t.x)/this.surface.scale.value,y:(this.prev.y-t.y)/this.surface.scale.value});return this.cumulated={x:this.cumulated.x+this.prev.x-t.x,y:this.cumulated.y+this.prev.y-t.y},this.prev={x:t.x,y:t.y},e}destroy(){performance.now()-this.timestampStart<this.surface.CONFIG.DURATION_FOR_THROW.VALUE&&this.throw(),this.destroyed=!0}throw(){this.surface.glide({x:this.cumulated.x*this.surface.CONFIG.THROW_MULTIPLIER.VALUE,y:this.cumulated.y*this.surface.CONFIG.THROW_MULTIPLIER.VALUE},this.surface.CONFIG.ANIMATION_THROW_TIME.VALUE,[0,.55,.45,1])}}class L{constructor(t){this.surfaceGlide=null,this.surfaceEdge=null,this.surfaceDrag=null,this.surface=t}createSurfaceGlide(t,e,i){this.surfaceGlide=new _(this.surface,t,e,i)}destroySurfaceGlide(){this.surfaceGlideIsSet()&&(this.surfaceGlide.destroy(),this.surfaceGlide=null)}surfaceGlideIsSet(){return null!==this.surfaceGlide}createSurfaceEdge(t){this.surfaceEdge=new O(this.surface,t)}destroySurfaceEdge(){this.surfaceEdgeIsSet()&&(this.surfaceEdge.destroy(),this.surfaceEdge=null)}surfaceEdgeIsSet(){return null!==this.surfaceEdge}createSurfaceDrag(t){this.surfaceDrag=new p(this.surface,t)}destroySurfaceDrag(){this.surfaceDragIsSet()&&(this.surfaceDrag.destroy(),this.surfaceDrag=null)}surfaceDragIsSet(){return null!==this.surfaceDrag}}function N(t){return"\n  @property --tilted-container-width-"+t.uuid+' {\n    syntax: "<length>";\n    inherits: true;\n    initial-value: '+t.containerWidth+"px;\n  }\n  @property --tilted-container-height-"+t.uuid+' {\n    syntax: "<length>";\n    inherits: true;\n    initial-value: '+t.containerHeight+"px;\n  }\n\n  @property --tilted-surface-width-"+t.uuid+' {\n    syntax: "<length>";\n    inherits: true;\n    initial-value: '+t.surfaceWidth+"px;\n  }\n  @property --tilted-surface-height-"+t.uuid+' {\n    syntax: "<length>";\n    inherits: true;\n    initial-value: '+t.surfaceHeight+"px;\n  }"}class g{constructor(t,e){this.surface=t,this._value=e,this.surface.updateSkew(this._value),this.surface.elements.scale.classList.add("tilted-notransition-"+this.surface.uuid),this.surface.elements.scale.style.transform="scale("+this._value+") perspective("+this.surface.CONFIG.PERSPECTIVE_DISTANCE.VALUE+"px) rotate3d(1, 0, 0, "+this.surface.skew.x+"deg)",this.surface.elements.scale.offsetHeight,this.surface.elements.scale.classList.remove("tilted-notransition-"+this.surface.uuid)}get value(){return this._value}change(t){if(0===t)return!1;let e=this._value;return this._value=u(this._value+t,this.surface.CONFIG.SCALE_ROUNDING.VALUE),this._value=Math.max(this._value,this.surface.CONFIG.SCALE_MIN.VALUE),this._value=Math.min(this._value,this.surface.CONFIG.SCALE_MAX.VALUE),e!==this._value&&(this.surface.updateSkew(),this.surface.elements.scale.style.transform="scale("+this._value+") perspective("+this.surface.CONFIG.PERSPECTIVE_DISTANCE.VALUE+"px) rotate3d(1, 0, 0, "+this.surface.skew.x+"deg)",this.surface.CONFIG.DEBUG_MODE.VALUE&&this.surface.log([{desc:"scale",from:e,to:this._value}]),!0)}step(t){let e=t>0;return this.surface.scale.change(t*this.surface.scale.stepSize(e))}stepAndGlide(t,e=null){if(this.surface.scale.step(t)&&null!==e){let i=t>0,s=this.surface.scale.glidePerStep(e,i);this.surface.glide({x:s.x,y:s.y})}}stepSize(t){return t&&this._value<this.surface.CONFIG.SCALE_DEFAULT.VALUE||!t&&this._value<=this.surface.CONFIG.SCALE_DEFAULT.VALUE?(this.surface.CONFIG.SCALE_DEFAULT.VALUE-this.surface.CONFIG.SCALE_MIN.VALUE)*this.surface.CONFIG.SCALE_STEP.VALUE:(this.surface.CONFIG.SCALE_MAX.VALUE-this.surface.CONFIG.SCALE_DEFAULT.VALUE)*this.surface.CONFIG.SCALE_STEP.VALUE}glidePerStep(t,e){let i=e?1:-1;return{x:u((t.x-this.surface.containerWidth/2)*this.surface.CONFIG.SCALE_GLIDE.VALUE/this._value,this.surface.CONFIG.COORD_ROUNDING_FINAL.VALUE)*i,y:u((t.y-this.surface.containerHeight/2)*this.surface.CONFIG.SCALE_GLIDE.VALUE/this._value,this.surface.CONFIG.COORD_ROUNDING_FINAL.VALUE)*i}}}class G{get viewport(){return{x:this._viewport.x,y:this._viewport.y}}get coords(){return{x:this._coords.x,y:this._coords.y}}get skew(){return{x:this._skew.x,y:this._skew.y}}constructor(t,e,i={}){this.uuid=a(),this._viewport={x:0,y:0},this._coords={x:0,y:0},this._skew={x:0,y:0},this.CONFIG=function(t){let e={DEBUG_MODE:0,SCALE_STEP:.2,SCALE_MIN:.25,SCALE_DEFAULT:.5,SCALE_MAX:1,SCALE_ROUNDING:3,SCALE_GLIDE:.25,PERSPECTIVE_DISTANCE:1e3,SKEW_X_MAX:35,EDGE_MOVE_ENABLED:0,EDGE_MOVE_AREA:20,EDGE_MOVE_SPEED:10,ANIMATION_SCALE_TIME:500,ANIMATION_GLIDE_TIME:500,DURATION_FOR_THROW:150,THROW_MULTIPLIER:4,ANIMATION_THROW_TIME:1e3,COORD_ROUNDING_INTERIM:1,COORD_ROUNDING_FINAL:0};for(const i in t)if(e.hasOwnProperty(i)){let s=t[i];!0===s?s=1:!1===s&&(s=0),e[i]=s}return{DEBUG_MODE:{VALUE:e.DEBUG_MODE,TYPE:h.Integer},SCALE_STEP:{VALUE:e.SCALE_STEP,TYPE:h.Number},SCALE_MIN:{VALUE:e.SCALE_MIN,TYPE:h.Number},SCALE_DEFAULT:{VALUE:e.SCALE_DEFAULT,TYPE:h.Number},SCALE_MAX:{VALUE:e.SCALE_MAX,TYPE:h.Number},SCALE_ROUNDING:{VALUE:e.SCALE_ROUNDING,TYPE:h.Number},SCALE_GLIDE:{VALUE:e.SCALE_GLIDE,TYPE:h.Number},PERSPECTIVE_DISTANCE:{VALUE:Math.round(e.PERSPECTIVE_DISTANCE),TYPE:h.Length},SKEW_X_MAX:{VALUE:Math.round(e.SKEW_X_MAX),TYPE:h.Angle},EDGE_MOVE_ENABLED:{VALUE:e.EDGE_MOVE_ENABLED,TYPE:h.Integer},EDGE_MOVE_AREA:{VALUE:Math.round(e.EDGE_MOVE_AREA),TYPE:h.Length},EDGE_MOVE_SPEED:{VALUE:Math.round(e.EDGE_MOVE_SPEED),TYPE:h.Length},ANIMATION_SCALE_TIME:{VALUE:Math.round(e.ANIMATION_SCALE_TIME),TYPE:h.Time},ANIMATION_GLIDE_TIME:{VALUE:Math.round(e.ANIMATION_GLIDE_TIME),TYPE:h.Time},DURATION_FOR_THROW:{VALUE:Math.round(e.DURATION_FOR_THROW),TYPE:h.Time},THROW_MULTIPLIER:{VALUE:e.THROW_MULTIPLIER,TYPE:h.Number},ANIMATION_THROW_TIME:{VALUE:Math.round(e.ANIMATION_THROW_TIME),TYPE:h.Time},COORD_ROUNDING_INTERIM:{VALUE:e.COORD_ROUNDING_INTERIM,TYPE:h.Integer},COORD_ROUNDING_FINAL:{VALUE:e.COORD_ROUNDING_FINAL,TYPE:h.Integer}}}(i),this.elements=this.setupElements(t,e),this.styles=this.setupStyles(),this.animationStorage=new L(this),this.animationExecutor=new A(this,this.animationStorage),m(this),this.updateViewport(),new ResizeObserver((()=>{this.updateCssDynamic(),this.updateViewport(),this.enforceLimits()})).observe(this.elements.container),new ResizeObserver((()=>{this.updateCssDynamic(),this.enforceLimits()})).observe(this.elements.surface),this.scale=new g(this,this.CONFIG.SCALE_DEFAULT.VALUE)}setupElements(t,e){t.classList.add("tilted-container-"+this.uuid);let i=document.createElement("div");i.classList.add("tilted-viewport-"+this.uuid);let s=document.createElement("div");s.classList.add("tilted-scale-"+this.uuid);let n=document.createElement("div");n.classList.add("tilted-position-"+this.uuid),e.classList.add("tilted-surface-"+this.uuid);let r=document.createElement("div");r.classList.add("tilted-controls-"+this.uuid);let o=document.createElement("div");o.classList.add("tilted-controls-zoom-in-"+this.uuid);let a=document.createElement("div");return a.classList.add("tilted-controls-zoom-out-"+this.uuid),r.appendChild(o),r.appendChild(a),n.appendChild(e),s.appendChild(n),i.appendChild(s),t.appendChild(i),t.appendChild(r),{container:t,controls:r,controlsZoomIn:o,controlsZoomOut:a,viewport:i,scale:s,position:n,surface:e}}setupStyles(){let t=document.createElement("style");t.classList.add("tilted-css-static-"+this.uuid),t.innerHTML=function(t){let e="";for(const i in t.CONFIG){let s="";"length"===t.CONFIG[i].TYPE?s="px":"angle"===t.CONFIG[i].TYPE?s="deg":"time"===t.CONFIG[i].TYPE&&(s="ms"),e+=`@property --${i} { `,e+=`syntax: "<${t.CONFIG[i].TYPE}>"; `,e+="inherits: true; ",e+=`initial-value: ${t.CONFIG[i].VALUE}${s}; } `}return e+="\n\n  .tilted-container-"+t.uuid+" {\n    position: relative !important;\n\n    cursor: move;\n    cursor: grab;\n    cursor: -moz-grab;\n    cursor: -webkit-grab;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .tilted-container-"+t.uuid+":active {\n    cursor: grabbing;\n    cursor: -moz-grabbing;\n    cursor: -webkit-grabbing;\n  }\n\n  .tilted-controls-"+t.uuid+" {\n    position: absolute;\n    top: 100px;\n    right: 30px;\n    width: 30px;\n    border-radius: 8px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    box-sizing: content-box;\n    overflow: hidden;\n  }\n\n  .tilted-controls-zoom-in-"+t.uuid+",\n  .tilted-controls-zoom-out-"+t.uuid+" {\n    position: relative;\n    width: 30px;\n    height: 30px;\n    background: #ffffffcc;\n    cursor: pointer;\n    box-sizing: content-box;\n  }\n  .tilted-controls-zoom-in-"+t.uuid+"{\n    border-bottom: 1px solid #444444;\n  }\n  .tilted-controls-zoom-in-"+t.uuid+":active,\n  .tilted-controls-zoom-out-"+t.uuid+":active {\n    background: #ffffff;\n  }\n  \n    \n\n  \n  .tilted-controls-zoom-in-"+t.uuid+":before,\n  .tilted-controls-zoom-in-"+t.uuid+":after,\n  .tilted-controls-zoom-out-"+t.uuid+':before {\n    content: "";\n    display: block;\n    position: absolute;\n    background: #444444;\n  }\n\n  .tilted-controls-zoom-in-'+t.uuid+":before,\n  .tilted-controls-zoom-out-"+t.uuid+":before {\n    height: 2px;\n    width: 18px;\n    top: 14px;\n    left: 6px;\n  }\n  .tilted-controls-zoom-in-"+t.uuid+":after {\n    height: 18px;\n    width: 2px;\n    top: 6px;\n    left: 14px;\n  }\n  \n  .tilted-viewport-"+t.uuid+" {\n    width: var(--tilted-surface-width-"+t.uuid+") !important;\n    height: var(--tilted-surface-height-"+t.uuid+") !important;\n  \n    position: relative !important;\n  \n    will-change: top, left;\n  }\n  \n  .tilted-scale-"+t.uuid+" {   \n    width: var(--tilted-surface-width-"+t.uuid+") !important;\n    height: var(--tilted-surface-height-"+t.uuid+") !important;\n  \n    transition: transform var(--ANIMATION_SCALE_TIME) !important;\n  \n    will-change: transform;\n  }\n  \n  .tilted-position-"+t.uuid+" {\n    width: var(--tilted-surface-width-"+t.uuid+") !important;\n    height: var(--tilted-surface-height-"+t.uuid+") !important;\n\n    position: relative !important;\n    top: 0;\n    left: 0;\n    \n    will-change: transform;\n  }\n  \n  .tilted-surface-"+t.uuid+" {\n    position: relative !important;\n    \n    overflow: visible !important;\n  \n    z-index: 100 !important;\n  }\n    \n  .tilted-notransition-"+t.uuid+" {\n    -webkit-transition: none !important;\n    -moz-transition: none !important;\n    -o-transition: none !important;\n    transition: none !important;\n  }",e}(this),document.head.appendChild(t);let e=document.createElement("style");return e.classList.add("tilted-css-dynamic-"+this.uuid),e.innerHTML=N(this),document.head.appendChild(e),{static:t,dynamic:e}}updateCssDynamic(){this.styles.dynamic.innerHTML=N(this)}get containerWidth(){return this.elements.container.offsetWidth}get containerHeight(){return this.elements.container.offsetHeight}get surfaceWidth(){return this.elements.surface.offsetWidth}get surfaceHeight(){return this.elements.surface.offsetHeight}get limit(){return{x:Math.round(this.surfaceWidth/2-.25*this.containerWidth),y:Math.round(this.surfaceHeight/2-.25*this.containerHeight)}}get min(){return{x:-1*this.limit.x,y:-1*this.limit.y}}get max(){return{x:this.limit.x,y:this.limit.y}}move(t,e=this.CONFIG.COORD_ROUNDING_INTERIM.VALUE,i=this.CONFIG.COORD_ROUNDING_FINAL.VALUE){if(e>=0&&(t.x=u(t.x,e),t.y=u(t.y,e)),0===t.x&&0===t.y)return!1;let s={x:d(u(this.coords.x+t.x,i),this.min.x,this.max.x),y:d(u(this.coords.y+t.y,i),this.min.y,this.max.y)};return(s.x!==this.coords.x||s.y!==this.coords.y)&&(this.CONFIG.DEBUG_MODE.VALUE&&this.log([{desc:"move coords.x",from:this.coords.x,to:s.x},{desc:"move coords.y",from:this.coords.y,to:s.y}]),this._coords=s,this.elements.position.style.transform="translate3d("+-1*this.coords.x+"px, "+-1*this.coords.y+"px, 0)",!0)}moveTo(t,e=this.CONFIG.COORD_ROUNDING_FINAL.VALUE){return t.x=u(t.x,e),t.y=u(t.y,e),(this.coords.x!==t.x||this.coords.y!==t.y)&&(this.CONFIG.DEBUG_MODE.VALUE&&this.log([{desc:"moveTo coords.x",from:this.coords.x,to:t.x},{desc:"moveTo coords.y",from:this.coords.y,to:t.y}]),this.move({x:t.x-this.coords.x,y:t.y-this.coords.y},-1,e))}glide(t,e=this.CONFIG.ANIMATION_GLIDE_TIME.VALUE,i=[.25,.1,.25,1],s=this.CONFIG.COORD_ROUNDING_INTERIM.VALUE,n=this.CONFIG.COORD_ROUNDING_FINAL.VALUE){return n>=0&&(t.x=u(this.coords.x+t.x,n)-this.coords.x,t.y=u(this.coords.y+t.y,n)-this.coords.y),s>=0&&(t.x=u(t.x,s),t.y=u(t.y,s)),(0!==t.x||0!==t.y)&&(this.CONFIG.DEBUG_MODE.VALUE&&this.log([{desc:"glide coords.x",to:t.x},{desc:"glide coords.y",to:t.y}]),this.animationStorage.createSurfaceGlide({x:t.x,y:t.y},e,i),this.animationExecutor.initiate(),!0)}glideTo(t,e=this.CONFIG.ANIMATION_GLIDE_TIME.VALUE,i=[.25,.1,.25,1],s=this.CONFIG.COORD_ROUNDING_FINAL.VALUE){return t.x=u(t.x,s),t.y=u(t.y,s),(this.coords.x!==t.x||this.coords.y!==t.y)&&(this.CONFIG.DEBUG_MODE.VALUE&&this.log([{desc:"glideTo coords.x",from:this.coords.x,to:t.x},{desc:"glideTo coords.y",from:this.coords.y,to:t.y}]),this.glide({x:t.x-this.coords.x,y:t.y-this.coords.y},e,i,-1,s))}updateViewport(){this._viewport={x:0-this.surfaceWidth/2+this.containerWidth/2,y:0-this.surfaceHeight/2+this.containerHeight/2},this.elements.viewport.style.top=this.viewport.y+"px",this.elements.viewport.style.left=this.viewport.x+"px"}updateSkew(t=null){null===t&&(t=this.scale.value);let e=(t-this.CONFIG.SCALE_MIN.VALUE)/(this.CONFIG.SCALE_MAX.VALUE-this.CONFIG.SCALE_MIN.VALUE);this._skew={x:u(e*this.CONFIG.SKEW_X_MAX.VALUE,2),y:0}}log(t=!1){if(0===this.CONFIG.DEBUG_MODE.VALUE)return;let e="";if(t)for(let i of t)e+=i.desc+(void 0!==i.from?" from "+i.from:"")+(void 0!==i.to?" to "+i.to:"")+"\n";console.log(e+`x: ${this.coords.x}\n`+`y: ${this.coords.y}\n`+`limit.x: ${this.limit.x}\n`+`limit.y: ${this.limit.y}\n`+`scale: ${this.scale.value}`)}cancelOngoingMoves(){this.animationStorage.destroySurfaceGlide()}enforceLimits(){this.moveTo({x:d(this.coords.x,this.min.x,this.max.x),y:d(this.coords.y,this.min.y,this.max.y)})}}})(),Tilted=s.default})();