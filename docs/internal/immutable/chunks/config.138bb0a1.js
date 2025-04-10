import{_ as tt,c as Ei,d as Ee,e as Dn,M as rt,O as ot,Q as at,g as lt,h as kn,f as st,j as ct,l as Ae}from"./index.b32f6c87.js";import{S as Re,i as Ve,s as Ye,O as me,e as z,a as K,c as H,b as $,d as O,f as J,h as L,l as Ce,m as D,P as _e,Q as ve,R as be,y as oe,z as ae,V as P,A as vn,W as Ci,B as Ii,C as Di,D as Ti,X as Oi,E as Li,Y as Ni,t as bn,g as yn,F as xn,o as le,Z as ze,q as te,U as pn,n as sn,M as ut,r as Mi,p as zn,_ as ft,$ as dt}from"./index.79b965b9.js";import{d as ht,m as pt,i as gt,e as Fi,v as mt,g as _t,j as vt,p as bt,w as yt,n as xt,k as wt,l as kt,o as At,q as St,r as Et,R as ji,h as en,s as Hn,t as Ct,u as It,x as Dt,y as Tt,z as Ot,E as Lt,F as $n,G as Rn,H as Nt,A as Mt,B as Ft,b as jt,D as qt,a as Pt,L as Bt,c as zt,S as Ht,I as $t,J as Rt,K as Vt,N as Yt,O as Wt,P as Ut}from"./http_client.ac5407ee.js";import{w as Fe}from"./paths.2b8d21f3.js";import{H as Gt,S as Xt}from"./Header.df701f01.js";const Kt={"@@functional/placeholder":!0};var Jt=tt(function(n){return ht(n.length,n)});const Vn=Jt;var Zt=Ei(function(n,i){for(var t={},r={},a=0,o=n.length;a<o;)r[n[a]]=1,a+=1;for(var l in i)r.hasOwnProperty(l)||(t[l]=i[l]);return t});const Yn=Zt;var Qt=Ei(function(n,i){for(var t=[],r=0,a=Math.min(n.length,i.length);r<a;)t[r]=[n[r],i[r]],r+=1;return t});const er=Qt,nr=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function qi(e){return typeof e>"u"||e===null}function ir(e){return typeof e=="object"&&e!==null}function tr(e){return Array.isArray(e)?e:qi(e)?[]:[e]}function rr(e,n){var i,t,r,a;if(n)for(a=Object.keys(n),i=0,t=a.length;i<t;i+=1)r=a[i],e[r]=n[r];return e}function or(e,n){var i="",t;for(t=0;t<n;t+=1)i+=e;return i}function ar(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var lr=qi,sr=ir,cr=tr,ur=or,fr=ar,dr=rr,ye={isNothing:lr,isObject:sr,toArray:cr,repeat:ur,isNegativeZero:fr,extend:dr};function Pi(e,n){var i="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(i+=`

`+e.mark.snippet),t+" "+i):t}function cn(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Pi(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}cn.prototype=Object.create(Error.prototype);cn.prototype.constructor=cn;cn.prototype.toString=function(n){return this.name+": "+Pi(this,n)};var Me=cn;function An(e,n,i,t,r){var a="",o="",l=Math.floor(r/2)-1;return t-n>l&&(a=" ... ",n=t-l+a.length),i-t>l&&(o=" ...",i=t+l-o.length),{str:a+e.slice(n,i).replace(/\t/g,"→")+o,pos:t-n+a.length}}function Sn(e,n){return ye.repeat(" ",n-e.length)+e}function hr(e,n){if(n=Object.create(n||null),!e.buffer)return null;n.maxLength||(n.maxLength=79),typeof n.indent!="number"&&(n.indent=1),typeof n.linesBefore!="number"&&(n.linesBefore=3),typeof n.linesAfter!="number"&&(n.linesAfter=2);for(var i=/\r?\n|\r|\0/g,t=[0],r=[],a,o=-1;a=i.exec(e.buffer);)r.push(a.index),t.push(a.index+a[0].length),e.position<=a.index&&o<0&&(o=t.length-2);o<0&&(o=t.length-1);var l="",c,s,f=Math.min(e.line+n.linesAfter,r.length).toString().length,u=n.maxLength-(n.indent+f+3);for(c=1;c<=n.linesBefore&&!(o-c<0);c++)s=An(e.buffer,t[o-c],r[o-c],e.position-(t[o]-t[o-c]),u),l=ye.repeat(" ",n.indent)+Sn((e.line-c+1).toString(),f)+" | "+s.str+`
`+l;for(s=An(e.buffer,t[o],r[o],e.position,u),l+=ye.repeat(" ",n.indent)+Sn((e.line+1).toString(),f)+" | "+s.str+`
`,l+=ye.repeat("-",n.indent+f+3+s.pos)+`^
`,c=1;c<=n.linesAfter&&!(o+c>=r.length);c++)s=An(e.buffer,t[o+c],r[o+c],e.position-(t[o]-t[o+c]),u),l+=ye.repeat(" ",n.indent)+Sn((e.line+c+1).toString(),f)+" | "+s.str+`
`;return l.replace(/\n$/,"")}var pr=hr,gr=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],mr=["scalar","sequence","mapping"];function _r(e){var n={};return e!==null&&Object.keys(e).forEach(function(i){e[i].forEach(function(t){n[String(t)]=i})}),n}function vr(e,n){if(n=n||{},Object.keys(n).forEach(function(i){if(gr.indexOf(i)===-1)throw new Me('Unknown option "'+i+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(i){return i},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=_r(n.styleAliases||null),mr.indexOf(this.kind)===-1)throw new Me('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var de=vr;function Wn(e,n){var i=[];return e[n].forEach(function(t){var r=i.length;i.forEach(function(a,o){a.tag===t.tag&&a.kind===t.kind&&a.multi===t.multi&&(r=o)}),i[r]=t}),i}function br(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,i;function t(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(n=0,i=arguments.length;n<i;n+=1)arguments[n].forEach(t);return e}function In(e){return this.extend(e)}In.prototype.extend=function(n){var i=[],t=[];if(n instanceof de)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(i=i.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new Me("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");i.forEach(function(a){if(!(a instanceof de))throw new Me("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new Me("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new Me("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(a){if(!(a instanceof de))throw new Me("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(In.prototype);return r.implicit=(this.implicit||[]).concat(i),r.explicit=(this.explicit||[]).concat(t),r.compiledImplicit=Wn(r,"implicit"),r.compiledExplicit=Wn(r,"explicit"),r.compiledTypeMap=br(r.compiledImplicit,r.compiledExplicit),r};var yr=In,xr=new de("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),wr=new de("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),kr=new de("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Ar=new yr({explicit:[xr,wr,kr]});function Sr(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Er(){return null}function Cr(e){return e===null}var Ir=new de("tag:yaml.org,2002:null",{kind:"scalar",resolve:Sr,construct:Er,predicate:Cr,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Dr(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Tr(e){return e==="true"||e==="True"||e==="TRUE"}function Or(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Lr=new de("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Dr,construct:Tr,predicate:Or,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Nr(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Mr(e){return 48<=e&&e<=55}function Fr(e){return 48<=e&&e<=57}function jr(e){if(e===null)return!1;var n=e.length,i=0,t=!1,r;if(!n)return!1;if(r=e[i],(r==="-"||r==="+")&&(r=e[++i]),r==="0"){if(i+1===n)return!0;if(r=e[++i],r==="b"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(r!=="0"&&r!=="1")return!1;t=!0}return t&&r!=="_"}if(r==="x"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(!Nr(e.charCodeAt(i)))return!1;t=!0}return t&&r!=="_"}if(r==="o"){for(i++;i<n;i++)if(r=e[i],r!=="_"){if(!Mr(e.charCodeAt(i)))return!1;t=!0}return t&&r!=="_"}}if(r==="_")return!1;for(;i<n;i++)if(r=e[i],r!=="_"){if(!Fr(e.charCodeAt(i)))return!1;t=!0}return!(!t||r==="_")}function qr(e){var n=e,i=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(i=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return i*parseInt(n.slice(2),2);if(n[1]==="x")return i*parseInt(n.slice(2),16);if(n[1]==="o")return i*parseInt(n.slice(2),8)}return i*parseInt(n,10)}function Pr(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ye.isNegativeZero(e)}var Br=new de("tag:yaml.org,2002:int",{kind:"scalar",resolve:jr,construct:qr,predicate:Pr,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),zr=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Hr(e){return!(e===null||!zr.test(e)||e[e.length-1]==="_")}function $r(e){var n,i;return n=e.replace(/_/g,"").toLowerCase(),i=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?i===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:i*parseFloat(n,10)}var Rr=/^[-+]?[0-9]+e/;function Vr(e,n){var i;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ye.isNegativeZero(e))return"-0.0";return i=e.toString(10),Rr.test(i)?i.replace("e",".e"):i}function Yr(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ye.isNegativeZero(e))}var Wr=new de("tag:yaml.org,2002:float",{kind:"scalar",resolve:Hr,construct:$r,predicate:Yr,represent:Vr,defaultStyle:"lowercase"}),Ur=Ar.extend({implicit:[Ir,Lr,Br,Wr]}),Gr=Ur,Bi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),zi=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Xr(e){return e===null?!1:Bi.exec(e)!==null||zi.exec(e)!==null}function Kr(e){var n,i,t,r,a,o,l,c=0,s=null,f,u,_;if(n=Bi.exec(e),n===null&&(n=zi.exec(e)),n===null)throw new Error("Date resolve error");if(i=+n[1],t=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(i,t,r));if(a=+n[4],o=+n[5],l=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(f=+n[10],u=+(n[11]||0),s=(f*60+u)*6e4,n[9]==="-"&&(s=-s)),_=new Date(Date.UTC(i,t,r,a,o,l,c)),s&&_.setTime(_.getTime()-s),_}function Jr(e){return e.toISOString()}var Zr=new de("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Xr,construct:Kr,instanceOf:Date,represent:Jr});function Qr(e){return e==="<<"||e===null}var eo=new de("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Qr}),Tn=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function no(e){if(e===null)return!1;var n,i,t=0,r=e.length,a=Tn;for(i=0;i<r;i++)if(n=a.indexOf(e.charAt(i)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function io(e){var n,i,t=e.replace(/[\r\n=]/g,""),r=t.length,a=Tn,o=0,l=[];for(n=0;n<r;n++)n%4===0&&n&&(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)),o=o<<6|a.indexOf(t.charAt(n));return i=r%4*6,i===0?(l.push(o>>16&255),l.push(o>>8&255),l.push(o&255)):i===18?(l.push(o>>10&255),l.push(o>>2&255)):i===12&&l.push(o>>4&255),new Uint8Array(l)}function to(e){var n="",i=0,t,r,a=e.length,o=Tn;for(t=0;t<a;t++)t%3===0&&t&&(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]),i=(i<<8)+e[t];return r=a%3,r===0?(n+=o[i>>18&63],n+=o[i>>12&63],n+=o[i>>6&63],n+=o[i&63]):r===2?(n+=o[i>>10&63],n+=o[i>>4&63],n+=o[i<<2&63],n+=o[64]):r===1&&(n+=o[i>>2&63],n+=o[i<<4&63],n+=o[64],n+=o[64]),n}function ro(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var oo=new de("tag:yaml.org,2002:binary",{kind:"scalar",resolve:no,construct:io,predicate:ro,represent:to}),ao=Object.prototype.hasOwnProperty,lo=Object.prototype.toString;function so(e){if(e===null)return!0;var n=[],i,t,r,a,o,l=e;for(i=0,t=l.length;i<t;i+=1){if(r=l[i],o=!1,lo.call(r)!=="[object Object]")return!1;for(a in r)if(ao.call(r,a))if(!o)o=!0;else return!1;if(!o)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function co(e){return e!==null?e:[]}var uo=new de("tag:yaml.org,2002:omap",{kind:"sequence",resolve:so,construct:co}),fo=Object.prototype.toString;function ho(e){if(e===null)return!0;var n,i,t,r,a,o=e;for(a=new Array(o.length),n=0,i=o.length;n<i;n+=1){if(t=o[n],fo.call(t)!=="[object Object]"||(r=Object.keys(t),r.length!==1))return!1;a[n]=[r[0],t[r[0]]]}return!0}function po(e){if(e===null)return[];var n,i,t,r,a,o=e;for(a=new Array(o.length),n=0,i=o.length;n<i;n+=1)t=o[n],r=Object.keys(t),a[n]=[r[0],t[r[0]]];return a}var go=new de("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:ho,construct:po}),mo=Object.prototype.hasOwnProperty;function _o(e){if(e===null)return!0;var n,i=e;for(n in i)if(mo.call(i,n)&&i[n]!==null)return!1;return!0}function vo(e){return e!==null?e:{}}var bo=new de("tag:yaml.org,2002:set",{kind:"mapping",resolve:_o,construct:vo}),yo=Gr.extend({implicit:[Zr,eo],explicit:[oo,uo,go,bo]}),$e=Object.prototype.hasOwnProperty,gn=1,Hi=2,$i=3,mn=4,En=1,xo=2,Un=3,wo=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ko=/[\x85\u2028\u2029]/,Ao=/[,\[\]\{\}]/,Ri=/^(?:!|!!|![a-z\-]+!)$/i,Vi=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Gn(e){return Object.prototype.toString.call(e)}function Le(e){return e===10||e===13}function Ue(e){return e===9||e===32}function we(e){return e===9||e===32||e===10||e===13}function Ze(e){return e===44||e===91||e===93||e===123||e===125}function So(e){var n;return 48<=e&&e<=57?e-48:(n=e|32,97<=n&&n<=102?n-97+10:-1)}function Eo(e){return e===120?2:e===117?4:e===85?8:0}function Co(e){return 48<=e&&e<=57?e-48:-1}function Xn(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}function Io(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var Yi=new Array(256),Wi=new Array(256);for(var Je=0;Je<256;Je++)Yi[Je]=Xn(Je)?1:0,Wi[Je]=Xn(Je);function Do(e,n){this.input=e,this.filename=n.filename||null,this.schema=n.schema||yo,this.onWarning=n.onWarning||null,this.legacy=n.legacy||!1,this.json=n.json||!1,this.listener=n.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function Ui(e,n){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=pr(i),new Me(n,i)}function E(e,n){throw Ui(e,n)}function _n(e,n){e.onWarning&&e.onWarning.call(null,Ui(e,n))}var Kn={YAML:function(n,i,t){var r,a,o;n.version!==null&&E(n,"duplication of %YAML directive"),t.length!==1&&E(n,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(t[0]),r===null&&E(n,"ill-formed argument of the YAML directive"),a=parseInt(r[1],10),o=parseInt(r[2],10),a!==1&&E(n,"unacceptable YAML version of the document"),n.version=t[0],n.checkLineBreaks=o<2,o!==1&&o!==2&&_n(n,"unsupported YAML version of the document")},TAG:function(n,i,t){var r,a;t.length!==2&&E(n,"TAG directive accepts exactly two arguments"),r=t[0],a=t[1],Ri.test(r)||E(n,"ill-formed tag handle (first argument) of the TAG directive"),$e.call(n.tagMap,r)&&E(n,'there is a previously declared suffix for "'+r+'" tag handle'),Vi.test(a)||E(n,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch{E(n,"tag prefix is malformed: "+a)}n.tagMap[r]=a}};function He(e,n,i,t){var r,a,o,l;if(n<i){if(l=e.input.slice(n,i),t)for(r=0,a=l.length;r<a;r+=1)o=l.charCodeAt(r),o===9||32<=o&&o<=1114111||E(e,"expected valid JSON character");else wo.test(l)&&E(e,"the stream contains non-printable characters");e.result+=l}}function Jn(e,n,i,t){var r,a,o,l;for(ye.isObject(i)||E(e,"cannot merge mappings; the provided source object is unacceptable"),r=Object.keys(i),o=0,l=r.length;o<l;o+=1)a=r[o],$e.call(n,a)||(n[a]=i[a],t[a]=!0)}function Qe(e,n,i,t,r,a,o,l,c){var s,f;if(Array.isArray(r))for(r=Array.prototype.slice.call(r),s=0,f=r.length;s<f;s+=1)Array.isArray(r[s])&&E(e,"nested arrays are not supported inside keys"),typeof r=="object"&&Gn(r[s])==="[object Object]"&&(r[s]="[object Object]");if(typeof r=="object"&&Gn(r)==="[object Object]"&&(r="[object Object]"),r=String(r),n===null&&(n={}),t==="tag:yaml.org,2002:merge")if(Array.isArray(a))for(s=0,f=a.length;s<f;s+=1)Jn(e,n,a[s],i);else Jn(e,n,a,i);else!e.json&&!$e.call(i,r)&&$e.call(n,r)&&(e.line=o||e.line,e.lineStart=l||e.lineStart,e.position=c||e.position,E(e,"duplicated mapping key")),r==="__proto__"?Object.defineProperty(n,r,{configurable:!0,enumerable:!0,writable:!0,value:a}):n[r]=a,delete i[r];return n}function On(e){var n;n=e.input.charCodeAt(e.position),n===10?e.position++:n===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):E(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Q(e,n,i){for(var t=0,r=e.input.charCodeAt(e.position);r!==0;){for(;Ue(r);)r===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(n&&r===35)do r=e.input.charCodeAt(++e.position);while(r!==10&&r!==13&&r!==0);if(Le(r))for(On(e),r=e.input.charCodeAt(e.position),t++,e.lineIndent=0;r===32;)e.lineIndent++,r=e.input.charCodeAt(++e.position);else break}return i!==-1&&t!==0&&e.lineIndent<i&&_n(e,"deficient indentation"),t}function wn(e){var n=e.position,i;return i=e.input.charCodeAt(n),!!((i===45||i===46)&&i===e.input.charCodeAt(n+1)&&i===e.input.charCodeAt(n+2)&&(n+=3,i=e.input.charCodeAt(n),i===0||we(i)))}function Ln(e,n){n===1?e.result+=" ":n>1&&(e.result+=ye.repeat(`
`,n-1))}function To(e,n,i){var t,r,a,o,l,c,s,f,u=e.kind,_=e.result,g;if(g=e.input.charCodeAt(e.position),we(g)||Ze(g)||g===35||g===38||g===42||g===33||g===124||g===62||g===39||g===34||g===37||g===64||g===96||(g===63||g===45)&&(r=e.input.charCodeAt(e.position+1),we(r)||i&&Ze(r)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,l=!1;g!==0;){if(g===58){if(r=e.input.charCodeAt(e.position+1),we(r)||i&&Ze(r))break}else if(g===35){if(t=e.input.charCodeAt(e.position-1),we(t))break}else{if(e.position===e.lineStart&&wn(e)||i&&Ze(g))break;if(Le(g))if(c=e.line,s=e.lineStart,f=e.lineIndent,Q(e,!1,-1),e.lineIndent>=n){l=!0,g=e.input.charCodeAt(e.position);continue}else{e.position=o,e.line=c,e.lineStart=s,e.lineIndent=f;break}}l&&(He(e,a,o,!1),Ln(e,e.line-c),a=o=e.position,l=!1),Ue(g)||(o=e.position+1),g=e.input.charCodeAt(++e.position)}return He(e,a,o,!1),e.result?!0:(e.kind=u,e.result=_,!1)}function Oo(e,n){var i,t,r;if(i=e.input.charCodeAt(e.position),i!==39)return!1;for(e.kind="scalar",e.result="",e.position++,t=r=e.position;(i=e.input.charCodeAt(e.position))!==0;)if(i===39)if(He(e,t,e.position,!0),i=e.input.charCodeAt(++e.position),i===39)t=e.position,e.position++,r=e.position;else return!0;else Le(i)?(He(e,t,r,!0),Ln(e,Q(e,!1,n)),t=r=e.position):e.position===e.lineStart&&wn(e)?E(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);E(e,"unexpected end of the stream within a single quoted scalar")}function Lo(e,n){var i,t,r,a,o,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,i=t=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return He(e,i,e.position,!0),e.position++,!0;if(l===92){if(He(e,i,e.position,!0),l=e.input.charCodeAt(++e.position),Le(l))Q(e,!1,n);else if(l<256&&Yi[l])e.result+=Wi[l],e.position++;else if((o=Eo(l))>0){for(r=o,a=0;r>0;r--)l=e.input.charCodeAt(++e.position),(o=So(l))>=0?a=(a<<4)+o:E(e,"expected hexadecimal character");e.result+=Io(a),e.position++}else E(e,"unknown escape sequence");i=t=e.position}else Le(l)?(He(e,i,t,!0),Ln(e,Q(e,!1,n)),i=t=e.position):e.position===e.lineStart&&wn(e)?E(e,"unexpected end of the document within a double quoted scalar"):(e.position++,t=e.position)}E(e,"unexpected end of the stream within a double quoted scalar")}function No(e,n){var i=!0,t,r,a,o=e.tag,l,c=e.anchor,s,f,u,_,g,v=Object.create(null),w,C,I,m;if(m=e.input.charCodeAt(e.position),m===91)f=93,g=!1,l=[];else if(m===123)f=125,g=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),m=e.input.charCodeAt(++e.position);m!==0;){if(Q(e,!0,n),m=e.input.charCodeAt(e.position),m===f)return e.position++,e.tag=o,e.anchor=c,e.kind=g?"mapping":"sequence",e.result=l,!0;i?m===44&&E(e,"expected the node content, but found ','"):E(e,"missed comma between flow collection entries"),C=w=I=null,u=_=!1,m===63&&(s=e.input.charCodeAt(e.position+1),we(s)&&(u=_=!0,e.position++,Q(e,!0,n))),t=e.line,r=e.lineStart,a=e.position,nn(e,n,gn,!1,!0),C=e.tag,w=e.result,Q(e,!0,n),m=e.input.charCodeAt(e.position),(_||e.line===t)&&m===58&&(u=!0,m=e.input.charCodeAt(++e.position),Q(e,!0,n),nn(e,n,gn,!1,!0),I=e.result),g?Qe(e,l,v,C,w,I,t,r,a):u?l.push(Qe(e,null,v,C,w,I,t,r,a)):l.push(w),Q(e,!0,n),m=e.input.charCodeAt(e.position),m===44?(i=!0,m=e.input.charCodeAt(++e.position)):i=!1}E(e,"unexpected end of the stream within a flow collection")}function Mo(e,n){var i,t,r=En,a=!1,o=!1,l=n,c=0,s=!1,f,u;if(u=e.input.charCodeAt(e.position),u===124)t=!1;else if(u===62)t=!0;else return!1;for(e.kind="scalar",e.result="";u!==0;)if(u=e.input.charCodeAt(++e.position),u===43||u===45)En===r?r=u===43?Un:xo:E(e,"repeat of a chomping mode identifier");else if((f=Co(u))>=0)f===0?E(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):o?E(e,"repeat of an indentation width identifier"):(l=n+f-1,o=!0);else break;if(Ue(u)){do u=e.input.charCodeAt(++e.position);while(Ue(u));if(u===35)do u=e.input.charCodeAt(++e.position);while(!Le(u)&&u!==0)}for(;u!==0;){for(On(e),e.lineIndent=0,u=e.input.charCodeAt(e.position);(!o||e.lineIndent<l)&&u===32;)e.lineIndent++,u=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>l&&(l=e.lineIndent),Le(u)){c++;continue}if(e.lineIndent<l){r===Un?e.result+=ye.repeat(`
`,a?1+c:c):r===En&&a&&(e.result+=`
`);break}for(t?Ue(u)?(s=!0,e.result+=ye.repeat(`
`,a?1+c:c)):s?(s=!1,e.result+=ye.repeat(`
`,c+1)):c===0?a&&(e.result+=" "):e.result+=ye.repeat(`
`,c):e.result+=ye.repeat(`
`,a?1+c:c),a=!0,o=!0,c=0,i=e.position;!Le(u)&&u!==0;)u=e.input.charCodeAt(++e.position);He(e,i,e.position,!1)}return!0}function Zn(e,n){var i,t=e.tag,r=e.anchor,a=[],o,l=!1,c;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=a),c=e.input.charCodeAt(e.position);c!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,E(e,"tab characters must not be used in indentation")),!(c!==45||(o=e.input.charCodeAt(e.position+1),!we(o))));){if(l=!0,e.position++,Q(e,!0,-1)&&e.lineIndent<=n){a.push(null),c=e.input.charCodeAt(e.position);continue}if(i=e.line,nn(e,n,$i,!1,!0),a.push(e.result),Q(e,!0,-1),c=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>n)&&c!==0)E(e,"bad indentation of a sequence entry");else if(e.lineIndent<n)break}return l?(e.tag=t,e.anchor=r,e.kind="sequence",e.result=a,!0):!1}function Fo(e,n,i){var t,r,a,o,l,c,s=e.tag,f=e.anchor,u={},_=Object.create(null),g=null,v=null,w=null,C=!1,I=!1,m;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=u),m=e.input.charCodeAt(e.position);m!==0;){if(!C&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,E(e,"tab characters must not be used in indentation")),t=e.input.charCodeAt(e.position+1),a=e.line,(m===63||m===58)&&we(t))m===63?(C&&(Qe(e,u,_,g,v,null,o,l,c),g=v=w=null),I=!0,C=!0,r=!0):C?(C=!1,r=!0):E(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,m=t;else{if(o=e.line,l=e.lineStart,c=e.position,!nn(e,i,Hi,!1,!0))break;if(e.line===a){for(m=e.input.charCodeAt(e.position);Ue(m);)m=e.input.charCodeAt(++e.position);if(m===58)m=e.input.charCodeAt(++e.position),we(m)||E(e,"a whitespace character is expected after the key-value separator within a block mapping"),C&&(Qe(e,u,_,g,v,null,o,l,c),g=v=w=null),I=!0,C=!1,r=!1,g=e.tag,v=e.result;else if(I)E(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=s,e.anchor=f,!0}else if(I)E(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=s,e.anchor=f,!0}if((e.line===a||e.lineIndent>n)&&(C&&(o=e.line,l=e.lineStart,c=e.position),nn(e,n,mn,!0,r)&&(C?v=e.result:w=e.result),C||(Qe(e,u,_,g,v,w,o,l,c),g=v=w=null),Q(e,!0,-1),m=e.input.charCodeAt(e.position)),(e.line===a||e.lineIndent>n)&&m!==0)E(e,"bad indentation of a mapping entry");else if(e.lineIndent<n)break}return C&&Qe(e,u,_,g,v,null,o,l,c),I&&(e.tag=s,e.anchor=f,e.kind="mapping",e.result=u),I}function jo(e){var n,i=!1,t=!1,r,a,o;if(o=e.input.charCodeAt(e.position),o!==33)return!1;if(e.tag!==null&&E(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),o===60?(i=!0,o=e.input.charCodeAt(++e.position)):o===33?(t=!0,r="!!",o=e.input.charCodeAt(++e.position)):r="!",n=e.position,i){do o=e.input.charCodeAt(++e.position);while(o!==0&&o!==62);e.position<e.length?(a=e.input.slice(n,e.position),o=e.input.charCodeAt(++e.position)):E(e,"unexpected end of the stream within a verbatim tag")}else{for(;o!==0&&!we(o);)o===33&&(t?E(e,"tag suffix cannot contain exclamation marks"):(r=e.input.slice(n-1,e.position+1),Ri.test(r)||E(e,"named tag handle cannot contain such characters"),t=!0,n=e.position+1)),o=e.input.charCodeAt(++e.position);a=e.input.slice(n,e.position),Ao.test(a)&&E(e,"tag suffix cannot contain flow indicator characters")}a&&!Vi.test(a)&&E(e,"tag name cannot contain such characters: "+a);try{a=decodeURIComponent(a)}catch{E(e,"tag name is malformed: "+a)}return i?e.tag=a:$e.call(e.tagMap,r)?e.tag=e.tagMap[r]+a:r==="!"?e.tag="!"+a:r==="!!"?e.tag="tag:yaml.org,2002:"+a:E(e,'undeclared tag handle "'+r+'"'),!0}function qo(e){var n,i;if(i=e.input.charCodeAt(e.position),i!==38)return!1;for(e.anchor!==null&&E(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),n=e.position;i!==0&&!we(i)&&!Ze(i);)i=e.input.charCodeAt(++e.position);return e.position===n&&E(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(n,e.position),!0}function Po(e){var n,i,t;if(t=e.input.charCodeAt(e.position),t!==42)return!1;for(t=e.input.charCodeAt(++e.position),n=e.position;t!==0&&!we(t)&&!Ze(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&E(e,"name of an alias node must contain at least one character"),i=e.input.slice(n,e.position),$e.call(e.anchorMap,i)||E(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],Q(e,!0,-1),!0}function nn(e,n,i,t,r){var a,o,l,c=1,s=!1,f=!1,u,_,g,v,w,C;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=o=l=mn===i||$i===i,t&&Q(e,!0,-1)&&(s=!0,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)),c===1)for(;jo(e)||qo(e);)Q(e,!0,-1)?(s=!0,l=a,e.lineIndent>n?c=1:e.lineIndent===n?c=0:e.lineIndent<n&&(c=-1)):l=!1;if(l&&(l=s||r),(c===1||mn===i)&&(gn===i||Hi===i?w=n:w=n+1,C=e.position-e.lineStart,c===1?l&&(Zn(e,C)||Fo(e,C,w))||No(e,w)?f=!0:(o&&Mo(e,w)||Oo(e,w)||Lo(e,w)?f=!0:Po(e)?(f=!0,(e.tag!==null||e.anchor!==null)&&E(e,"alias node should not have any properties")):To(e,w,gn===i)&&(f=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):c===0&&(f=l&&Zn(e,C))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&E(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),u=0,_=e.implicitTypes.length;u<_;u+=1)if(v=e.implicitTypes[u],v.resolve(e.result)){e.result=v.construct(e.result),e.tag=v.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if($e.call(e.typeMap[e.kind||"fallback"],e.tag))v=e.typeMap[e.kind||"fallback"][e.tag];else for(v=null,g=e.typeMap.multi[e.kind||"fallback"],u=0,_=g.length;u<_;u+=1)if(e.tag.slice(0,g[u].tag.length)===g[u].tag){v=g[u];break}v||E(e,"unknown tag !<"+e.tag+">"),e.result!==null&&v.kind!==e.kind&&E(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+v.kind+'", not "'+e.kind+'"'),v.resolve(e.result,e.tag)?(e.result=v.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):E(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||f}function Bo(e){var n=e.position,i,t,r,a=!1,o;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(o=e.input.charCodeAt(e.position))!==0&&(Q(e,!0,-1),o=e.input.charCodeAt(e.position),!(e.lineIndent>0||o!==37));){for(a=!0,o=e.input.charCodeAt(++e.position),i=e.position;o!==0&&!we(o);)o=e.input.charCodeAt(++e.position);for(t=e.input.slice(i,e.position),r=[],t.length<1&&E(e,"directive name must not be less than one character in length");o!==0;){for(;Ue(o);)o=e.input.charCodeAt(++e.position);if(o===35){do o=e.input.charCodeAt(++e.position);while(o!==0&&!Le(o));break}if(Le(o))break;for(i=e.position;o!==0&&!we(o);)o=e.input.charCodeAt(++e.position);r.push(e.input.slice(i,e.position))}o!==0&&On(e),$e.call(Kn,t)?Kn[t](e,t,r):_n(e,'unknown document directive "'+t+'"')}if(Q(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Q(e,!0,-1)):a&&E(e,"directives end mark is expected"),nn(e,e.lineIndent-1,mn,!1,!0),Q(e,!0,-1),e.checkLineBreaks&&ko.test(e.input.slice(n,e.position))&&_n(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&wn(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Q(e,!0,-1));return}if(e.position<e.length-1)E(e,"end of the stream or a document separator is expected");else return}function Gi(e,n){e=String(e),n=n||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var i=new Do(e,n),t=e.indexOf("\0");for(t!==-1&&(i.position=t,E(i,"null byte is not allowed in input")),i.input+="\0";i.input.charCodeAt(i.position)===32;)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)Bo(i);return i.documents}function zo(e,n,i){n!==null&&typeof n=="object"&&typeof i>"u"&&(i=n,n=null);var t=Gi(e,i);if(typeof n!="function")return t;for(var r=0,a=t.length;r<a;r+=1)n(t[r])}function Ho(e,n){var i=Gi(e,n);if(i.length!==0){if(i.length===1)return i[0];throw new Me("expected a single document in the stream, but found more")}}var $o=zo,Ro=Ho,Vo={loadAll:$o,load:Ro},pl=Vo.load;function Yo({geometry:e=Fi,...n}={}){const i=pt(t=>mt(t,e));return gt({...n,x:null,y:null,geometry:{transform:i}},(t,r,a,o,l,c)=>{const s=i(t),f=s.length,u=new Float64Array(f),_=new Float64Array(f),{centroid:g}=c.path();for(let v=0;v<f;++v)[u[v],_[v]]=g(s[v]);return{data:t,facets:r,channels:{x:{value:u,scale:null,source:null},y:{value:_,scale:null,source:null}}}})}const Wo={ariaLabel:"geo",fill:"none",stroke:"currentColor",strokeWidth:1,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1};class Uo extends _t{constructor(n,i={}){const[t,r]=vt(i.r,3);super(n,{x:{value:i.tip?i.x:null,scale:"x",optional:!0},y:{value:i.tip?i.y:null,scale:"y",optional:!0},r:{value:t,scale:"r",filter:bt,optional:!0},geometry:{value:i.geometry,scale:"projection"}},yt(i),Wo),this.r=r}render(n,i,t,r,a){const{geometry:o,r:l}=t,c=a.path(),{r:s}=this;return xt(s)?n=[]:s!==void 0&&c.pointRadius(s),wt("svg:g",a).call(kt,this,r,a).call(At,this,i).call(f=>{f.selectAll().data(n).enter().append("path").call(St,this).attr("d",l?u=>c.pointRadius(l[u])(o[u]):u=>c(o[u])).call(Et,this,t)}).node()}}function Go(e,n={}){return n.tip&&n.x===void 0&&n.y===void 0?n=Yo(n):n.geometry===void 0&&(n={...n,geometry:Fi}),new Uo(e,n)}function Xo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}const Ko=e=>({}),Qn=e=>({}),Jo=e=>({}),ei=e=>({}),Zo=e=>({}),ni=e=>({}),Qo=e=>({}),ii=e=>({}),ea=e=>({}),ti=e=>({}),na=e=>({}),ri=e=>({}),ia=e=>({}),oi=e=>({}),ta=e=>({}),ai=e=>({}),ra=e=>({}),li=e=>({}),oa=e=>({}),si=e=>({}),aa=e=>({}),ci=e=>({}),la=e=>({}),ui=e=>({}),sa=e=>({}),fi=e=>({}),ca=e=>({}),di=e=>({}),ua=e=>({}),hi=e=>({});function fa(e){let n,i,t,r,a,o,l,c,s,f,u,_,g,v,w,C,I,m,S,y,d,k,b,N,V,j,Y,h,F,ee,T;const Ie=e[1].header,ne=me(Ie,e,e[0],hi),je=e[1].alert,ie=me(je,e,e[0],di),tn=e[1].dropdown1,he=me(tn,e,e[0],fi),Ge=e[1].chart1,se=me(Ge,e,e[0],ui),rn=e[1].dropdown2,pe=me(rn,e,e[0],ci),on=e[1].chart2,ge=me(on,e,e[0],si),Xe=e[1].dropdown3,x=me(Xe,e,e[0],li),B=e[1].chart3,q=me(B,e,e[0],ai),xe=e[1].dropdown4,U=me(xe,e,e[0],oi),De=e[1].chart4,Z=me(De,e,e[0],ri),re=e[1].obplot,M=me(re,e,e[0],ti),ce=e[1].slider1,G=me(ce,e,e[0],ii),ke=e[1].slider2,W=me(ke,e,e[0],ni),Te=e[1].slider3,ue=me(Te,e,e[0],ei),qe=e[1].slider4,fe=me(qe,e,e[0],Qn);return{c(){n=z("div"),i=z("div"),ne&&ne.c(),t=K(),r=z("div"),ie&&ie.c(),a=K(),o=z("div"),he&&he.c(),l=K(),c=z("div"),se&&se.c(),s=K(),f=z("div"),pe&&pe.c(),u=K(),_=z("div"),ge&&ge.c(),g=K(),v=z("div"),x&&x.c(),w=K(),C=z("div"),q&&q.c(),I=K(),m=z("div"),U&&U.c(),S=K(),y=z("div"),Z&&Z.c(),d=K(),k=z("div"),M&&M.c(),b=K(),N=z("div"),G&&G.c(),V=K(),j=z("div"),W&&W.c(),Y=K(),h=z("div"),ue&&ue.c(),F=K(),ee=z("div"),fe&&fe.c(),this.h()},l(p){n=H(p,"DIV",{class:!0});var A=$(n);i=H(A,"DIV",{class:!0});var X=$(i);ne&&ne.l(X),X.forEach(O),t=J(A),r=H(A,"DIV",{class:!0});var Se=$(r);ie&&ie.l(Se),Se.forEach(O),a=J(A),o=H(A,"DIV",{class:!0});var Ne=$(o);he&&he.l(Ne),Ne.forEach(O),l=J(A),c=H(A,"DIV",{class:!0});var Oe=$(c);se&&se.l(Oe),Oe.forEach(O),s=J(A),f=H(A,"DIV",{class:!0});var un=$(f);pe&&pe.l(un),un.forEach(O),u=J(A),_=H(A,"DIV",{class:!0});var We=$(_);ge&&ge.l(We),We.forEach(O),g=J(A),v=H(A,"DIV",{class:!0});var fn=$(v);x&&x.l(fn),fn.forEach(O),w=J(A),C=H(A,"DIV",{class:!0});var Ke=$(C);q&&q.l(Ke),Ke.forEach(O),I=J(A),m=H(A,"DIV",{class:!0});var dn=$(m);U&&U.l(dn),dn.forEach(O),S=J(A),y=H(A,"DIV",{class:!0});var Mn=$(y);Z&&Z.l(Mn),Mn.forEach(O),d=J(A),k=H(A,"DIV",{class:!0});var Fn=$(k);M&&M.l(Fn),Fn.forEach(O),b=J(A),N=H(A,"DIV",{class:!0});var jn=$(N);G&&G.l(jn),jn.forEach(O),V=J(A),j=H(A,"DIV",{class:!0});var qn=$(j);W&&W.l(qn),qn.forEach(O),Y=J(A),h=H(A,"DIV",{class:!0});var Pn=$(h);ue&&ue.l(Pn),Pn.forEach(O),F=J(A),ee=H(A,"DIV",{class:!0});var Bn=$(ee);fe&&fe.l(Bn),Bn.forEach(O),A.forEach(O),this.h()},h(){L(i,"class","mx-auto"),L(r,"class",""),L(o,"class","mx-auto"),L(c,"class",""),L(f,"class","mx-auto"),L(_,"class",""),L(v,"class","mx-auto"),L(C,"class",""),L(m,"class","mx-auto"),L(y,"class",""),L(k,"class",""),L(N,"class",""),L(j,"class",""),L(h,"class",""),L(ee,"class",""),L(n,"class","px-5 py-2 bg-white")},m(p,A){Ce(p,n,A),D(n,i),ne&&ne.m(i,null),D(n,t),D(n,r),ie&&ie.m(r,null),D(n,a),D(n,o),he&&he.m(o,null),D(n,l),D(n,c),se&&se.m(c,null),D(n,s),D(n,f),pe&&pe.m(f,null),D(n,u),D(n,_),ge&&ge.m(_,null),D(n,g),D(n,v),x&&x.m(v,null),D(n,w),D(n,C),q&&q.m(C,null),D(n,I),D(n,m),U&&U.m(m,null),D(n,S),D(n,y),Z&&Z.m(y,null),D(n,d),D(n,k),M&&M.m(k,null),D(n,b),D(n,N),G&&G.m(N,null),D(n,V),D(n,j),W&&W.m(j,null),D(n,Y),D(n,h),ue&&ue.m(h,null),D(n,F),D(n,ee),fe&&fe.m(ee,null),T=!0},p(p,[A]){ne&&ne.p&&(!T||A&1)&&_e(ne,Ie,p,p[0],T?be(Ie,p[0],A,ua):ve(p[0]),hi),ie&&ie.p&&(!T||A&1)&&_e(ie,je,p,p[0],T?be(je,p[0],A,ca):ve(p[0]),di),he&&he.p&&(!T||A&1)&&_e(he,tn,p,p[0],T?be(tn,p[0],A,sa):ve(p[0]),fi),se&&se.p&&(!T||A&1)&&_e(se,Ge,p,p[0],T?be(Ge,p[0],A,la):ve(p[0]),ui),pe&&pe.p&&(!T||A&1)&&_e(pe,rn,p,p[0],T?be(rn,p[0],A,aa):ve(p[0]),ci),ge&&ge.p&&(!T||A&1)&&_e(ge,on,p,p[0],T?be(on,p[0],A,oa):ve(p[0]),si),x&&x.p&&(!T||A&1)&&_e(x,Xe,p,p[0],T?be(Xe,p[0],A,ra):ve(p[0]),li),q&&q.p&&(!T||A&1)&&_e(q,B,p,p[0],T?be(B,p[0],A,ta):ve(p[0]),ai),U&&U.p&&(!T||A&1)&&_e(U,xe,p,p[0],T?be(xe,p[0],A,ia):ve(p[0]),oi),Z&&Z.p&&(!T||A&1)&&_e(Z,De,p,p[0],T?be(De,p[0],A,na):ve(p[0]),ri),M&&M.p&&(!T||A&1)&&_e(M,re,p,p[0],T?be(re,p[0],A,ea):ve(p[0]),ti),G&&G.p&&(!T||A&1)&&_e(G,ce,p,p[0],T?be(ce,p[0],A,Qo):ve(p[0]),ii),W&&W.p&&(!T||A&1)&&_e(W,ke,p,p[0],T?be(ke,p[0],A,Zo):ve(p[0]),ni),ue&&ue.p&&(!T||A&1)&&_e(ue,Te,p,p[0],T?be(Te,p[0],A,Jo):ve(p[0]),ei),fe&&fe.p&&(!T||A&1)&&_e(fe,qe,p,p[0],T?be(qe,p[0],A,Ko):ve(p[0]),Qn)},i(p){T||(oe(ne,p),oe(ie,p),oe(he,p),oe(se,p),oe(pe,p),oe(ge,p),oe(x,p),oe(q,p),oe(U,p),oe(Z,p),oe(M,p),oe(G,p),oe(W,p),oe(ue,p),oe(fe,p),T=!0)},o(p){ae(ne,p),ae(ie,p),ae(he,p),ae(se,p),ae(pe,p),ae(ge,p),ae(x,p),ae(q,p),ae(U,p),ae(Z,p),ae(M,p),ae(G,p),ae(W,p),ae(ue,p),ae(fe,p),T=!1},d(p){p&&O(n),ne&&ne.d(p),ie&&ie.d(p),he&&he.d(p),se&&se.d(p),pe&&pe.d(p),ge&&ge.d(p),x&&x.d(p),q&&q.d(p),U&&U.d(p),Z&&Z.d(p),M&&M.d(p),G&&G.d(p),W&&W.d(p),ue&&ue.d(p),fe&&fe.d(p)}}}function da(e,n,i){let{$$slots:t={},$$scope:r}=n;return e.$$set=a=>{"$$scope"in a&&i(0,r=a.$$scope)},[r,t]}class ha extends Re{constructor(n){super(),Ve(this,n,da,fa,Ye,{})}}function pi(e){let n,i,t,r=e[3]&&gi(e);return{c(){n=z("div"),i=bn(e[2]),t=K(),r&&r.c(),this.h()},l(a){n=H(a,"DIV",{class:!0});var o=$(n);i=yn(o,e[2]),t=J(o),r&&r.l(o),o.forEach(O),this.h()},h(){L(n,"class","font-bold leading-tight text-gray-900")},m(a,o){Ce(a,n,o),D(n,i),D(n,t),r&&r.m(n,null)},p(a,o){o&4&&xn(i,a[2]),a[3]?r?r.p(a,o):(r=gi(a),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},d(a){a&&O(n),r&&r.d()}}}function gi(e){let n,i,t,r,a;return{c(){n=z("div"),i=z("i"),t=K(),r=z("span"),a=bn(e[3]),this.h()},l(o){n=H(o,"DIV",{class:!0});var l=$(n);i=H(l,"I",{class:!0}),$(i).forEach(O),t=J(l),r=H(l,"SPAN",{class:!0});var c=$(r);a=yn(c,e[3]),c.forEach(O),l.forEach(O),this.h()},h(){L(i,"class","bi bi-info-circle"),L(r,"class","tooltiptext"),L(n,"class","tooltip")},m(o,l){Ce(o,n,l),D(n,i),D(n,t),D(n,r),D(r,a)},p(o,l){l&8&&xn(a,o[3])},d(o){o&&O(n)}}}function pa(e){let n,i,t,r,a,o=e[2]&&pi(e);function l(s){e[15](s)}let c={min:+e[0],max:+e[1],pips:!0,step:.01,float:!0,first:"label",last:"label",springValues:!0,id:"slider"};return e[7]!==void 0&&(c.values=e[7]),t=new ji({props:c}),vn.push(()=>Ci(t,"values",l)),t.$on("start",e[9]),t.$on("change",e[8]),t.$on("stop",e[10]),{c(){n=z("div"),o&&o.c(),i=K(),Ii(t.$$.fragment),this.h()},l(s){n=H(s,"DIV",{class:!0,id:!0});var f=$(n);o&&o.l(f),i=J(f),Di(t.$$.fragment,f),f.forEach(O),this.h()},h(){L(n,"class","my-[3%]"),L(n,"id","slider")},m(s,f){Ce(s,n,f),o&&o.m(n,null),D(n,i),Ti(t,n,null),a=!0},p(s,[f]){s[2]?o?o.p(s,f):(o=pi(s),o.c(),o.m(n,i)):o&&(o.d(1),o=null);const u={};f&1&&(u.min=+s[0]),f&2&&(u.max=+s[1]),!r&&f&128&&(r=!0,u.values=s[7],Oi(()=>r=!1)),t.$set(u)},i(s){a||(oe(t.$$.fragment,s),a=!0)},o(s){ae(t.$$.fragment,s),a=!1},d(s){s&&O(n),o&&o.d(),Li(t)}}}function ga(e,n,i){let t,r=le,a=()=>(r(),r=ze(S,h=>i(16,t=h)),S),o,l=le,c=()=>(l(),l=ze(I,h=>i(17,o=h)),I),s,f=le,u=()=>(f(),f=ze(m,h=>i(18,s=h)),m);e.$$.on_destroy.push(()=>r()),e.$$.on_destroy.push(()=>l()),e.$$.on_destroy.push(()=>f());let{min:_,max:g,id:v,description:w,tooltip:C}=n,{change:I=Fe({})}=n;c();let{stop:m=Fe({})}=n;u();let{drag:S=Fe({})}=n;a();let{interactions:y={change:I,stop:m,drag:S}}=n;Ni("dims");let d=[_];[...d];function k(h){console.log("Slider.render",h),h&&Ee(Array,h)&&Dn(h.filter(F=>F===void 0))&&(i(7,d=[+h[0].min,+h[0].max]),i(0,[_,g]=d,_,i(1,g)),console.log("Slider.render.to",d)),d&&d.length>=2&&N()}function b(h,F){console.log("Slider.load",h,F),!(!en("left")(h)||!en("right")(h))&&(h=h??{left:_,right:g},i(7,d=[h.left??_,h.right??g]),N())}function N(){I.isActive&&te(I,o={left:d[0],right:d[1]},o),S.isActive&&te(S,t={left:d[0],right:d[1]},t)}function V(){S.isActive&&te(S,t={left:d[0],right:d[1]},t)}function j(){m.isActive&&te(m,s={left:d[0],right:d[1]},s),I.isActive&&te(I,o={left:d[0],right:d[1]},o),S.isActive&&te(S,t={left:d[0],right:d[1]},t)}function Y(h){d=h,i(7,d)}return e.$$set=h=>{"min"in h&&i(0,_=h.min),"max"in h&&i(1,g=h.max),"id"in h&&i(11,v=h.id),"description"in h&&i(2,w=h.description),"tooltip"in h&&i(3,C=h.tooltip),"change"in h&&c(i(4,I=h.change)),"stop"in h&&u(i(5,m=h.stop)),"drag"in h&&a(i(6,S=h.drag)),"interactions"in h&&i(12,y=h.interactions)},[_,g,w,C,I,m,S,d,N,V,j,v,y,k,b,Y]}class ma extends Re{constructor(n){super(),Ve(this,n,ga,pa,Ye,{min:0,max:1,id:11,description:2,tooltip:3,change:4,stop:5,drag:6,interactions:12,render:13,load:14})}get min(){return this.$$.ctx[0]}set min(n){this.$$set({min:n}),P()}get max(){return this.$$.ctx[1]}set max(n){this.$$set({max:n}),P()}get id(){return this.$$.ctx[11]}set id(n){this.$$set({id:n}),P()}get description(){return this.$$.ctx[2]}set description(n){this.$$set({description:n}),P()}get tooltip(){return this.$$.ctx[3]}set tooltip(n){this.$$set({tooltip:n}),P()}get change(){return this.$$.ctx[4]}set change(n){this.$$set({change:n}),P()}get stop(){return this.$$.ctx[5]}set stop(n){this.$$set({stop:n}),P()}get drag(){return this.$$.ctx[6]}set drag(n){this.$$set({drag:n}),P()}get interactions(){return this.$$.ctx[12]}set interactions(n){this.$$set({interactions:n}),P()}get render(){return this.$$.ctx[13]}get load(){return this.$$.ctx[14]}}function mi(e){let n,i,t,r=e[3]&&_i(e);return{c(){n=z("div"),i=bn(e[2]),t=K(),r&&r.c(),this.h()},l(a){n=H(a,"DIV",{class:!0});var o=$(n);i=yn(o,e[2]),t=J(o),r&&r.l(o),o.forEach(O),this.h()},h(){L(n,"class","font-bold leading-tight text-gray-900")},m(a,o){Ce(a,n,o),D(n,i),D(n,t),r&&r.m(n,null)},p(a,o){o&4&&xn(i,a[2]),a[3]?r?r.p(a,o):(r=_i(a),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},d(a){a&&O(n),r&&r.d()}}}function _i(e){let n,i,t,r,a;return{c(){n=z("div"),i=z("i"),t=K(),r=z("span"),a=bn(e[3]),this.h()},l(o){n=H(o,"DIV",{class:!0});var l=$(n);i=H(l,"I",{class:!0}),$(i).forEach(O),t=J(l),r=H(l,"SPAN",{class:!0});var c=$(r);a=yn(c,e[3]),c.forEach(O),l.forEach(O),this.h()},h(){L(i,"class","bi bi-info-circle"),L(r,"class","tooltiptext"),L(n,"class","tooltip")},m(o,l){Ce(o,n,l),D(n,i),D(n,t),D(n,r),D(r,a)},p(o,l){l&8&&xn(a,o[3])},d(o){o&&O(n)}}}function _a(e){let n,i,t,r,a,o=e[2]&&mi(e);function l(s){e[15](s)}let c={min:+e[0],max:+e[1],pips:!0,float:!0,first:"label",last:"label",springValues:!0,id:"slider"};return e[7]!==void 0&&(c.values=e[7]),t=new ji({props:c}),vn.push(()=>Ci(t,"values",l)),t.$on("start",e[9]),t.$on("change",e[8]),t.$on("stop",e[10]),{c(){n=z("div"),o&&o.c(),i=K(),Ii(t.$$.fragment),this.h()},l(s){n=H(s,"DIV",{class:!0,id:!0});var f=$(n);o&&o.l(f),i=J(f),Di(t.$$.fragment,f),f.forEach(O),this.h()},h(){L(n,"class","my-[3%]"),L(n,"id","slider")},m(s,f){Ce(s,n,f),o&&o.m(n,null),D(n,i),Ti(t,n,null),a=!0},p(s,[f]){s[2]?o?o.p(s,f):(o=mi(s),o.c(),o.m(n,i)):o&&(o.d(1),o=null);const u={};f&1&&(u.min=+s[0]),f&2&&(u.max=+s[1]),!r&&f&128&&(r=!0,u.values=s[7],Oi(()=>r=!1)),t.$set(u)},i(s){a||(oe(t.$$.fragment,s),a=!0)},o(s){ae(t.$$.fragment,s),a=!1},d(s){s&&O(n),o&&o.d(),Li(t)}}}function va(e,n,i){let t,r=le,a=()=>(r(),r=ze(S,h=>i(16,t=h)),S),o,l=le,c=()=>(l(),l=ze(I,h=>i(17,o=h)),I),s,f=le,u=()=>(f(),f=ze(m,h=>i(18,s=h)),m);e.$$.on_destroy.push(()=>r()),e.$$.on_destroy.push(()=>l()),e.$$.on_destroy.push(()=>f());let{min:_,max:g,id:v,description:w,tooltip:C}=n,{change:I=Fe({})}=n;c();let{stop:m=Fe({})}=n;u();let{drag:S=Fe({})}=n;a();let{interactions:y={change:I,stop:m,drag:S}}=n;Ni("dims");let d=[_];[...d];function k(h){console.log("Slider.render",h),h&&Ee(Array,h)&&Dn(h.filter(F=>F===void 0))&&(i(7,d=[+h[0].min,+h[0].max]),i(0,[_,g]=d,_,i(1,g)),console.log("Slider.render.to",d)),d&&d.length>=2&&N()}function b(h,F){console.log("Slider.load",h,F),!(!en("left")(h)||!en("right")(h))&&(h=h??{left:_,right:g},i(7,d=[h.left??_,h.right??g]),N())}function N(){I.isActive&&te(I,o={left:d[0],right:d[1]},o),S.isActive&&te(S,t={left:d[0],right:d[1]},t)}function V(){S.isActive&&te(S,t={left:d[0],right:d[1]},t)}function j(){m.isActive&&te(m,s={left:d[0],right:d[1]},s),I.isActive&&te(I,o={left:d[0],right:d[1]},o),S.isActive&&te(S,t={left:d[0],right:d[1]},t)}function Y(h){d=h,i(7,d)}return e.$$set=h=>{"min"in h&&i(0,_=h.min),"max"in h&&i(1,g=h.max),"id"in h&&i(11,v=h.id),"description"in h&&i(2,w=h.description),"tooltip"in h&&i(3,C=h.tooltip),"change"in h&&c(i(4,I=h.change)),"stop"in h&&u(i(5,m=h.stop)),"drag"in h&&a(i(6,S=h.drag)),"interactions"in h&&i(12,y=h.interactions)},[_,g,w,C,I,m,S,d,N,V,j,v,y,k,b,Y]}class ba extends Re{constructor(n){super(),Ve(this,n,va,_a,Ye,{min:0,max:1,id:11,description:2,tooltip:3,change:4,stop:5,drag:6,interactions:12,render:13,load:14})}get min(){return this.$$.ctx[0]}set min(n){this.$$set({min:n}),P()}get max(){return this.$$.ctx[1]}set max(n){this.$$set({max:n}),P()}get id(){return this.$$.ctx[11]}set id(n){this.$$set({id:n}),P()}get description(){return this.$$.ctx[2]}set description(n){this.$$set({description:n}),P()}get tooltip(){return this.$$.ctx[3]}set tooltip(n){this.$$set({tooltip:n}),P()}get change(){return this.$$.ctx[4]}set change(n){this.$$set({change:n}),P()}get stop(){return this.$$.ctx[5]}set stop(n){this.$$set({stop:n}),P()}get drag(){return this.$$.ctx[6]}set drag(n){this.$$set({drag:n}),P()}get interactions(){return this.$$.ctx[12]}set interactions(n){this.$$set({interactions:n}),P()}get render(){return this.$$.ctx[13]}get load(){return this.$$.ctx[14]}}function ya(e){let n,i;return{c(){n=z("div"),i=z("div"),this.h()},l(t){n=H(t,"DIV",{id:!0});var r=$(n);i=H(r,"DIV",{}),$(i).forEach(O),r.forEach(O),this.h()},h(){L(n,"id",e[0])},m(t,r){Ce(t,n,r),D(n,i),e[11](i)},p(t,[r]){r&1&&L(n,"id",t[0])},i:le,o:le,d(t){t&&O(n),e[11](null)}}}function xa(e,n,i){let{id:t,name:r,xDomainMin:a,xDomainMax:o,magic:l}=n,{brushX:c=Fe({})}=n,{interactions:s={brushX:c}}=n,f,u,_,g={},v=[];const w=["#93c1cf","#feb144","#9ee09e","#ff6663"],C=k=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Math.floor((k-1)/3)%12],I=(k,b)=>Array.from({length:b-k+1},(N,V)=>k+V).filter(N=>(N-1)%3===0);function m(k,b){return b!="overlay"?!1:(g=k,!0)}function S(k,b){!k||k.length===0||typeof b=="object"||(m(k,b)?console.debug("overlay"):v=k,y())}function y(){const k=I(+a,+o);let b={x:{domain:[+a,+o],type:"linear"},y:{axis:null},marginBottom:65,height:300,fy:{label:null,tickRotate:-90,labelAnchor:"center"},color:{style:{"font-size":10,"margin-left":"2rem"},range:w,legend:!0},marks:[Hn({ticks:36,fontSize:10}),Hn({ticks:k,tickFormat:C,dy:20,anchor:"bottom",fontSize:10,color:"gray"}),Ct(),It(g,{x1:"left",x2:"right",y2:1,fill:"key",color:"key"}),Dt(v,{x1:"start_time",x2:"end_time",y:"activity",strokeWidth:3,fy:"crop"}),Tt(v,{x:N=>(N.end_time-N.start_time)/2+N.start_time,y:"activity",dy:3,lineAnchor:"top",fy:"crop",fontSize:10,color:"gray",text:"activity"})]};f=Ot(b,u),c.isActive&&(_=_??new Lt({iact:c,magic:l}),_.init(f))}function d(k){vn[k?"unshift":"push"](()=>{u=k,i(1,u)})}return e.$$set=k=>{"id"in k&&i(2,t=k.id),"name"in k&&i(0,r=k.name),"xDomainMin"in k&&i(3,a=k.xDomainMin),"xDomainMax"in k&&i(4,o=k.xDomainMax),"magic"in k&&i(5,l=k.magic),"brushX"in k&&i(6,c=k.brushX),"interactions"in k&&i(7,s=k.interactions)},[r,u,t,a,o,l,c,s,m,S,y,d]}class wa extends Re{constructor(n){super(),Ve(this,n,xa,ya,Ye,{id:2,name:0,xDomainMin:3,xDomainMax:4,magic:5,brushX:6,interactions:7,overlay:8,render:9,update:10})}get id(){return this.$$.ctx[2]}set id(n){this.$$set({id:n}),P()}get name(){return this.$$.ctx[0]}set name(n){this.$$set({name:n}),P()}get xDomainMin(){return this.$$.ctx[3]}set xDomainMin(n){this.$$set({xDomainMin:n}),P()}get xDomainMax(){return this.$$.ctx[4]}set xDomainMax(n){this.$$set({xDomainMax:n}),P()}get magic(){return this.$$.ctx[5]}set magic(n){this.$$set({magic:n}),P()}get brushX(){return this.$$.ctx[6]}set brushX(n){this.$$set({brushX:n}),P()}get interactions(){return this.$$.ctx[7]}set interactions(n){this.$$set({interactions:n}),P()}get overlay(){return this.$$.ctx[8]}get render(){return this.$$.ctx[9]}get update(){return this.$$.ctx[10]}}function vi(e,n,i){const t=e.slice();return t[13]=n[i],t}function bi(e){let n,i;return{c(){n=z("option"),this.h()},l(t){n=H(t,"OPTION",{}),$(n).forEach(O),this.h()},h(){n.__value=i=e[13][e[1]],n.value=n.__value},m(t,r){Ce(t,n,r)},p(t,r){r&10&&i!==(i=t[13][t[1]])&&(n.__value=i,n.value=n.__value)},d(t){t&&O(n)}}}function ka(e){let n,i,t,r,a,o,l=e[3],c=[];for(let s=0;s<l.length;s+=1)c[s]=bi(vi(e,l,s));return{c(){n=z("div"),i=z("input"),t=K(),r=z("datalist");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){n=H(s,"DIV",{class:!0,id:!0});var f=$(n);i=H(f,"INPUT",{class:!0,list:!0}),t=J(f),r=H(f,"DATALIST",{id:!0});var u=$(r);for(let _=0;_<c.length;_+=1)c[_].l(u);u.forEach(O),f.forEach(O),this.h()},h(){L(i,"class","form-input appearance-none block w-full px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"),L(i,"list","autocomplete-list"),L(r,"id","autocomplete-list"),L(n,"class","px-[1%] py-[1%] container svelte-a9pg2q"),L(n,"id",e[0])},m(s,f){Ce(s,n,f),D(n,i),pn(i,e[4]),D(n,t),D(n,r);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(r,null);a||(o=[sn(i,"input",e[10]),sn(i,"input",e[5]),sn(i,"change",e[6])],a=!0)},p(s,[f]){if(f&16&&i.value!==s[4]&&pn(i,s[4]),f&10){l=s[3];let u;for(u=0;u<l.length;u+=1){const _=vi(s,l,u);c[u]?c[u].p(_,f):(c[u]=bi(_),c[u].c(),c[u].m(r,null))}for(;u<c.length;u+=1)c[u].d(1);c.length=l.length}f&1&&L(n,"id",s[0])},i:le,o:le,d(s){s&&O(n),ut(c,s),a=!1,Mi(o)}}}function Aa(e,n,i){let t,r=le,a=()=>(r(),r=ze(s,m=>i(12,t=m)),s);e.$$.on_destroy.push(()=>r());let{id:o,index:l,dropdown_key:c}=n,{change:s=Fe({})}=n;a();let{interactions:f={change:s}}=n,u=[],_="Dakar",g=null;function v(m){i(3,u=m??u),u.some(S=>S[c]===_)&&(g=u.find(S=>S[c]===_),s.isActive&&te(s,t={...g,idx:u.indexOf(g)},t)),console.log("Autocomplete.render",u,_),console.log("values --- ",u)}function w(m){i(4,_=m.target.value),u.some(S=>S[c]===_)&&(g=u.find(S=>S[c]===_),s.isActive&&te(s,t={...g,idx:u.indexOf(g)},t)),console.log("values --- ",u)}function C(m){i(4,_=m.target.value),g=u.find(S=>S[c]===_),s.isActive&&g&&te(s,t={...g,idx:u.indexOf(g)},t),console.log("values --- ",u)}function I(){_=this.value,i(4,_)}return e.$$set=m=>{"id"in m&&i(0,o=m.id),"index"in m&&i(7,l=m.index),"dropdown_key"in m&&i(1,c=m.dropdown_key),"change"in m&&a(i(2,s=m.change)),"interactions"in m&&i(8,f=m.interactions)},[o,c,s,u,_,w,C,l,f,v,I]}class Sa extends Re{constructor(n){super(),Ve(this,n,Aa,ka,Ye,{id:0,index:7,dropdown_key:1,change:2,interactions:8,render:9})}get id(){return this.$$.ctx[0]}set id(n){this.$$set({id:n}),P()}get index(){return this.$$.ctx[7]}set index(n){this.$$set({index:n}),P()}get dropdown_key(){return this.$$.ctx[1]}set dropdown_key(n){this.$$set({dropdown_key:n}),P()}get change(){return this.$$.ctx[2]}set change(n){this.$$set({change:n}),P()}get interactions(){return this.$$.ctx[8]}set interactions(n){this.$$set({interactions:n}),P()}get render(){return this.$$.ctx[9]}}function Ea(e){let n,i,t,r;return{c(){n=z("form"),i=z("input"),this.h()},l(a){n=H(a,"FORM",{class:!0});var o=$(n);i=H(o,"INPUT",{type:!0,class:!0,placeholder:!0}),o.forEach(O),this.h()},h(){L(i,"type","text"),L(i,"class","block w-full px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"),L(i,"placeholder",e[0]),L(n,"class","px-[1%] py-[1%] ml-[5.9%]")},m(a,o){Ce(a,n,o),D(n,i),pn(i,e[2]),t||(r=[sn(i,"input",e[8]),sn(i,"change",e[3])],t=!0)},p(a,[o]){o&1&&L(i,"placeholder",a[0]),o&4&&i.value!==a[2]&&pn(i,a[2])},i:le,o:le,d(a){a&&O(n),t=!1,Mi(r)}}}function Ca(e,n,i){let t,r=le,a=()=>(r(),r=ze(c,w=>i(9,t=w)),c);e.$$.on_destroy.push(()=>r());let o=null,{placeholder:l="textbox"}=n,{change:c=Fe({})}=n;a();let{id:s}=n,{interactions:f={change:c}}=n;function u(){c.isActive&&te(c,t={text:o},t)}function _(w){w&&R.is(Array,w)&&w.length&&i(0,l=String(w[0]))}function g(w,C){i(2,o=w),u()}function v(){o=this.value,i(2,o)}return e.$$set=w=>{"placeholder"in w&&i(0,l=w.placeholder),"change"in w&&a(i(1,c=w.change)),"id"in w&&i(4,s=w.id),"interactions"in w&&i(5,f=w.interactions)},[l,c,o,u,s,f,_,g,v]}class Ia extends Re{constructor(n){super(),Ve(this,n,Ca,Ea,Ye,{placeholder:0,change:1,id:4,interactions:5,render:6,load:7})}get placeholder(){return this.$$.ctx[0]}set placeholder(n){this.$$set({placeholder:n}),P()}get change(){return this.$$.ctx[1]}set change(n){this.$$set({change:n}),P()}get id(){return this.$$.ctx[4]}set id(n){this.$$set({id:n}),P()}get interactions(){return this.$$.ctx[5]}set interactions(n){this.$$set({interactions:n}),P()}get render(){return this.$$.ctx[6]}get load(){return this.$$.ctx[7]}}var Xi={exports:{}},Da=Xi.exports={};Da.forEach=function(e,n){for(var i=0;i<e.length;i++){var t=n(e[i]);if(t)return t}};var Ki=Xi.exports,Ta=function(e){var n=e.stateHandler.getState;function i(o){var l=n(o);return l&&!!l.isDetectable}function t(o){n(o).isDetectable=!0}function r(o){return!!n(o).busy}function a(o,l){n(o).busy=!!l}return{isDetectable:i,markAsDetectable:t,isBusy:r,markBusy:a}},Oa=function(e){var n={};function i(o){var l=e.get(o);return l===void 0?[]:n[l]||[]}function t(o,l){var c=e.get(o);n[c]||(n[c]=[]),n[c].push(l)}function r(o,l){for(var c=i(o),s=0,f=c.length;s<f;++s)if(c[s]===l){c.splice(s,1);break}}function a(o){var l=i(o);l&&(l.length=0)}return{get:i,add:t,removeListener:r,removeAllListeners:a}},La=function(){var e=1;function n(){return e++}return{generate:n}},Na=function(e){var n=e.idGenerator,i=e.stateHandler.getState;function t(a){var o=i(a);return o&&o.id!==void 0?o.id:null}function r(a){var o=i(a);if(!o)throw new Error("setId required the element to have a resize detection state.");var l=n.generate();return o.id=l,l}return{get:t,set:r}},Ma=function(e){function n(){}var i={log:n,warn:n,error:n};if(!e&&window.console){var t=function(r,a){r[a]=function(){var l=console[a];if(l.apply)l.apply(console,arguments);else for(var c=0;c<arguments.length;c++)l(arguments[c])}};t(i,"log"),t(i,"warn"),t(i,"error")}return i},Ji={exports:{}},Zi=Ji.exports={};Zi.isIE=function(e){function n(){var t=navigator.userAgent.toLowerCase();return t.indexOf("msie")!==-1||t.indexOf("trident")!==-1||t.indexOf(" edge/")!==-1}if(!n())return!1;if(!e)return!0;var i=function(){var t,r=3,a=document.createElement("div"),o=a.getElementsByTagName("i");do a.innerHTML="<!--[if gt IE "+ ++r+"]><i></i><![endif]-->";while(o[0]);return r>4?r:t}();return e===i};Zi.isLegacyOpera=function(){return!!window.opera};var Qi=Ji.exports,et={exports:{}},Fa=et.exports={};Fa.getOption=ja;function ja(e,n,i){var t=e[n];return t==null&&i!==void 0?i:t}var qa=et.exports,yi=qa,Pa=function(n){n=n||{};var i=n.reporter,t=yi.getOption(n,"async",!0),r=yi.getOption(n,"auto",!0);r&&!t&&(i&&i.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),t=!0);var a=xi(),o,l=!1;function c(v,w){!l&&r&&t&&a.size()===0&&u(),a.add(v,w)}function s(){for(l=!0;a.size();){var v=a;a=xi(),v.process()}l=!1}function f(v){l||(v===void 0&&(v=t),o&&(_(o),o=null),v?u():s())}function u(){o=g(s)}function _(v){var w=clearTimeout;return w(v)}function g(v){var w=function(C){return setTimeout(C,0)};return w(v)}return{add:c,force:f}};function xi(){var e={},n=0,i=0,t=0;function r(l,c){c||(c=l,l=0),l>i?i=l:l<t&&(t=l),e[l]||(e[l]=[]),e[l].push(c),n++}function a(){for(var l=t;l<=i;l++)for(var c=e[l],s=0;s<c.length;s++){var f=c[s];f()}}function o(){return n}return{add:r,process:a,size:o}}var Nn="_erd";function Ba(e){return e[Nn]={},nt(e)}function nt(e){return e[Nn]}function za(e){delete e[Nn]}var Ha={initState:Ba,getState:nt,cleanState:za},an=Qi,$a=function(e){e=e||{};var n=e.reporter,i=e.batchProcessor,t=e.stateHandler.getState;if(!n)throw new Error("Missing required dependency: reporter.");function r(s,f){function u(){f(s)}if(an.isIE(8))t(s).object={proxy:u},s.attachEvent("onresize",u);else{var _=l(s);if(!_)throw new Error("Element is not detectable by this strategy.");_.contentDocument.defaultView.addEventListener("resize",u)}}function a(s){var f=e.important?" !important; ":"; ";return(s.join(f)+f).trim()}function o(s,f,u){u||(u=f,f=s,s=null),s=s||{},s.debug;function _(g,v){var w=a(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),C=!1,I=window.getComputedStyle(g),m=g.offsetWidth,S=g.offsetHeight;t(g).startSize={width:m,height:S};function y(){function d(){if(I.position==="static"){g.style.setProperty("position","relative",s.important?"important":"");var N=function(V,j,Y,h){function F(T){return T.replace(/[^-\d\.]/g,"")}var ee=Y[h];ee!=="auto"&&F(ee)!=="0"&&(V.warn("An element that is positioned static has style."+h+"="+ee+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+h+" will be set to 0. Element: ",j),j.style.setProperty(h,"0",s.important?"important":""))};N(n,g,I,"top"),N(n,g,I,"right"),N(n,g,I,"bottom"),N(n,g,I,"left")}}function k(){C||d();function N(j,Y){if(!j.contentDocument){var h=t(j);h.checkForObjectDocumentTimeoutId&&window.clearTimeout(h.checkForObjectDocumentTimeoutId),h.checkForObjectDocumentTimeoutId=setTimeout(function(){h.checkForObjectDocumentTimeoutId=0,N(j,Y)},100);return}Y(j.contentDocument)}var V=this;N(V,function(Y){v(g)})}I.position!==""&&(d(),C=!0);var b=document.createElement("object");b.style.cssText=w,b.tabIndex=-1,b.type="text/html",b.setAttribute("aria-hidden","true"),b.onload=k,an.isIE()||(b.data="about:blank"),t(g)&&(g.appendChild(b),t(g).object=b,an.isIE()&&(b.data="about:blank"))}i?i.add(y):y()}an.isIE(8)?u(f):_(f,u)}function l(s){return t(s).object}function c(s){if(t(s)){var f=l(s);f&&(an.isIE(8)?s.detachEvent("onresize",f.proxy):s.removeChild(f),t(s).checkForObjectDocumentTimeoutId&&window.clearTimeout(t(s).checkForObjectDocumentTimeoutId),delete t(s).object)}}return{makeDetectable:o,addListener:r,uninstall:c}},Ra=Ki.forEach,Va=function(e){e=e||{};var n=e.reporter,i=e.batchProcessor,t=e.stateHandler.getState;e.stateHandler.hasState;var r=e.idHandler;if(!i)throw new Error("Missing required dependency: batchProcessor");if(!n)throw new Error("Missing required dependency: reporter.");var a=f(),o="erd_scroll_detection_scrollbar_style",l="erd_scroll_detection_container";function c(y){u(y,o,l)}c(window.document);function s(y){var d=e.important?" !important; ":"; ";return(y.join(d)+d).trim()}function f(){var y=500,d=500,k=document.createElement("div");k.style.cssText=s(["position: absolute","width: "+y*2+"px","height: "+d*2+"px","visibility: hidden","margin: 0","padding: 0"]);var b=document.createElement("div");b.style.cssText=s(["position: absolute","width: "+y+"px","height: "+d+"px","overflow: scroll","visibility: none","top: "+-y*3+"px","left: "+-d*3+"px","visibility: hidden","margin: 0","padding: 0"]),b.appendChild(k),document.body.insertBefore(b,document.body.firstChild);var N=y-b.clientWidth,V=d-b.clientHeight;return document.body.removeChild(b),{width:N,height:V}}function u(y,d,k){function b(Y,h){h=h||function(ee){y.head.appendChild(ee)};var F=y.createElement("style");return F.innerHTML=Y,F.id=d,h(F),F}if(!y.getElementById(d)){var N=k+"_animation",V=k+"_animation_active",j=`/* Created by the element-resize-detector library. */
`;j+="."+k+" > div::-webkit-scrollbar { "+s(["display: none"])+` }

`,j+="."+V+" { "+s(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+N,"animation-name: "+N])+` }
`,j+="@-webkit-keyframes "+N+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,j+="@keyframes "+N+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",b(j)}}function _(y){y.className+=" "+l+"_animation_active"}function g(y,d,k){if(y.addEventListener)y.addEventListener(d,k);else if(y.attachEvent)y.attachEvent("on"+d,k);else return n.error("[scroll] Don't know how to add event listeners.")}function v(y,d,k){if(y.removeEventListener)y.removeEventListener(d,k);else if(y.detachEvent)y.detachEvent("on"+d,k);else return n.error("[scroll] Don't know how to remove event listeners.")}function w(y){return t(y).container.childNodes[0].childNodes[0].childNodes[0]}function C(y){return t(y).container.childNodes[0].childNodes[0].childNodes[1]}function I(y,d){var k=t(y).listeners;if(!k.push)throw new Error("Cannot add listener to an element that is not detectable.");t(y).listeners.push(d)}function m(y,d,k){k||(k=d,d=y,y=null),y=y||{};function b(){if(y.debug){var x=Array.prototype.slice.call(arguments);if(x.unshift(r.get(d),"Scroll: "),n.log.apply)n.log.apply(null,x);else for(var B=0;B<x.length;B++)n.log(x[B])}}function N(x){function B(q){var xe=q.getRootNode&&q.getRootNode().contains(q);return q===q.ownerDocument.body||q.ownerDocument.body.contains(q)||xe}return!B(x)||window.getComputedStyle(x)===null}function V(x){var B=t(x).container.childNodes[0],q=window.getComputedStyle(B);return!q.width||q.width.indexOf("px")===-1}function j(){var x=window.getComputedStyle(d),B={};return B.position=x.position,B.width=d.offsetWidth,B.height=d.offsetHeight,B.top=x.top,B.right=x.right,B.bottom=x.bottom,B.left=x.left,B.widthCSS=x.width,B.heightCSS=x.height,B}function Y(){var x=j();t(d).startSize={width:x.width,height:x.height},b("Element start size",t(d).startSize)}function h(){t(d).listeners=[]}function F(){if(b("storeStyle invoked."),!t(d)){b("Aborting because element has been uninstalled");return}var x=j();t(d).style=x}function ee(x,B,q){t(x).lastWidth=B,t(x).lastHeight=q}function T(x){return w(x).childNodes[0]}function Ie(){return 2*a.width+1}function ne(){return 2*a.height+1}function je(x){return x+10+Ie()}function ie(x){return x+10+ne()}function tn(x){return x*2+Ie()}function he(x){return x*2+ne()}function Ge(x,B,q){var xe=w(x),U=C(x),De=je(B),Z=ie(q),re=tn(B),M=he(q);xe.scrollLeft=De,xe.scrollTop=Z,U.scrollLeft=re,U.scrollTop=M}function se(){var x=t(d).container;if(!x){x=document.createElement("div"),x.className=l,x.style.cssText=s(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),t(d).container=x,_(x),d.appendChild(x);var B=function(){t(d).onRendered&&t(d).onRendered()};g(x,"animationstart",B),t(d).onAnimationStart=B}return x}function rn(){function x(){var X=t(d).style;if(X.position==="static"){d.style.setProperty("position","relative",y.important?"important":"");var Se=function(Ne,Oe,un,We){function fn(dn){return dn.replace(/[^-\d\.]/g,"")}var Ke=un[We];Ke!=="auto"&&fn(Ke)!=="0"&&(Ne.warn("An element that is positioned static has style."+We+"="+Ke+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+We+" will be set to 0. Element: ",Oe),Oe.style[We]=0)};Se(n,d,X,"top"),Se(n,d,X,"right"),Se(n,d,X,"bottom"),Se(n,d,X,"left")}}function B(X,Se,Ne,Oe){return X=X?X+"px":"0",Se=Se?Se+"px":"0",Ne=Ne?Ne+"px":"0",Oe=Oe?Oe+"px":"0",["left: "+X,"top: "+Se,"right: "+Oe,"bottom: "+Ne]}if(b("Injecting elements"),!t(d)){b("Aborting because element has been uninstalled");return}x();var q=t(d).container;q||(q=se());var xe=a.width,U=a.height,De=s(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),Z=s(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(B(-(1+xe),-(1+U),-U,-xe))),re=s(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),M=s(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),ce=s(["position: absolute","left: 0","top: 0"]),G=s(["position: absolute","width: 200%","height: 200%"]),ke=document.createElement("div"),W=document.createElement("div"),Te=document.createElement("div"),ue=document.createElement("div"),qe=document.createElement("div"),fe=document.createElement("div");ke.dir="ltr",ke.style.cssText=De,ke.className=l,W.className=l,W.style.cssText=Z,Te.style.cssText=re,ue.style.cssText=ce,qe.style.cssText=M,fe.style.cssText=G,Te.appendChild(ue),qe.appendChild(fe),W.appendChild(Te),W.appendChild(qe),ke.appendChild(W),q.appendChild(ke);function p(){var X=t(d);X&&X.onExpand?X.onExpand():b("Aborting expand scroll handler: element has been uninstalled")}function A(){var X=t(d);X&&X.onShrink?X.onShrink():b("Aborting shrink scroll handler: element has been uninstalled")}g(Te,"scroll",p),g(qe,"scroll",A),t(d).onExpandScroll=p,t(d).onShrinkScroll=A}function pe(){function x(re,M,ce){var G=T(re),ke=je(M),W=ie(ce);G.style.setProperty("width",ke+"px",y.important?"important":""),G.style.setProperty("height",W+"px",y.important?"important":"")}function B(re){var M=d.offsetWidth,ce=d.offsetHeight,G=M!==t(d).lastWidth||ce!==t(d).lastHeight;b("Storing current size",M,ce),ee(d,M,ce),i.add(0,function(){if(G){if(!t(d)){b("Aborting because element has been uninstalled");return}if(!q()){b("Aborting because element container has not been initialized");return}if(y.debug){var W=d.offsetWidth,Te=d.offsetHeight;(W!==M||Te!==ce)&&n.warn(r.get(d),"Scroll: Size changed before updating detector elements.")}x(d,M,ce)}}),i.add(1,function(){if(!t(d)){b("Aborting because element has been uninstalled");return}if(!q()){b("Aborting because element container has not been initialized");return}Ge(d,M,ce)}),G&&re&&i.add(2,function(){if(!t(d)){b("Aborting because element has been uninstalled");return}if(!q()){b("Aborting because element container has not been initialized");return}re()})}function q(){return!!t(d).container}function xe(){function re(){return t(d).lastNotifiedWidth===void 0}b("notifyListenersIfNeeded invoked");var M=t(d);if(re()&&M.lastWidth===M.startSize.width&&M.lastHeight===M.startSize.height)return b("Not notifying: Size is the same as the start size, and there has been no notification yet.");if(M.lastWidth===M.lastNotifiedWidth&&M.lastHeight===M.lastNotifiedHeight)return b("Not notifying: Size already notified");b("Current size not notified, notifying..."),M.lastNotifiedWidth=M.lastWidth,M.lastNotifiedHeight=M.lastHeight,Ra(t(d).listeners,function(ce){ce(d)})}function U(){if(b("startanimation triggered."),V(d)){b("Ignoring since element is still unrendered...");return}b("Element rendered.");var re=w(d),M=C(d);(re.scrollLeft===0||re.scrollTop===0||M.scrollLeft===0||M.scrollTop===0)&&(b("Scrollbars out of sync. Updating detector elements..."),B(xe))}function De(){if(b("Scroll detected."),V(d)){b("Scroll event fired while unrendered. Ignoring...");return}B(xe)}if(b("registerListenersAndPositionElements invoked."),!t(d)){b("Aborting because element has been uninstalled");return}t(d).onRendered=U,t(d).onExpand=De,t(d).onShrink=De;var Z=t(d).style;x(d,Z.width,Z.height)}function on(){if(b("finalizeDomMutation invoked."),!t(d)){b("Aborting because element has been uninstalled");return}var x=t(d).style;ee(d,x.width,x.height),Ge(d,x.width,x.height)}function ge(){k(d)}function Xe(){b("Installing..."),h(),Y(),i.add(0,F),i.add(1,rn),i.add(2,pe),i.add(3,on),i.add(4,ge)}b("Making detectable..."),N(d)?(b("Element is detached"),se(),b("Waiting until element is attached..."),t(d).onRendered=function(){b("Element is now attached"),Xe()}):Xe()}function S(y){var d=t(y);d&&(d.onExpandScroll&&v(w(y),"scroll",d.onExpandScroll),d.onShrinkScroll&&v(C(y),"scroll",d.onShrinkScroll),d.onAnimationStart&&v(d.container,"animationstart",d.onAnimationStart),d.container&&y.removeChild(d.container))}return{makeDetectable:m,addListener:I,uninstall:S,initDocument:c}},ln=Ki.forEach,Ya=Ta,Wa=Oa,Ua=La,Ga=Na,Xa=Ma,wi=Qi,Ka=Pa,Pe=Ha,Ja=$a,Za=Va;function ki(e){return Array.isArray(e)||e.length!==void 0}function Ai(e){if(Array.isArray(e))return e;var n=[];return ln(e,function(i){n.push(i)}),n}function Si(e){return e&&e.nodeType===1}var Qa=function(e){e=e||{};var n;if(e.idHandler)n={get:function(m){return e.idHandler.get(m,!0)},set:e.idHandler.set};else{var i=Ua(),t=Ga({idGenerator:i,stateHandler:Pe});n=t}var r=e.reporter;if(!r){var a=r===!1;r=Xa(a)}var o=Be(e,"batchProcessor",Ka({reporter:r})),l={};l.callOnAdd=!!Be(e,"callOnAdd",!0),l.debug=!!Be(e,"debug",!1);var c=Wa(n),s=Ya({stateHandler:Pe}),f,u=Be(e,"strategy","object"),_=Be(e,"important",!1),g={reporter:r,batchProcessor:o,stateHandler:Pe,idHandler:n,important:_};if(u==="scroll"&&(wi.isLegacyOpera()?(r.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),u="object"):wi.isIE(9)&&(r.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),u="object")),u==="scroll")f=Za(g);else if(u==="object")f=Ja(g);else throw new Error("Invalid strategy name: "+u);var v={};function w(m,S,y){function d(Y){var h=c.get(Y);ln(h,function(ee){ee(Y)})}function k(Y,h,F){c.add(h,F),Y&&F(h)}if(y||(y=S,S=m,m={}),!S)throw new Error("At least one element required.");if(!y)throw new Error("Listener required.");if(Si(S))S=[S];else if(ki(S))S=Ai(S);else return r.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");var b=0,N=Be(m,"callOnAdd",l.callOnAdd),V=Be(m,"onReady",function(){}),j=Be(m,"debug",l.debug);ln(S,function(h){Pe.getState(h)||(Pe.initState(h),n.set(h));var F=n.get(h);if(j&&r.log("Attaching listener to element",F,h),!s.isDetectable(h)){if(j&&r.log(F,"Not detectable."),s.isBusy(h)){j&&r.log(F,"System busy making it detectable"),k(N,h,y),v[F]=v[F]||[],v[F].push(function(){b++,b===S.length&&V()});return}return j&&r.log(F,"Making detectable..."),s.markBusy(h,!0),f.makeDetectable({debug:j,important:_},h,function(T){if(j&&r.log(F,"onElementDetectable"),Pe.getState(T)){s.markAsDetectable(T),s.markBusy(T,!1),f.addListener(T,d),k(N,T,y);var Ie=Pe.getState(T);if(Ie&&Ie.startSize){var ne=T.offsetWidth,je=T.offsetHeight;(Ie.startSize.width!==ne||Ie.startSize.height!==je)&&d(T)}v[F]&&ln(v[F],function(ie){ie()})}else j&&r.log(F,"Element uninstalled before being detectable.");delete v[F],b++,b===S.length&&V()})}j&&r.log(F,"Already detecable, adding listener."),k(N,h,y),b++}),b===S.length&&V()}function C(m){if(!m)return r.error("At least one element is required.");if(Si(m))m=[m];else if(ki(m))m=Ai(m);else return r.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");ln(m,function(S){c.removeAllListeners(S),f.uninstall(S),Pe.cleanState(S)})}function I(m){f.initDocument&&f.initDocument(m)}return{listenTo:w,removeListener:c.removeListener,removeAllListeners:c.removeAllListeners,uninstall:C,initDocument:I}};function Be(e,n,i){var t=e[n];return t==null&&i!==void 0?i:t}const el=Xo(Qa);el({strategy:"scroll"});function nl(e,n,i){let t,r;zn(e,Rn,l=>i(2,t=l)),zn(e,$n,l=>i(3,r=l));let a=[];function o(l,c){a=l??a,console.log("in query update.... ",l,c),te($n,r[c]=a,r);let s={Sep:{start:24,end:27},Oct:{start:27,end:30},Nov:{start:30,end:33}};c=="defaults_q"&&te(Rn,t=a.map(f=>({chirps_early:{start:f.chirps_early_first,end:f.chirps_early_last},chirps_late:{start:f.chirps_late_first,end:f.chirps_late_last},vegetation:s[f.evi_month]})),t)}return[o]}class il extends Re{constructor(n){super(),Ve(this,n,nl,null,Ye,{render:0})}get render(){return this.$$.ctx[0]}}function tl(e){let n,i;return{c(){n=z("div"),i=ft("svg"),this.h()},l(t){n=H(t,"DIV",{class:!0});var r=$(n);i=dt(r,"svg",{id:!0,viewBox:!0,width:!0,height:!0});var a=$(i);a.forEach(O),r.forEach(O),this.h()},h(){L(i,"id","svgcontainer"),L(i,"viewBox","372 130 30 30"),L(i,"width","100%"),L(i,"height","100%"),L(n,"class","w-5/5 h-5/5")},m(t,r){Ce(t,n,r),D(n,i),e[4](n)},p:le,i:le,o:le,d(t){t&&O(n),e[4](null)}}}function rl(e,n,i){let{spec:t}=n,{theplot:r=null}=n,a,o=[],l;function c(f,u){if(!f||f.length==0)return;u=="overlay"||(o=f??o),console.log("map data to plot: ",o);let _={projection:"equirectangular",color:{type:"quantile",n:9,scheme:"blues"},marks:[Go(o,{strokeOpacity:.5,strokeWidth:.01,precision:.01,fill:v=>v.properties.OBJECTID})]};i(1,r=Nt(_)),l=r.children[1];let g=document.getElementById("svgcontainer");g.innerHTML="",g.append(l)}function s(f){vn[f?"unshift":"push"](()=>{a=f,i(0,a)})}return e.$$set=f=>{"spec"in f&&i(2,t=f.spec),"theplot"in f&&i(1,r=f.theplot)},[a,r,t,c,s]}class ol extends Re{constructor(n){super(),Ve(this,n,rl,tl,Ye,{spec:2,theplot:1,render:3})}get spec(){return this.$$.ctx[2]}set spec(n){this.$$set({spec:n}),P()}get theplot(){return this.$$.ctx[1]}set theplot(n){this.$$set({theplot:n}),P()}get render(){return this.$$.ctx[3]}}const al=Object.freeze(Object.defineProperty({__proto__:null,ActionCal:wa,Alert:Mt,Autocomplete:Sa,BarGrouped:Ft,Container:ha,CropCal:jt,DropDown:qt,Header:Gt,Line:Pt,Login:Bt,Map:ol,MatchingTable:zt,MatchingTableBackend:rt,OverlayBackend:ot,QueryBackend:at,QueryUpdate:il,Slider:Ht,SliderFreq:ma,SliderYear:ba,Spinner:Xt,Textbox:Ia},Symbol.toStringTag,{value:"Module"}));let ll=lt(al,nr);function hn(e,n){if(!e)throw new Error(n)}function sl(e){let n=e.replaceAll(/\$\w+/g,i=>`o['${i.substring(1)}']`);return new Function("o",`return ${n}`)}const it=$t(Rt(Ee(Array),Ee(Object)),Vt(e=>it(e)),sl);let Cn={};class gl{constructor(n,i){this.magic=n,this.config=i,this.backends={},this.interactions={},this.views={},this.viewIdToViews,this.deferred=[],this._deferredMode=!1;const t=a=>o=>{let l=this.magic.backend[a](o);return l.type=a,l};["overlay","duckdb","array","identity"].forEach(a=>this[a]=t(a)),this.root=document.createElement("div"),document.body.appendChild(this.root),this.loadBackends(i.backends??[]),this.loadViews(i.views??[]),this._deferredMode=!0,this.deferred.forEach(a=>a())}defer(n,i){if(this._deferredMode)throw new Error(i);this.deferred.push(n.bind(this))}async init(){for(let n of kn(this.backends))n.type=="duckdb"&&await n.init();await this.loadDependencies(this.config.dependencies??[]);for(let n of kn(this.backends))switch(n.type){case"array":n.execute();break;case"query":await n.execute();break;case"matching":await n.execute();break}st((n,i)=>{var t;(t=this.views[i])==null||t.load(n())},this.magic.dependencies.defaults);for(let n of kn(this.backends))n.save&&this.magic.saveBackends(n)}newName(n="name"){return Cn[n]=Cn[n]??0,`${n}${Cn[n]++}`}loadBackends(n){let i=Vn(this.createBackend.bind(this));return ct(t=>t.type=="duckdb",n).forEach(i),Yt(t=>t.type=="duckdb",n).forEach(i),this}createBackend(n){let i=n.name??(n.type?this.newName(n.type):this.newName("backend"));if(this.backends[i])throw new Error(`Backend ${i} already exists`);let t=null;if(n.type)t=this[n.type](n);else if(n.query)t=this.query(n);else if(n.matching)t=this.matching(n);else{if(n.backend)return this.backends[n.backend];if(n.interaction){t=this.identity();let r=this.interactions[n.interaction];Ae(r)&&this.defer(()=>this.createBackend(n),`Interaction ${n.interaction} not found`),t&&r&&this.magic.connect(t,r)}else if(n.array)t=this.array({...n,data:n.array});else throw new Error("Can't initialize backend config:",n)}return hn(!Ae(t),`Backend is null ${t.type}`),hn(!Ae(t.type),`New Backend must have type attr ${JSON.stringify(n)}`),t.save=n.save,this.backends[i]=t,t}matching({name:n,ignore_cols:i,default_func:t,backend:r,matching:a,defaults:o={}}){r=Ee(String,r)?this.backends[r]:r,n=n??this.newName("matching");let l=this.magic.backend.matching({id:n,backend:r,default_func:t,matching:a,ignore_cols:i,defaults:o});return l.type="matching",l}query({name:n,query:i,defaults:t={},db:r="duckdb"}){r=Ee(String,r)?this.backends[r]:r,n=n??this.newName("query");let a=this.magic.backend.query({id:n,backend:r,query:i,name:n,defaults:t});return a.type="query",a}loadViews(n){n=n??[];let i=n.map(t=>{let r=this.canonicalizeData(t.data),a=this.makeView(t);return this.views[t.name]=a,this.magic.view(a),a.backends=Wt(a.backends??[],r??[]),a.backends.forEach(o=>{this.magic.render(o,a)}),a});er(n,i).forEach(([t,r])=>{(t.interactions??[]).forEach(o=>{this.connectInteractions(r,o)})})}connectInteractions(n,{to:i,name:t,type:r,defaults:a}){let o=n.interactions[r];if(Ae(o))throw new Error(`Interaction ${r} not found in View ${n.id}`);if(this.interactions[t]=o,Ae(a)||this.magic.dependencies.setDefault(n,()=>a),Ae(i)||Dn(i)){this.magic.connect(null,o,null);return}(Ee(Array,i)?i:[i]).forEach(c=>{c=Ee(String,c)?{backend:c}:c;let s=this.backends[c.backend],f=it(Yn(["opts","backend","view"],c));if(Ae(s)){let u=c.view;if(/\w+\.\d+/.test(u)){let[_,g]=u.split(".");s=this.views[_].backends[parseInt(g)],hn(!Ae(s),`Backend not found ${u}`)}else{let _=this.views[u];Ae(_)&&this.defer(()=>this.connectInteractions(n,{to:c,name:t,type:r,defaults:a}),`Interaction references nonexistent backend ${c.backend} and view ${u}`),s=this.identity(),this.magic.render(s,_)}}this.magic.connect(s,o,f)})}makeView(n){let i=n.type,t=Yn(["data","interactions"],n);t.id=t.id??t.name??this.newName(i);let r=null;n.selector?r=document.querySelector(n.selector):(r=document.createElement("div"),this.root.appendChild(r)),console.log("new View",i,t);let a=new ll[i]({target:r,props:t});return a.el=r,a}canonicalizeData(n){if(Ee(String,n)){let i=this.backends[n];return hn(!Ae(i),`Backend named ${n} not found`),[i]}return n=Ee(Array,n)?n:[n],Ut(en(Kt,n[0]),["query","matching","backend","interaction"])||(n=[{array:n}]),n.map(Vn(this.createBackend.bind(this)))}async loadDependencies(n){(n??[]).forEach(({source:i,attr:t,target:r})=>{let a=null;if(a=this.interactions[i],Ae(a)&&/\w+\.\w+/.test(i)){let[l,c]=i.split(".");a=this.views[l].interactions[c]}if(Ae(a))throw new Error(`Interaction not found ${i}`);(Ee(Array,r)?r:[r]).forEach(async l=>{l=Ee(String,l)?{view:l}:l;let c=l.view,s=this.views[c];if(Ae(s))throw new Error("View not found: ",c);let f;if(en("function")(l.defaults)){let u=await this.backends[l.defaults.backend].execute();f=new Function("e","a",l.defaults.function).bind(u)}else f=l.defaults?()=>l.defaults:null;this.magic.dependencies.add(a.get(t),s,null,f)})})}}const ml=`backends:
- type: duckdb
  name: duckdb
  sources:
  - parquet: "admin_raw.parquet"
    name: "admin_raw"
  - parquet: "chirps_raw.parquet"
    name: "chirps_raw"
  - parquet: "evi_raw.parquet"
    name: "evi_raw"
  - parquet: "crop_cal_raw.parquet"
    name: crop_cal_raw
  - parquet: "badyear_raw.parquet"
    name: badyear_raw
  - parquet: "action_cal_raw.parquet"
    name: action_cal_raw
