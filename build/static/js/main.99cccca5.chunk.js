(this.webpackJsonposa1=this.webpackJsonposa1||[]).push([[0],{18:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(12),u=t.n(r),l=t(13),s=t(14),i=t(16),c=t(15),m=t(17),p=t(2),d=t.n(p),h=function(e){var n=e.person,t=e.action;return o.a.createElement("li",null,n.name,"   ",n.number," ",o.a.createElement("button",{onClick:t}," Poista "))},v=function(e){var n=e.onSubmit,t=e.value1,a=e.value2,r=e.onChange1,u=e.onChange2;return o.a.createElement("div",null,o.a.createElement("h2",null,"Puhelinluettelo"),o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"nimi: ",o.a.createElement("input",{value:t,onChange:r})),o.a.createElement("div",null,"numero: ",o.a.createElement("input",{value:a,onChange:u})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"lis\xe4\xe4"))))},f=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).addName=function(e){e.preventDefault();var n=t.state.persons.map((function(e){return e.name}));console.log(n);var a=t.state.persons.map((function(e){return e.number}));if(console.log(a),n.includes(t.state.newName)||a.includes(t.state.newNumber))console.log("this person is already on the list"),t.setState({persons:t.state.persons,newName:"",newNumber:""});else{var o={name:t.state.newName,number:t.state.newNumber};d.a.post("http://panunpuhelinluettelo.herokuapp.com/api/persons",o).then((function(e){t.setState({persons:t.state.persons.concat(e.data),newName:"",newNumber:""})}))}},t.removePerson=function(e){return function(){var n="http://panunpuhelinluettelo.herokuapp.com/api/persons/".concat(e),a={person:t.state.persons.find((function(n){return n.id==={id:e}}))};d.a.delete(n,a).then((function(e){console.log(e.data),t.setState({persons:t.state.persons}),window.location.reload()}))}},t.handleNameAdd=function(e){t.setState({newName:e.target.value})},t.handleNumberAdd=function(e){t.setState({newNumber:e.target.value})},t.state={persons:[],newName:"",newNumber:""},console.log("constructor"),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("did mount"),d.a.get("http://panunpuhelinluettelo.herokuapp.com/api/persons").then((function(n){console.log("promise fulfilled"),e.setState({persons:n.data})}))}},{key:"render",value:function(){var e=this,n=this.state.persons;return o.a.createElement("div",null,o.a.createElement(v,{onSubmit:this.addName,value1:this.state.newName,value2:this.state.newNumber,onChange1:this.handleNameAdd,onChange2:this.handleNumberAdd}),o.a.createElement("h2",null,"Numerot"),o.a.createElement("ul",null,n.map((function(n){return o.a.createElement(h,{key:n.id,person:n,action:e.removePerson(n.id)})}))))}}]),n}(o.a.Component);u.a.render(o.a.createElement(f,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.99cccca5.chunk.js.map