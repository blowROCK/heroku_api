const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.listen(port, () => console.log('api test Server listening on port '+ port + '!\n'))

app.get("/", (req, res) => {
	res.send('Hello World!');
});

app.get("/test", (req, res) => {
	res.send({
		"snippet": {
			"version": "v0",
			"layout": [
				{
					"type":"text",
					"id":"header-text",
					"text":"lorem ipsum",
					"align":"left",
					"style":"header"
				},
				{
					"type":"divider",
					"id":"divider-1",
					"size":"thin"
				},
				{
					"type":"spacer",
					"id":"spacer-1",
					"size":"xs"
				},
				{
					"type":"button",
					"id":"submit-button",
					"label":"Submit",
					"action":{
						"type":"submit"
					},
					"style":"primary"
				},
				{
					"type":"input",
					"id":"text-input",
					"label":"text",
					"placeholder":"hi",
					"value":"hello"
				}
			],
			"params": {
				"customerKey": "channelIO"
			}
		},
	})
});
