if (Meteor.isClient) {
	FlowRouter.wait();
	Meteor.startup(function() {
		FlowRouter.initialize({ hashbang: true });
	});

	FlowRouter.notFound  = {
		action: function(context) {
			console.log('Called .notFound route!!!');
		},
	};

	FlowRouter.route('/', {
		name: "home",
		action: function(context) {
			console.log('Running home...');
		},
	});
	FlowRouter.route('/second', {
		name: "second",
		action: function(context) {
			console.log('Running second route...');
		},
	});

}
