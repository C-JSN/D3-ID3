[
	"<!DOCTYPE html>\n<meta charset=\"utf-8\">\n<style>\n\nbody {\n  background: #333;\n}\n\ncircle {\n  stroke: #000;\n  stroke-width: 1.5px;\n}\n\n</style>\n<svg width=\"1400\" height=\"480\"><g transform=\"translate(700,240)\"></g></svg>\n<script src=\"http://d3js.org/d3.v4.0.0-alpha.35.min.js\"></script>\n<script>\n\nvar svg = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "\"svg\"",
		"args": [
			"\"svg\""
		],
		"id": 1
	},
	",\n    width = +svg",
	{
		"methodObject": "d3.select(\"svg\")",
		"d3MethodName": ".attr",
		"name": "",
		"type": "text",
		"value": "\"width\"",
		"args": [
			"\"width\""
		],
		"id": 3
	},
	",\n    height = +svg",
	{
		"methodObject": "d3.select(\"svg\")",
		"d3MethodName": ".attr",
		"name": "",
		"type": "text",
		"value": "200",
		"args": [
			"\"height\""
		],
		"id": 5
	},
	",\n    size = Math.max(width, height);\n\nvar color = d3.scaleRainbow()\n    .domain([0, 2 * Math.PI]);\n\nvar circles = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".packSiblings",
		"name": "d3.range(2000)\n    .map(d3.randomUniform(8",
		"type": "text",
		"value": " 26)",
		"args": [
			"d3.range(2000)\n    .map(d3.randomUniform(8",
			" 26)"
		],
		"id": 7
	},
	"\n    ",
	{
		"methodObject": "d3",
		"d3MethodName": ".map",
		"name": "",
		"type": "text",
		"value": "function(r) { return {r: r}",
		"args": [
			"function(r) { return {r: r}"
		],
		"id": 9
	},
	" }))\n  ",
	{
		"methodObject": "d3",
		"d3MethodName": ".filter",
		"name": "",
		"type": "text",
		"value": "function(d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500",
		"args": [
			"function(d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500"
		],
		"id": 11
	},
	" });\n\nsvg\n  ",
	{
		"methodObject": "d3.filter(function(d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500)",
		"d3MethodName": ".select",
		"name": "\"g\")\n  .selectAll(\"circle\")\n  .data(circles)\n  .enter().append(\"circle\")\n    .style(\"fill\"",
		"type": "text",
		"value": " function(d) { return color(d.angle = Math.atan2(d.y, d.x)",
		"args": [
			"\"g\")\n  .selectAll(\"circle\")\n  .data(circles)\n  .enter().append(\"circle\")\n    .style(\"fill\"",
			" function(d) { return color(d.angle = Math.atan2(d.y, d.x)"
		],
		"id": 13
	},
	{
		"methodObject": "d3.filter(function(d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500).select(\"g\")\n  .selectAll(\"circle\")\n  .data(circles)\n  .enter().append(\"circle\")\n    .style(\"fill\")",
		"methodEnd": true
	},
	" })\n    ",
	{
		"methodObject": "",
		"d3MethodName": ".attr",
		"name": "\"cx\"",
		"type": "text",
		"value": " function(d) { return Math.cos(d.angle) * (size / Math.SQRT2 + 30)",
		"args": [
			"\"cx\"",
			" function(d) { return Math.cos(d.angle) * (size / Math.SQRT2 + 30)"
		],
		"id": 16
	},
	" })\n    ",
	{
		"methodObject": "",
		"d3MethodName": ".attr",
		"name": "\"cy\"",
		"type": "text",
		"value": " function(d) { return Math.sin(d.angle) * (size / Math.SQRT2 + 30)",
		"args": [
			"\"cy\"",
			" function(d) { return Math.sin(d.angle) * (size / Math.SQRT2 + 30)"
		],
		"id": 18
	},
	" })\n    ",
	{
		"methodObject": "",
		"d3MethodName": ".attr",
		"name": "\"r\"",
		"type": "text",
		"value": " function(d) { return d.r - 0.25",
		"args": [
			"\"r\"",
			" function(d) { return d.r - 0.25"
		],
		"id": 20
	},
	" })\n  .transition()\n    .ease(d3.easeCubicOut)\n    .delay(function(d) { return Math.sqrt(d.x * d.x + d.y * d.y) * 10; })\n    .duration(1000)\n    ",
	{
		"methodObject": "",
		"d3MethodName": ".attr",
		"name": "\"cx\"",
		"type": "text",
		"value": " function(d) { return d.x",
		"args": [
			"\"cx\"",
			" function(d) { return d.x"
		],
		"id": 22
	},
	" })\n    ",
	{
		"methodObject": "",
		"d3MethodName": ".attr",
		"name": "\"cy\"",
		"type": "text",
		"value": " function(d) { return d.y",
		"args": [
			"\"cy\"",
			" function(d) { return d.y"
		],
		"id": 24
	},
	" });\n\n</script>\n"
]