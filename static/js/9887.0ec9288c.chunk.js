"use strict";(self.webpackChunkbaseshitter=self.webpackChunkbaseshitter||[]).push([[9887],{9887:(o,e,i)=>{i.d(e,{StrokeColorUpdater:()=>l});var t=i(4709);class l{constructor(o){this.container=o}init(o){var e,i,l;const n=this.container,r=o.options,s=(0,t.wA)(r.stroke,o.id,r.reduceDuplicates);o.strokeWidth=(0,t.Gu)(s.width)*n.retina.pixelRatio,o.strokeOpacity=(0,t.Gu)(null!==(e=s.opacity)&&void 0!==e?e:1),o.strokeAnimation=null===(i=s.color)||void 0===i?void 0:i.animation;const a=null!==(l=(0,t.lN)(s.color))&&void 0!==l?l:o.getFillColor();a&&(o.strokeColor=(0,t.bS)(a,o.strokeAnimation,n.retina.reduceFactor))}isEnabled(o){const e=o.strokeAnimation,{strokeColor:i}=o;return!o.destroyed&&!o.spawning&&!!e&&(void 0!==(null===i||void 0===i?void 0:i.h.value)&&i.h.enable||void 0!==(null===i||void 0===i?void 0:i.s.value)&&i.s.enable||void 0!==(null===i||void 0===i?void 0:i.l.value)&&i.l.enable)}update(o,e){this.isEnabled(o)&&(0,t.PB)(o.strokeColor,e)}}}}]);
//# sourceMappingURL=9887.0ec9288c.chunk.js.map