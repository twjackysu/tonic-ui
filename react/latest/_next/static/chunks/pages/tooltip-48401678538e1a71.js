(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9688],{53801:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var a=n(7896),o=n(59740),l=(n(2784),n(30876)),r=["components"],i={};function p(t){var e=t.components,n=(0,o.Z)(t,r);return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Tooltip"),(0,l.kt)("p",null,"A tooltip is a brief, informative message that appears when a user interacts with an element. Tooltips are usually initiated in one of two ways: through a mouse-hover or keyboard-hover action."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Tooltip")," component follows the ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/#tooltip"},"WAI-ARIA")," Tooltip pattern."),(0,l.kt)("h2",null,"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Tooltip } from '@trendmicro/react-styled-ui';\n")),(0,l.kt)("h2",null,"Usage"),(0,l.kt)("p",null,"If the tooltip anchor is not a focusable content, just like the text string, you can wrap it with a ",(0,l.kt)("inlineCode",{parentName:"p"},"Text"),' component and set `tabIndex="0" to make it focusable.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="Hey, I\'m here!">\n  <Text tabIndex="0">Hover me</Text>\n</Tooltip>\n')),(0,l.kt)("h3",null,"With an icon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="Show calendar" placement="left">\n  <Icon cursor="pointer" icon="calendar" />\n</Tooltip>\n')),(0,l.kt)("h3",null,"Hide the arrow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip hideArrow label="Search places" placement="top">\n  <Icon cursor="pointer" icon="search-o" />\n</Tooltip>\n')),(0,l.kt)("h3",null,"Tooltip with focusable content"),(0,l.kt)("p",null,"If the children of Tooltip are focusable elements, Tooltip will show when you focus or hover on the a children element and will hide when you blur or move cursor out of the element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip label="Search places" placement="top">\n  <Button>Button</Button>\n</Tooltip>\n')),(0,l.kt)("h3",null,"Customized tooltips"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip\n  hideArrow\n  backgroundColor="gray:90"\n  color="white"\n  p="4x"\n  placement="right"\n  width="auto"\n  label={\n    <Stack direction="column">\n      <Text fontSize="lg" lineHeight="lg">Tooltip with HTML</Text>\n      <Box><em>{"And here\'s"}</em> <b>{\'some\'}</b> <u>{\'amazing content\'}</u>.{\' \'}</Box>\n      <Text>{"It\'s very engaging. Right?"}</Text>\n    </Stack>\n  }\n>\n  <Button variant="ghost">HTML</Button>\n</Tooltip>\n')),(0,l.kt)("h3",null,"Tooltip with ",(0,l.kt)("inlineCode",{parentName:"h3"},"Menu")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [colorMode] = useColorMode();\n  const inputRef = React.useRef();\n  const [menuItem, setMenuItem] = React.useState('hostname');\n  const handleMenuClick = (event) => {\n    // [optional] persist `Synthetic Event` for React v16 and earlier versions\n    event.persist();\n\n    const { value } = event.target.attributes.value;\n    setMenuItem(value);\n\n    setTimeout(() => {\n      if (inputRef.current) {\n        inputRef.current.focus();\n      }\n    }, 0);\n  };\n\n  return (\n    <InputGroup>\n      <InputGroupPrepend>\n        <Menu>\n          <MenuButton>\n            <Box\n              color={colorMode === 'dark' ? 'white:secondary' : 'black:secondary'}\n              mr=\"2x\"\n            >\n              Search by:\n            </Box>\n            {{\n              'hostname': 'Endpoint name',\n              'filename': 'File name',\n            }[menuItem]}\n          </MenuButton>\n          <MenuList\n            onClick={handleMenuClick}\n          >\n            <MenuItem value=\"hostname\">Endpoint name</MenuItem>\n            <MenuItem value=\"filename\">File name</MenuItem>\n          </MenuList>\n        </Menu>\n      </InputGroupPrepend>\n      <Tooltip\n        backgroundColor=\"gray:80\"\n        color=\"gray:20\"\n        px=\"2x\"\n        py=\"3x\"\n        arrowAt=\"left\"\n        placement=\"bottom-start\"\n        label=\"Use commas to separate multiple keywords\"\n      >\n        <Input\n          ref={inputRef}\n          borderTopLeftRadius={0}\n          borderBottomLeftRadius={0}\n          placeholder={{\n            'hostname': 'John Doe, Jane',\n            'filename': 'README.md, *.cmd',\n          }[menuItem]}\n        />\n      </Tooltip>\n    </InputGroup>\n  );\n}\n")),(0,l.kt)("h2",null,"Placement"),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"placement")," prop you can adjust where your tooltip will be displayed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="8x">\n  <Stack shouldWrapChildren direction="row" spacing="8x">\n    <Tooltip label="Top" placement="top">\n      <Button minWidth="32x">Top</Button>\n    </Tooltip>\n    <Tooltip label="Top start" placement="top-start">\n      <Button minWidth="32x">Top-Start</Button>\n    </Tooltip>\n    <Tooltip label="Top end" placement="top-end">\n      <Button minWidth="32x">Top-End</Button>\n    </Tooltip>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="8x">\n    <Tooltip label="Right" placement="right">\n      <Button minWidth="32x">Right</Button>\n    </Tooltip>\n    <Tooltip label="Right start" placement="right-start">\n      <Button minWidth="32x">Right-Start</Button>\n    </Tooltip>\n    <Tooltip label="Right end" placement="right-end">\n      <Button minWidth="32x">Right-End</Button>\n    </Tooltip>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="8x">\n    <Tooltip label="Bottom" placement="bottom">\n      <Button minWidth="32x">Bottom</Button>\n    </Tooltip>\n    <Tooltip label="Bottom start" placement="bottom-start">\n      <Button minWidth="32x">Bottom-Start</Button>\n    </Tooltip>\n    <Tooltip label="Bottom end" placement="bottom-end">\n      <Button minWidth="32x">Bottom-End</Button>\n    </Tooltip>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="8x">\n    <Tooltip label="Left" placement="left">\n      <Button minWidth="32x">Left</Button>\n    </Tooltip>\n    <Tooltip label="Left start" placement="left-start">\n      <Button minWidth="32x">Left-Start</Button>\n    </Tooltip>\n    <Tooltip label="Left end" placement="left-end">\n      <Button minWidth="32x">Left-End</Button>\n    </Tooltip>\n  </Stack>\n</Stack>\n')),(0,l.kt)("h2",null,"Props"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"children"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If the children is a function, it will be called with ",(0,l.kt)("inlineCode",{parentName:"td"},"{ getTooltipTriggerProps }")," and the return value will be used as the trigger.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"isOpen"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", the tooltip is shown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string ","|"," ReactNode"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The label of the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"placement"),(0,l.kt)("td",{parentName:"tr",align:"left"},"PopperJS.Placement"),(0,l.kt)("td",{parentName:"tr",align:"left"},"'bottom'"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position the tooltip relative to the trigger element as well as surrounding elements. One of: 'top', 'bottom', 'right', 'left', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'right-start', 'right-end', 'left-start', 'left-end'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"children"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"ReactNode")," element to be used as the trigger of the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hideArrow"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", hide the arrow tip on the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"arrowAt"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"The position of the tooltip arrow. One of: 'left', 'right', 'top', 'bottom'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"enterDelay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"100"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of milliseconds to wait before showing the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"leaveDelay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The number of milliseconds to wait before hiding the tooltip.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"closeOnClick"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),", hide the tooltip when the trigger is clicked.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onOpen"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A callback called when the tooltip shows.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onClose"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A callback called when the tooltip hides.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TransitionComponent"),(0,l.kt)("td",{parentName:"tr",align:"left"},"elementType"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Grow"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The component used for the transition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TransitionProps"),(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Props applied to the ",(0,l.kt)("a",{parentName:"td",href:"http://reactcommunity.org/react-transition-group/transition#Transition-props"},"Transition")," element.")))))}p.isMDXComponent=!0},4473:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tooltip",function(){return n(53801)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=4473,t(t.s=e);var e}));var e=t.O();_N_E=e}]);