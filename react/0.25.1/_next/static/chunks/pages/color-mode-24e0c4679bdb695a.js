(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3692],{26703:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return d}});var r=n(7896),t=n(59740),l=(n(2784),n(30876)),a=["components"],i={};function d(e){var o=e.components,n=(0,t.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},i,n,{components:o,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Color Modes"),(0,l.kt)("h3",null,"ColorModeProvider"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ColorModeProvider")," to use color mode in your application. The color mode value can be one of ",(0,l.kt)("inlineCode",{parentName:"p"},"dark")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"light"),". By default, the color mode is ",(0,l.kt)("inlineCode",{parentName:"p"},"light")," if the value is not explicitly specified."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"import React from 'react';\nimport {\n  ThemeProvider,\n  ColorModeProvider,\n  ColorStyleProvider,\n} from '@trendmicro/react-styled-ui';\nimport App from './App';\n\nconst initialColorMode = 'dark';\n\nfunction Example({ children }) {\n  return (\n    <ThemeProvider>\n      <ColorModeProvider value={initialColorMode}>\n        <ColorStyleProvider>\n          <App />\n        </ColorStyleProvider>\n      </ColorModeProvider>\n    </ThemeProvider>\n  );\n}\n")),(0,l.kt)("h3",null,"useColorMode Hook"),(0,l.kt)("p",null,"To handle color mode manually in your application, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"useColorMode")," Hook to get current color mode or change the color mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"// App.jsx\nimport { css, Global } from '@emotion/react';\nimport { Button, useColorMode } from '@trendmicro/react-styled-ui';\nimport React from 'react';\n\nconst App = () => {\n  const [colorMode, setColorMode] = useColorMode(); // One of: 'dark', 'light'\n  const toggleColorMode = () => {\n    const nextColorMode = {\n      'dark': 'light',\n      'light': 'dark',\n    }[colorMode];\n    setColorMode(nextColorMode);\n  };\n\n  return (\n    <>\n      <Global\n        styles={css`\n          :root {\n            color-scheme: ${colorMode};\n          }\n        `}\n      />\n      <Button onClick={toggleColorMode}>\n        Toggle Color Mode\n      </Button>\n    </>\n  );\n};\n")),(0,l.kt)("h3",null,"Color schemes"),(0,l.kt)("p",null,"To opt the entire page into the user's color scheme preferences declare ",(0,l.kt)("inlineCode",{parentName:"p"},"color-scheme")," on the ",(0,l.kt)("inlineCode",{parentName:"p"},":root")," element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<Global\n  styles={css`\n    :root {\n      color-scheme: dark;\n    }\n  `}\n/>\n")),(0,l.kt)("h3",null,"DarkMode / LightMode"),(0,l.kt)("p",null,"To force a specific color mode, wrap your component in ",(0,l.kt)("inlineCode",{parentName:"p"},"LightMode")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"DarkMode"),", it will override the global color mode and set the color scheme to ",(0,l.kt)("inlineCode",{parentName:"p"},"dark")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"light")," respectively."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flex>\n  <DarkMode bg="gray:90" color="white:primary">\n    <Text px="4x" py="3x">\n      This is dark mode\n    </Text>\n  </DarkMode>\n  <Space width="4x" />\n  <LightMode bg="gray:10" color="black:primary">\n    <Text px="4x" py="3x">\n      This is light mode\n    </Text>\n  </LightMode>\n</Flex>\n')))}d.isMDXComponent=!0},77346:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/color-mode",function(){return n(26703)}])}},function(e){e.O(0,[9774,2888,179],(function(){return o=77346,e(e.s=o);var o}));var o=e.O();_N_E=o}]);