[
	"<!DOCTYPE html>\n<meta charset=\"utf-8\">\n<style>\n\nbody {\n  background: #333;\n  overflow: hidden;\n}\n\ncircle {\n  stroke: #000;\n  stroke-width: 1.5px;\n}\n\n</style>\n<svg width=\"1400\" height=\"480\"><g transform=\"translate(700,240)\"></g></svg>\n<script src=\"http://d3js.org/d3.v4.0.0-alpha.35.min.js\"></script>\n<script>\n\nvar svg = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "\"svg\"",
		"args": [
			"\"svg\""
		]
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
		]
	},
	",\n    height = +svg",
	{
		"methodObject": "d3.select(\"svg\")",
		"d3MethodName": ".attr",
		"name": "",
		"type": "text",
		"value": "\"height\"",
		"args": [
			"\"height\""
		]
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
		]
	},
	"\n    ",
	{
		"methodObject": "d3",
		"d3MethodName": ".map",
		"name": "",
		"type": "text",
		"value": "function(r) { return {r: r}; })",
		"args": [
			"function(r) { return {r: r}; })"
		]
	},
	"\n  ",
	{
		"methodObject": "d3",
		"d3MethodName": ".filter",
		"name": "",
		"type": "text",
		"value": "function(d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500; }",
		"args": [
			"function(d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500; }"
		]
	},
	{
		"methodObject": "d3.filter(function(d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500; })",
		"methodEnd": true
	},
	"\n\nsvg\n  ",
	{
		"methodObject": "",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "\"g\"",
		"args": [
			"\"g\""
		]
	},
	"\n  ",
	{
		"methodObject": ".select(\"g\")",
		"d3MethodName": ".selectAll",
		"name": "",
		"type": "text",
		"value": "\"circle\"",
		"args": [
			"\"circle\""
		]
	},
	"\n  .data(circles)\n  ",
	{
		"methodObject": "",
		"d3MethodName": ".enter",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": ".enter()",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"circle\"",
		"args": [
			"\"circle\""
		]
	},
	"\n    ",
	{
		"methodObject": ".enter().append(\"circle\")",
		"d3MethodName": ".style",
		"name": "\"fill\"",
		"type": "text",
		"value": " function(d) { return color(d.angle = Math.atan2(d.y, d.x)",
		"args": [
			"\"fill\"",
			" function(d) { return color(d.angle = Math.atan2(d.y, d.x)"
		]
	},
	{
		"methodObject": ".enter().append(\"circle\")",
		"methodEnd": true
	},
	" })\n    ",
	{
		"methodObject": "",
		"d3MethodName": ".attr",
		"name": "\"cx\"",
		"type": "text",
		"value": " function(d) { return Math.cos(d.angle) * (size / Math.SQRT2 + 30); })",
		"args": [
			"\"cx\"",
			" function(d) { return Math.cos(d.angle) * (size / Math.SQRT2 + 30); })"
		]
	}
]