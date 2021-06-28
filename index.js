const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
	res.send('Hello World!');
});

app.get("/test", (req, res) => {
	res.send([
		{
			"id": "title",
			"type": "text",
			"text": "Snippet Demo 🍭",
			"style": "h1"
		},
		{
			"id": "promotion",
			"type": "key-value",
			"items": [
				{
					"key": "Mileage",
					"value": "213 points"
				},
				{
					"key": "Trip",
					"value": "Roadtrip to Space"
				},
				{
					"key": "Submitted at",
					"value": "6:00PM, 2019/01/12"
				}
			]
		},
		{
			"id": "promotion-image",
			"type": "image",
			"url": "http://cdn.channel.io/assets/snippet/snippet-img-demo.png"
		},
		{
			"id": "subtitle",
			"type": "text",
			"text": "Related Items",
			"style": "h2"
		},
		{
			"id": "related-list",
			"type": "list",
			"items": [
				{
					"id": "related-list-trip-01",
					"title": "Couple trip to the Milky Stardust Fanatasy",
					"description": "$5million ∙ 2seats ∙ 2050-12-25",
					"image": "http://cdn.channel.io/assets/snippet/snippet-demo-list-1.png",
					"action": {
						"type": "url",
						"url": "https://channel.io"
					}
				},
				{
					"id": "related-list-trip-02",
					"title": "Dance on the Moon",
					"description": "$17,980 ∙ Open in Summer",
					"image": "http://cdn.channel.io/assets/snippet/snippet-demo-list-2.png",
					"action": {
						"type": "url",
						"url": "https://channel.io"
					}
				}
			]
		},
		{
			"id": "divider",
			"type": "divider"
		},
		{
			"id": "mileage-input",
			"type": "input",
			"label": "Reset Mileage",
			"placeholder": "Please type numbers"
		},
		{
			"id": "submit-button",
			"type": "button",
			"label": "Submit",
			"action": {
				"type": "submit"
			}
		}
	]);
});

app.listen(port, () => {
	console.log(`MY PORT ${port}`)
});
