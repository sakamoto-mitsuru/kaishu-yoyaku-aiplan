function n(t){const r=[...t].length;return r===0?0:r<=70?1:Math.ceil(r/67)}function i(t,r){const e=(r??"").trim();return!e||t.trimStart().startsWith(e)?t:`${e}
${t}`}export{n as s,i as w};