- type: query
  name: climatology
  # query doesn't have source/sources -- assumes all data is loaded already
  db: duckdb
  query: "" # if query name is in model out, will pull query from there, replacing this text 
  defaults:
    region: 1
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true 
- type: query
  name: crop_cal
  db: duckdb
  query: ""
  defaults:
    region: 1
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true
- type: query
  name: action_cal
  db: duckdb
  query: ""
  defaults:
    region: 1
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true
- type: query
  name: severity_combined 
  db: duckdb
  query: ""
  defaults:
    region: 1
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true 
- type: query
  name: badyear 
  db: duckdb
  query: "" 
  defaults:
    region: 1
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true 
- type: query
  name: matching 
  db: duckdb
  query: "" 
  defaults:
    region: 1
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8
  save: true 
- type: matching
  name: mtb 
  ignore_cols:
    - year
    - gid
    - value
  default_func: "true positive" 
  backend: matching
  #TODO: how to integrate functions into yaml 
  matching: ""
  defaults:
    region: 1
    dekcap: 24
    freq: 0.23
    year_start: 1993
    year_end: 2024
    back_fill_year: 2001
    sum_early_weight: 0.4
    sum_late_weight: 0.4 
    vegetation_weight: 0.6
    sum_early_first: 1
    sum_early_last: 30
    sum_late_first: 1
    sum_late_last: 30
    vegetation_first: 10
    vegetation_last: 30
    scalar_vegetation: 1
    exit_multiplier: 0.8 
  save: true
