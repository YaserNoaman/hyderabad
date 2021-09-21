(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1001:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(365),i=n(414),r=n(407),o=n(374),l=n(0);function s(e){let t=e.date;return t?a.createElement(o.a,{overlay:a.createElement(r.a,{date:t})},a.createElement("span",null,a.createElement(i.a,{date:t}))):a.createElement("span",null,Object(l.l)("never"))}},1050:function(e,t,n){"use strict";var a=n(365),i=n(410),r=n(378),o=n(367),l=n(0);class s extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,name:null},this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=e=>{e.preventDefault();const t=this.state.name;null!=t&&(this.setState({loading:!0}),Object(i.v)(this.props.profile.key,t).then(()=>this.props.onRename(t),()=>{this.mounted&&this.setState({loading:!1})}))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.profile,t=Object(l.m)("quality_profiles.rename_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(r.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"rename-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"rename-profile-name"},Object(l.l)("quality_profiles.new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"rename-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(o.i,{disabled:n,id:"rename-profile-submit"},Object(l.l)("rename")),a.createElement(o.h,{id:"rename-profile-cancel",onClick:this.props.onClose},Object(l.l)("cancel")))))}}class c extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,name:null},this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=e=>{e.preventDefault();const t=this.state.name;null!=t&&(this.setState({loading:!0}),Object(i.i)(this.props.profile.key,t).then(e=>this.props.onCopy(e.name),()=>{this.mounted&&this.setState({loading:!1})}))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.profile,t=Object(l.m)("quality_profiles.copy_x_title",e.name,e.languageName),n=this.state.loading||!this.state.name||this.state.name===e.name;return a.createElement(r.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",{id:"copy-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"copy-profile-name"},Object(l.l)("quality_profiles.copy_new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"copy-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:null!=this.state.name?this.state.name:e.name}))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(o.i,{disabled:n,id:"copy-profile-submit"},Object(l.l)("copy")),a.createElement(o.h,{id:"copy-profile-cancel",onClick:this.props.onClose},Object(l.l)("cancel")))))}}var u=n(385);class m extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1,name:null},this.handleFormSubmit=e=>{e.preventDefault(),this.setState({loading:!0}),Object(i.l)(this.props.profile.key).then(this.props.onDelete,()=>{this.mounted&&this.setState({loading:!1})})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.profile,t=Object(l.l)("quality_profiles.delete_confirm_title");return a.createElement(r.a,{contentLabel:t,onRequestClose:this.props.onClose},a.createElement("form",{id:"delete-profile-form",onSubmit:this.handleFormSubmit},a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"js-modal-messages"}),e.childrenCount>0?a.createElement("div",null,a.createElement(u.a,{variant:"warning"},Object(l.l)("quality_profiles.this_profile_has_descendants")),a.createElement("p",null,Object(l.m)("quality_profiles.are_you_sure_want_delete_profile_x_and_descendants",e.name,e.languageName))):a.createElement("p",null,Object(l.m)("quality_profiles.are_you_sure_want_delete_profile_x",e.name,e.languageName))),a.createElement("div",{className:"modal-foot"},this.state.loading&&a.createElement("i",{className:"spinner spacer-right"}),a.createElement(o.i,{className:"button-red",disabled:this.state.loading,id:"delete-profile-submit"},Object(l.l)("delete")),a.createElement(o.h,{id:"delete-profile-cancel",onClick:this.props.onClose},Object(l.l)("cancel")))))}}var p=n(375);class d extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.canSubmit=e=>Boolean(e.name&&e.name.length),this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleFormSubmit=async()=>{if(this.canSubmit(this.state)){const e=this.props,t=e.organization,n=e.profile,a=this.state.name,r=new FormData;r.append("language",n.language),r.append("name",a),t&&r.append("organization",t),this.setState({loading:!0});try{const e=(await Object(i.j)(r)).profile;await Object(i.g)(e.key,n.key),this.props.onExtend(e.name)}finally{this.mounted&&this.setState({loading:!1})}}}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.profile,t=Object(l.m)("quality_profiles.extend_x_title",e.name,e.languageName);return a.createElement(r.a,{contentLabel:t,onRequestClose:this.props.onClose,size:"small"},a.createElement("form",null,a.createElement("div",{className:"modal-head"},a.createElement("h2",null,t)),a.createElement("div",{className:"modal-body"},a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"extend-profile-name"},Object(l.l)("quality_profiles.copy_new_name"),a.createElement("em",{className:"mandatory"},"*")),a.createElement("input",{autoFocus:!0,id:"extend-profile-name",maxLength:100,name:"name",onChange:this.handleNameChange,required:!0,size:50,type:"text",value:this.state.name?this.state.name:""}))),a.createElement("div",{className:"modal-foot"},a.createElement(p.a,{className:"spacer-right",loading:this.state.loading}),a.createElement(o.i,{disabled:this.state.loading||!this.canSubmit(this.state),id:"extend-profile-submit",onClick:this.handleFormSubmit},Object(l.l)("copy")),a.createElement(o.h,{id:"extend-profile-cancel",onClick:this.props.onClose},Object(l.l)("cancel")))))}}var h=n(372),f=n(476),b=n(421),y=n(408);t.a=Object(y.a)(class extends a.PureComponent{constructor(){super(...arguments),this.state={copyFormOpen:!1,extendFormOpen:!1,deleteFormOpen:!1,renameFormOpen:!1},this.closeCopyForm=()=>{this.setState({copyFormOpen:!1})},this.closeDeleteForm=()=>{this.setState({deleteFormOpen:!1})},this.closeExtendForm=()=>{this.setState({extendFormOpen:!1})},this.closeRenameForm=()=>{this.setState({renameFormOpen:!1})},this.handleCopyClick=()=>{this.setState({copyFormOpen:!0})},this.handleDeleteClick=()=>{this.setState({deleteFormOpen:!0})},this.handleExtendClick=()=>{this.setState({extendFormOpen:!0})},this.handleRenameClick=()=>{this.setState({renameFormOpen:!0})},this.handleProfileCopy=e=>{this.closeCopyForm(),this.navigateToNewProfile(e)},this.handleProfileDelete=()=>{this.props.router.replace(Object(f.e)(this.props.organization)),this.props.updateProfiles()},this.handleProfileExtend=e=>{this.closeExtendForm(),this.navigateToNewProfile(e)},this.handleProfileRename=e=>{this.closeRenameForm(),this.props.updateProfiles().then(()=>{this.props.fromList||this.props.router.replace(Object(f.c)(e,this.props.profile.language,this.props.organization))},()=>{})},this.handleSetDefaultClick=()=>{Object(i.A)(this.props.profile.key).then(this.props.updateProfiles,()=>{})},this.navigateToNewProfile=e=>{this.props.updateProfiles().then(()=>{this.props.router.push(Object(f.c)(e,this.props.profile.language,this.props.organization))},()=>{})}}render(){const e=this.props.profile,t=e.actions,n=void 0===t?{}:t,i=window.baseUrl+"/api/qualityprofiles/backup?profileKey="+encodeURIComponent(e.key),r=Object(h.C)({qprofile:e.key,activation:"false"},this.props.organization);return a.createElement(a.Fragment,null,a.createElement(b.c,{className:this.props.className},n.edit&&a.createElement(b.b,{id:"quality-profile-activate-more-rules",to:r},Object(l.l)("quality_profiles.activate_more_rules")),!e.isBuiltIn&&a.createElement(b.b,{download:"".concat(e.key,".xml"),id:"quality-profile-backup",to:i},Object(l.l)("backup_verb")),a.createElement(b.b,{id:"quality-profile-compare",to:Object(f.b)(e.name,e.language,this.props.organization)},Object(l.l)("compare")),n.copy&&a.createElement(a.Fragment,null,a.createElement(b.b,{id:"quality-profile-copy",onClick:this.handleCopyClick},Object(l.l)("copy")),a.createElement(b.b,{id:"quality-profile-extend",onClick:this.handleExtendClick},Object(l.l)("extend"))),n.edit&&a.createElement(b.b,{id:"quality-profile-rename",onClick:this.handleRenameClick},Object(l.l)("rename")),n.setAsDefault&&a.createElement(b.b,{id:"quality-profile-set-as-default",onClick:this.handleSetDefaultClick},Object(l.l)("set_as_default")),n.delete&&a.createElement(b.a,null),n.delete&&a.createElement(b.b,{destructive:!0,id:"quality-profile-delete",onClick:this.handleDeleteClick},Object(l.l)("delete"))),this.state.copyFormOpen&&a.createElement(c,{onClose:this.closeCopyForm,onCopy:this.handleProfileCopy,profile:e}),this.state.extendFormOpen&&a.createElement(d,{onClose:this.closeExtendForm,onExtend:this.handleProfileExtend,organization:this.props.organization,profile:e}),this.state.deleteFormOpen&&a.createElement(m,{onClose:this.closeDeleteForm,onDelete:this.handleProfileDelete,profile:e}),this.state.renameFormOpen&&a.createElement(s,{onClose:this.closeRenameForm,onRename:this.handleProfileRename,profile:e}))}})},378:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(365),i=n(405),r=n(366);function o(e){return a.createElement(i,Object.assign({className:r("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:r("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}i.setAppElement("#content")},384:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(365),i=n(366),r=n(374),o=n(423),l=n(373);n(393);function s(e){const t=e.children,n=void 0===t?a.createElement(o.a,{fill:l.gray71,size:12}):t,s=e.tagName,c=void 0===s?"div":s;return a.createElement(c,{className:i("help-tooltip",e.className)},a.createElement(r.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},a.createElement("span",{className:"display-inline-flex-center"},n)))}},393:function(e,t,n){var a=n(394);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(369)(a,i);a.locals&&(e.exports=a.locals)},394:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},395:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(365),i=n(384),r=n(380);const o=Object(r.a)(()=>Promise.all([n.e(7),n.e(20)]).then(n.bind(null,485)));class l extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={open:!1},this.close=()=>{this.mounted&&this.setState({open:!1})}}componentDidMount(){this.mounted=!0,this.props.doc.then(e=>{let t=e.default;this.mounted&&this.setState({content:t})},()=>{}),document.addEventListener("scroll",this.close,!0)}componentWillUnmount(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)}render(){return this.state.content?a.createElement(i.a,{className:this.props.className,overlay:a.createElement("div",{className:"abs-width-300"},a.createElement(o,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null}}},407:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l});var a=n(365),i=n(359),r=n(13);const o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function l(e){let t=e.children,n=e.date;return a.createElement(i.FormattedDate,Object.assign({value:Object(r.g)(n)},o),t)}},410:function(e,t,n){"use strict";n.d(t,"y",function(){return s}),n.d(t,"s",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"w",function(){return m}),n.d(t,"r",function(){return p}),n.d(t,"q",function(){return d}),n.d(t,"A",function(){return h}),n.d(t,"v",function(){return f}),n.d(t,"i",function(){return b}),n.d(t,"l",function(){return y}),n.d(t,"g",function(){return g}),n.d(t,"o",function(){return C}),n.d(t,"n",function(){return O}),n.d(t,"p",function(){return E}),n.d(t,"h",function(){return v}),n.d(t,"d",function(){return j}),n.d(t,"m",function(){return N}),n.d(t,"z",function(){return _}),n.d(t,"x",function(){return q}),n.d(t,"c",function(){return S}),n.d(t,"u",function(){return x}),n.d(t,"b",function(){return k}),n.d(t,"t",function(){return F}),n.d(t,"e",function(){return w}),n.d(t,"f",function(){return P}),n.d(t,"a",function(){return z}),n.d(t,"k",function(){return L});var a=n(415),i=n.n(a),r=n(495),o=n(4),l=n(383);function s(e){return Object(o.getJSON)("/api/qualityprofiles/search",e).catch(l.a)}function c(e){return Object(o.getJSON)("/api/qualityprofiles/show",e)}function u(e){return Object(o.request)("/api/qualityprofiles/create").setMethod("post").setData(e).submit().then(o.checkStatus).then(o.parseJSON).catch(l.a)}function m(e){return Object(o.request)("/api/qualityprofiles/restore").setMethod("post").setData(e).submit().then(o.checkStatus).then(o.parseJSON).catch(l.a)}function p(e){return Object(o.getJSON)("/api/qualityprofiles/projects",e).catch(l.a)}function d(e){return Object(o.getJSON)("/api/qualityprofiles/inheritance",{profileKey:e}).catch(l.a)}function h(e){return Object(o.post)("/api/qualityprofiles/set_default",{profileKey:e})}function f(e,t){return Object(o.post)("/api/qualityprofiles/rename",{key:e,name:t}).catch(l.a)}function b(e,t){return Object(o.postJSON)("/api/qualityprofiles/copy",{fromKey:e,toName:t}).catch(l.a)}function y(e){return Object(o.post)("/api/qualityprofiles/delete",{profileKey:e}).catch(l.a)}function g(e,t){return Object(o.post)("/api/qualityprofiles/change_parent",{profileKey:e,parentKey:t}).catch(l.a)}function C(){return Object(o.getJSON)("/api/qualityprofiles/importers").then(e=>e.importers,l.a)}function O(){return Object(o.getJSON)("/api/qualityprofiles/exporters").then(e=>e.exporters)}function E(e){return Object(o.getJSON)("/api/qualityprofiles/changelog",e)}function v(e,t){return Object(o.getJSON)("/api/qualityprofiles/compare",{leftKey:e,rightKey:t})}function j(e,t){return Object(o.post)("/api/qualityprofiles/add_project",{key:e,project:t}).catch(l.a)}function N(e,t){return Object(o.post)("/api/qualityprofiles/remove_project",{key:e,project:t}).catch(l.a)}function _(e){return Object(o.getJSON)("/api/qualityprofiles/search_users",e).catch(l.a)}function q(e){return Object(o.getJSON)("/api/qualityprofiles/search_groups",e).catch(l.a)}function S(e){return Object(o.post)("/api/qualityprofiles/add_user",e).catch(l.a)}function x(e){return Object(o.post)("/api/qualityprofiles/remove_user",e).catch(l.a)}function k(e){return Object(o.post)("/api/qualityprofiles/add_group",e).catch(l.a)}function F(e){return Object(o.post)("/api/qualityprofiles/remove_group",e).catch(l.a)}function w(e){return Object(o.postJSON)("/api/qualityprofiles/activate_rules",e)}function P(e){return Object(o.postJSON)("/api/qualityprofiles/deactivate_rules",e)}function z(e){const t=e.params&&i()(e.params,(e,t)=>"".concat(t,"=").concat(Object(r.a)(e))).join(";");return Object(o.post)("/api/qualityprofiles/activate_rule",Object.assign({},e,{params:t})).catch(l.a)}function L(e){return Object(o.post)("/api/qualityprofiles/deactivate_rule",e).catch(l.a)}},414:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(365),i=n(359),r=n(13);function o(e){let t=e.children,n=e.date;return a.createElement(i.FormattedRelative,{value:Object(r.g)(n)},t)}},415:function(e,t,n){var a=n(51),i=n(15),r=n(472),o=n(6);e.exports=function(e,t){return(o(e)?a:r)(e,i(t,3))}},421:function(e,t,n){"use strict";var a=n(365),i=n(366),r=n(371),o=n(388),l=n(391),s=n(370);function c(e){let t=e.className,n=e.fill,i=void 0===n?"currentColor":n,r=e.size,o=void 0===r?14:r;return a.createElement(s.a,{className:t,size:o,viewBox:"0 0 14 14"},a.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},a.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:i}})))}var u=n(367);function m(e){return a.createElement(o.b,{className:e.className,onOpen:e.onOpen,overlay:a.createElement("ul",{className:"menu"},e.children)},a.createElement(u.a,{className:i("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},a.createElement(c,{size:e.small?12:14}),a.createElement(l.a,{className:"little-spacer-left"})))}n.d(t,"c",function(){return m}),n.d(t,"b",function(){return p}),n.d(t,"a",function(){return d});class p extends a.PureComponent{constructor(){super(...arguments),this.handleClick=e=>{e.preventDefault(),e.currentTarget.blur(),this.props.onClick&&this.props.onClick()}}render(){const e=i(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?a.createElement("li",null,a.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?a.createElement("li",null,a.createElement(r.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):a.createElement("li",null,a.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))}}function d(){return a.createElement("li",{className:"divider"})}},495:function(e,t,n){"use strict";function a(e){const t=e.replace(/"/g,'\\"');return'"'.concat(t,'"')}n.d(t,"a",function(){return a})},641:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(365),i=n(366),r=n(395),o=n(0);function l(e){let t=e.className,l=e.tooltip,s=void 0===l||l;const c=a.createElement("div",{className:i("outline-badge",t)},Object(o.l)("quality_profiles.built_in"));return s?a.createElement(r.a,{doc:Promise.resolve().then(n.bind(null,683))},c):c}},648:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(365),i=n(371),r=n(476),o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&(n[a[i]]=e[a[i]])}return n};function l(e){var t=e.name,n=e.language,l=e.organization,s=e.children,c=o(e,["name","language","organization","children"]);return a.createElement(i.Link,Object.assign({activeClassName:"link-no-underline",to:Object(r.c)(t,n,l)},c),s)}},683:function(e,t,n){"use strict";n.r(t),t.default="Built-in profiles are provided directly by the language analyzers and may be updated with each new analyzer version. They represent best-practice, minimum rule sets.\n"}}]);
//# sourceMappingURL=15.m.3f98b625.chunk.js.map