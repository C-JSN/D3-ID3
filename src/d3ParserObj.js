[
	"<!DOCTYPE html>\n<meta charset=\"utf-8\">\n<style>\n  body {\n    margin: auto;\n    width: 960px;\n  }\n\n  text {\n    font: 10px sans-serif;\n  }\n\n  .axis path,\n  .axis line {\n    fill: none;\n    stroke: #000;\n    shape-rendering: crispEdges;\n  }\n  /*.x.axis path {\n    display: none;\n  }*/\n  /*.line {\n    fill: none;\n    stroke: url(#temperature-gradient);\n    stroke-width: 1.5px;\n  }*/\n</style>\n\n<body>\n  <script src=\"https://d3js.org/d3.v4.min.js\"></script>\n  <script>\n    var margin = { top: 20, right: 20, bottom: 30, left: 50 },\n      width = 960 - margin.left - margin.right,\n      height = 500 - margin.top - margin.bottom;\n\n    var parseDate = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".timeParse",
		"name": "",
		"type": "text",
		"value": "d3.timeFormat(\"%Y%m%d\")",
		"args": [
			"d3.timeFormat(\"%Y%m%d\")"
		],
		"id": 1
	},
	{
		"methodObject": "d3",
		"methodEnd": true
	},
	"\n\n    var x = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleTime",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		],
		"id": 4
	},
	"\n      .range([0, width]);\n\n    var y = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleLinear",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		],
		"id": 6
	},
	"\n      .range([height, 0]);\n\n    var line = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".area",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		],
		"id": 8
	},
	"\n      ",
	{
		"methodObject": "d3.area()",
		"d3MethodName": ".curve",
		"name": "",
		"type": "text",
		"value": "d3.curveBasis",
		"args": [
			"d3.curveBasis"
		],
		"id": 10
	},
	"\n      ",
	{
		"methodObject": "d3.area()",
		"d3MethodName": ".x",
		"name": "",
		"type": "text",
		"value": "function (d) { return x(d.date); }",
		"args": [
			"function (d) { return x(d.date); }"
		],
		"id": 12
	},
	"\n      ",
	{
		"methodObject": "d3.area()",
		"d3MethodName": ".y1",
		"name": "",
		"type": "text",
		"value": "function (d) { return y(d.temperature); }",
		"args": [
			"function (d) { return y(d.temperature); }"
		],
		"id": 14
	},
	{
		"methodObject": "d3.area()",
		"methodEnd": true
	},
	"\n\n    var svg = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "\"body\"",
		"args": [
			"\"body\""
		],
		"id": 17
	},
	{
		"methodObject": "d3.select(\"body\")",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"svg\"",
		"args": [
			"\"svg\""
		],
		"id": 18
	},
	"\n      ",
	{
		"methodObject": "d3.select(\"body\").append(\"svg\")",
		"d3MethodName": ".attr",
		"name": "\"width\"",
		"type": "text",
		"value": " width + margin.left + margin.right",
		"args": [
			"\"width\"",
			" width + margin.left + margin.right"
		],
		"id": 20
	},
	"\n      ",
	{
		"methodObject": "d3.select(\"body\").append(\"svg\")",
		"d3MethodName": ".attr",
		"name": "\"height\"",
		"type": "text",
		"value": " height + margin.top + margin.bottom",
		"args": [
			"\"height\"",
			" height + margin.top + margin.bottom"
		],
		"id": 22
	},
	"\n      ",
	{
		"methodObject": "d3.select(\"body\").append(\"svg\")",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"g\"",
		"args": [
			"\"g\""
		],
		"id": 24
	},
	"\n      ",
	{
		"methodObject": "d3.select(\"body\").append(\"svg\").append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"transform\"",
		"type": "text",
		"value": " \"translate(\" + margin.left + \",\" + margin.top + \")\"",
		"args": [
			"\"transform\"",
			" \"translate(\" + margin.left + \",\" + margin.top + \")\""
		],
		"id": 26
	},
	{
		"methodObject": "d3.select(\"body\").append(\"svg\").append(\"g\")",
		"methodEnd": true
	},
	"\n\n    let data = getData();\n    //console.log(data);\n    data.forEach(function (d) {\n      d.date = parseDate(d.date);\n      d.temperature = +d.temperature;\n    });\n\n    x.domain(d3.extent(data, function (d) { return d.date; })).nice();\n    //y.domain(d3.extent(data, function (d) { return d.temperature; })).nice();\n    y.domain([0, d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".max",
		"name": "data",
		"type": "text",
		"value": " function (d) { return d.temperature; }",
		"args": [
			"data",
			" function (d) { return d.temperature; }"
		],
		"id": 29
	},
	"]).nice();\n    line.y0(y(0));\n\n    svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"linearGradient\"",
		"args": [
			"\"linearGradient\""
		],
		"id": 31
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"linearGradient\")",
		"d3MethodName": ".attr",
		"name": "\"id\"",
		"type": "text",
		"value": " \"temperature-gradient\"",
		"args": [
			"\"id\"",
			" \"temperature-gradient\""
		],
		"id": 33
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"linearGradient\")",
		"d3MethodName": ".attr",
		"name": "\"gradientUnits\"",
		"type": "text",
		"value": " \"userSpaceOnUse\"",
		"args": [
			"\"gradientUnits\"",
			" \"userSpaceOnUse\""
		],
		"id": 35
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"linearGradient\")",
		"d3MethodName": ".attr",
		"name": "\"x1\"",
		"type": "text",
		"value": " 0",
		"args": [
			"\"x1\"",
			" 0"
		],
		"id": 37
	},
	{
		"methodObject": "svg.append(\"linearGradient\")",
		"d3MethodName": ".attr",
		"name": "\"y1\"",
		"type": "text",
		"value": " y(50)",
		"args": [
			"\"y1\"",
			" y(50)"
		],
		"id": 38
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"linearGradient\")",
		"d3MethodName": ".attr",
		"name": "\"x2\"",
		"type": "text",
		"value": " 0",
		"args": [
			"\"x2\"",
			" 0"
		],
		"id": 40
	},
	{
		"methodObject": "svg.append(\"linearGradient\")",
		"d3MethodName": ".attr",
		"name": "\"y2\"",
		"type": "text",
		"value": " y(60)",
		"args": [
			"\"y2\"",
			" y(60)"
		],
		"id": 41
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"linearGradient\")",
		"d3MethodName": ".selectAll",
		"name": "",
		"type": "text",
		"value": "\"stop\"",
		"args": [
			"\"stop\""
		],
		"id": 43
	},
	"\n      .data([\n        { offset: \"0%\", color: \"black\" },\n        { offset: \"50%\", color: \"black\" },\n        { offset: \"50%\", color: \"red\" },\n        { offset: \"100%\", color: \"red\" }\n      ])\n      ",
	{
		"methodObject": "",
		"d3MethodName": ".enter",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		],
		"id": 45
	},
	{
		"methodObject": ".enter()",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"stop\"",
		"args": [
			"\"stop\""
		],
		"id": 46
	},
	"\n      ",
	{
		"methodObject": ".enter().append(\"stop\")",
		"d3MethodName": ".attr",
		"name": "\"offset\"",
		"type": "text",
		"value": " function (d) { return d.offset; }",
		"args": [
			"\"offset\"",
			" function (d) { return d.offset; }"
		],
		"id": 48
	},
	"\n      ",
	{
		"methodObject": ".enter().append(\"stop\")",
		"d3MethodName": ".attr",
		"name": "\"stop-color\"",
		"type": "text",
		"value": " function (d) { return d.color; }",
		"args": [
			"\"stop-color\"",
			" function (d) { return d.color; }"
		],
		"id": 50
	},
	{
		"methodObject": ".enter().append(\"stop\")",
		"methodEnd": true
	},
	"\n\n    svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"g\"",
		"args": [
			"\"g\""
		],
		"id": 53
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"class\"",
		"type": "text",
		"value": " \"x axis\"",
		"args": [
			"\"class\"",
			" \"x axis\""
		],
		"id": 55
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"transform\"",
		"type": "text",
		"value": " \"translate(0,\" + height + \")\"",
		"args": [
			"\"transform\"",
			" \"translate(0,\" + height + \")\""
		],
		"id": 57
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\")",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "d3.axisBottom(x)",
		"args": [
			"d3.axisBottom(x)"
		],
		"id": 59
	},
	{
		"methodObject": "svg.append(\"g\")",
		"methodEnd": true
	},
	"\n\n    svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"g\"",
		"args": [
			"\"g\""
		],
		"id": 62
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"class\"",
		"type": "text",
		"value": " \"y axis\"",
		"args": [
			"\"class\"",
			" \"y axis\""
		],
		"id": 64
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\")",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "d3.axisLeft(y)",
		"args": [
			"d3.axisLeft(y)"
		],
		"id": 66
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\")",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"text\"",
		"args": [
			"\"text\""
		],
		"id": 68
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\").append(\"text\")",
		"d3MethodName": ".attr",
		"name": "\"transform\"",
		"type": "text",
		"value": " \"rotate(-90)\"",
		"args": [
			"\"transform\"",
			" \"rotate(-90)\""
		],
		"id": 70
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\").append(\"text\")",
		"d3MethodName": ".attr",
		"name": "\"y\"",
		"type": "text",
		"value": " 6",
		"args": [
			"\"y\"",
			" 6"
		],
		"id": 72
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\").append(\"text\")",
		"d3MethodName": ".attr",
		"name": "\"dy\"",
		"type": "text",
		"value": " \".71em\"",
		"args": [
			"\"dy\"",
			" \".71em\""
		],
		"id": 74
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\").append(\"text\")",
		"d3MethodName": ".style",
		"name": "\"text-anchor\"",
		"type": "text",
		"value": " \"end\"",
		"args": [
			"\"text-anchor\"",
			" \"end\""
		],
		"id": 76
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"g\").append(\"text\")",
		"d3MethodName": ".text",
		"name": "",
		"type": "text",
		"value": "\"Temperature (ºF)\"",
		"args": [
			"\"Temperature (ºF)\""
		],
		"id": 78
	},
	{
		"methodObject": "svg.append(\"g\").append(\"text\")",
		"methodEnd": true
	},
	"\n\n    svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"path\"",
		"args": [
			"\"path\""
		],
		"id": 81
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"path\")",
		"d3MethodName": ".datum",
		"name": "",
		"type": "text",
		"value": "data",
		"args": [
			"data"
		],
		"id": 83
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"path\")",
		"d3MethodName": ".attr",
		"name": "\"class\"",
		"type": "text",
		"value": " \"line\"",
		"args": [
			"\"class\"",
			" \"line\""
		],
		"id": 85
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"path\")",
		"d3MethodName": ".attr",
		"name": "\"fill\"",
		"type": "text",
		"value": " \"purple\"",
		"args": [
			"\"fill\"",
			" \"none\""
		],
		"id": 87
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"path\")",
		"d3MethodName": ".style",
		"name": "\"stroke\"",
		"type": "text",
		"value": " \"url(#temperature-gradient)\"",
		"args": [
			"\"stroke\"",
			" \"url(#temperature-gradient)\""
		],
		"id": 89
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"path\")",
		"d3MethodName": ".style",
		"name": "\"stroke-width\"",
		"type": "text",
		"value": " \"1.5px\"",
		"args": [
			"\"stroke-width\"",
			" \"1.5px\""
		],
		"id": 91
	},
	"\n      ",
	{
		"methodObject": "svg.append(\"path\")",
		"d3MethodName": ".attr",
		"name": "\"d\"",
		"type": "text",
		"value": " line",
		"args": [
			"\"d\"",
			" line"
		],
		"id": 93
	},
	{
		"methodObject": "svg.append(\"path\")",
		"methodEnd": true
	},
	"\n\n    function getData() {\n      return [\n        {\n          \"date\": \"20111001\",\n          \"temperature\": \"62.7\"\n        },\n        {\n          \"date\": \"20111002\",\n          \"temperature\": \"59.9\"\n        },\n        {\n          \"date\": \"20111003\",\n          \"temperature\": \"59.1\"\n        },\n        {\n          \"date\": \"20111004\",\n          \"temperature\": \"58.8\"\n        },\n        {\n          \"date\": \"20111005\",\n          \"temperature\": \"58.7\"\n        },\n        {\n          \"date\": \"20111006\",\n          \"temperature\": \"57.0\"\n        },\n        {\n          \"date\": \"20111007\",\n          \"temperature\": \"56.7\"\n        },\n        {\n          \"date\": \"20111008\",\n          \"temperature\": \"56.8\"\n        },\n        {\n          \"date\": \"20111009\",\n          \"temperature\": \"56.7\"\n        },\n        {\n          \"date\": \"20111010\",\n          \"temperature\": \"60.1\"\n        },\n        {\n          \"date\": \"20111011\",\n          \"temperature\": \"61.1\"\n        },\n        {\n          \"date\": \"20111012\",\n          \"temperature\": \"61.5\"\n        },\n        {\n          \"date\": \"20111013\",\n          \"temperature\": \"64.3\"\n        },\n        {\n          \"date\": \"20111014\",\n          \"temperature\": \"67.1\"\n        },\n        {\n          \"date\": \"20111015\",\n          \"temperature\": \"64.6\"\n        },\n        {\n          \"date\": \"20111016\",\n          \"temperature\": \"61.6\"\n        },\n        {\n          \"date\": \"20111017\",\n          \"temperature\": \"61.1\"\n        },\n        {\n          \"date\": \"20111018\",\n          \"temperature\": \"59.2\"\n        },\n        {\n          \"date\": \"20111019\",\n          \"temperature\": \"58.9\"\n        },\n        {\n          \"date\": \"20111020\",\n          \"temperature\": \"57.2\"\n        },\n        {\n          \"date\": \"20111021\",\n          \"temperature\": \"56.4\"\n        },\n        {\n          \"date\": \"20111022\",\n          \"temperature\": \"60.7\"\n        },\n        {\n          \"date\": \"20111023\",\n          \"temperature\": \"65.1\"\n        },\n        {\n          \"date\": \"20111024\",\n          \"temperature\": \"60.9\"\n        },\n        {\n          \"date\": \"20111025\",\n          \"temperature\": \"56.1\"\n        },\n        {\n          \"date\": \"20111026\",\n          \"temperature\": \"54.6\"\n        },\n        {\n          \"date\": \"20111027\",\n          \"temperature\": \"56.1\"\n        },\n        {\n          \"date\": \"20111028\",\n          \"temperature\": \"58.1\"\n        },\n        {\n          \"date\": \"20111029\",\n          \"temperature\": \"57.5\"\n        },\n        {\n          \"date\": \"20111030\",\n          \"temperature\": \"57.7\"\n        },\n        {\n          \"date\": \"20111031\",\n          \"temperature\": \"55.1\"\n        },\n        {\n          \"date\": \"20111101\",\n          \"temperature\": \"57.9\"\n        },\n        {\n          \"date\": \"20111102\",\n          \"temperature\": \"64.6\"\n        },\n        {\n          \"date\": \"20111103\",\n          \"temperature\": \"56.2\"\n        },\n        {\n          \"date\": \"20111104\",\n          \"temperature\": \"50.5\"\n        },\n        {\n          \"date\": \"20111105\",\n          \"temperature\": \"51.3\"\n        },\n        {\n          \"date\": \"20111106\",\n          \"temperature\": \"52.6\"\n        },\n        {\n          \"date\": \"20111107\",\n          \"temperature\": \"51.4\"\n        },\n        {\n          \"date\": \"20111108\",\n          \"temperature\": \"50.6\"\n        },\n        {\n          \"date\": \"20111109\",\n          \"temperature\": \"54.6\"\n        },\n        {\n          \"date\": \"20111110\",\n          \"temperature\": \"55.6\"\n        },\n        {\n          \"date\": \"20111111\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20111112\",\n          \"temperature\": \"54.0\"\n        },\n        {\n          \"date\": \"20111113\",\n          \"temperature\": \"53.8\"\n        },\n        {\n          \"date\": \"20111114\",\n          \"temperature\": \"53.5\"\n        },\n        {\n          \"date\": \"20111115\",\n          \"temperature\": \"53.4\"\n        },\n        {\n          \"date\": \"20111116\",\n          \"temperature\": \"52.2\"\n        },\n        {\n          \"date\": \"20111117\",\n          \"temperature\": \"52.7\"\n        },\n        {\n          \"date\": \"20111118\",\n          \"temperature\": \"53.1\"\n        },\n        {\n          \"date\": \"20111119\",\n          \"temperature\": \"49.0\"\n        },\n        {\n          \"date\": \"20111120\",\n          \"temperature\": \"50.4\"\n        },\n        {\n          \"date\": \"20111121\",\n          \"temperature\": \"51.1\"\n        },\n        {\n          \"date\": \"20111122\",\n          \"temperature\": \"52.3\"\n        },\n        {\n          \"date\": \"20111123\",\n          \"temperature\": \"54.6\"\n        },\n        {\n          \"date\": \"20111124\",\n          \"temperature\": \"55.1\"\n        },\n        {\n          \"date\": \"20111125\",\n          \"temperature\": \"51.5\"\n        },\n        {\n          \"date\": \"20111126\",\n          \"temperature\": \"53.6\"\n        },\n        {\n          \"date\": \"20111127\",\n          \"temperature\": \"52.3\"\n        },\n        {\n          \"date\": \"20111128\",\n          \"temperature\": \"51.0\"\n        },\n        {\n          \"date\": \"20111129\",\n          \"temperature\": \"49.5\"\n        },\n        {\n          \"date\": \"20111130\",\n          \"temperature\": \"49.8\"\n        },\n        {\n          \"date\": \"20111201\",\n          \"temperature\": \"60.4\"\n        },\n        {\n          \"date\": \"20111202\",\n          \"temperature\": \"62.2\"\n        },\n        {\n          \"date\": \"20111203\",\n          \"temperature\": \"58.3\"\n        },\n        {\n          \"date\": \"20111204\",\n          \"temperature\": \"52.7\"\n        },\n        {\n          \"date\": \"20111205\",\n          \"temperature\": \"51.5\"\n        },\n        {\n          \"date\": \"20111206\",\n          \"temperature\": \"49.9\"\n        },\n        {\n          \"date\": \"20111207\",\n          \"temperature\": \"48.6\"\n        },\n        {\n          \"date\": \"20111208\",\n          \"temperature\": \"46.4\"\n        },\n        {\n          \"date\": \"20111209\",\n          \"temperature\": \"49.8\"\n        },\n        {\n          \"date\": \"20111210\",\n          \"temperature\": \"52.1\"\n        },\n        {\n          \"date\": \"20111211\",\n          \"temperature\": \"48.8\"\n        },\n        {\n          \"date\": \"20111212\",\n          \"temperature\": \"47.4\"\n        },\n        {\n          \"date\": \"20111213\",\n          \"temperature\": \"47.2\"\n        },\n        {\n          \"date\": \"20111214\",\n          \"temperature\": \"46.1\"\n        },\n        {\n          \"date\": \"20111215\",\n          \"temperature\": \"48.8\"\n        },\n        {\n          \"date\": \"20111216\",\n          \"temperature\": \"47.9\"\n        },\n        {\n          \"date\": \"20111217\",\n          \"temperature\": \"49.8\"\n        },\n        {\n          \"date\": \"20111218\",\n          \"temperature\": \"49.1\"\n        },\n        {\n          \"date\": \"20111219\",\n          \"temperature\": \"48.3\"\n        },\n        {\n          \"date\": \"20111220\",\n          \"temperature\": \"49.3\"\n        },\n        {\n          \"date\": \"20111221\",\n          \"temperature\": \"48.4\"\n        },\n        {\n          \"date\": \"20111222\",\n          \"temperature\": \"53.3\"\n        },\n        {\n          \"date\": \"20111223\",\n          \"temperature\": \"47.5\"\n        },\n        {\n          \"date\": \"20111224\",\n          \"temperature\": \"47.9\"\n        },\n        {\n          \"date\": \"20111225\",\n          \"temperature\": \"48.9\"\n        },\n        {\n          \"date\": \"20111226\",\n          \"temperature\": \"45.9\"\n        },\n        {\n          \"date\": \"20111227\",\n          \"temperature\": \"47.2\"\n        },\n        {\n          \"date\": \"20111228\",\n          \"temperature\": \"48.9\"\n        },\n        {\n          \"date\": \"20111229\",\n          \"temperature\": \"50.9\"\n        },\n        {\n          \"date\": \"20111230\",\n          \"temperature\": \"52.9\"\n        },\n        {\n          \"date\": \"20111231\",\n          \"temperature\": \"50.1\"\n        },\n        {\n          \"date\": \"20120101\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120102\",\n          \"temperature\": \"53.1\"\n        },\n        {\n          \"date\": \"20120103\",\n          \"temperature\": \"49.7\"\n        },\n        {\n          \"date\": \"20120104\",\n          \"temperature\": \"52.7\"\n        },\n        {\n          \"date\": \"20120105\",\n          \"temperature\": \"52.6\"\n        },\n        {\n          \"date\": \"20120106\",\n          \"temperature\": \"49.0\"\n        },\n        {\n          \"date\": \"20120107\",\n          \"temperature\": \"51.0\"\n        },\n        {\n          \"date\": \"20120108\",\n          \"temperature\": \"56.8\"\n        },\n        {\n          \"date\": \"20120109\",\n          \"temperature\": \"52.3\"\n        },\n        {\n          \"date\": \"20120110\",\n          \"temperature\": \"51.6\"\n        },\n        {\n          \"date\": \"20120111\",\n          \"temperature\": \"49.8\"\n        },\n        {\n          \"date\": \"20120112\",\n          \"temperature\": \"51.9\"\n        },\n        {\n          \"date\": \"20120113\",\n          \"temperature\": \"53.7\"\n        },\n        {\n          \"date\": \"20120114\",\n          \"temperature\": \"52.9\"\n        },\n        {\n          \"date\": \"20120115\",\n          \"temperature\": \"49.7\"\n        },\n        {\n          \"date\": \"20120116\",\n          \"temperature\": \"45.3\"\n        },\n        {\n          \"date\": \"20120117\",\n          \"temperature\": \"43.6\"\n        },\n        {\n          \"date\": \"20120118\",\n          \"temperature\": \"45.0\"\n        },\n        {\n          \"date\": \"20120119\",\n          \"temperature\": \"47.3\"\n        },\n        {\n          \"date\": \"20120120\",\n          \"temperature\": \"51.4\"\n        },\n        {\n          \"date\": \"20120121\",\n          \"temperature\": \"53.7\"\n        },\n        {\n          \"date\": \"20120122\",\n          \"temperature\": \"48.3\"\n        },\n        {\n          \"date\": \"20120123\",\n          \"temperature\": \"52.9\"\n        },\n        {\n          \"date\": \"20120124\",\n          \"temperature\": \"49.1\"\n        },\n        {\n          \"date\": \"20120125\",\n          \"temperature\": \"52.1\"\n        },\n        {\n          \"date\": \"20120126\",\n          \"temperature\": \"53.6\"\n        },\n        {\n          \"date\": \"20120127\",\n          \"temperature\": \"50.4\"\n        },\n        {\n          \"date\": \"20120128\",\n          \"temperature\": \"50.3\"\n        },\n        {\n          \"date\": \"20120129\",\n          \"temperature\": \"53.8\"\n        },\n        {\n          \"date\": \"20120130\",\n          \"temperature\": \"51.9\"\n        },\n        {\n          \"date\": \"20120131\",\n          \"temperature\": \"50.0\"\n        },\n        {\n          \"date\": \"20120201\",\n          \"temperature\": \"50.0\"\n        },\n        {\n          \"date\": \"20120202\",\n          \"temperature\": \"51.3\"\n        },\n        {\n          \"date\": \"20120203\",\n          \"temperature\": \"51.5\"\n        },\n        {\n          \"date\": \"20120204\",\n          \"temperature\": \"52.0\"\n        },\n        {\n          \"date\": \"20120205\",\n          \"temperature\": \"53.8\"\n        },\n        {\n          \"date\": \"20120206\",\n          \"temperature\": \"54.6\"\n        },\n        {\n          \"date\": \"20120207\",\n          \"temperature\": \"54.3\"\n        },\n        {\n          \"date\": \"20120208\",\n          \"temperature\": \"51.9\"\n        },\n        {\n          \"date\": \"20120209\",\n          \"temperature\": \"53.8\"\n        },\n        {\n          \"date\": \"20120210\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120211\",\n          \"temperature\": \"52.3\"\n        },\n        {\n          \"date\": \"20120212\",\n          \"temperature\": \"50.1\"\n        },\n        {\n          \"date\": \"20120213\",\n          \"temperature\": \"49.5\"\n        },\n        {\n          \"date\": \"20120214\",\n          \"temperature\": \"48.6\"\n        },\n        {\n          \"date\": \"20120215\",\n          \"temperature\": \"49.9\"\n        },\n        {\n          \"date\": \"20120216\",\n          \"temperature\": \"52.4\"\n        },\n        {\n          \"date\": \"20120217\",\n          \"temperature\": \"49.9\"\n        },\n        {\n          \"date\": \"20120218\",\n          \"temperature\": \"51.6\"\n        },\n        {\n          \"date\": \"20120219\",\n          \"temperature\": \"47.8\"\n        },\n        {\n          \"date\": \"20120220\",\n          \"temperature\": \"48.7\"\n        },\n        {\n          \"date\": \"20120221\",\n          \"temperature\": \"49.7\"\n        },\n        {\n          \"date\": \"20120222\",\n          \"temperature\": \"53.4\"\n        },\n        {\n          \"date\": \"20120223\",\n          \"temperature\": \"54.1\"\n        },\n        {\n          \"date\": \"20120224\",\n          \"temperature\": \"55.9\"\n        },\n        {\n          \"date\": \"20120225\",\n          \"temperature\": \"51.7\"\n        },\n        {\n          \"date\": \"20120226\",\n          \"temperature\": \"47.7\"\n        },\n        {\n          \"date\": \"20120227\",\n          \"temperature\": \"45.4\"\n        },\n        {\n          \"date\": \"20120228\",\n          \"temperature\": \"47.0\"\n        },\n        {\n          \"date\": \"20120229\",\n          \"temperature\": \"49.8\"\n        },\n        {\n          \"date\": \"20120301\",\n          \"temperature\": \"48.9\"\n        },\n        {\n          \"date\": \"20120302\",\n          \"temperature\": \"48.1\"\n        },\n        {\n          \"date\": \"20120303\",\n          \"temperature\": \"50.7\"\n        },\n        {\n          \"date\": \"20120304\",\n          \"temperature\": \"55.0\"\n        },\n        {\n          \"date\": \"20120305\",\n          \"temperature\": \"48.8\"\n        },\n        {\n          \"date\": \"20120306\",\n          \"temperature\": \"48.4\"\n        },\n        {\n          \"date\": \"20120307\",\n          \"temperature\": \"49.9\"\n        },\n        {\n          \"date\": \"20120308\",\n          \"temperature\": \"49.2\"\n        },\n        {\n          \"date\": \"20120309\",\n          \"temperature\": \"51.7\"\n        },\n        {\n          \"date\": \"20120310\",\n          \"temperature\": \"49.3\"\n        },\n        {\n          \"date\": \"20120311\",\n          \"temperature\": \"50.0\"\n        },\n        {\n          \"date\": \"20120312\",\n          \"temperature\": \"48.6\"\n        },\n        {\n          \"date\": \"20120313\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120314\",\n          \"temperature\": \"55.2\"\n        },\n        {\n          \"date\": \"20120315\",\n          \"temperature\": \"55.9\"\n        },\n        {\n          \"date\": \"20120316\",\n          \"temperature\": \"54.6\"\n        },\n        {\n          \"date\": \"20120317\",\n          \"temperature\": \"48.2\"\n        },\n        {\n          \"date\": \"20120318\",\n          \"temperature\": \"47.1\"\n        },\n        {\n          \"date\": \"20120319\",\n          \"temperature\": \"45.8\"\n        },\n        {\n          \"date\": \"20120320\",\n          \"temperature\": \"49.7\"\n        },\n        {\n          \"date\": \"20120321\",\n          \"temperature\": \"51.4\"\n        },\n        {\n          \"date\": \"20120322\",\n          \"temperature\": \"51.4\"\n        },\n        {\n          \"date\": \"20120323\",\n          \"temperature\": \"48.4\"\n        },\n        {\n          \"date\": \"20120324\",\n          \"temperature\": \"49.0\"\n        },\n        {\n          \"date\": \"20120325\",\n          \"temperature\": \"46.4\"\n        },\n        {\n          \"date\": \"20120326\",\n          \"temperature\": \"49.7\"\n        },\n        {\n          \"date\": \"20120327\",\n          \"temperature\": \"54.1\"\n        },\n        {\n          \"date\": \"20120328\",\n          \"temperature\": \"54.6\"\n        },\n        {\n          \"date\": \"20120329\",\n          \"temperature\": \"52.3\"\n        },\n        {\n          \"date\": \"20120330\",\n          \"temperature\": \"54.5\"\n        },\n        {\n          \"date\": \"20120331\",\n          \"temperature\": \"56.2\"\n        },\n        {\n          \"date\": \"20120401\",\n          \"temperature\": \"51.1\"\n        },\n        {\n          \"date\": \"20120402\",\n          \"temperature\": \"50.5\"\n        },\n        {\n          \"date\": \"20120403\",\n          \"temperature\": \"52.2\"\n        },\n        {\n          \"date\": \"20120404\",\n          \"temperature\": \"50.6\"\n        },\n        {\n          \"date\": \"20120405\",\n          \"temperature\": \"47.9\"\n        },\n        {\n          \"date\": \"20120406\",\n          \"temperature\": \"47.4\"\n        },\n        {\n          \"date\": \"20120407\",\n          \"temperature\": \"49.4\"\n        },\n        {\n          \"date\": \"20120408\",\n          \"temperature\": \"50.0\"\n        },\n        {\n          \"date\": \"20120409\",\n          \"temperature\": \"51.3\"\n        },\n        {\n          \"date\": \"20120410\",\n          \"temperature\": \"53.8\"\n        },\n        {\n          \"date\": \"20120411\",\n          \"temperature\": \"52.9\"\n        },\n        {\n          \"date\": \"20120412\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120413\",\n          \"temperature\": \"50.2\"\n        },\n        {\n          \"date\": \"20120414\",\n          \"temperature\": \"50.9\"\n        },\n        {\n          \"date\": \"20120415\",\n          \"temperature\": \"51.5\"\n        },\n        {\n          \"date\": \"20120416\",\n          \"temperature\": \"51.9\"\n        },\n        {\n          \"date\": \"20120417\",\n          \"temperature\": \"53.2\"\n        },\n        {\n          \"date\": \"20120418\",\n          \"temperature\": \"53.0\"\n        },\n        {\n          \"date\": \"20120419\",\n          \"temperature\": \"55.1\"\n        },\n        {\n          \"date\": \"20120420\",\n          \"temperature\": \"55.8\"\n        },\n        {\n          \"date\": \"20120421\",\n          \"temperature\": \"58.0\"\n        },\n        {\n          \"date\": \"20120422\",\n          \"temperature\": \"52.8\"\n        },\n        {\n          \"date\": \"20120423\",\n          \"temperature\": \"55.1\"\n        },\n        {\n          \"date\": \"20120424\",\n          \"temperature\": \"57.9\"\n        },\n        {\n          \"date\": \"20120425\",\n          \"temperature\": \"57.5\"\n        },\n        {\n          \"date\": \"20120426\",\n          \"temperature\": \"55.3\"\n        },\n        {\n          \"date\": \"20120427\",\n          \"temperature\": \"53.5\"\n        },\n        {\n          \"date\": \"20120428\",\n          \"temperature\": \"54.7\"\n        },\n        {\n          \"date\": \"20120429\",\n          \"temperature\": \"54.0\"\n        },\n        {\n          \"date\": \"20120430\",\n          \"temperature\": \"53.4\"\n        },\n        {\n          \"date\": \"20120501\",\n          \"temperature\": \"52.7\"\n        },\n        {\n          \"date\": \"20120502\",\n          \"temperature\": \"50.7\"\n        },\n        {\n          \"date\": \"20120503\",\n          \"temperature\": \"52.6\"\n        },\n        {\n          \"date\": \"20120504\",\n          \"temperature\": \"53.4\"\n        },\n        {\n          \"date\": \"20120505\",\n          \"temperature\": \"53.1\"\n        },\n        {\n          \"date\": \"20120506\",\n          \"temperature\": \"56.5\"\n        },\n        {\n          \"date\": \"20120507\",\n          \"temperature\": \"55.3\"\n        },\n        {\n          \"date\": \"20120508\",\n          \"temperature\": \"52.0\"\n        },\n        {\n          \"date\": \"20120509\",\n          \"temperature\": \"52.4\"\n        },\n        {\n          \"date\": \"20120510\",\n          \"temperature\": \"53.4\"\n        },\n        {\n          \"date\": \"20120511\",\n          \"temperature\": \"53.1\"\n        },\n        {\n          \"date\": \"20120512\",\n          \"temperature\": \"49.9\"\n        },\n        {\n          \"date\": \"20120513\",\n          \"temperature\": \"52.0\"\n        },\n        {\n          \"date\": \"20120514\",\n          \"temperature\": \"56.0\"\n        },\n        {\n          \"date\": \"20120515\",\n          \"temperature\": \"53.0\"\n        },\n        {\n          \"date\": \"20120516\",\n          \"temperature\": \"51.0\"\n        },\n        {\n          \"date\": \"20120517\",\n          \"temperature\": \"51.4\"\n        },\n        {\n          \"date\": \"20120518\",\n          \"temperature\": \"52.2\"\n        },\n        {\n          \"date\": \"20120519\",\n          \"temperature\": \"52.4\"\n        },\n        {\n          \"date\": \"20120520\",\n          \"temperature\": \"54.5\"\n        },\n        {\n          \"date\": \"20120521\",\n          \"temperature\": \"52.8\"\n        },\n        {\n          \"date\": \"20120522\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120523\",\n          \"temperature\": \"56.5\"\n        },\n        {\n          \"date\": \"20120524\",\n          \"temperature\": \"54.7\"\n        },\n        {\n          \"date\": \"20120525\",\n          \"temperature\": \"52.5\"\n        },\n        {\n          \"date\": \"20120526\",\n          \"temperature\": \"52.1\"\n        },\n        {\n          \"date\": \"20120527\",\n          \"temperature\": \"52.2\"\n        },\n        {\n          \"date\": \"20120528\",\n          \"temperature\": \"52.9\"\n        },\n        {\n          \"date\": \"20120529\",\n          \"temperature\": \"52.1\"\n        },\n        {\n          \"date\": \"20120530\",\n          \"temperature\": \"52.1\"\n        },\n        {\n          \"date\": \"20120531\",\n          \"temperature\": \"53.3\"\n        },\n        {\n          \"date\": \"20120601\",\n          \"temperature\": \"54.8\"\n        },\n        {\n          \"date\": \"20120602\",\n          \"temperature\": \"54.0\"\n        },\n        {\n          \"date\": \"20120603\",\n          \"temperature\": \"52.3\"\n        },\n        {\n          \"date\": \"20120604\",\n          \"temperature\": \"55.3\"\n        },\n        {\n          \"date\": \"20120605\",\n          \"temperature\": \"53.5\"\n        },\n        {\n          \"date\": \"20120606\",\n          \"temperature\": \"54.1\"\n        },\n        {\n          \"date\": \"20120607\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120608\",\n          \"temperature\": \"54.4\"\n        },\n        {\n          \"date\": \"20120609\",\n          \"temperature\": \"55.0\"\n        },\n        {\n          \"date\": \"20120610\",\n          \"temperature\": \"60.0\"\n        },\n        {\n          \"date\": \"20120611\",\n          \"temperature\": \"57.2\"\n        },\n        {\n          \"date\": \"20120612\",\n          \"temperature\": \"55.1\"\n        },\n        {\n          \"date\": \"20120613\",\n          \"temperature\": \"53.3\"\n        },\n        {\n          \"date\": \"20120614\",\n          \"temperature\": \"53.4\"\n        },\n        {\n          \"date\": \"20120615\",\n          \"temperature\": \"54.6\"\n        },\n        {\n          \"date\": \"20120616\",\n          \"temperature\": \"57.0\"\n        },\n        {\n          \"date\": \"20120617\",\n          \"temperature\": \"55.6\"\n        },\n        {\n          \"date\": \"20120618\",\n          \"temperature\": \"52.5\"\n        },\n        {\n          \"date\": \"20120619\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120620\",\n          \"temperature\": \"55.3\"\n        },\n        {\n          \"date\": \"20120621\",\n          \"temperature\": \"53.3\"\n        },\n        {\n          \"date\": \"20120622\",\n          \"temperature\": \"54.1\"\n        },\n        {\n          \"date\": \"20120623\",\n          \"temperature\": \"55.2\"\n        },\n        {\n          \"date\": \"20120624\",\n          \"temperature\": \"55.8\"\n        },\n        {\n          \"date\": \"20120625\",\n          \"temperature\": \"56.8\"\n        },\n        {\n          \"date\": \"20120626\",\n          \"temperature\": \"57.5\"\n        },\n        {\n          \"date\": \"20120627\",\n          \"temperature\": \"57.7\"\n        },\n        {\n          \"date\": \"20120628\",\n          \"temperature\": \"56.6\"\n        },\n        {\n          \"date\": \"20120629\",\n          \"temperature\": \"56.4\"\n        },\n        {\n          \"date\": \"20120630\",\n          \"temperature\": \"58.4\"\n        },\n        {\n          \"date\": \"20120701\",\n          \"temperature\": \"58.8\"\n        },\n        {\n          \"date\": \"20120702\",\n          \"temperature\": \"56.4\"\n        },\n        {\n          \"date\": \"20120703\",\n          \"temperature\": \"56.5\"\n        },\n        {\n          \"date\": \"20120704\",\n          \"temperature\": \"55.8\"\n        },\n        {\n          \"date\": \"20120705\",\n          \"temperature\": \"54.8\"\n        },\n        {\n          \"date\": \"20120706\",\n          \"temperature\": \"54.9\"\n        },\n        {\n          \"date\": \"20120707\",\n          \"temperature\": \"54.7\"\n        },\n        {\n          \"date\": \"20120708\",\n          \"temperature\": \"52.8\"\n        },\n        {\n          \"date\": \"20120709\",\n          \"temperature\": \"53.7\"\n        },\n        {\n          \"date\": \"20120710\",\n          \"temperature\": \"53.1\"\n        },\n        {\n          \"date\": \"20120711\",\n          \"temperature\": \"52.7\"\n        },\n        {\n          \"date\": \"20120712\",\n          \"temperature\": \"52.0\"\n        },\n        {\n          \"date\": \"20120713\",\n          \"temperature\": \"53.4\"\n        },\n        {\n          \"date\": \"20120714\",\n          \"temperature\": \"54.0\"\n        },\n        {\n          \"date\": \"20120715\",\n          \"temperature\": \"54.0\"\n        },\n        {\n          \"date\": \"20120716\",\n          \"temperature\": \"54.5\"\n        },\n        {\n          \"date\": \"20120717\",\n          \"temperature\": \"56.7\"\n        },\n        {\n          \"date\": \"20120718\",\n          \"temperature\": \"57.5\"\n        },\n        {\n          \"date\": \"20120719\",\n          \"temperature\": \"57.1\"\n        },\n        {\n          \"date\": \"20120720\",\n          \"temperature\": \"58.1\"\n        },\n        {\n          \"date\": \"20120721\",\n          \"temperature\": \"57.6\"\n        },\n        {\n          \"date\": \"20120722\",\n          \"temperature\": \"56.0\"\n        },\n        {\n          \"date\": \"20120723\",\n          \"temperature\": \"56.6\"\n        },\n        {\n          \"date\": \"20120724\",\n          \"temperature\": \"57.8\"\n        },\n        {\n          \"date\": \"20120725\",\n          \"temperature\": \"57.5\"\n        },\n        {\n          \"date\": \"20120726\",\n          \"temperature\": \"56.4\"\n        },\n        {\n          \"date\": \"20120727\",\n          \"temperature\": \"55.3\"\n        },\n        {\n          \"date\": \"20120728\",\n          \"temperature\": \"55.0\"\n        },\n        {\n          \"date\": \"20120729\",\n          \"temperature\": \"55.6\"\n        },\n        {\n          \"date\": \"20120730\",\n          \"temperature\": \"55.6\"\n        },\n        {\n          \"date\": \"20120731\",\n          \"temperature\": \"55.9\"\n        },\n        {\n          \"date\": \"20120801\",\n          \"temperature\": \"55.4\"\n        },\n        {\n          \"date\": \"20120802\",\n          \"temperature\": \"54.4\"\n        },\n        {\n          \"date\": \"20120803\",\n          \"temperature\": \"53.7\"\n        },\n        {\n          \"date\": \"20120804\",\n          \"temperature\": \"54.1\"\n        },\n        {\n          \"date\": \"20120805\",\n          \"temperature\": \"57.8\"\n        },\n        {\n          \"date\": \"20120806\",\n          \"temperature\": \"58.2\"\n        },\n        {\n          \"date\": \"20120807\",\n          \"temperature\": \"58.0\"\n        },\n        {\n          \"date\": \"20120808\",\n          \"temperature\": \"57.0\"\n        },\n        {\n          \"date\": \"20120809\",\n          \"temperature\": \"55.0\"\n        },\n        {\n          \"date\": \"20120810\",\n          \"temperature\": \"54.8\"\n        },\n        {\n          \"date\": \"20120811\",\n          \"temperature\": \"53.0\"\n        },\n        {\n          \"date\": \"20120812\",\n          \"temperature\": \"52.5\"\n        },\n        {\n          \"date\": \"20120813\",\n          \"temperature\": \"53.3\"\n        },\n        {\n          \"date\": \"20120814\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120815\",\n          \"temperature\": \"56.2\"\n        },\n        {\n          \"date\": \"20120816\",\n          \"temperature\": \"57.1\"\n        },\n        {\n          \"date\": \"20120817\",\n          \"temperature\": \"55.3\"\n        },\n        {\n          \"date\": \"20120818\",\n          \"temperature\": \"56.2\"\n        },\n        {\n          \"date\": \"20120819\",\n          \"temperature\": \"54.3\"\n        },\n        {\n          \"date\": \"20120820\",\n          \"temperature\": \"53.1\"\n        },\n        {\n          \"date\": \"20120821\",\n          \"temperature\": \"53.4\"\n        },\n        {\n          \"date\": \"20120822\",\n          \"temperature\": \"54.5\"\n        },\n        {\n          \"date\": \"20120823\",\n          \"temperature\": \"55.7\"\n        },\n        {\n          \"date\": \"20120824\",\n          \"temperature\": \"54.8\"\n        },\n        {\n          \"date\": \"20120825\",\n          \"temperature\": \"53.8\"\n        },\n        {\n          \"date\": \"20120826\",\n          \"temperature\": \"56.5\"\n        },\n        {\n          \"date\": \"20120827\",\n          \"temperature\": \"58.3\"\n        },\n        {\n          \"date\": \"20120828\",\n          \"temperature\": \"58.7\"\n        },\n        {\n          \"date\": \"20120829\",\n          \"temperature\": \"57.5\"\n        },\n        {\n          \"date\": \"20120830\",\n          \"temperature\": \"55.9\"\n        },\n        {\n          \"date\": \"20120831\",\n          \"temperature\": \"55.4\"\n        },\n        {\n          \"date\": \"20120901\",\n          \"temperature\": \"55.7\"\n        },\n        {\n          \"date\": \"20120902\",\n          \"temperature\": \"53.1\"\n        },\n        {\n          \"date\": \"20120903\",\n          \"temperature\": \"53.5\"\n        },\n        {\n          \"date\": \"20120904\",\n          \"temperature\": \"52.5\"\n        },\n        {\n          \"date\": \"20120905\",\n          \"temperature\": \"54.5\"\n        },\n        {\n          \"date\": \"20120906\",\n          \"temperature\": \"56.3\"\n        },\n        {\n          \"date\": \"20120907\",\n          \"temperature\": \"56.4\"\n        },\n        {\n          \"date\": \"20120908\",\n          \"temperature\": \"56.5\"\n        },\n        {\n          \"date\": \"20120909\",\n          \"temperature\": \"56.4\"\n        },\n        {\n          \"date\": \"20120910\",\n          \"temperature\": \"55.4\"\n        },\n        {\n          \"date\": \"20120911\",\n          \"temperature\": \"56.2\"\n        },\n        {\n          \"date\": \"20120912\",\n          \"temperature\": \"55.7\"\n        },\n        {\n          \"date\": \"20120913\",\n          \"temperature\": \"54.3\"\n        },\n        {\n          \"date\": \"20120914\",\n          \"temperature\": \"55.2\"\n        },\n        {\n          \"date\": \"20120915\",\n          \"temperature\": \"54.3\"\n        },\n        {\n          \"date\": \"20120916\",\n          \"temperature\": \"52.9\"\n        },\n        {\n          \"date\": \"20120917\",\n          \"temperature\": \"54.8\"\n        },\n        {\n          \"date\": \"20120918\",\n          \"temperature\": \"54.8\"\n        },\n        {\n          \"date\": \"20120919\",\n          \"temperature\": \"56.8\"\n        },\n        {\n          \"date\": \"20120920\",\n          \"temperature\": \"55.4\"\n        },\n        {\n          \"date\": \"20120921\",\n          \"temperature\": \"55.8\"\n        },\n        {\n          \"date\": \"20120922\",\n          \"temperature\": \"55.9\"\n        },\n        {\n          \"date\": \"20120923\",\n          \"temperature\": \"52.8\"\n        },\n        {\n          \"date\": \"20120924\",\n          \"temperature\": \"54.5\"\n        },\n        {\n          \"date\": \"20120925\",\n          \"temperature\": \"53.3\"\n        },\n        {\n          \"date\": \"20120926\",\n          \"temperature\": \"53.6\"\n        },\n        {\n          \"date\": \"20120927\",\n          \"temperature\": \"52.1\"\n        },\n        {\n          \"date\": \"20120928\",\n          \"temperature\": \"52.6\"\n        },\n        {\n          \"date\": \"20120929\",\n          \"temperature\": \"53.9\"\n        },\n        {\n          \"date\": \"20120930\",\n          \"temperature\": \"55.1\"\n        }\n      ];\n    }\n  </script>"
]