"use strict";(self.webpackChunkbaseshitter=self.webpackChunkbaseshitter||[]).push([[8512],{8512:(t,o,i)=>{i.d(o,{OpacityUpdater:()=>e});var a=i(4709);class e{constructor(t){this.container=t}init(t){const o=t.options.opacity;t.opacity=(0,a.V0)(o,1);const i=o.animation;i.enable&&(t.opacity.velocity=(0,a.Gu)(i.speed)/a.tZ*this.container.retina.reduceFactor,i.sync||(t.opacity.velocity*=(0,a.sZ)()))}isEnabled(t){var o,i,a,e;return!t.destroyed&&!t.spawning&&!!t.opacity&&t.opacity.enable&&((null!==(o=t.opacity.maxLoops)&&void 0!==o?o:0)<=0||(null!==(i=t.opacity.maxLoops)&&void 0!==i?i:0)>0&&(null!==(a=t.opacity.loops)&&void 0!==a?a:0)<(null!==(e=t.opacity.maxLoops)&&void 0!==e?e:0))}reset(t){t.opacity&&(t.opacity.time=0,t.opacity.loops=0)}update(t,o){this.isEnabled(t)&&t.opacity&&(0,a.Cr)(t,t.opacity,!0,t.options.opacity.animation.destroy,o)}}}}]);
//# sourceMappingURL=8512.bb649b03.chunk.js.map