import './main.html';
import '../team/team.js';
import '../brand/brand.js';
import '../testimonial/testimonial.js'

Template.hello.onRendered(function helloOnRendered() {
    // counter starts at 0
    $(".owl-carousel").owlCarousel();
});

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
	brands() {
		var brands = [
			{image: 'images/make-logos/acura.png'},
			{image: 'images/make-logos/audi.png'},
			{image: 'images/make-logos/bm.png'},
			{image: 'images/make-logos/cadillac.png'},
			{image: 'images/make-logos/chevrolet.png'},
			{image: 'images/make-logos/chrysler.png'},
			{image: 'images/make-logos/dodge.png'},
			{image: 'images/make-logos/fiat.png'},
			{image: 'images/make-logos/ford.png'},
			{image: 'images/make-logos/gmc.png'},
			{image: 'images/make-logos/honda.png'},
			{image: 'images/make-logos/hyundai.png'},
			{image: 'images/make-logos/infiniti.png'},
			{image: 'images/make-logos/jaguar.png'},
			{image: 'images/make-logos/jeep.png'},
			{image: 'images/make-logos/land-rover.png'},
			{image: 'images/make-logos/lexus.png'},
			{image: 'images/make-logos/lincoln.png'},
			{image: 'images/make-logos/maserati.png'},
			{image: 'images/make-logos/mazda.png'},
			{image: 'images/make-logos/mercedes.png'},
			{image: 'images/make-logos/mini.png'},
			{image: 'images/make-logos/mitsubishi.png'},
			{image: 'images/make-logos/nissan.png'},
			{image: 'images/make-logos/porsche.png'},
			{image: 'images/make-logos/renault.png'},
			{image: 'images/make-logos/saab.png'},
			{image: 'images/make-logos/scion.png'},
			{image: 'images/make-logos/subaru.png'},
			{image: 'images/make-logos/toyota.png'},
			{image: 'images/make-logos/volkswagen.png'},
			{image: 'images/make-logos/volvo.png'}
		];
	return brands;
	},
	testimonials() {
		var testimonials = [
			{testimonial: 'Had my windshield replaced and they also repaired a ding on one of my doors. They did an excellent job. Very professional and courteous staff.  I was very pleased with the work they did. Would highly recommend them if you need this tyoe of work done.', name: 'R Alaniz'},
			{testimonial: 'Always excellent work done on my vehicles. Went in for a winco\'s window tint on my wifes car and loved the outcome. Always come here and always will. One stop shop still the best on window tint and other services. Like scratch repair window chip.', name: 'A Hinojosa'},
			{testimonial: 'One stop shop is the bees knees! Friendly extremely knowledgeable and professional. I\'m not going anywhere else, they are my only stop shop from now on.', name: 'T Ybarra'},
			{testimonial: 'Boy I sure made the right selection of tint! I got the windshield, as dark as I could go on the front, & 10% on the back. Awesome installation job and I love the fact that I can still see out the 10% at night! The heat reduction is awesome! The car cools off faster and my hands no longer feel the heat from the sun coming in from the windshield! I definitely recommend this tint! If you\'re looking to tint your windows just go over and talk to Matt!', name: 'D Zuniga'},
			{testimonial: 'Super excited about my wife\'s new look on the Sentra with a window tint... Great service and awesome window tint from Matt at one stop shop', name: 'M Contreras'},
			{testimonial: 'Wow! Since we all know good customer service is hard to find now a days I freaked out with this place. This place is oozing with customer service. I thought I was dreaming.', name: 'D Garza'},
			{testimonial: 'Great service, not like any other shop, they keep their customers satisfied and have friendly staff.', name: 'E Cortez'},
		];
	return testimonials;
	},
});
