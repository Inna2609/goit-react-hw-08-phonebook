"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[190],{9165:function(e,r,a){var s=a(8096),i=a(4925),n=a(8029),o=a(3466),l=a(3400),t=a(7071),d=(a(2791),a(9569)),u=a(3710),m=a(3329);r.Z=function(e){var r=e.label,a=e.id,h=e.isSubmitting,c=e.showPassword,p=e.value,w=e.onChange,f=e.handleClickShowPassword,g=e.formikToched,b=e.formikErrors;return(0,m.jsxs)(s.Z,{fullWidth:!0,variant:"outlined",style:{marginTop:"10px"},children:[(0,m.jsx)(i.Z,{htmlFor:"outlined-adornment-password",children:r}),(0,m.jsx)(n.Z,{disabled:h,id:a,type:c?"text":"password",value:p,onChange:w,endAdornment:(0,m.jsx)(o.Z,{position:"end",children:(0,m.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:f,edge:"end",children:c?(0,m.jsx)(u.Z,{}):(0,m.jsx)(d.Z,{})})}),label:r,error:g&&Boolean(b)}),(0,m.jsx)(t.Z,{id:"my-helper-text",error:!0,children:g&&b})]})}},2190:function(e,r,a){a.r(r),a.d(r,{default:function(){return Z}});var s=a(5861),i=a(885),n=a(7757),o=a.n(n),l=a(2791),t=a(5705),d=a(9434),u=a(890),m=a(6689),h=a(6151),c=a(1089),p=c.Ry({email:c.Z_().email("Enter a valid email").required("Email is required"),fullName:c.Z_().matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$|^[\u0410-\u042f][\u0430-\u044f]*(\s[\u0410-\u044f][\u0430-\u044f]*)+$/gm,"Please enter your full name as in example: John Johnson (\u0406\u0432\u0430\u043d \u0406\u0432\u0430\u0449\u0435\u043d\u043a\u043e)").required("Full name is required"),password:c.Z_().min(12,"Password should be of minimum 12 characters length").required("Password is required")}),w=a(9165),f=a(6140),g=a(5822),b=a(3329),x=function(){var e=(0,l.useState)(!1),r=(0,i.Z)(e,2),a=r[0],n=r[1],c=(0,l.useState)(!1),x=(0,i.Z)(c,2),Z=x[0],v=x[1],k=(0,d.I0)(),j=(0,t.TA)({initialValues:{email:"",fullName:"",password:"",passwordRepeat:""},validationSchema:p,onSubmit:function(){var e=(0,s.Z)(o().mark((function e(r,a){var s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=a.resetForm,r.password===r.passwordRepeat){e.next=4;break}return(0,f.ZP)("Password do not match"),e.abrupt("return");case 4:i={name:r.fullName,email:r.email,password:r.password},k((0,g.a$)(i)),s();case 7:case"end":return e.stop()}}),e)})));return function(r,a){return e.apply(this,arguments)}}()});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.Z,{variant:"h3",mt:5,textAlign:"center",children:"Register"}),(0,b.jsxs)("form",{onSubmit:j.handleSubmit,style:{width:"500px",margin:"0 auto"},children:[(0,b.jsx)(m.Z,{disabled:j.isSubmitting,fullWidth:!0,id:"email",name:"email",label:"Email",value:j.values.email,onChange:j.handleChange,error:j.touched.email&&Boolean(j.errors.email),helperText:j.touched.email&&j.errors.email}),(0,b.jsx)(m.Z,{disabled:j.isSubmitting,fullWidth:!0,id:"fullName",name:"fullName",label:"Full name",value:j.values.fullName,onChange:j.handleChange,error:j.touched.email&&Boolean(j.errors.fullName),helperText:j.touched.fullName&&j.errors.fullName,style:{marginTop:"10px"}}),(0,b.jsx)(w.Z,{label:"Password",id:"password",isSubmitting:j.isSubmitting,showPassword:a,value:j.values.password,onChange:j.handleChange,handleClickShowPassword:function(){n((function(e){return!e}))},formikToched:j.touched.password,formikErrors:j.errors.password,style:{marginTop:"10px"}}),(0,b.jsx)(w.Z,{label:"Repeat password",id:"passwordRepeat",isSubmitting:j.isSubmitting,showPassword:Z,value:j.values.passwordRepeat,onChange:j.handleChange,handleClickShowPassword:function(){v((function(e){return!e}))},formikToched:j.touched.password,formikErrors:j.errors.password}),(0,b.jsx)(h.Z,{style:{marginTop:"10px"},disabled:j.isSubmitting,color:"primary",variant:"contained",fullWidth:!0,type:"submit",children:"register"})]})]})};function Z(){return(0,b.jsx)(x,{})}}}]);
//# sourceMappingURL=190.8146456a.chunk.js.map