- type: query
  name: default_q 
  db: duckdb
  query: "SELECT gid, chirps_early_first, chirps_early_last, chirps_late_first, chirps_late_last, evi_month FROM admin_raw ORDER BY gid"
- type: overlay
  name: overlay
views:
- type: Login
  name: Login
  selector: "#login"
  dataTable: Ethiopia_Data
  stateTable: Ethiopia_State
- type: Line
  name: climatology_chart
  selector: "#chart-1"
  xAttr: dekad 
  yAttr: average_value
  data:
  - backend: climatology
  - backend: overlay
    target: overlay
- type: CropCal 
  name: crop_calendar 
  selector: "#chart-2"
  xDomainMin: 19
  xDomainMax: 55
  data:
  - backend: crop_cal 
  - backend: overlay
    target: overlay
- type: ActionCal 
  name: action_calendar 
  selector: "#chart-5"
  xDomainMin: 19
  xDomainMax: 55
  data:
  - backend: action_cal 
  - backend: overlay
    target: overlay
- type: BarGrouped   
  name: severity_combined
  selector: "#chart-3"
  xAttr: year
  yAttr: value
  yMax: 1
  xDomainMin: 1993
  xDomainMax: 2024
  groupNames:
    - sum_early
    - sum_late
    - vegetation
    - combined_severity
  data:
  - backend: severity_combined
  - backend: badyear
  - backend: overlay
    target: overlay
