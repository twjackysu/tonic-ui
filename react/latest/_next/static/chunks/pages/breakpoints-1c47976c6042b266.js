(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{58980:function(e,t,n){"use strict";var o=n(12215),r=n(58693),s=(n(2784),n(92582)),a=n(70345),i=n(81436);t.Z=function(e){var t,n=e.theme,u=(0,r.useTheme)(),l=(0,r.useColorMode)(),c=(0,o.Z)(l,1)[0],p=(0,r.useColorStyle)({colorMode:c}),k=null!==(t=(0,o.Z)(p,1)[0][n])&&void 0!==t?t:u[n];if(!k)return"Theme field not found";"space"!==n&&"sizes"!==n||(k=Object.keys(k).filter((function(e){return!e.toString().match(/[qh]$/)})).reduce((function(e,t){return e[t]=k[t],e}),{}));return(0,i.jsx)(r.Box,{mb:"6x"},(0,i.jsx)(s.Z,null,"export const ".concat(n," = ").concat((0,a.Z)(k,!1))))}},70345:function(e,t){"use strict";t.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},94392:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var o=n(7896),r=n(59740),s=(n(2784),n(30876)),a=n(58980),i=["components"],u={};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,"Breakpoints"),(0,s.kt)("p",null,"To configure the default breakpoints used in responsive array values, add a\nbreakpoints array to your theme. These values will be used to generate\nmobile-first (i.e. min-width) media queries, which can then be used to apply\nresponsive styles. "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"breakpoints")," array is used at breakpoints theme scale.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"For example, you can write ",(0,s.kt)("inlineCode",{parentName:"p"},'<Box fontSize={["xs", "sm"]}/>')," to make the font size responsive.")),(0,s.kt)(a.Z,{theme:"breakpoints",mdxType:"ThemeParser"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'// responsive font size\n<Box fontSize={["xs", "sm", "md", "lg"]}>Breakpoints</Box>\n')),(0,s.kt)("h2",null,"Configuration Reference"),(0,s.kt)("p",null,"Except for breakpoints, colors, and spacing, all keys in the theme object map to one of the core themes. All keys can be replaced or extended."),(0,s.kt)("p",null,"For more information, see the complete properties ",(0,s.kt)("a",{href:"https://styled-system.com/table",target:"_blank"},"reference table"),"."))}l.isMDXComponent=!0},46681:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/breakpoints",function(){return n(94392)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=46681,e(e.s=t);var t}));var t=e.O();_N_E=t}]);