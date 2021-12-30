(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7932],{97966:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var a=n(7896),l=n(59740),r=(n(2784),n(30876)),i=["components"],o={};function s(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"LinkButton"),(0,r.kt)("p",null,"This component provides an element resembling an anchor that purely acts as a click target with no navigation as result. It can also be used inline in text."),(0,r.kt)("h2",null,"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { LinkButton } from '@tonic-ui/react';\n")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [timeLeft, setTimeLeft] = React.useState(180);\n  React.useEffect(() => {\n    const timer = setTimeout(() => {\n      if (timeLeft > 0) {\n        setTimeLeft(timeLeft - 1);\n      }\n    }, 1000);\n\n    return () => {\n      clearTimeout(timer);\n    };\n  }, [timeLeft]);\n  const handleClick = () => {\n    setTimeLeft(180);\n  };\n\n  return (\n    <Text>\n      If the email does not arrive in your inbox or spam folder, <LinkButton onClick={handleClick}>click here to resend ({timeLeft}s)</LinkButton>.\n    </Text>\n  );\n}\n")),(0,r.kt)("h2",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the link button will be disabled. This sets ",(0,r.kt)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by using the ",(0,r.kt)("inlineCode",{parentName:"td"},"_disabled")," prop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"onClick"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"A callback called when the link button is clicked.")))))}s.isMDXComponent=!0},43927:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/linkbutton",function(){return n(97966)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=43927,t(t.s=e);var e}));var e=t.O();_N_E=e}]);