- type: MatchingTable    
  name: matching_table  
  selector: "#chart-4"
  data:
  - backend: mtb  
- type: DropDown
  name: Village_Autocomplete
  selector: "#dropdown-villages"
  interactions:
    - type: change
      name: ddc
      defaults:
        region: 1
      to:
        - backend: climatology
          region: $gid
        - backend: mtb
          region: $gid
        - backend: crop_cal
          region: $gid
        - backend: severity_combined 
          region: $gid
        - backend: badyear
          region: $gid
  index: 0
  dropdown_key: region
  data: 
  - query: "SELECT gid, region FROM admin_raw ORDER BY gid"
- type: DropDown
  name: Matching_Dropdown
  selector: "#dropdown-2"
  interactions:
    - type: change
      name: ddc-matching
      to:
        - backend: mtb
          func_elected: $value
  index: 0
  dropdown_key: value
  data: 
  - query: "SELECT * FROM (VALUES (0,'true positive'),(1,'true negative'),(2,'average matching')) MATCHING_OPTIONS(idx, value);"
- type: Slider
  name: PlantEarly
  selector: "#slider-1"
  min: 19
  max: 55
  description: "CHIRPS (Early Season)"
  tooltip: "This gives us the sum of rainfall during this time period in the early season."
  interactions:
  - type: change
    to: 
    - backend: severity_combined 
      sum_early_first: $left
      sum_early_last: $right
    - backend: mtb 
      sum_early_first: $left
      sum_early_last: $right
    - backend: overlay
      sum_early:
        left: $left
        right: $right
