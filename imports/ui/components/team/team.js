import "./team.html";


Template.team.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
	'click .team-image'(event) {
      console.log('HALA team image clicked', event, this);
    },
});
