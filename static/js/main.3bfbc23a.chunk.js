(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(57)},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},57:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(6),o=t.n(i),c=(t(35),t(36),t(37),t(19)),r=t(20),u=t(28),m=t(21),s=t(10),v=t(29),h=t(22),d=t.n(h),b=t(23),p=t.n(b),E=function(e){var a=e.zona;return l.a.createElement(n.Fragment,null,l.a.createElement(d.a,{compressor:.4},l.a.createElement("h1",null,l.a.createElement(p.a,{format:"HH:mm:ss",ticking:!0,interval:1e3,timezone:a}))))},f=t(27),A=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={etiqueta:"Ciudad de M\xe9xico",timezone:"America/Mexico_City",zonas:[{value:"America/Cancun",label:"Canc\xfan"},{value:"America/Chihuahua",label:"Chihuahua"},{value:"America/Ensenada",label:"Ensenada"},{value:"America/Mexico_City",label:"Ciudad de M\xe9xico"},{value:"America/Hermosillo",label:"Hermosillo"},{value:"America/Mazatlan",label:"Mazatl\xe1n"},{value:"America/Merida",label:"M\xe9rida"},{value:"America/Monterrey",label:"Monterrey"},{value:"America/Tegucigalpa",label:"Tegucigalpa"},{value:"America/Tijuana",label:"Tijuana"}]},t.onSelect=t.onSelect.bind(Object(s.a)(t)),t}return Object(v.a)(a,e),Object(r.a)(a,[{key:"onSelect",value:function(e){this.setState({etiqueta:e.label,timezone:e.value})}},{key:"render",value:function(){var e=this.state.zonas;return l.a.createElement(n.Fragment,null,l.a.createElement(f.a,{value:{label:this.state.etiqueta,value:this.state.timezone},onChange:this.onSelect,placeholder:"Seleccione Timezone...",className:"selectForm",options:e,labelKey:"label",valueKey:"value"}),l.a.createElement("p",{className:"App-link"},"Hora Actual en: ",this.state.etiqueta),l.a.createElement(E,{zona:this.state.timezone,labelKey:"label",valueKey:"value"}))}}]),a}(n.Component),g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(A,null)))},w=t(24),y=t(7);var z=function(){return l.a.createElement(w.a,null,l.a.createElement(y.a,{path:"/app/PE",component:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.3bfbc23a.chunk.js.map