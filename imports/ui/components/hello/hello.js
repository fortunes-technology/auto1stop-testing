import './hello.html';
import '../team.js';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
	teams() {
		var teams =
		[{image: 'images/team/1.png', name: 'CARLOS A. FERREIRA', position: 'CEO'},
		    {image: 'images/team/2.png', name: 'RAUL TRUJILLO', position: 'MANAGER - HARLINGEN'},
		    {image: 'images/team/3.png', name: 'SONIA ACOSTA', position: 'RECEPTIONIST'}];
		    return teams;
	},
});
