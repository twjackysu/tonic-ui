(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4283],{87678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(7896),l=n(59740),r=(n(2784),n(30876)),i=["components"],o={};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Textarea"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Textarea")," component allows you to create a multi-line text input."),(0,r.kt)("h2",null,"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Textarea } from '@tonic-ui/react';\n")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<>\n  <TextLabel mb="1x">Label:</TextLabel>\n  <Textarea placeholder="Basic example" />\n  <Text size="xs" mt="1x">Help text for the text input</Text>\n</>\n')),(0,r.kt)("h3",null,"Sizing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"rows")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cols")," properties allow you to specify an exact size for the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Textarea>")," to take. Setting these is a good idea for consistency, as browser defaults can differ."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"maxLength")," property specifies a maximum number of characters that the ",(0,r.kt)("inlineCode",{parentName:"li"},"Textarea")," is allowed to contain."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"minLength")," property specifies a minimum length that is considered valid. ",(0,r.kt)("inlineCode",{parentName:"li"},"Textarea")," will not submit (and is invalid) if it is empty, using the ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," attribute."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"resize")," property to set whether the ",(0,r.kt)("inlineCode",{parentName:"li"},"Textarea")," is resizable, and if so, in which directions. You can set the value to ",(0,r.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"both"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"vertical"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'\nfunction Example() {\n  const [resize, setResize] = React.useState(\'both\');\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>resize =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {[\'none\', \'both\', \'horizontal\', \'vertical\'].map(value => (\n            <Button\n              key={value}\n              variant={resize === value ? \'primary\' : \'secondary\'}\n              onClick={() => setResize(value)}\n            >\n              {value}\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Textarea\n        defaultValue="Placeholder text"\n        width="auto"\n        resize={resize}\n        rows="3"\n        cols="12"\n        minLength={4}\n        maxLength={16}\n        transition="none"\n      />\n    </>\n  );\n}\n')),(0,r.kt)("h3",null,"Variants"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Textarea")," component comes in 3 variants: ",(0,r.kt)("inlineCode",{parentName:"p"},"outline"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filled"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"unstyled"),". Pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," prop and set it to either of these values."),(0,r.kt)("h4",null,(0,r.kt)("inlineCode",{parentName:"h4"},"outline")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Textarea variant="outline" placeholder="John Doe" />\n')),(0,r.kt)("h4",null,(0,r.kt)("inlineCode",{parentName:"h4"},"filled")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Textarea variant="filled" placeholder="John Doe" />\n')),(0,r.kt)("h4",null,(0,r.kt)("inlineCode",{parentName:"h4"},"unstyled")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Textarea variant="unstyled" placeholder="John Doe" />\n')),(0,r.kt)("h3",null,"Attributes"),(0,r.kt)("p",null,"General form input attributes are supported, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"readOnly"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"required"),", etc."),(0,r.kt)("h4",null,(0,r.kt)("inlineCode",{parentName:"h4"},"disabled")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack directin="column" spacing="4x">\n  <Textarea disabled placeholder="Placeholder text" />\n  <Textarea disabled placeholder="Placeholder text" defaultValue="Disabled" />\n</Stack>\n')),(0,r.kt)("h4",null,(0,r.kt)("inlineCode",{parentName:"h4"},"readOnly")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack directin="column" spacing="4x">\n  <Textarea readOnly placeholder="Placeholder text" />\n  <Textarea readOnly placeholder="Placeholder text" defaultValue="Read-only" />\n</Stack>\n')),(0,r.kt)("h4",null,(0,r.kt)("inlineCode",{parentName:"h4"},"required")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Textarea required placeholder="Placeholder text" />\n')),(0,r.kt)("h3",null,"Validation"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isInvalid")," attribute to indicate that the value entered into an input field does not conform to the format expected by the application. ",(0,r.kt)("inlineCode",{parentName:"p"},"isInvalid")," can also be used to indicate that a required field has not been filled in."),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"isInvalid")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," on the fields that have failed validation, otherwise set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if no errors detected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const InlineError = (props) => (\n  <Text fontSize="sm" lineHeight="sm" color="red:50" {...props} />\n);\n\nconst MultilineInputField = ({\n  value,\n  onChange,\n  ...props\n}) => {\n  const isInvalid = (value === \'\');\n  let invalidTextareaStyle = {};\n  if (isInvalid) {\n    invalidTextareaStyle = {\n      isInvalid: true,\n      pr: \'10x\',\n    };\n  }\n\n  return (\n    <>\n      <Flex position="relative" alignItems="center" mb="1x">\n        <Textarea\n          resize="none"\n          rows="3"\n          placeholder="Placeholder text"\n          value={value}\n          onChange={onChange}\n          {...invalidTextareaStyle}\n        />\n        {isInvalid && (\n          <Box position="absolute" right={0} top=".375rem">\n            <Icon icon="warning-circle" mx="3x" color="red:50" />\n          </Box>\n        )}\n      </Flex>\n      <Box>\n        {isInvalid && (\n          <InlineError>This is a required field.</InlineError>\n        )}\n      </Box>\n    </>\n  );\n};\n\nfunction Example() {\n  const [value, setValue] = React.useState(\'\');\n  const onChange = (e) => {\n    setValue(e.target.value);\n  };\n\n  return (\n    <MultilineInputField value={value} onChange={onChange} />\n  );\n}\n\nrender(<Example />);\n')),(0,r.kt)("h2",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rows"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the visible number of lines in a text area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cols"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the visible width of a text area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxLength"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies a maximum number of characters that is allowed to contain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"minLength"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies a minimum length that is considered valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"resize"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"One of: 'none', 'both', 'horizontal', 'vertical'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'outline'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variant of the input style to use. One of: 'outline', 'filled', 'unstyled'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the control. This sets ",(0,r.kt)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")," prop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", prevents the value of the input from being edited.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isInvalid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the input will indicate an error. You can style this state by passing the ",(0,r.kt)("inlineCode",{parentName:"td"},"_invalid")," prop.")))))}p.isMDXComponent=!0},49905:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textarea",function(){return n(87678)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=49905,e(e.s=t);var t}));var t=e.O();_N_E=t}]);