- type: Slider
  name: PlantLate
  selector: "#slider-2"
  min: 19
  max: 55
  description: "CHIRPS (Late Season)"
  tooltip: "This gives us the sum of rainfall during this time period in the late season."
  interactions:
  - type: change
    to: 
    - backend: severity_combined
      sum_late_first: $left
      sum_late_last: $right
    - backend: mtb 
      sum_late_first: $left
      sum_late_last: $right
    - backend: overlay
      sum_late:
        left: $left
        right: $right
- type: Slider
  name: Vegetation
  selector: "#slider-3"
  min: 19
  max: 19
  description: "Vegetation"
  tooltip: "This gives us the sum of vegetation during the particular time period"
  interactions:
  - type: change
    to:
    - backend: severity_combined 
      vegetation_first: $left
      vegetation_last: $right
    - backend: mtb 
      vegetation_first: $left
      vegetation_last: $right
    - backend: overlay
      vegetation:
        left: $left
        right: $right
- type: Alert
  name: Alert
  selector: "#alert"
  threshold_string: "0.5"
  key: "combined_severity"
  data:
    - backend: severity_combined
  interactions:
  - type: valid
- type: SliderFreq
  name: FrequencySlider
  selector: "#freq-slider"
  min: 0.1
  max: 1
  description: "Frequency Slider"
  tooltip: "This helps us adjust the frequency"
  interactions:
  - type: change
    to:
    - backend: severity_combined 
      freq: $left
    - backend: mtb  
      freq: $left
    - backend: badyear
      freq: $left
