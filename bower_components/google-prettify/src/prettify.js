"use strict";var DecorationsT,JobT,SourceSpansT,HACK_TO_FIX_JS_INCLUDE_PL,PR,prettyPrintOne,prettyPrint,IN_GLOBAL_SCOPE=!1;window.PR_SHOULD_USE_CONTINUATION=!0,function(){var e=window,n=["break,continue,do,else,for,if,return,while"],t=[[n,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],r=[t,"alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],a=[t,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],s=[t,"abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield"],l=[t,"abstract,async,await,constructor,debugger,enum,eval,export,function,get,implements,instanceof,interface,let,null,set,undefined,var,with,yield,Infinity,NaN"],i="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",o=[n,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],u=[n,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],c=[n,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],p=/^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,d="str",f="kwd",g="com",h="typ",m="lit",v="pun",y="pln",b="src",x="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";function w(e,n,t,r,a){if(t){var s={sourceNode:e,pre:1,langExtension:null,numberLines:null,sourceCode:t,spans:null,basePos:n,decorations:null};r(s),a.push.apply(a,s.decorations)}}var S=/\S/;function C(e){for(var n=void 0,t=e.firstChild;t;t=t.nextSibling){var r=t.nodeType;n=1===r?n?e:t:3===r&&S.test(t.nodeValue)?e:n}return n===e?void 0:n}function N(e,n){var t,r={};!function(){for(var a=e.concat(n),s=[],l={},i=0,o=a.length;i<o;++i){var u=a[i],c=u[3];if(c)for(var p=c.length;--p>=0;)r[c.charAt(p)]=u;var d=u[1],f=""+d;l.hasOwnProperty(f)||(s.push(d),l[f]=null)}s.push(/[\0-\uffff]/),t=function(e){for(var n=0,t=!1,r=!1,a=0,s=e.length;a<s;++a)if((d=e[a]).ignoreCase)r=!0;else if(/[a-z]/i.test(d.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){t=!0,r=!1;break}var l={b:8,t:9,n:10,v:11,f:12,r:13};function i(e){var n=e.charCodeAt(0);if(92!==n)return n;var t=e.charAt(1);return(n=l[t])||("0"<=t&&t<="7"?parseInt(e.substring(1),8):"u"===t||"x"===t?parseInt(e.substring(2),16):e.charCodeAt(1))}function o(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);var n=String.fromCharCode(e);return"\\"===n||"-"===n||"]"===n||"^"===n?"\\"+n:n}function u(e){var n=e.substring(1,e.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),t=[],r="^"===n[0],a=["["];r&&a.push("^");for(var s=r?1:0,l=n.length;s<l;++s){var u=n[s];if(/\\[bdsw]/i.test(u))a.push(u);else{var c,p=i(u);s+2<l&&"-"===n[s+1]?(c=i(n[s+2]),s+=2):c=p,t.push([p,c]),c<65||p>122||(c<65||p>90||t.push([32|Math.max(65,p),32|Math.min(c,90)]),c<97||p>122||t.push([-33&Math.max(97,p),-33&Math.min(c,122)]))}}t.sort(function(e,n){return e[0]-n[0]||n[1]-e[1]});var d=[],f=[];for(s=0;s<t.length;++s)(g=t[s])[0]<=f[1]+1?f[1]=Math.max(f[1],g[1]):d.push(f=g);for(s=0;s<d.length;++s){var g=d[s];a.push(o(g[0])),g[1]>g[0]&&(g[1]+1>g[0]&&a.push("-"),a.push(o(g[1])))}return a.push("]"),a.join("")}function c(e){for(var r=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),a=r.length,s=[],l=0,i=0;l<a;++l)"("===(p=r[l])?++i:"\\"===p.charAt(0)&&(c=+p.substring(1))&&(c<=i?s[c]=-1:r[l]=o(c));for(l=1;l<s.length;++l)-1===s[l]&&(s[l]=++n);for(l=0,i=0;l<a;++l)if("("===(p=r[l]))s[++i]||(r[l]="(?:");else if("\\"===p.charAt(0)){var c;(c=+p.substring(1))&&c<=i&&(r[l]="\\"+s[c])}for(l=0;l<a;++l)"^"===r[l]&&"^"!==r[l+1]&&(r[l]="");if(e.ignoreCase&&t)for(l=0;l<a;++l){var p,d=(p=r[l]).charAt(0);p.length>=2&&"["===d?r[l]=u(p):"\\"!==d&&(r[l]=p.replace(/[a-zA-Z]/g,function(e){var n=e.charCodeAt(0);return"["+String.fromCharCode(-33&n,32|n)+"]"}))}return r.join("")}var p=[];for(a=0,s=e.length;a<s;++a){var d;if((d=e[a]).global||d.multiline)throw new Error(""+d);p.push("(?:"+c(d)+")")}return new RegExp(p.join("|"),r?"gi":"g")}(s)}();var a=n.length;return function e(s){for(var l=s.sourceCode,i=s.basePos,o=s.sourceNode,u=[i,y],c=0,p=l.match(t)||[],d={},f=0,g=p.length;f<g;++f){var h,m=p[f],v=d[m],x=void 0;if("string"==typeof v)h=!1;else{var S=r[m.charAt(0)];if(S)x=m.match(S[1]),v=S[0];else{for(var C=0;C<a;++C)if(S=n[C],x=m.match(S[1])){v=S[0];break}x||(v=y)}!(h=v.length>=5&&"lang-"===v.substring(0,5))||x&&"string"==typeof x[1]||(h=!1,v=b),h||(d[m]=v)}var N=c;if(c+=m.length,h){var _=x[1],P=m.indexOf(_),E=P+_.length;x[2]&&(P=(E=m.length-x[2].length)-_.length);var L=v.substring(5);w(o,i+N,m.substring(0,P),e,u),w(o,i+N+P,_,A(L,_),u),w(o,i+N+E,m.substring(E),e,u)}else u.push(i+N,v)}s.decorations=u}}function _(e){var n=[],t=[];e.tripleQuotedStrings?n.push([d,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?n.push([d,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):n.push([d,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&t.push([d,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(r>1?n.push([g,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):n.push([g,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),t.push([d,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):n.push([g,/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(t.push([g,/^\/\/[^\r\n]*/,null]),t.push([g,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));var a=e.regexLiterals;if(a){var s=a>1?"":"\n\r",l=s?".":"[\\S\\s]",i="/codelabs-base/(?=[^/*"+s+"])(?:[^/\\x5B\\x5C"+s+"]|\\x5C"+l+"|\\x5B(?:[^\\x5C\\x5D"+s+"]|\\x5C"+l+")*(?:\\x5D|$))+/";t.push(["lang-regex",RegExp("^"+x+"("+i+")")])}var o=e.types;o&&t.push([h,o]);var u=(""+e.keywords).replace(/^ | $/g,"");u.length&&t.push([f,new RegExp("^(?:"+u.replace(/[\s,]+/g,"|")+")\\b"),null]),n.push([y,/^\s+/,null," \r\n\t "]);var c="^.[^\\s\\w.$@'\"`/\\\\]*";return e.regexLiterals&&(c+="(?!s*/)"),t.push([m,/^@[a-z_$][a-z_$@0-9]*/i,null],[h,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[y,/^[a-z_$][a-z_$@0-9]*/i,null],[m,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[y,/^\\[\s\S]?/,null],[v,new RegExp(c),null]),N(n,t)}function P(e,n,t){for(var r=/(?:^|\s)nocode(?:\s|$)/,a=/\r\n?|\n/,s=e.ownerDocument,l=s.createElement("li");e.firstChild;)l.appendChild(e.firstChild);var i=[l];function o(e){var n=e.nodeType;if(1!=n||r.test(e.className)){if((3==n||4==n)&&t){var l=e.nodeValue,i=l.match(a);if(i){var c=l.substring(0,i.index);e.nodeValue=c;var p=l.substring(i.index+i[0].length);p&&e.parentNode.insertBefore(s.createTextNode(p),e.nextSibling),u(e),c||e.parentNode.removeChild(e)}}}else if("br"===e.nodeName)u(e),e.parentNode&&e.parentNode.removeChild(e);else for(var d=e.firstChild;d;d=d.nextSibling)o(d)}function u(e){for(;!e.nextSibling;)if(!(e=e.parentNode))return;for(var n,t=function e(n,t){var r=t?n.cloneNode(!1):n,a=n.parentNode;if(a){var s=e(a,1),l=n.nextSibling;s.appendChild(r);for(var i=l;i;i=l)l=i.nextSibling,s.appendChild(i)}return r}(e.nextSibling,0);(n=t.parentNode)&&1===n.nodeType;)t=n;i.push(t)}for(var c=0;c<i.length;++c)o(i[c]);n===(0|n)&&i[0].setAttribute("value",n);var p=s.createElement("ol");p.className="linenums";for(var d=Math.max(0,n-1|0)||0,f=(c=0,i.length);c<f;++c)(l=i[c]).className="L"+(c+d)%10,l.firstChild||l.appendChild(s.createTextNode(" ")),p.appendChild(l);e.appendChild(p)}var E={};function L(n,t){for(var r=t.length;--r>=0;){var a=t[r];E.hasOwnProperty(a)?e.console:E[a]=n}}function A(e,n){return e&&E.hasOwnProperty(e)||(e=/^\s*</.test(n)?"default-markup":"default-code"),E[e]}function T(n){var t,r,a,s,l,i,o,u=n.langExtension;try{var c=(t=n.sourceNode,r=n.pre,a=/(?:^|\s)nocode(?:\s|$)/,s=[],l=0,i=[],o=0,function e(n){var t=n.nodeType;if(1==t){if(a.test(n.className))return;for(var u=n.firstChild;u;u=u.nextSibling)e(u);var c=n.nodeName.toLowerCase();"br"!==c&&"li"!==c||(s[o]="\n",i[o<<1]=l++,i[o++<<1|1]=n)}else if(3==t||4==t){var p=n.nodeValue;p.length&&(p=r?p.replace(/\r\n?/g,"\n"):p.replace(/[ \t\r\n]+/g," "),s[o]=p,i[o<<1]=l,l+=p.length,i[o++<<1|1]=n)}}(t),{sourceCode:s.join("").replace(/\n$/,""),spans:i}),p=c.sourceCode;n.sourceCode=p,n.spans=c.spans,n.basePos=0,A(u,p)(n),function(e){var n=/\bMSIE\s(\d+)/.exec(navigator.userAgent);n=n&&+n[1]<=8;var t,r,a=/\n/g,s=e.sourceCode,l=s.length,i=0,o=e.spans,u=o.length,c=0,p=e.decorations,d=p.length,f=0;for(p[d]=l,r=t=0;r<d;)p[r]!==p[r+2]?(p[t++]=p[r++],p[t++]=p[r++]):r+=2;for(d=t,r=t=0;r<d;){for(var g=p[r],h=p[r+1],m=r+2;m+2<=d&&p[m+1]===h;)m+=2;p[t++]=g,p[t++]=h,r=m}d=p.length=t;var v=e.sourceNode,y="";v&&(y=v.style.display,v.style.display="none");try{for(;c<u;){o[c];var b,x=o[c+2]||l,w=p[f+2]||l,S=(m=Math.min(x,w),o[c+1]);if(1!==S.nodeType&&(b=s.substring(i,m))){n&&(b=b.replace(a,"\r")),S.nodeValue=b;var C=S.ownerDocument,N=C.createElement("span");N.className=p[f+1];var _=S.parentNode;_.replaceChild(N,S),N.appendChild(S),i<x&&(o[c+1]=S=C.createTextNode(s.substring(m,x)),_.insertBefore(S,N.nextSibling))}(i=m)>=x&&(c+=2),i>=w&&(f+=2)}}finally{v&&(v.style.display=y)}}(n)}catch(n){e.console}}function R(e,n,t){var r=t||!1,a=n||null,s=document.createElement("div");return s.innerHTML="<pre>"+e+"</pre>",s=s.firstChild,r&&P(s,r,!0),T({langExtension:a,numberLines:r,sourceNode:s,pre:1,sourceCode:null,basePos:null,spans:null,decorations:null}),s.innerHTML}function k(n,t){var r=t||document.body,a=r.ownerDocument||document;function s(e){return r.getElementsByTagName(e)}for(var l=[s("pre"),s("code"),s("xmp")],i=[],o=0;o<l.length;++o)for(var u=0,c=l[o].length;u<c;++u)i.push(l[o][u]);l=null;var p=Date;p.now||(p={now:function(){return+new Date}});var d=0,f=/\blang(?:uage)?-([\w.]+)(?!\S)/,g=/\bprettyprint\b/,h=/\bprettyprinted\b/,m=/pre|xmp/i,v=/^code$/i,y=/^(?:pre|code|xmp)$/i,b={};!function t(){for(var r=e.PR_SHOULD_USE_CONTINUATION?p.now()+250:Infinity;d<i.length&&p.now()<r;d++){for(var s=i[d],l=b,o=s;o=o.previousSibling;){var u=o.nodeType,c=(7===u||8===u)&&o.nodeValue;if(c?!/^\??prettify\b/.test(c):3!==u||/\S/.test(o.nodeValue))break;if(c){l={},c.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,n,t){l[n]=t});break}}var x=s.className;if((l!==b||g.test(x))&&!h.test(x)){for(var w=!1,S=s.parentNode;S;S=S.parentNode){var N=S.tagName;if(y.test(N)&&S.className&&g.test(S.className)){w=!0;break}}if(!w){s.className+=" prettyprinted";var _,E,L=l.lang;if(L||(!(L=x.match(f))&&(_=C(s))&&v.test(_.tagName)&&(L=_.className.match(f)),L&&(L=L[1])),m.test(s.tagName))E=1;else{var A=s.currentStyle,R=a.defaultView,k=A?A.whiteSpace:R&&R.getComputedStyle?R.getComputedStyle(s,null).getPropertyValue("white-space"):0;E=k&&"pre"===k.substring(0,3)}var $=l.linenums;($="true"===$||+$)||($=!!($=x.match(/\blinenums\b(?::(\d+))?/))&&(!$[1]||!$[1].length||+$[1])),$&&P(s,$,E),T({langExtension:L,sourceNode:s,numberLines:$,pre:E,sourceCode:null,basePos:null,spans:null,decorations:null})}}}d<i.length?e.setTimeout(t,250):"function"==typeof n&&n()}()}L(_({keywords:[r,s,a,l,i,o,u,c],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),["default-code"]),L(N([],[[y,/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],[g,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[v,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),L(N([[y,/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[v,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/codelabs-base/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/codelabs-base/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),L(N([],[["atv",/^[\s\S]+/]]),["uq.val"]),L(_({keywords:r,hashComments:!0,cStyleComments:!0,types:p}),["c","cc","cpp","cxx","cyc","m"]),L(_({keywords:"null,true,false"}),["json"]),L(_({keywords:s,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:p}),["cs"]),L(_({keywords:a,cStyleComments:!0}),["java"]),L(_({keywords:c,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),L(_({keywords:o,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),L(_({keywords:i,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),L(_({keywords:u,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),L(_({keywords:l,cStyleComments:!0,regexLiterals:!0}),["javascript","js","ts","typescript"]),L(_({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),L(N([],[[d,/^[\s\S]+/]]),["regex"]);var $=e.PR={createSimpleLexer:N,registerLangHandler:L,sourceDecorator:_,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:g,PR_DECLARATION:"dec",PR_KEYWORD:f,PR_LITERAL:m,PR_NOCODE:"nocode",PR_PLAIN:y,PR_PUNCTUATION:v,PR_SOURCE:b,PR_STRING:d,PR_TAG:"tag",PR_TYPE:h,prettyPrintOne:IN_GLOBAL_SCOPE?e.prettyPrintOne=R:prettyPrintOne=R,prettyPrint:prettyPrint=IN_GLOBAL_SCOPE?e.prettyPrint=k:prettyPrint=k},O=e.define;"function"==typeof O&&O.amd&&O("google-code-prettify",[],function(){return $})}();