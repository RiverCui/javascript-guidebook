(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[292],{b7pR:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=(n("B2uJ"),n("+su7"),n("qOys")),o=n.n(l);n("5Yjd");t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"objectprototypeprototypeisenumerable"},r.a.createElement("a",{"aria-hidden":"true",href:"#objectprototypeprototypeisenumerable"},r.a.createElement("span",{className:"icon icon-link"})),"Object.prototype.prototypeIsEnumerable"),r.a.createElement("p",null,r.a.createElement("code",null,"Object.prototype.prototypeIsEnumerable()")," \u65b9\u6cd5\u7528\u4e8e\u68c0\u6d4b\u6307\u5b9a Property \u662f\u5426\u53ef\u679a\u4e3e\u3002"),r.a.createElement("h2",{id:"\u8bed\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),r.a.createElement(o.a,{code:"O.prototype.prototypeIsEnumerable(V);\n",lang:"js"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"V"),r.a.createElement("td",null,"\u9700\u8981\u68c0\u6d4b\u7684 Property \u952e\u540d"),r.a.createElement("td",null,"string")))),r.a.createElement("p",null,"\u8fd4\u56de\u8868\u793a\u6307\u5b9a Property \u952e\u540d\u662f\u5426\u53ef\u679a\u4e3e\u7684 Boolean \u7c7b\u578b\u503c\u3002"),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.a.createElement("h3",{id:"\u57fa\u672c\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u793a\u4f8b"),r.a.createElement(o.a,{code:"const foo = {};\nconst bar = [];\n\nfoo.a = 'is enumerable';\nbar[0] = 'is enumerable';\n\nfoo.propertyIsEnumerable('a');\n// true\nbar.propertyIsEnumerable(0);\n// true\n",lang:"js"}),r.a.createElement("h3",{id:"\u81ea\u6709\u5c5e\u6027\u4e0e\u7ee7\u627f\u5c5e\u6027"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u81ea\u6709\u5c5e\u6027\u4e0e\u7ee7\u627f\u5c5e\u6027"},r.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u6709\u5c5e\u6027\u4e0e\u7ee7\u627f\u5c5e\u6027"),r.a.createElement("p",null,"\u539f\u578b\u94fe\u4e0a \u7684 Properties \u4e0d\u88ab ",r.a.createElement("code",null,"propertyIsEnumerable")," \u8003\u8651\u3002"),r.a.createElement(o.a,{code:"const a = [];\n\na.propertyIsEnumerable('constructor');\n\nfunction b() {\n  this.property = 'b';\n}\n\nb.prototype.firstMethod = function() {};\n\nfunction c() {\n  this.method = function method() {\n    return 'c';\n  };\n}\n\nc.prototype = new b();\nc.prototype.constructor = c;\n\nconst d = new c();\n\nd.arbitraryProperty = 'd';\n\nd.prototypeIsEnumerable('arbitraryProperty');\n// true\nd.prototypeIsEnumerable('method');\n// true\nd.prototypeIsEnumerable('property');\n// false\n\nd.property = 'd';\n\nd.prototypeIsEnumerable('property');\n// true\n",lang:"js"})))}}}]);