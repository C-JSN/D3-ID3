[
	"<!DOCTYPE html>\n<meta charset=\"utf-8\">\n<canvas width=\"960\" height=\"500\"></canvas>\n<script src=\"https://d3js.org/d3.v4.min.js\"></script>\n<script>\n\nvar canvas = document.querySelector(\"canvas\"),\n    context = canvas.getContext(\"2d\");\n\nvar width = canvas.width,\n    height = canvas.height,\n    radius = Math.min(width, height) / 2;\n\nvar colors = [\"#98abc5\", \"#8a89a6\", \"#7b6888\", \"#6b486b\", \"#a05d56\", \"#d0743c\", \"#ff8c00\"];\n\nvar arc = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".arc",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	"\n    ",
	{
		"methodObject": "d3.arc()",
		"d3MethodName": ".outerRadius",
		"name": "",
		"type": "text",
		"value": "radius - 10",
		"args": [
			"radius - 10"
		]
	},
	"\n    ",
	{
		"methodObject": "d3.arc()",
		"d3MethodName": ".innerRadius",
		"name": "",
		"type": "text",
		"value": "0",
		"args": [
			"0"
		]
	},
	"\n    ",
	{
		"methodObject": "d3.arc()",
		"d3MethodName": ".context",
		"name": "",
		"type": "text",
		"value": "context",
		"args": [
			"context"
		]
	},
	{
		"methodObject": "d3.arc()",
		"methodEnd": true
	},
	"\n\nvar labelArc = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".arc",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	"\n    ",
	{
		"methodObject": "d3.arc()",
		"d3MethodName": ".outerRadius",
		"name": "",
		"type": "text",
		"value": "radius - 40",
		"args": [
			"radius - 40"
		]
	},
	"\n    ",
	{
		"methodObject": "d3.arc()",
		"d3MethodName": ".innerRadius",
		"name": "",
		"type": "text",
		"value": "radius - 40",
		"args": [
			"radius - 40"
		]
	},
	"\n    ",
	{
		"methodObject": "d3.arc()",
		"d3MethodName": ".context",
		"name": "",
		"type": "text",
		"value": "context",
		"args": [
			"context"
		]
	},
	{
		"methodObject": "d3.arc()",
		"methodEnd": true
	},
	"\n\nvar pie = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".pie",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	"\n    ",
	{
		"methodObject": "d3.pie()",
		"d3MethodName": ".sort",
		"name": "",
		"type": "text",
		"value": "null",
		"args": [
			"null"
		]
	},
	"\n    ",
	{
		"methodObject": "d3.pie()",
		"d3MethodName": ".value",
		"name": "",
		"type": "text",
		"value": "function(d) { return d.population",
		"args": [
			"function(d) { return d.population"
		]
	},
	" });\n\ncontext.translate(width / 2, height / 2);\n\nvar data = [\n{age: '<5',\tpopulation: 2704659},\n{age: '5-13',\tpopulation: 4499890},\n{age: '14-17', population: 2159981},\n{age: '18-24', population: 3853788},\n{age: '25-44', population: 14106543},\n{age: '45-64', population: 8819342},\n{age: '≥65', population: 612463},\n];\n\n  var arcs = pie(data);\n\n  arcs.forEach(function(d, i) {\n    context.beginPath();\n    arc(d);\n    context.fillStyle = colors[i];\n    context.fill();\n  });\n\n  context.beginPath();\n  arcs.forEach(arc);\n  context.strokeStyle = \"#fff\";\n  context.stroke();\n\n  context.textAlign = \"center\";\n  context.textBaseline = \"middle\";\n  context.fillStyle = \"#000\";\n  arcs.forEach(function(d) {\n    var c = labelArc.centroid(d);\n    context.fillText(d.data.age, c[0], c[1]);\n  });\n\n</script>\n<script src=\"d3parser.js\"></script>"
]