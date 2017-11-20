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
		var teams =[
			{image: 'images/team/1.png', name: 'CARLOS A. FERREIRA', position: 'CEO'},
			{image: 'images/team/2.png', name: 'RAUL TRUJILLO', position: 'MANAGER - HARLINGEN'},
			{image: 'images/team/3.png', name: 'SONIA ACOSTA', position: 'RECEPTIONIST'},
			{image: 'images/team/4.png', name: 'YORDY SILVA', position: 'TECHNICIAN'},
			{image: 'images/team/5.png', name: 'CLAUDIA PONCE', position: 'ACCOUNTING'},
			{image: 'images/team/6.png', name: 'JUAN CANTU', position: 'INVENTORY MANAGER'},
			{image: 'images/team/7.png', name: 'TONY GARZA', position: 'TECHNICIAN'},
			{image: 'images/team/8.png', name: 'RHONDA RAMIREZ', position: 'ACCOUNTING'},
			{image: 'images/team/9.png', name: 'GULLIERMO SANDOVAL', position: 'BODYSHOP COORDINATOR'},
			{image: 'images/team/10.png', name: 'ELISEO TREJO', position: 'SERVICE ADVISOR'},
			{image: 'images/team/11.png', name: 'PABLO CRUZ', position: 'TECHNICIAN'},
			{image: 'images/team/12.png', name: 'MARICELA CRUZ', position: 'ACCOUNTING'},
			{image: 'images/team/13.png', name: 'VICTOR RUIZ', position: 'SALES'},
			{image: 'images/team/14.png', name: 'HELENA NEVES', position: 'MANAGER - MCALLEN'},
			{image: 'images/team/15.png', name: 'JOEL NAPOLES', position: 'WINDSHIELDS'},
			{image: 'images/team/16.png', name: 'MARTHA CEJA', position: 'ACCOUNTING'},
			{image: 'images/team/17.png', name: 'ALEXIS PEREZ', position: 'TECHNICIAN'},
			{image: 'images/team/18.png', name: 'AMADOR RIVERA', position: 'MANAGER - PHARR'},
			{image: 'images/team/19.png', name: 'IVAN CORONA', position: 'INVENTORY - PHARR'},
			{image: 'images/team/20.png', name: 'ADAN MIRELES', position: 'INVENTORY - HARLINGEN'},
			{image: 'images/team/23.png', name: 'DAN SANCHEZ', position: 'TECHNICIAN'},
			{image: 'images/team/24.png', name: 'OFELIA GOMEZ', position: 'ACCOUNTING'},
			{image: 'images/team/25.png', name: 'JULIAN ARREDONDO', position: 'TECHNICIAN'},
			{image: 'images/team/26.png', name: 'ANGEL BALDERAS', position: 'RUNNER'},
			{image: 'images/team/27.png', name: 'KAELA GARCIA', position: 'ACCOUNTING'},
			{image: 'images/team/28.png', name: 'SUSANA RODRIGUEZ', position: 'CLAIMS MANAGER'},
			{image: 'images/team/29.png', name: 'STEVE ZAPATA', position: 'BODYSHOP MANAGER'},
			{image: 'images/team/30.png', name: 'VERONICA GUERRERO', position: 'PARTS AND INVENTORY'},
			{image: 'images/team/31.png', name: 'HUMBERTO RODRIGUEZ', position: 'SERVICE ADVISOR'},
			{image: 'images/team/32.png', name: 'CHUY TORRES', position: 'SALES'},
			];
		return teams;
	},
});
