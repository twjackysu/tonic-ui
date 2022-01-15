(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4927],{47498:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var a=n(7896),r=n(59740),l=(n(2784),n(30876)),c=["components"],o={};function k(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Checkbox"),(0,l.kt)("p",null,"Use a ",(0,l.kt)("inlineCode",{parentName:"p"},"Checkbox")," in forms when a user needs to select multiple values from a list of options."),(0,l.kt)("p",null,"Since native HTML checkboxes are 100% accessible by default, a common ",(0,l.kt)("a",{parentName:"p",href:"https://dev.to/lkopacz/create-custom-keyboard-accessible-checkboxes-2036"},"CSS technique")," is used to style checkboxes."),(0,l.kt)("h2",null,"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Checkbox } from '@tonic-ui/react';\n")),(0,l.kt)("h2",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Checkbox defaultChecked>Checkbox</Checkbox>\n")),(0,l.kt)("h3",null,"Colors"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"variantColor")," prop to change the color scheme of the checkbox. ",(0,l.kt)("inlineCode",{parentName:"p"},"variantColor")," can be any color key with key ",(0,l.kt)("inlineCode",{parentName:"p"},"50")," (hover) or ",(0,l.kt)("inlineCode",{parentName:"p"},"60")," (checked, active) that exist in ",(0,l.kt)("inlineCode",{parentName:"p"},"theme.colors"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="6x">\n  <Checkbox variantColor="red" defaultChecked>\n    Checkbox\n  </Checkbox>\n  <Checkbox variantColor="green" defaultChecked>\n    Checkbox\n  </Checkbox>\n  <Checkbox variantColor="purple" indeterminate>\n    Checkbox\n  </Checkbox>\n</Stack>\n')),(0,l.kt)("h3",null,"Sizes"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," prop to change the size of the checkbox. You can set the value to ",(0,l.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"md"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"lg"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="4x">\n  <Checkbox size="sm">Checkbox</Checkbox>\n  <Checkbox size="md">Checkbox</Checkbox>\n  <Checkbox size="lg">Checkbox</Checkbox>\n</Stack>\n')),(0,l.kt)("h3",null,"States"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="6x" alignItems="center">\n  <Stack spacing="2x" alignItems="center">\n    <Checkbox>Checkbox</Checkbox>\n    <Checkbox disabled>Checkbox</Checkbox>\n  </Stack>\n  <Stack spacing="2x" alignItems="center">\n    <Checkbox defaultChecked>Checkbox</Checkbox>\n    <Checkbox disabled defaultChecked>Checkbox</Checkbox>\n  </Stack>\n  <Stack spacing="2x" alignItems="center">\n    <Checkbox indeterminate>Checkbox</Checkbox>\n    <Checkbox disabled indeterminate>Checkbox</Checkbox>\n  </Stack>\n</Stack>\n')),(0,l.kt)("h3",null,"Indeterminate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'function IndeterminateExample() {\n  const [checkedItems, setCheckedItems] = React.useState([true, false]);\n  const allChecked = checkedItems.every(Boolean);\n  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;\n\n  return (\n    <>\n      <Checkbox\n        checked={allChecked}\n        indeterminate={isIndeterminate}\n        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}\n        children="Parent Checkbox"\n      />\n      <Stack direction="column" pl="6x" mt="1x" spacing="1x" shouldWrapChildren>\n        <Checkbox\n          checked={checkedItems[0]}\n          onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}\n          children="Child Checkbox 1"\n        />\n        <Checkbox\n          checked={checkedItems[1]}\n          onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}\n          children="Child Checkbox 2"\n        />\n      </Stack>\n    </>\n  );\n}\n')),(0,l.kt)("h2",null,"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," attribute of the input field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of a input field in a checkbox. The name is useful for form submissions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string ","|"," number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The value for checkbox input. This is the return value for form submissions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"variantColor"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The color of the checkbox when it is selected. The color should be one of the color keys in the theme (for example, 'green', 'red')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"'md'"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The size (width and height) of the checkbox. Acceptable values: 'sm', 'md', 'lg'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"defaultChecked"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the checkbox will be selected initially.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"checked"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the checkbox will be selected. Use onChange to update the state for a controlled component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the checkbox will be disabled. This sets ",(0,l.kt)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can set this state by using the ",(0,l.kt)("inlineCode",{parentName:"td"},"_disabled")," prop.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"indeterminate"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the checkbox will be indeterminate. This only affects the icon shown inside the checkbox.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"children"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The children of the checkbox.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A callback called when the state is changed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onBlur"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A callback called when the checkbox loses focus.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onFocus"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A callback called when the checkbox receives focus.")))))}k.isMDXComponent=!0},95311:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return n(47498)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=95311,e(e.s=t);var t}));var t=e.O();_N_E=t}]);