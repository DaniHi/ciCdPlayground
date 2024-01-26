import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Daniel Hirsch',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Automation'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'AWS maybe?',
		// What do you want to learn in this workshop? 
		expectations: [
			'How to successfuly run a build pipeline'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'play table tennis', 
			'read books', 
			'travelling'
		]
	}
});
