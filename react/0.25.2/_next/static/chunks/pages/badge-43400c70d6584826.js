(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9283],{49334:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return d}});var a=t(7896),o=t(59740),r=(t(2784),t(30876)),i=["components"],l={};function d(n){var e=n.components,t=(0,o.Z)(n,i);return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Badge"),(0,r.kt)("p",null,"Badges are used to highlight an item's status for quick recognition."),(0,r.kt)("h2",null,"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Badge } from '@trendmicro/react-styled-ui';\n")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("h3",null,"Basic badge"),(0,r.kt)("p",null,"To display the badge on the top-right corner of the wrapped component, specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"badgeContent")," prop with the desired content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid\n  columnGap="8x"\n  justifyItems="center"\n  rowGap="8x"\n  templateColumns="repeat(5,1fr)"\n  width="min-content"\n>\n  <Badge>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent={0}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent={5}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent="99+">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge\n    badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n  >\n    <Icon icon="alert" />\n  </Badge>\n  <Badge>\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={0}>\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5}>\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent="99+">\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge\n    badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n  >\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n</Grid>\n')),(0,r.kt)("h3",null,"Dot badge"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},'variant="dot"')," to change a badge into a small dot. This can be used as a notification that something has changed without giving a count."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="8x" shouldWrapChildren>\n  // Pass `isInvisible` to make it invisible\n  <Badge variant="dot" isInvisible>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge variant="dot">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge variant="dot" width="3x" height="3x">\n    <Icon icon="alert" />\n  </Badge>\n</Stack>\n')),(0,r.kt)("h3",null,"Standalone badge"),(0,r.kt)("p",null,"The badge can be used as a standalone component. This can be useful for displaying a badge without a surrounding element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="8x" alignItems="center">\n  <Badge variant="dot" />\n  <Badge variant="solid" badgeContent={0} />\n  <Badge variant="solid" badgeContent={5} />\n  <Badge variant="solid" badgeContent="99+" />\n  <Badge variant="solid" badgeContent={<Icon icon="virus" size="4x" />} height="6x" />\n</Stack>\n')),(0,r.kt)("h3",null,"Badge alignment"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"placement")," prop to move the badge to any corner of the wrapped element. The default placement is ",(0,r.kt)("inlineCode",{parentName:"p"},"top-right"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"placement")," prop can be one of ",(0,r.kt)("inlineCode",{parentName:"p"},"top-left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"top-right"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom-left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom-right"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Grid\n  columnGap="8x"\n  rowGap="8x"\n  templateColumns="1fr 1fr"\n  width="min-content"\n>\n  <Badge placement="top-left" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="top-right" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="bottom-left" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n  <Badge placement="bottom-right" badgeContent={1}>\n    <Icon icon="alert" />\n  </Badge>\n</Grid>\n')),(0,r.kt)("h3",null,"Badge visibility"),(0,r.kt)("p",null,"The badge visibility can be controlled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"isInvisible")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [count, setCount] = React.useState(1);\n  const [isInvisible, setIsInvisible] = React.useState(false);\n\n  return (\n    <Stack direction="column" spacing="8x">\n      <Flex align="center">\n        <Box mr="8x">\n          <Badge badgeContent={count} isInvisible={!(count > 0)}>\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n        >\n          <Button\n            aria-label="decrease"\n            onClick={() => {\n              setCount(Math.max(count - 1, 0));\n            }}\n          >\n            <Icon icon="minus" />\n          </Button>\n          <Button\n            aria-label="increase"\n            onClick={() => {\n              setCount(Math.max(count + 1, 0));\n            }}\n          >\n            <Icon icon="add" />\n          </Button>\n        </ButtonGroup>\n      </Flex>\n      <Flex alignItems="center">\n        <Box mr="8x">\n          <Badge\n            variant="dot"\n            isInvisible={isInvisible}\n          >\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <TextLabel cursor="pointer">\n          <Flex align="center">\n            <Switch\n              size="md"\n              checked={!isInvisible}\n              onChange={() => {\n                setIsInvisible(!isInvisible);\n              }}\n            />\n            <Space width="2x" />\n            <Text userSelect="none">Show Badge</Text>\n          </Flex>\n        </TextLabel>\n      </Flex>\n    </Stack>\n  );\n}\n')),(0,r.kt)("h3",null,"Color"),(0,r.kt)("p",null,"The color of the badge can be changed by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"backgroundColor")," prop. See the ",(0,r.kt)("a",{parentName:"p",href:"./colors"},"colors")," section to learn more about colors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const colors = [\n    'red:60',\n    'orange:50',\n    'yellow:50',\n    'green:60',\n    'blue:60',\n    'gray:60',\n    'magenta:60',\n    'purple:60',\n    'teal:60',\n    'cyan:60',\n  ];\n\n  return (\n    <Stack direction=\"row\" spacing=\"8x\" shouldWrapChildren>\n      {colors.map(color => (\n        <Badge key={color} backgroundColor={color} badgeContent={5}>\n          <Skeleton variant=\"rect\" borderRadius=\"sm\" width=\"8x\" height=\"8x\" />\n        </Badge>\n      ))}\n    </Stack>\n  );\n}\n")),(0,r.kt)("h3",null,"Size"),(0,r.kt)("p",null,"The size of the badge can be changed by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"minWidth")," props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="8x" shouldWrapChildren>\n  <Badge badgeContent={5} height="4x" minWidth="4x" fontSize="xs">\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5} height="5x" minWidth="5x" fontSize="sm">\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n  <Badge badgeContent={5} height="6x" minWidth="6x" fontSize="md">\n    <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n  </Badge>\n</Stack>\n')),(0,r.kt)("h3",null,"Customization"),(0,r.kt)("p",null,"You can customize the badge style by passing style props. See the following example to learn how to create a outline badge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const OutlineBadge = React.forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const backgroundColor = {\n    dark: \'gray:100\',\n    light: \'white\',\n  }[colorMode];\n  const borderColor = {\n    dark: \'yellow:50\',\n    light: \'yellow:50\',\n  }[colorMode];\n  const borderStyle = \'solid\';\n  const borderWidth = \'2px\';\n  const color = {\n    dark: \'white:primary\',\n    light: \'black:primary\',\n  }[colorMode];\n  const height = \'5x\';\n  const minWidth = \'5x\';\n\n  return (\n    <Badge\n      ref={ref}\n      backgroundColor={backgroundColor}\n      borderColor={borderColor}\n      borderStyle={borderStyle}\n      borderWidth={borderWidth}\n      color={color}\n      height={height}\n      minWidth={minWidth}\n      {...props}\n    />\n  );\n});\n\nfunction Example() {\n  return (\n    <Grid\n      columnGap="8x"\n      justifyItems="center"\n      rowGap="8x"\n      templateColumns="repeat(3,1fr)"\n      width="min-content"\n    >\n      <OutlineBadge badgeContent={0}>\n        <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge badgeContent="99+">\n        <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge\n        badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n      >\n        <Skeleton variant="rect" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n    </Grid>\n  );\n}\n\nrender(<Example />);\n')),(0,r.kt)("h2",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"badgeContent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"node ","|"," number ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The badge content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isInvisible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the badge is invisible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"placement"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'top-right'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The placement of the badge. One of: 'top-left', 'top-right', 'bottom-left', 'bottom-right'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'solid'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One of: 'solid', 'dot'")))))}d.isMDXComponent=!0},11289:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/badge",function(){return t(49334)}])}},function(n){n.O(0,[9774,2888,179],(function(){return e=11289,n(n.s=e);var e}));var e=n.O();_N_E=e}]);