- type: Slider
  name: StartYearSlider
  selector: "#start-year"
  min: 1993
  max: 2024
  description: "Start Year"
  tooltip: "This helps us adjust the start year"
  interactions:
  - type: change
    to:
    - backend: severity_combined 
      year_start: $left
      year_end: $right
    - backend: mtb  
      year_start: $left
      year_end: $right
    - backend: badyear
      year_start: $left
      year_end: $right
dependencies: 
- source: ddc
  attr: "gid"
  target:
    - view: Vegetation
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        const month_to_dekad = {
          Sep: { start: 24, end: 27 },
          Oct: { start: 27, end: 30 },
          Nov: { start: 30, end: 33 },
          };
        return {left: month_to_dekad[row.evi_month].start,  right: month_to_dekad[row.evi_month].end}
        ;"
    - view: PlantEarly 
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        return {left: row.chirps_early_first,  right: row.chirps_early_last}
        ;"
    - view: PlantLate 
      defaults:
        backend: default_q
        function: "
        console.debug('args received into default', e, a);
        if(!a) return;
        let data = this; 
        console.debug('fetching gid ', a[0].store.val()['gid']);
        let row = data.filter((r) => r.gid === a[0].store.val()['gid'])[0];
        return {left: row.chirps_late_first,  right: row.chirps_late_last}
        ;"
`;export{gl as C,pl as l,ml as r};
