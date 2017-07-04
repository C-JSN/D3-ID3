[
	"<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Scatter Plot</title>\n</head>\n\n<body>\n  <script src=\"https://d3js.org/d3.v4.min.js\"></script>\n  <script id=\"mainScript\">\n    var scatter ={\"margin\":{\"top\":30,\"right\":30,\"bottom\":30,\"left\":40},\"width\":200,\"height\":100,\"responsiveResize\":false,\"axes\":{\"xAxis\":{\"exist\":true,\"name\":\"x-axis\",\"nameColor\":\"black\",\"ticks\":5,\"axisColor\":\"black\"},\"yAxis\":{\"exist\":true,\"name\":\"y-axis\",\"nameColor\":\"black\",\"ticks\":5,\"axisColor\":\"black\"}},\"gridLines\":{\"exist\":true,\"horizontalColor\":\"grey\",\"horizontalWidth\":0.3,\"verticalColor\":\"grey\",\"verticalWidth\":0.3},\"regressionLine\":{\"exist\":false,\"color\":\"lightblue\",\"width\":2},\"toolTip\":{\"exist\":true,\"text\":\"\",\"border\":\"1px solid black\",\"padding\":5},\"scatterPlot\":{\"points\":{\"exist\":true,\"radius\":4,\"color\":\"black\",\"entryDelayEach\":5,\"transitionAnimation\":{\"radius\":10,\"color\":\"red\"}}},\"data\":[{\"x\":0,\"y\":15},{\"x\":1,\"y\":6},{\"x\":2,\"y\":81},{\"x\":3,\"y\":1},{\"x\":4,\"y\":78},{\"x\":5,\"y\":79},{\"x\":6,\"y\":38},{\"x\":7,\"y\":16},{\"x\":8,\"y\":48},{\"x\":9,\"y\":29},{\"x\":10,\"y\":66},{\"x\":11,\"y\":53},{\"x\":12,\"y\":56},{\"x\":13,\"y\":73},{\"x\":14,\"y\":69},{\"x\":15,\"y\":8},{\"x\":16,\"y\":80},{\"x\":17,\"y\":80},{\"x\":18,\"y\":42},{\"x\":19,\"y\":4},{\"x\":20,\"y\":25},{\"x\":21,\"y\":58},{\"x\":22,\"y\":40},{\"x\":23,\"y\":46},{\"x\":24,\"y\":94},{\"x\":25,\"y\":36},{\"x\":26,\"y\":87},{\"x\":27,\"y\":96},{\"x\":28,\"y\":70},{\"x\":29,\"y\":79},{\"x\":30,\"y\":43},{\"x\":31,\"y\":35},{\"x\":32,\"y\":17},{\"x\":33,\"y\":85},{\"x\":34,\"y\":86},{\"x\":35,\"y\":41},{\"x\":36,\"y\":67},{\"x\":37,\"y\":9},{\"x\":38,\"y\":2},{\"x\":39,\"y\":80},{\"x\":40,\"y\":69},{\"x\":41,\"y\":39},{\"x\":42,\"y\":80},{\"x\":43,\"y\":19},{\"x\":44,\"y\":53},{\"x\":45,\"y\":31},{\"x\":46,\"y\":78},{\"x\":47,\"y\":46},{\"x\":48,\"y\":87},{\"x\":49,\"y\":81},{\"x\":50,\"y\":80},{\"x\":51,\"y\":60},{\"x\":52,\"y\":75},{\"x\":53,\"y\":59},{\"x\":54,\"y\":7},{\"x\":55,\"y\":13},{\"x\":56,\"y\":77},{\"x\":57,\"y\":82},{\"x\":58,\"y\":45},{\"x\":59,\"y\":16},{\"x\":60,\"y\":17},{\"x\":61,\"y\":32},{\"x\":62,\"y\":95},{\"x\":63,\"y\":20},{\"x\":64,\"y\":13},{\"x\":65,\"y\":78},{\"x\":66,\"y\":26},{\"x\":67,\"y\":79},{\"x\":68,\"y\":15},{\"x\":69,\"y\":96},{\"x\":70,\"y\":71},{\"x\":71,\"y\":26},{\"x\":72,\"y\":56},{\"x\":73,\"y\":44},{\"x\":74,\"y\":67},{\"x\":75,\"y\":35},{\"x\":76,\"y\":27},{\"x\":77,\"y\":96},{\"x\":78,\"y\":27},{\"x\":79,\"y\":35},{\"x\":80,\"y\":45},{\"x\":81,\"y\":12},{\"x\":82,\"y\":9},{\"x\":83,\"y\":48},{\"x\":84,\"y\":29},{\"x\":85,\"y\":34},{\"x\":86,\"y\":66},{\"x\":87,\"y\":36},{\"x\":88,\"y\":90},{\"x\":89,\"y\":24},{\"x\":90,\"y\":70},{\"x\":91,\"y\":61},{\"x\":92,\"y\":86},{\"x\":93,\"y\":26},{\"x\":94,\"y\":94},{\"x\":95,\"y\":7},{\"x\":96,\"y\":1},{\"x\":97,\"y\":82},{\"x\":98,\"y\":47},{\"x\":99,\"y\":55}]};function responsivefy(svg, boolean) {\n      if (boolean) {\n        // get container + svg aspect ratio\n        let container = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "svg.node().parentNode",
		"args": [
			"svg.node().parentNode"
		]
	},
	",\n          width = parseInt(svg",
	{
		"methodObject": "d3.select(svg.node().parentNode)",
		"d3MethodName": ".style",
		"name": "",
		"type": "text",
		"value": "\"width\"",
		"args": [
			"\"width\""
		]
	},
	"),\n          height = parseInt(svg",
	{
		"methodObject": "d3.select(svg.node().parentNode)",
		"d3MethodName": ".style",
		"name": "",
		"type": "text",
		"value": "\"height\"",
		"args": [
			"\"height\""
		]
	},
	"),\n          aspect = width / height;\n\n        // add viewBox and preserveAspectRatio properties,\n        // and call resize so that svg resizes on inital page load\n        svg",
	{
		"methodObject": "d3.select(svg.node().parentNode)",
		"d3MethodName": ".attr",
		"name": "\"viewBox\"",
		"type": "text",
		"value": " \"0 0 \" + width + \" \" + height",
		"args": [
			"\"viewBox\"",
			" \"0 0 \" + width + \" \" + height"
		]
	},
	"\n          ",
	{
		"methodObject": "d3.select(svg.node().parentNode)",
		"d3MethodName": ".attr",
		"name": "\"perserveAspectRatio\"",
		"type": "text",
		"value": " \"xMinYMid\"",
		"args": [
			"\"perserveAspectRatio\"",
			" \"xMinYMid\""
		]
	},
	"\n          ",
	{
		"methodObject": "d3.select(svg.node().parentNode)",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "resize",
		"args": [
			"resize"
		]
	},
	{
		"methodObject": "d3.select(svg.node().parentNode)",
		"methodEnd": true
	},
	"\n\n        // to register multiple listeners for same event type, \n        // you need to add namespace, i.e., 'click.foo'\n        // necessary if you call invoke this function for multiple svgs\n        // api docs: https://github.com/mbostock/d3/wiki/Selections#on\n        d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "window",
		"args": [
			"window"
		]
	},
	{
		"methodObject": "d3.select(window)",
		"d3MethodName": ".on",
		"name": "\"resize.\" + container.attr(\"id\")",
		"type": "text",
		"value": " resize",
		"args": [
			"\"resize.\" + container.attr(\"id\")",
			" resize"
		]
	},
	{
		"methodObject": "d3.select(window)",
		"methodEnd": true
	},
	"\n\n        // get width of container and resize svg to fit it\n        function resize() {\n          let targetWidth = parseInt(container",
	{
		"methodObject": "parseInt(container",
		"d3MethodName": ".style",
		"name": "",
		"type": "text",
		"value": "\"width\"",
		"args": [
			"\"width\""
		]
	},
	");\n          svg",
	{
		"methodObject": "parseInt(container",
		"d3MethodName": ".attr",
		"name": "\"width\"",
		"type": "text",
		"value": " targetWidth",
		"args": [
			"\"width\"",
			" targetWidth"
		]
	},
	{
		"methodObject": "parseInt(container",
		"methodEnd": true
	},
	"\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".attr",
		"name": "\"height\"",
		"type": "text",
		"value": " Math.round(targetWidth / aspect)",
		"args": [
			"\"height\"",
			" Math.round(targetWidth / aspect)"
		]
	},
	{
		"methodObject": "svg",
		"methodEnd": true
	},
	"\n        }\n      } else {\n        d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "window",
		"args": [
			"window"
		]
	},
	{
		"methodObject": "d3.select(window)",
		"d3MethodName": ".on",
		"name": "\"resize.\" + d3.select(svg.node().parentNode).attr(\"id\")",
		"type": "text",
		"value": " null",
		"args": [
			"\"resize.\" + d3.select(svg.node().parentNode).attr(\"id\")",
			" null"
		]
	},
	{
		"methodObject": "d3.select(window)",
		"methodEnd": true
	},
	"\n      }\n    }\n\n    function create_data(xValues, yValues) {\n      let x = xValues;\n      let y = yValues;\n\n      if (x === null) {\n        x = [];\n        for (let i = 0; i < 100; i += 1) {\n          x.push(i);\n        }\n      }\n\n      if (y === null) {\n        y = [];\n        for (let i = 0; i < 100; i += 1) {\n          y.push(Math.floor(Math.random() * 100));\n        }\n      }\n\n      let formatTime = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".timeFormat",
		"name": "\"%B %d",
		"type": "text",
		"value": " %Y\"",
		"args": [
			"\"%B %d",
			" %Y\""
		]
	},
	{
		"methodObject": "d3",
		"methodEnd": true
	},
	"\n      let parseTime = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".timeParse",
		"name": "\"%B %d",
		"type": "text",
		"value": " %Y\"",
		"args": [
			"\"%B %d",
			" %Y\""
		]
	},
	{
		"methodObject": "d3",
		"methodEnd": true
	},
	"\n      // console.log(parseTime(formatTime(new Date(\"2016-04-02\"))));\n\n      const data = [];\n      for (let i = 0; i < y.length; i += 1) {\n        let obj = {};\n\n        if (isNaN(+x[i])) {\n          obj.xType = 'date';\n          obj.x = parseTime(formatTime(new Date(x[i])));\n        } else {\n          obj.x = +x[i];\n        }\n        if (isNaN(+y[i])) {\n          obj.yType = 'date';\n          obj.y = parseTime(formatTime(new Date(y[i])));\n        } else {\n          obj.y = +y[i];\n        }\n        // obj.x = +x[i];\n        // obj.y = +y[i];\n        data.push(obj);\n      }\n      return data;\n    }\n\n    function createSvg(settings) {\n      const svgContainer = document.createElement(\"div\");\n      svgContainer.setAttribute(\"id\", \"svgContainer\");\n      document.body.insertBefore(svgContainer, document.body.firstChild);\n      let svg = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "svgContainer",
		"args": [
			"svgContainer"
		]
	},
	{
		"methodObject": "d3.select(svgContainer)",
		"d3MethodName": ".insert",
		"name": "\"svg\"",
		"type": "text",
		"value": " \":first-child\"",
		"args": [
			"\"svg\"",
			" \":first-child\""
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(svgContainer).insert(\"svg\")",
		"d3MethodName": ".attr",
		"name": "\"id\"",
		"type": "text",
		"value": " \"svg\"",
		"args": [
			"\"id\"",
			" \"svg\""
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(svgContainer).insert(\"svg\")",
		"d3MethodName": ".attr",
		"name": "\"width\"",
		"type": "text",
		"value": " settings.width",
		"args": [
			"\"width\"",
			" settings.width"
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(svgContainer).insert(\"svg\")",
		"d3MethodName": ".attr",
		"name": "\"height\"",
		"type": "text",
		"value": " settings.height",
		"args": [
			"\"height\"",
			" settings.height"
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(svgContainer).insert(\"svg\")",
		"d3MethodName": ".call",
		"name": "responsivefy",
		"type": "text",
		"value": " settings.responsiveResize",
		"args": [
			"responsivefy",
			" settings.responsiveResize"
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(svgContainer).insert(\"svg\")",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"g\"",
		"args": [
			"\"g\""
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(svgContainer).insert(\"svg\").append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"class\"",
		"type": "text",
		"value": " \"graph\"",
		"args": [
			"\"class\"",
			" \"graph\""
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(svgContainer).insert(\"svg\").append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"transform\"",
		"type": "text",
		"value": " \"translate(\" + settings.margin.left + \",\" + settings.margin.top + \")\"",
		"args": [
			"\"transform\"",
			" \"translate(\" + settings.margin.left + \"",
			"\" + settings.margin.top + \")\""
		]
	},
	{
		"methodObject": "d3.select(svgContainer).insert(\"svg\").append(\"g\")",
		"methodEnd": true
	},
	"\n\n      return svg;\n    }\n\n    function createScatterPlot(svg, settings) {\n      let xScale;\n      let yScale;\n      // let xTime = false;\n      // let yTime = false;\n\n      // console.log(Object.prototype.toString",
	{
		"methodObject": "console.log(Object.prototype.toString",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "settings.data[0].x === '[object Date]'",
		"args": [
			"settings.data[0].x === '[object Date]'"
		]
	},
	");\n\n      if (settings.data[0].xType === 'date') {\n        // xTime = true;\n        xScale = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleTime",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "d3.scaleTime()",
		"methodEnd": true
	},
	"\n      }\n      if (!settings.data[0].xType) {\n        xScale = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleLinear",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "d3.scaleLinear()",
		"methodEnd": true
	},
	"\n      }\n\n      if (settings.data[0].yType === 'date') {\n        // yTime = true;\n        yScale = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleTime",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "d3.scaleTime()",
		"methodEnd": true
	},
	"\n      }\n      if (!settings.data[0].yType) {\n        yScale = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleLinear",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "d3.scaleLinear()",
		"methodEnd": true
	},
	"\n      }\n\n      // xScale = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleLinear",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "d3.scaleLinear()",
		"methodEnd": true
	},
	"\n      // yScale = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleLinear",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "d3.scaleLinear()",
		"methodEnd": true
	},
	"\n\n      xScale\n        .domain(d3.extent(settings.data, d => { return d.x }))\n        .range([0, settings.width - settings.margin.left - settings.margin.right])\n        .nice();\n\n      yScale\n        .domain(d3.extent(settings.data, d => { return d.y }))\n        .range([settings.height - settings.margin.top - settings.margin.bottom, 0])\n        .nice();\n\n      let plot = {\n        xScale: xScale,\n        yScale: yScale,\n      }\n\n      return plot;\n    }\n\n    function createAxis(svg, settings, plot) {\n      if (settings.axes.xAxis.exist) {\n        let xAxis = svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"g\"",
		"args": [
			"\"g\""
		]
	},
	"\n          ",
	{
		"methodObject": "svg.append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"class\"",
		"type": "text",
		"value": " \"x-axis\"",
		"args": [
			"\"class\"",
			" \"x-axis\""
		]
	},
	"\n          ",
	{
		"methodObject": "svg.append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"transform\"",
		"type": "text",
		"value": " \"translate(0,\" + (settings.height - settings.margin.top - settings.margin.bottom) + \")\"",
		"args": [
			"\"transform\"",
			" \"translate(0",
			"\" + (settings.height - settings.margin.top - settings.margin.bottom) + \")\""
		]
	},
	"\n\n        if (settings.data[0].xType === 'date') {\n          xAxis\n            ",
	{
		"methodObject": "",
		"d3MethodName": ".call",
		"name": "d3.axisBottom(plot.xScale)\n              .tickFormat(d3.timeFormat(\"%B %d",
		"type": "text",
		"value": " %Y\")",
		"args": [
			"d3.axisBottom(plot.xScale)\n              .tickFormat(d3.timeFormat(\"%B %d",
			" %Y\")"
		]
	},
	"\n              .ticks(settings.axes.xAxis.ticks));\n        } else {\n          xAxis\n            ",
	{
		"methodObject": "",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "d3.axisBottom(plot.xScale)\n              .ticks(settings.axes.xAxis.ticks)",
		"args": [
			"d3.axisBottom(plot.xScale)\n              .ticks(settings.axes.xAxis.ticks)"
		]
	},
	{
		"methodObject": "",
		"methodEnd": true
	},
	"\n        }\n\n        // xAxis\n        //   ",
	{
		"methodObject": "",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "d3.axisBottom(plot.xScale)\n        //     .ticks(settings.axes.xAxis.ticks)",
		"args": [
			"d3.axisBottom(plot.xScale)\n        //     .ticks(settings.axes.xAxis.ticks)"
		]
	},
	{
		"methodObject": "",
		"methodEnd": true
	},
	"\n\n        xAxis",
	{
		"methodObject": "xAxis",
		"d3MethodName": ".selectAll",
		"name": "\".x-axis line\")\n          .style(\"stroke\"",
		"type": "text",
		"value": " settings.axes.xAxis.axisColor);\n\n        xAxis.selectAll(\".x-axis path\")\n          .style(\"stroke\", settings.axes.xAxis.axisColor);\n\n        xAxis.selectAll(\"text\")\n          .style(\"stroke\", \"none\")\n          .style(\"fill\", settings.axes.xAxis.nameColor);\n\n        xAxis.append(\"text\")\n          .attr(\"class\", \"xlabel label\")\n          .attr(\"x\", (settings.width - settings.margin.left - settings.margin.right)",
		"args": [
			"\".x-axis line\")\n          .style(\"stroke\"",
			" settings.axes.xAxis.axisColor);\n\n        xAxis.selectAll(\".x-axis path\")\n          .style(\"stroke\"",
			" settings.axes.xAxis.axisColor);\n\n        xAxis.selectAll(\"text\")\n          .style(\"stroke\"",
			" \"none\")\n          .style(\"fill\"",
			" settings.axes.xAxis.nameColor);\n\n        xAxis.append(\"text\")\n          .attr(\"class\"",
			" \"xlabel label\")\n          .attr(\"x\"",
			" (settings.width - settings.margin.left - settings.margin.right)"
		]
	},
	"\n          ",
	{
		"methodObject": "xAxis.selectAll(\".x-axis line\")\n          .style(\"stroke\")",
		"d3MethodName": ".attr",
		"name": "\"y\"",
		"type": "text",
		"value": " -6)\n          .style(\"text-anchor\", \"end\")\n          .style(\"fill\", settings.axes.xAxis.nameColor)\n          .text(settings.axes.xAxis.name);\n\n        plot.xAxis = xAxis;\n      }\n\n      if (settings.axes.yAxis.exist) {\n        let yAxis = svg.append(\"g\")\n          .attr(\"class\", \"y-axis\")\n\n        if (settings.data[0].yType === 'date') {\n          yAxis\n            .call(d3.axisLeft(plot.yScale)\n              .tickFormat(d3.timeFormat(\"%B %d, %Y\")",
		"args": [
			"\"y\"",
			" -6)\n          .style(\"text-anchor\"",
			" \"end\")\n          .style(\"fill\"",
			" settings.axes.xAxis.nameColor)\n          .text(settings.axes.xAxis.name);\n\n        plot.xAxis = xAxis;\n      }\n\n      if (settings.axes.yAxis.exist) {\n        let yAxis = svg.append(\"g\")\n          .attr(\"class\"",
			" \"y-axis\")\n\n        if (settings.data[0].yType === 'date') {\n          yAxis\n            .call(d3.axisLeft(plot.yScale)\n              .tickFormat(d3.timeFormat(\"%B %d",
			" %Y\")"
		]
	},
	"\n              .ticks(settings.axes.yAxis.ticks));\n        } else {\n          yAxis\n            ",
	{
		"methodObject": "",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "d3.axisLeft(plot.yScale)\n              .ticks(settings.axes.yAxis.ticks)",
		"args": [
			"d3.axisLeft(plot.yScale)\n              .ticks(settings.axes.yAxis.ticks)"
		]
	},
	{
		"methodObject": "",
		"methodEnd": true
	},
	"\n        }\n\n        // yAxis\n        //   ",
	{
		"methodObject": "",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "d3.axisLeft(plot.yScale)\n        //     .ticks(settings.axes.yAxis.ticks)",
		"args": [
			"d3.axisLeft(plot.yScale)\n        //     .ticks(settings.axes.yAxis.ticks)"
		]
	},
	{
		"methodObject": "",
		"methodEnd": true
	},
	"\n\n        yAxis",
	{
		"methodObject": "yAxis",
		"d3MethodName": ".selectAll",
		"name": "\".y-axis line\")\n          .style(\"stroke\"",
		"type": "text",
		"value": " settings.axes.yAxis.axisColor);\n\n        yAxis.selectAll(\".y-axis path\")\n          .style(\"stroke\", settings.axes.yAxis.axisColor);\n\n        yAxis.selectAll(\"text\")\n          .style(\"stroke\", \"none\")\n          .style(\"fill\", settings.axes.yAxis.nameColor);\n\n        yAxis.append(\"text\")\n          .attr(\"class\", \"ylabel label\")\n          .attr(\"transform\", \"rotate(-90)\")\n          .attr(\"y\", 6)\n          .attr(\"dy\", \".71em\")\n          .style(\"text-anchor\", \"end\")\n          .style(\"fill\", settings.axes.yAxis.nameColor)\n          .text(settings.axes.yAxis.name);\n\n        plot.yAxis = yAxis;\n      }\n    }\n\n    function plotPoints(svg, settings, plot) {\n      if (scatter.scatterPlot.points.entryDelayEach > 0) {\n        svg.selectAll(\".point\")\n          .data(settings.data)\n          .enter().append(\"circle\")\n          .attr(\"class\", \"point\")\n          .each(function (d, i) {\n            d3.select(this).transition()\n              .delay(i * scatter.scatterPlot.points.entryDelayEach)\n              .attr(\"r\", settings.scatterPlot.points.radius)\n              .attr(\"fill\", settings.scatterPlot.points.color)\n              .attr(\"cx\", plot.xScale(d.x)",
		"args": [
			"\".y-axis line\")\n          .style(\"stroke\"",
			" settings.axes.yAxis.axisColor);\n\n        yAxis.selectAll(\".y-axis path\")\n          .style(\"stroke\"",
			" settings.axes.yAxis.axisColor);\n\n        yAxis.selectAll(\"text\")\n          .style(\"stroke\"",
			" \"none\")\n          .style(\"fill\"",
			" settings.axes.yAxis.nameColor);\n\n        yAxis.append(\"text\")\n          .attr(\"class\"",
			" \"ylabel label\")\n          .attr(\"transform\"",
			" \"rotate(-90)\")\n          .attr(\"y\"",
			" 6)\n          .attr(\"dy\"",
			" \".71em\")\n          .style(\"text-anchor\"",
			" \"end\")\n          .style(\"fill\"",
			" settings.axes.yAxis.nameColor)\n          .text(settings.axes.yAxis.name);\n\n        plot.yAxis = yAxis;\n      }\n    }\n\n    function plotPoints(svg",
			" settings",
			" plot) {\n      if (scatter.scatterPlot.points.entryDelayEach > 0) {\n        svg.selectAll(\".point\")\n          .data(settings.data)\n          .enter().append(\"circle\")\n          .attr(\"class\"",
			" \"point\")\n          .each(function (d",
			" i) {\n            d3.select(this).transition()\n              .delay(i * scatter.scatterPlot.points.entryDelayEach)\n              .attr(\"r\"",
			" settings.scatterPlot.points.radius)\n              .attr(\"fill\"",
			" settings.scatterPlot.points.color)\n              .attr(\"cx\"",
			" plot.xScale(d.x)"
		]
	},
	"\n              ",
	{
		"methodObject": "yAxis.selectAll(\".y-axis line\")\n          .style(\"stroke\")",
		"d3MethodName": ".attr",
		"name": "\"cy\"",
		"type": "text",
		"value": " plot.yScale(d.y)",
		"args": [
			"\"cy\"",
			" plot.yScale(d.y)"
		]
	},
	{
		"methodObject": "yAxis.selectAll(\".y-axis line\")\n          .style(\"stroke\")",
		"methodEnd": true
	},
	"\n          });\n      } else if (scatter.scatterPlot.points.entryDelayEach === 0) {\n        svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "\".point\")\n          .data(settings.data)\n          .enter().append(\"circle\")\n          .attr(\"class\"",
		"type": "text",
		"value": " \"point\")\n          .attr(\"r\", settings.scatterPlot.points.radius)\n          .attr(\"fill\", settings.scatterPlot.points.color)\n          .attr(\"cx\", function (d) {\n            return plot.xScale(d.x);\n          })\n          .attr(\"cy\", function (d) {\n            return plot.yScale(d.y);\n          });\n      }\n      if (settings.toolTip.exist) {\n        let toolTip = d3.select('#svgContainer')\n          .append('div')\n          .attr('class', 'toolTip')\n          .style('border', settings.toolTip.border)\n          .style('padding', settings.toolTip.padding + 'px')\n          .style('position', 'absolute')\n          .style('display', 'none');\n\n        svg.selectAll(\".point\")\n          .on('mouseover', function (d, i) {\n            toolTip.text(settings.toolTip.text + d.x + \", \" + d.y)\n              .style(\"text-anchor\", \"middle\")\n              .attr(\"dy\", -10)\n              .transition().duration(0)\n              .style('top', (d3.event.pageY - 28) + 'px')\n              .style('left', (d3.event.pageX + 5) + 'px')\n              .style('display', 'block');\n          })\n          .on('mouseout', function (d, i) {\n            toolTip.transition()\n              .delay(500)\n              .style('display', 'none');\n          });\n      }\n    }\n\n    function createGridLines(svg, settings) {\n      if (settings.gridLines.exist) {\n        svg.selectAll(\"g.x-axis g.tick\")\n          .append(\"line\")\n          .classed(\"grid-line\", true)\n          .attr(\"x1\", 0)\n          .attr(\"y1\", 0)\n          .attr(\"x2\", 0)\n          .attr(\"y2\", -(settings.height - settings.margin.top - settings.margin.bottom)",
		"args": [
			"\".point\")\n          .data(settings.data)\n          .enter().append(\"circle\")\n          .attr(\"class\"",
			" \"point\")\n          .attr(\"r\"",
			" settings.scatterPlot.points.radius)\n          .attr(\"fill\"",
			" settings.scatterPlot.points.color)\n          .attr(\"cx\"",
			" function (d) {\n            return plot.xScale(d.x);\n          })\n          .attr(\"cy\"",
			" function (d) {\n            return plot.yScale(d.y);\n          });\n      }\n      if (settings.toolTip.exist) {\n        let toolTip = d3.select('#svgContainer')\n          .append('div')\n          .attr('class'",
			" 'toolTip')\n          .style('border'",
			" settings.toolTip.border)\n          .style('padding'",
			" settings.toolTip.padding + 'px')\n          .style('position'",
			" 'absolute')\n          .style('display'",
			" 'none');\n\n        svg.selectAll(\".point\")\n          .on('mouseover'",
			" function (d",
			" i) {\n            toolTip.text(settings.toolTip.text + d.x + \"",
			" \" + d.y)\n              .style(\"text-anchor\"",
			" \"middle\")\n              .attr(\"dy\"",
			" -10)\n              .transition().duration(0)\n              .style('top'",
			" (d3.event.pageY - 28) + 'px')\n              .style('left'",
			" (d3.event.pageX + 5) + 'px')\n              .style('display'",
			" 'block');\n          })\n          .on('mouseout'",
			" function (d",
			" i) {\n            toolTip.transition()\n              .delay(500)\n              .style('display'",
			" 'none');\n          });\n      }\n    }\n\n    function createGridLines(svg",
			" settings) {\n      if (settings.gridLines.exist) {\n        svg.selectAll(\"g.x-axis g.tick\")\n          .append(\"line\")\n          .classed(\"grid-line\"",
			" true)\n          .attr(\"x1\"",
			" 0)\n          .attr(\"y1\"",
			" 0)\n          .attr(\"x2\"",
			" 0)\n          .attr(\"y2\"",
			" -(settings.height - settings.margin.top - settings.margin.bottom)"
		]
	},
	"\n          ",
	{
		"methodObject": "svg.selectAll(\".point\")\n          .data(settings.data)\n          .enter().append(\"circle\")\n          .attr(\"class\")",
		"d3MethodName": ".attr",
		"name": "\"fill\"",
		"type": "text",
		"value": " \"none\")\n          .attr(\"stroke\", settings.gridLines.verticalColor)\n          .attr(\"stroke-width\", settings.gridLines.verticalWidth + \"px\");\n        svg.selectAll(\"g.y-axis g.tick\")\n          .append(\"line\")\n          .classed(\"grid-line\", true)\n          .attr(\"x1\", 0)\n          .attr(\"y1\", 0)\n          .attr(\"x2\", settings.width - settings.margin.left - settings.margin.right)\n          .attr(\"y2\", 0)\n          .attr(\"fill\", \"none\")\n          .attr(\"stroke\", settings.gridLines.horizontalColor)\n          .attr(\"stroke-width\", settings.gridLines.horizontalWidth + \"px\");\n      }\n    }\n\n    function regress(data) {\n      let yhat = [];\n      let x_mean = 0;\n      let y_mean = 0;\n      let term1 = 0;\n      let term2 = 0;\n      // calculate mean x and y\n      data.forEach(obj => {\n        obj.x = +obj.x;\n        obj.y = +obj.y;\n        x_mean += obj.x;\n        y_mean += obj.y;\n      });\n\n      x_mean /= data.length;\n      y_mean /= data.length;\n\n      // calculate coefficients\n      let xr = 0;\n      let yr = 0;\n      data.forEach(obj => {\n        xr = obj.x - x_mean;\n        yr = obj.y - y_mean;\n        term1 += xr * yr;\n        term2 += xr * xr;\n      });\n\n      // perform regression \n      let b1 = term1 / term2;\n      let b0 = y_mean - (b1 * x_mean);\n\n      // fit line using coeffs\n      data.forEach(obj => {\n        yhat.push(b0 + (obj.x * b1)",
		"args": [
			"\"fill\"",
			" \"none\")\n          .attr(\"stroke\"",
			" settings.gridLines.verticalColor)\n          .attr(\"stroke-width\"",
			" settings.gridLines.verticalWidth + \"px\");\n        svg.selectAll(\"g.y-axis g.tick\")\n          .append(\"line\")\n          .classed(\"grid-line\"",
			" true)\n          .attr(\"x1\"",
			" 0)\n          .attr(\"y1\"",
			" 0)\n          .attr(\"x2\"",
			" settings.width - settings.margin.left - settings.margin.right)\n          .attr(\"y2\"",
			" 0)\n          .attr(\"fill\"",
			" \"none\")\n          .attr(\"stroke\"",
			" settings.gridLines.horizontalColor)\n          .attr(\"stroke-width\"",
			" settings.gridLines.horizontalWidth + \"px\");\n      }\n    }\n\n    function regress(data) {\n      let yhat = [];\n      let x_mean = 0;\n      let y_mean = 0;\n      let term1 = 0;\n      let term2 = 0;\n      // calculate mean x and y\n      data.forEach(obj => {\n        obj.x = +obj.x;\n        obj.y = +obj.y;\n        x_mean += obj.x;\n        y_mean += obj.y;\n      });\n\n      x_mean /= data.length;\n      y_mean /= data.length;\n\n      // calculate coefficients\n      let xr = 0;\n      let yr = 0;\n      data.forEach(obj => {\n        xr = obj.x - x_mean;\n        yr = obj.y - y_mean;\n        term1 += xr * yr;\n        term2 += xr * xr;\n      });\n\n      // perform regression \n      let b1 = term1 / term2;\n      let b0 = y_mean - (b1 * x_mean);\n\n      // fit line using coeffs\n      data.forEach(obj => {\n        yhat.push(b0 + (obj.x * b1)"
		]
	},
	{
		"methodObject": "svg.selectAll(\".point\")\n          .data(settings.data)\n          .enter().append(\"circle\")\n          .attr(\"class\")",
		"methodEnd": true
	},
	"\n      });\n      return yhat;\n    }\n\n    function checkRegressionLine(svg, settings, plot) {\n      if (settings.regressionLine.exist) {\n        svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".select",
		"name": "\".regressionLine\").remove();\n        const yhat = regress(settings.data);\n        settings.data.forEach((obj",
		"type": "text",
		"value": " i) => {\n          obj.yhat = yhat[i];\n        });\n        let line = d3.line()\n          .x(function (d) {\n            return plot.xScale(d.x);\n          })\n          .y(function (d) {\n            return plot.yScale(d.yhat);\n          });\n\n        svg.append(\"path\")\n          .datum(settings.data)\n          .attr(\"class\", \"regressionLine\")\n          .attr(\"d\", line)\n          .attr(\"fill\", \"none\")\n          .attr(\"stroke\", settings.regressionLine.color)\n          .attr(\"stroke-width\", settings.regressionLine.width + \"px\");\n      }\n    }\n\n    var updatePlot =  function(svg, settings, plot) {\n      let width = parseInt(d3.select('svg').style(\"width\")",
		"args": [
			"\".regressionLine\").remove();\n        const yhat = regress(settings.data);\n        settings.data.forEach((obj",
			" i) => {\n          obj.yhat = yhat[i];\n        });\n        let line = d3.line()\n          .x(function (d) {\n            return plot.xScale(d.x);\n          })\n          .y(function (d) {\n            return plot.yScale(d.yhat);\n          });\n\n        svg.append(\"path\")\n          .datum(settings.data)\n          .attr(\"class\"",
			" \"regressionLine\")\n          .attr(\"d\"",
			" line)\n          .attr(\"fill\"",
			" \"none\")\n          .attr(\"stroke\"",
			" settings.regressionLine.color)\n          .attr(\"stroke-width\"",
			" settings.regressionLine.width + \"px\");\n      }\n    }\n\n    var updatePlot =  function(svg",
			" settings",
			" plot) {\n      let width = parseInt(d3.select('svg').style(\"width\")"
		]
	},
	{
		"methodObject": "svg.select(\".regressionLine\").remove();\n        const yhat = regress(settings.data);\n        settings.data.forEach((obj)",
		"methodEnd": true
	},
	"\n      let height = parseInt(d3",
	{
		"methodObject": "parseInt(d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "'svg').style(\"height\")",
		"args": [
			"'svg').style(\"height\")"
		]
	},
	{
		"methodObject": "parseInt(d3.select('svg').style(\"height\"))",
		"methodEnd": true
	},
	"\n      d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "'svg')//.attr(\"viewBox\"",
		"type": "text",
		"value": " \"0 0 \" + width + \" \" + height)\n        //.attr(\"perserveAspectRatio\", \"xMinYMid\")\n        .attr(\"width\", settings.width)\n        .attr(\"height\", settings.height)\n        .call(responsivefy, settings.responsiveResize);\n      d3.select('.graph')\n        .attr(\"transform\", \"translate(\" + settings.margin.left + \",\" + settings.margin.top + \")\");\n\n      plot.xScale.domain(d3.extent(settings.data, d => { return d.x })",
		"args": [
			"'svg')//.attr(\"viewBox\"",
			" \"0 0 \" + width + \" \" + height)\n        //.attr(\"perserveAspectRatio\"",
			" \"xMinYMid\")\n        .attr(\"width\"",
			" settings.width)\n        .attr(\"height\"",
			" settings.height)\n        .call(responsivefy",
			" settings.responsiveResize);\n      d3.select('.graph')\n        .attr(\"transform\"",
			" \"translate(\" + settings.margin.left + \"",
			"\" + settings.margin.top + \")\");\n\n      plot.xScale.domain(d3.extent(settings.data",
			" d => { return d.x })"
		]
	},
	"\n        .range([0, settings.width - settings.margin.left - settings.margin.right])\n        .nice();\n      plot.yScale.domain(d3.extent(settings.data, d => { return d.y }))\n        .range([settings.height - settings.margin.top - settings.margin.bottom, 0])\n        .nice();\n\n      var newData = svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "\"circle\").data(settings.data);\n\n      newData.enter().append(\"circle\").attr(\"class\"",
		"type": "text",
		"value": " \"point\");\n\n      if (settings.toolTip.exist) {\n        let toolTip = d3.select('#svgContainer')\n          .append('div')\n          .attr('class', 'toolTip')\n          .style('border', settings.toolTip.border)\n          .style('padding', settings.toolTip.padding + 'px')\n          .style('position', 'absolute')\n          .style('display', 'none');\n\n        svg.selectAll(\".point\")\n          .on('mouseover', function (d, i) {\n            toolTip.text(settings.toolTip.text + d.x + \", \" + d.y)\n              .style(\"text-anchor\", \"middle\")\n              .attr(\"dy\", -10)\n              .transition().duration(0)\n              .style('top', (d3.event.pageY - 28) + 'px')\n              .style('left', (d3.event.pageX + 5) + 'px')\n              .style('display', 'block');\n          })\n          .on('mouseout', function (d, i) {\n            toolTip.transition()\n              .delay(500)\n              .style('display', 'none');\n          });\n      }\n\n      // Update circles\n      svg.selectAll(\"circle\")\n        //.data(settings.data)  // Update with new data\n        .transition()  // Transition from old to new\n        .duration(1000)  // Length of animation\n        .on(\"start\", function () {  // Start animation\n          d3.select(this)  // 'this' means the current element\n            .attr(\"fill\", settings.scatterPlot.points.transitionAnimation.color)  // Change color\n            .attr(\"r\", settings.scatterPlot.points.transitionAnimation.radius);  // Change size\n        })\n        .delay(function (d, i) {\n          return i / settings.data.length * 500;  // Dynamic delay (i.e. each item delays a little longer)\n        })\n        .ease(d3.easeLinear)  // Transition easing - default 'variable' (i.e. has acceleration), also: 'circle', 'elastic', 'bounce', 'linear'\n        .attr(\"cx\", function (d) {\n          return plot.xScale(d.x);  // Circle's X\n        })\n        .attr(\"cy\", function (d) {\n          return plot.yScale(d.y);  // Circle's Y\n        })\n        .on(\"end\", function () {  // End animation\n          d3.select(this)  // 'this' means the current element\n            .transition()\n            .duration(500)\n            .attr(\"fill\", settings.scatterPlot.points.color)  // Change color\n            .attr(\"r\", settings.scatterPlot.points.radius)  // Change radius\n        });\n\n      newData.exit().remove();\n\n      // Update X Axis\n      if (settings.axes.xAxis.exist) {\n        if (settings.data[0].xType === 'date') {\n          plot.xAxis\n            .transition()\n            .duration(1000)\n            .attr(\"transform\", \"translate(0,\" + (settings.height - settings.margin.top - settings.margin.bottom) + \")\")\n            .call(d3.axisBottom(plot.xScale)\n              .tickFormat(d3.timeFormat(\"%B %d, %Y\")",
		"args": [
			"\"circle\").data(settings.data);\n\n      newData.enter().append(\"circle\").attr(\"class\"",
			" \"point\");\n\n      if (settings.toolTip.exist) {\n        let toolTip = d3.select('#svgContainer')\n          .append('div')\n          .attr('class'",
			" 'toolTip')\n          .style('border'",
			" settings.toolTip.border)\n          .style('padding'",
			" settings.toolTip.padding + 'px')\n          .style('position'",
			" 'absolute')\n          .style('display'",
			" 'none');\n\n        svg.selectAll(\".point\")\n          .on('mouseover'",
			" function (d",
			" i) {\n            toolTip.text(settings.toolTip.text + d.x + \"",
			" \" + d.y)\n              .style(\"text-anchor\"",
			" \"middle\")\n              .attr(\"dy\"",
			" -10)\n              .transition().duration(0)\n              .style('top'",
			" (d3.event.pageY - 28) + 'px')\n              .style('left'",
			" (d3.event.pageX + 5) + 'px')\n              .style('display'",
			" 'block');\n          })\n          .on('mouseout'",
			" function (d",
			" i) {\n            toolTip.transition()\n              .delay(500)\n              .style('display'",
			" 'none');\n          });\n      }\n\n      // Update circles\n      svg.selectAll(\"circle\")\n        //.data(settings.data)  // Update with new data\n        .transition()  // Transition from old to new\n        .duration(1000)  // Length of animation\n        .on(\"start\"",
			" function () {  // Start animation\n          d3.select(this)  // 'this' means the current element\n            .attr(\"fill\"",
			" settings.scatterPlot.points.transitionAnimation.color)  // Change color\n            .attr(\"r\"",
			" settings.scatterPlot.points.transitionAnimation.radius);  // Change size\n        })\n        .delay(function (d",
			" i) {\n          return i / settings.data.length * 500;  // Dynamic delay (i.e. each item delays a little longer)\n        })\n        .ease(d3.easeLinear)  // Transition easing - default 'variable' (i.e. has acceleration)",
			" also: 'circle'",
			" 'elastic'",
			" 'bounce'",
			" 'linear'\n        .attr(\"cx\"",
			" function (d) {\n          return plot.xScale(d.x);  // Circle's X\n        })\n        .attr(\"cy\"",
			" function (d) {\n          return plot.yScale(d.y);  // Circle's Y\n        })\n        .on(\"end\"",
			" function () {  // End animation\n          d3.select(this)  // 'this' means the current element\n            .transition()\n            .duration(500)\n            .attr(\"fill\"",
			" settings.scatterPlot.points.color)  // Change color\n            .attr(\"r\"",
			" settings.scatterPlot.points.radius)  // Change radius\n        });\n\n      newData.exit().remove();\n\n      // Update X Axis\n      if (settings.axes.xAxis.exist) {\n        if (settings.data[0].xType === 'date') {\n          plot.xAxis\n            .transition()\n            .duration(1000)\n            .attr(\"transform\"",
			" \"translate(0",
			"\" + (settings.height - settings.margin.top - settings.margin.bottom) + \")\")\n            .call(d3.axisBottom(plot.xScale)\n              .tickFormat(d3.timeFormat(\"%B %d",
			" %Y\")"
		]
	},
	"\n              .ticks(settings.axes.xAxis.ticks))\n            ",
	{
		"methodObject": "",
		"d3MethodName": ".select",
		"name": "\".xlabel\")\n            .attr(\"x\"",
		"type": "text",
		"value": " (settings.width - settings.margin.left - settings.margin.right)",
		"args": [
			"\".xlabel\")\n            .attr(\"x\"",
			" (settings.width - settings.margin.left - settings.margin.right)"
		]
	},
	"\n            ",
	{
		"methodObject": ".select(\".xlabel\")\n            .attr(\"x\")",
		"d3MethodName": ".style",
		"name": "\"fill\"",
		"type": "text",
		"value": " settings.axes.xAxis.nameColor)\n            .text(settings.axes.xAxis.name);\n          plot.xAxis\n            .selectAll(\".x-axis path\")\n            .style(\"stroke\", settings.axes.xAxis.axisColor);\n          plot.xAxis\n            .selectAll(\".x-axis line\")\n            .style(\"stroke\", settings.axes.xAxis.axisColor);\n\n        } else {\n          plot.xAxis\n            .transition()\n            .duration(1000)\n            .attr(\"transform\", \"translate(0,\" + (settings.height - settings.margin.top - settings.margin.bottom) + \")\")\n            .call(d3.axisBottom(plot.xScale)\n              .ticks(settings.axes.xAxis.ticks)",
		"args": [
			"\"fill\"",
			" settings.axes.xAxis.nameColor)\n            .text(settings.axes.xAxis.name);\n          plot.xAxis\n            .selectAll(\".x-axis path\")\n            .style(\"stroke\"",
			" settings.axes.xAxis.axisColor);\n          plot.xAxis\n            .selectAll(\".x-axis line\")\n            .style(\"stroke\"",
			" settings.axes.xAxis.axisColor);\n\n        } else {\n          plot.xAxis\n            .transition()\n            .duration(1000)\n            .attr(\"transform\"",
			" \"translate(0",
			"\" + (settings.height - settings.margin.top - settings.margin.bottom) + \")\")\n            .call(d3.axisBottom(plot.xScale)\n              .ticks(settings.axes.xAxis.ticks)"
		]
	},
	"\n            ",
	{
		"methodObject": ".select(\".xlabel\")\n            .attr(\"x\")",
		"d3MethodName": ".select",
		"name": "\".xlabel\")\n            .attr(\"x\"",
		"type": "text",
		"value": " (settings.width - settings.margin.left - settings.margin.right)",
		"args": [
			"\".xlabel\")\n            .attr(\"x\"",
			" (settings.width - settings.margin.left - settings.margin.right)"
		]
	},
	"\n            ",
	{
		"methodObject": ".select(\".xlabel\")\n            .attr(\"x\").select(\".xlabel\")\n            .attr(\"x\")",
		"d3MethodName": ".style",
		"name": "\"fill\"",
		"type": "text",
		"value": " settings.axes.xAxis.nameColor)\n            .text(settings.axes.xAxis.name);\n          plot.xAxis\n            .selectAll(\".x-axis path\")\n            .style(\"stroke\", settings.axes.xAxis.axisColor);\n          plot.xAxis\n            .selectAll(\".x-axis line\")\n            .style(\"stroke\", settings.axes.xAxis.axisColor);\n          // plot.xAxis\n          //   .selectAll('.tick text')\n          //   .style(\"fill\", settings.axes.xAxis.nameColor);\n        }\n      }\n\n      // Update Y Axis\n\n      if (settings.axes.yAxis.exist) {\n        if (settings.data[0].yType === 'date') {\n          plot.yAxis\n            .transition()\n            .duration(1000)\n            .call(d3.axisLeft(plot.yScale)\n              .tickFormat(d3.timeFormat(\"%B %d, %Y\")",
		"args": [
			"\"fill\"",
			" settings.axes.xAxis.nameColor)\n            .text(settings.axes.xAxis.name);\n          plot.xAxis\n            .selectAll(\".x-axis path\")\n            .style(\"stroke\"",
			" settings.axes.xAxis.axisColor);\n          plot.xAxis\n            .selectAll(\".x-axis line\")\n            .style(\"stroke\"",
			" settings.axes.xAxis.axisColor);\n          // plot.xAxis\n          //   .selectAll('.tick text')\n          //   .style(\"fill\"",
			" settings.axes.xAxis.nameColor);\n        }\n      }\n\n      // Update Y Axis\n\n      if (settings.axes.yAxis.exist) {\n        if (settings.data[0].yType === 'date') {\n          plot.yAxis\n            .transition()\n            .duration(1000)\n            .call(d3.axisLeft(plot.yScale)\n              .tickFormat(d3.timeFormat(\"%B %d",
			" %Y\")"
		]
	},
	"\n              .ticks(settings.axes.yAxis.ticks))\n            ",
	{
		"methodObject": "",
		"d3MethodName": ".select",
		"name": "\".ylabel\")\n            .style(\"fill\"",
		"type": "text",
		"value": " settings.axes.yAxis.nameColor)\n            .text(settings.axes.yAxis.name);\n          plot.yAxis\n            .selectAll(\".y-axis path\")\n            .style(\"stroke\", settings.axes.yAxis.axisColor);\n          plot.yAxis\n            .selectAll(\".y-axis line\")\n            .style(\"stroke\", settings.axes.yAxis.axisColor);\n\n        } else {\n          plot.yAxis\n            .transition()\n            .duration(1000)\n            .call(d3.axisLeft(plot.yScale)\n              .ticks(settings.axes.yAxis.ticks)",
		"args": [
			"\".ylabel\")\n            .style(\"fill\"",
			" settings.axes.yAxis.nameColor)\n            .text(settings.axes.yAxis.name);\n          plot.yAxis\n            .selectAll(\".y-axis path\")\n            .style(\"stroke\"",
			" settings.axes.yAxis.axisColor);\n          plot.yAxis\n            .selectAll(\".y-axis line\")\n            .style(\"stroke\"",
			" settings.axes.yAxis.axisColor);\n\n        } else {\n          plot.yAxis\n            .transition()\n            .duration(1000)\n            .call(d3.axisLeft(plot.yScale)\n              .ticks(settings.axes.yAxis.ticks)"
		]
	},
	"\n            ",
	{
		"methodObject": ".select(\".ylabel\")\n            .style(\"fill\")",
		"d3MethodName": ".select",
		"name": "\".ylabel\")\n            .style(\"fill\"",
		"type": "text",
		"value": " settings.axes.yAxis.nameColor)\n            .text(settings.axes.yAxis.name);\n          plot.yAxis\n            .selectAll(\".y-axis path\")\n            .style(\"stroke\", settings.axes.yAxis.axisColor);\n          plot.yAxis\n            .selectAll(\".y-axis line\")\n            .style(\"stroke\", settings.axes.yAxis.axisColor);\n        }\n      }\n    }\n\n    if (!scatter.data) {\n      scatter.data = create_data(null, null);\n    }\n\n    if (isNaN(+scatter.data[0].x) || isNaN(+scatter.data[0].y)",
		"args": [
			"\".ylabel\")\n            .style(\"fill\"",
			" settings.axes.yAxis.nameColor)\n            .text(settings.axes.yAxis.name);\n          plot.yAxis\n            .selectAll(\".y-axis path\")\n            .style(\"stroke\"",
			" settings.axes.yAxis.axisColor);\n          plot.yAxis\n            .selectAll(\".y-axis line\")\n            .style(\"stroke\"",
			" settings.axes.yAxis.axisColor);\n        }\n      }\n    }\n\n    if (!scatter.data) {\n      scatter.data = create_data(null",
			" null);\n    }\n\n    if (isNaN(+scatter.data[0].x) || isNaN(+scatter.data[0].y)"
		]
	},
	" {\n      let xArray = [];\n      let yArray = [];\n\n      scatter.data.forEach(obj => {\n        xArray.push(obj.x);\n        yArray.push(obj.y);\n      });\n\n      scatter.data = create_data(xArray, yArray);\n    }\n\n    var svg = createSvg(scatter);\n    var plot = createScatterPlot(svg, scatter);\n    createAxis(svg, scatter, plot);\n    createGridLines(svg, scatter);\n    checkRegressionLine(svg, scatter, plot);\n    plotPoints(svg, scatter, plot);\n\n    document.addEventListener(\"DOMContentLoaded\", function (event) {\n      const settingsArea = document.createElement(\"textarea\");\n      settingsArea.setAttribute(\"id\", \"settingsArea\");\n      settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n      settingsArea.setAttribute(\"style\", \"width:250px;height:250px;\");\n\n      const updateButton = document.createElement(\"button\");\n      updateButton.innerHTML = \"New data!\";\n      document.body.appendChild(updateButton);\n      updateButton.addEventListener(\"click\", (e) => {\n        scatter.data = create_data(null, null);\n        if (scatter.regressionLine.exist) {\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "\".regressionLine\").remove();\n        }\n        if (scatter.gridLines.exist) {\n          svg.selectAll(\".x-axis\").remove();\n          svg.selectAll(\".y-axis\").remove();\n          svg.selectAll(\".grid-line\").remove();\n          createAxis(svg",
		"type": "text",
		"value": " scatter, plot);\n        }\n        updatePlot(svg, scatter, plot);\n        createGridLines(svg, scatter);\n        checkRegressionLine(svg, scatter, plot);\n        settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n      });\n\n      document.body.appendChild(document.createElement(\"br\")",
		"args": [
			"\".regressionLine\").remove();\n        }\n        if (scatter.gridLines.exist) {\n          svg.selectAll(\".x-axis\").remove();\n          svg.selectAll(\".y-axis\").remove();\n          svg.selectAll(\".grid-line\").remove();\n          createAxis(svg",
			" scatter",
			" plot);\n        }\n        updatePlot(svg",
			" scatter",
			" plot);\n        createGridLines(svg",
			" scatter);\n        checkRegressionLine(svg",
			" scatter",
			" plot);\n        settingsArea.innerHTML = JSON.stringify(scatter",
			" null",
			" 2);\n      });\n\n      document.body.appendChild(document.createElement(\"br\")"
		]
	},
	{
		"methodObject": "svg.selectAll(\".regressionLine\").remove();\n        }\n        if (scatter.gridLines.exist) {\n          svg.selectAll(\".x-axis\").remove();\n          svg.selectAll(\".y-axis\").remove();\n          svg.selectAll(\".grid-line\").remove();\n          createAxis(svg)",
		"methodEnd": true
	},
	"\n\n      const importCsvTsvButton = document.createElement(\"input\");\n      importCsvTsvButton.setAttribute(\"id\", \"importCsvTsv\");\n      importCsvTsvButton.setAttribute(\"type\", \"file\");\n      importCsvTsvButton.setAttribute(\"accept\", \".csv,.tsv\");\n      const importCsvTsvLabel = document.createElement(\"label\");\n      importCsvTsvLabel.innerHTML = \"Import data (.csv, .tsv):\" + \"\t\";\n      document.body.appendChild(importCsvTsvLabel);\n      importCsvTsvLabel.appendChild(importCsvTsvButton);\n      importCsvTsvLabel.appendChild(document.createElement(\"br\"));\n      importCsvTsvButton.addEventListener(\"change\", (e) => {\n        const input = importCsvTsvButton;\n        const reader = new FileReader();\n        reader.onload = function () {\n          let separator = '';\n          if (input.files[0].type === \"text/csv\") {\n            separator = ',';\n            \n          }\n          if (input.files[0].type === \"text/tab-separated-values\") {\n            separator = ' ';\n            \n          }\n          let headers = scatter.data[0].split(separator);\n          scatter.axes.xAxis.name = headers[0];\n          scatter.axes.yAxis.name = headers[1];\n          let xArray = [];\n          let yArray = [];\n          for (let i = 1; i < scatter.data.length; i += 1) {\n            let values = scatter.data[i].split(separator);\n            xArray.push(values[0]);\n            yArray.push(values[1]);\n          }\n          scatter.data = create_data(xArray, yArray);\n          settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n          // document.body.removeChild(document.getElementById(\"svgContainer\"));\n          // svg = createSvg(scatter);\n          // plot = createScatterPlot(svg, scatter);\n          // createAxis(svg, scatter, plot);\n          // createGridLines(svg, scatter);\n          // checkRegressionLine(svg, scatter, plot);\n          // plotPoints(svg, scatter, plot);\n          if (scatter.regressionLine.exist) {\n            svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg",
		"type": "text",
		"value": " scatter, plot);\n          }\n          updatePlot(svg, scatter, plot);\n          createGridLines(svg, scatter);\n          checkRegressionLine(svg, scatter, plot);\n        };\n        reader.readAsText(input.files[0]);\n      });\n\n      const importJsonForm = document.createElement(\"form\");\n      importJsonForm.setAttribute(\"id\", \"importJsonForm\");\n      const xJsonKeyLabel = document.createElement(\"label\");\n      xJsonKeyLabel.innerHTML = \"JSON x-value key\" + \"\t\";\n      const xJsonKeyInput = document.createElement(\"input\");\n      xJsonKeyInput.setAttribute(\"id\", \"xJsonKeyInput\");\n      xJsonKeyInput.setAttribute(\"type\", \"text\");\n      xJsonKeyInput.setAttribute(\"value\", \"x\");\n      const yJsonKeyLabel = document.createElement(\"label\");\n      yJsonKeyLabel.innerHTML = \"JSON y-value key\" + \"\t\";\n      const yJsonKeyInput = document.createElement(\"input\");\n      yJsonKeyInput.setAttribute(\"id\", \"yJsonKeyInput\");\n      yJsonKeyInput.setAttribute(\"type\", \"text\");\n      yJsonKeyInput.setAttribute(\"value\", \"y\");\n      const importJsonSubmit = document.createElement(\"input\");\n      importJsonSubmit.setAttribute(\"type\", \"submit\");\n      importJsonSubmit.setAttribute(\"value\", \"Submit JSON keys\");\n      const importJsonButton = document.createElement(\"input\");\n      importJsonButton.setAttribute(\"id\", \"importJson\");\n      importJsonButton.setAttribute(\"type\", \"file\");\n      importJsonButton.setAttribute(\"accept\", \".json\");\n      const importJsonLabel = document.createElement(\"label\");\n      importJsonLabel.innerHTML = \"Import data (array of objects .json):\" + \"\t\";\n      document.body.appendChild(importJsonForm);\n      importJsonForm.appendChild(importJsonLabel);\n      importJsonLabel.appendChild(importJsonButton);\n      importJsonLabel.appendChild(document.createElement(\"br\")",
		"args": [
			"\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg",
			" scatter",
			" plot);\n          }\n          updatePlot(svg",
			" scatter",
			" plot);\n          createGridLines(svg",
			" scatter);\n          checkRegressionLine(svg",
			" scatter",
			" plot);\n        };\n        reader.readAsText(input.files[0]);\n      });\n\n      const importJsonForm = document.createElement(\"form\");\n      importJsonForm.setAttribute(\"id\"",
			" \"importJsonForm\");\n      const xJsonKeyLabel = document.createElement(\"label\");\n      xJsonKeyLabel.innerHTML = \"JSON x-value key\" + \"\t\";\n      const xJsonKeyInput = document.createElement(\"input\");\n      xJsonKeyInput.setAttribute(\"id\"",
			" \"xJsonKeyInput\");\n      xJsonKeyInput.setAttribute(\"type\"",
			" \"text\");\n      xJsonKeyInput.setAttribute(\"value\"",
			" \"x\");\n      const yJsonKeyLabel = document.createElement(\"label\");\n      yJsonKeyLabel.innerHTML = \"JSON y-value key\" + \"\t\";\n      const yJsonKeyInput = document.createElement(\"input\");\n      yJsonKeyInput.setAttribute(\"id\"",
			" \"yJsonKeyInput\");\n      yJsonKeyInput.setAttribute(\"type\"",
			" \"text\");\n      yJsonKeyInput.setAttribute(\"value\"",
			" \"y\");\n      const importJsonSubmit = document.createElement(\"input\");\n      importJsonSubmit.setAttribute(\"type\"",
			" \"submit\");\n      importJsonSubmit.setAttribute(\"value\"",
			" \"Submit JSON keys\");\n      const importJsonButton = document.createElement(\"input\");\n      importJsonButton.setAttribute(\"id\"",
			" \"importJson\");\n      importJsonButton.setAttribute(\"type\"",
			" \"file\");\n      importJsonButton.setAttribute(\"accept\"",
			" \".json\");\n      const importJsonLabel = document.createElement(\"label\");\n      importJsonLabel.innerHTML = \"Import data (array of objects .json):\" + \"\t\";\n      document.body.appendChild(importJsonForm);\n      importJsonForm.appendChild(importJsonLabel);\n      importJsonLabel.appendChild(importJsonButton);\n      importJsonLabel.appendChild(document.createElement(\"br\")"
		]
	},
	{
		"methodObject": "svg.selectAll(\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg)",
		"methodEnd": true
	},
	"\n      importJsonForm.appendChild(xJsonKeyLabel);\n      xJsonKeyLabel.appendChild(xJsonKeyInput);\n      importJsonForm.appendChild(yJsonKeyLabel);\n      yJsonKeyLabel.appendChild(yJsonKeyInput);\n      importJsonForm.appendChild(importJsonSubmit);\n\n      importJsonForm.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        const input = importJsonButton;\n        const reader = new FileReader();\n        reader.onload = function () {\n          scatter.data = JSON.parse(reader.result);\n\n          let xKey = xJsonKeyInput.value.trim();\n          let yKey = yJsonKeyInput.value.trim();\n\n          scatter.axes.xAxis.name = xKey;\n          scatter.axes.yAxis.name = yKey;\n\n          let xArray = [];\n          let yArray = [];\n          let skippedCount = 0;\n\n          scatter.data.forEach(obj => {\n            if (obj[xKey] && obj[yKey]) {\n              xArray.push(obj[xKey]);\n              yArray.push(obj[yKey]);\n            } else {\n              skippedCount += 1;\n              console.log(\"Skipped \" + skippedCount + \" objects that don't have both x and y keys\");\n            }\n          });\n\n          scatter.data = create_data(xArray, yArray);\n          settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n          // document.body.removeChild(document.getElementById(\"svgContainer\"));\n          // svg = createSvg(scatter);\n          // plot = createScatterPlot(svg, scatter);\n          // createAxis(svg, scatter, plot);\n          // createGridLines(svg, scatter);\n          // checkRegressionLine(svg, scatter, plot);\n          // plotPoints(svg, scatter, plot);\n          if (scatter.regressionLine.exist) {\n            svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg",
		"type": "text",
		"value": " scatter, plot);\n          }\n          updatePlot(svg, scatter, plot);\n          createGridLines(svg, scatter);\n          checkRegressionLine(svg, scatter, plot);\n        };\n        if (input.files.length === 0) return alert('Choose a file!');\n        reader.readAsText(input.files[0]);\n      });\n\n      const importSettingsButton = document.createElement(\"input\");\n      importSettingsButton.setAttribute(\"id\", \"importSettings\");\n      importSettingsButton.setAttribute(\"type\", \"file\");\n      importSettingsButton.setAttribute(\"accept\", \".scatterplotsettings\");\n      const importSettingsLabel = document.createElement(\"label\");\n      importSettingsLabel.innerHTML = \"Import settings:\" + \"\t\";\n      document.body.appendChild(importSettingsLabel);\n      importSettingsLabel.appendChild(importSettingsButton);\n      importSettingsLabel.appendChild(document.createElement(\"br\")",
		"args": [
			"\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg",
			" scatter",
			" plot);\n          }\n          updatePlot(svg",
			" scatter",
			" plot);\n          createGridLines(svg",
			" scatter);\n          checkRegressionLine(svg",
			" scatter",
			" plot);\n        };\n        if (input.files.length === 0) return alert('Choose a file!');\n        reader.readAsText(input.files[0]);\n      });\n\n      const importSettingsButton = document.createElement(\"input\");\n      importSettingsButton.setAttribute(\"id\"",
			" \"importSettings\");\n      importSettingsButton.setAttribute(\"type\"",
			" \"file\");\n      importSettingsButton.setAttribute(\"accept\"",
			" \".scatterplotsettings\");\n      const importSettingsLabel = document.createElement(\"label\");\n      importSettingsLabel.innerHTML = \"Import settings:\" + \"\t\";\n      document.body.appendChild(importSettingsLabel);\n      importSettingsLabel.appendChild(importSettingsButton);\n      importSettingsLabel.appendChild(document.createElement(\"br\")"
		]
	},
	{
		"methodObject": "svg.selectAll(\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg)",
		"methodEnd": true
	},
	"\n      importSettingsButton.addEventListener(\"change\", (e) => {\n        const input = importSettingsButton;\n        const reader = new FileReader();\n        reader.onload = function () {\n          scatter = JSON.parse(reader.result);\n\n          if (isNaN(+scatter.data[0].x) || isNaN(+scatter.data[0].y)) {\n            let xArray = [];\n            let yArray = [];\n\n            scatter.data.forEach(obj => {\n              xArray.push(obj.x);\n              yArray.push(obj.y);\n            });\n\n            scatter.data = create_data(xArray, yArray);\n          }\n\n          settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n          // document.body.removeChild(document.getElementById(\"svgContainer\"));\n          // svg = createSvg(scatter);\n          // plot = createScatterPlot(svg, scatter);\n          // createAxis(svg, scatter, plot);\n          // createGridLines(svg, scatter);\n          // checkRegressionLine(svg, scatter, plot);\n          // plotPoints(svg, scatter, plot);\n          if (scatter.regressionLine.exist) {\n            svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg",
		"type": "text",
		"value": " scatter, plot);\n          }\n          updatePlot(svg, scatter, plot);\n          createGridLines(svg, scatter);\n          checkRegressionLine(svg, scatter, plot);\n        };\n        reader.readAsText(input.files[0]);\n      });\n\n      const settingsForm = document.createElement(\"form\");\n      settingsForm.setAttribute(\"id\", \"settingsForm\");\n      const settingsLabel = document.createElement(\"label\");\n      settingsLabel.innerHTML = \"Plot settings\" + \"\t\";\n      const settingsButton = document.createElement(\"input\");\n      settingsButton.setAttribute(\"type\", \"submit\");\n      settingsButton.setAttribute(\"value\", \"Submit settings\");\n      // const settingsArea = document.createElement(\"textarea\");\n      // settingsArea.setAttribute(\"id\", \"settingsArea\");\n      // settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n      // settingsArea.setAttribute(\"style\", \"width:250px;height:250px;\");\n      document.body.appendChild(settingsForm);\n      settingsForm.appendChild(settingsLabel);\n      settingsForm.appendChild(settingsButton);\n      settingsLabel.appendChild(document.createElement(\"br\")",
		"args": [
			"\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg",
			" scatter",
			" plot);\n          }\n          updatePlot(svg",
			" scatter",
			" plot);\n          createGridLines(svg",
			" scatter);\n          checkRegressionLine(svg",
			" scatter",
			" plot);\n        };\n        reader.readAsText(input.files[0]);\n      });\n\n      const settingsForm = document.createElement(\"form\");\n      settingsForm.setAttribute(\"id\"",
			" \"settingsForm\");\n      const settingsLabel = document.createElement(\"label\");\n      settingsLabel.innerHTML = \"Plot settings\" + \"\t\";\n      const settingsButton = document.createElement(\"input\");\n      settingsButton.setAttribute(\"type\"",
			" \"submit\");\n      settingsButton.setAttribute(\"value\"",
			" \"Submit settings\");\n      // const settingsArea = document.createElement(\"textarea\");\n      // settingsArea.setAttribute(\"id\"",
			" \"settingsArea\");\n      // settingsArea.innerHTML = JSON.stringify(scatter",
			" null",
			" 2);\n      // settingsArea.setAttribute(\"style\"",
			" \"width:250px;height:250px;\");\n      document.body.appendChild(settingsForm);\n      settingsForm.appendChild(settingsLabel);\n      settingsForm.appendChild(settingsButton);\n      settingsLabel.appendChild(document.createElement(\"br\")"
		]
	},
	{
		"methodObject": "svg.selectAll(\".regressionLine\").remove();\n          }\n          if (scatter.gridLines.exist) {\n            svg.selectAll(\".x-axis\").remove();\n            svg.selectAll(\".y-axis\").remove();\n            svg.selectAll(\".grid-line\").remove();\n            createAxis(svg)",
		"methodEnd": true
	},
	"\n      settingsLabel.appendChild(settingsArea);\n\n      settingsForm.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        scatter = JSON.parse(settingsArea.value);\n\n        if (isNaN(+scatter.data[0].x) || isNaN(+scatter.data[0].y)) {\n          let xArray = [];\n          let yArray = [];\n\n          scatter.data.forEach(obj => {\n            xArray.push(obj.x);\n            yArray.push(obj.y);\n          });\n\n          scatter.data = create_data(xArray, yArray);\n        }\n\n        // document.body.removeChild(document.getElementById(\"svgContainer\"));\n        // svg = createSvg(scatter);\n        // plot = createScatterPlot(svg, scatter);\n        // createAxis(svg, scatter, plot);\n        // createGridLines(svg, scatter);\n        // checkRegressionLine(svg, scatter, plot);\n        // plotPoints(svg, scatter, plot);\n        if (scatter.regressionLine.exist) {\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "\".regressionLine\").remove();\n        }\n        if (scatter.gridLines.exist) {\n          svg.selectAll(\".x-axis\").remove();\n          svg.selectAll(\".y-axis\").remove();\n          svg.selectAll(\".grid-line\").remove();\n          createAxis(svg",
		"type": "text",
		"value": " scatter, plot);\n        }\n        updatePlot(svg, scatter, plot);\n        createGridLines(svg, scatter);\n        checkRegressionLine(svg, scatter, plot);\n      }",
		"args": [
			"\".regressionLine\").remove();\n        }\n        if (scatter.gridLines.exist) {\n          svg.selectAll(\".x-axis\").remove();\n          svg.selectAll(\".y-axis\").remove();\n          svg.selectAll(\".grid-line\").remove();\n          createAxis(svg",
			" scatter",
			" plot);\n        }\n        updatePlot(svg",
			" scatter",
			" plot);\n        createGridLines(svg",
			" scatter);\n        checkRegressionLine(svg",
			" scatter",
			" plot);\n      }"
		]
	},
	{
		"methodObject": "svg.selectAll(\".regressionLine\").remove();\n        }\n        if (scatter.gridLines.exist) {\n          svg.selectAll(\".x-axis\").remove();\n          svg.selectAll(\".y-axis\").remove();\n          svg.selectAll(\".grid-line\").remove();\n          createAxis(svg)",
		"methodEnd": true
	},
	"\n\n      const dataForm = document.createElement(\"form\");\n      dataForm.setAttribute(\"id\", \"dataForm\");\n      const xDataLabel = document.createElement(\"label\");\n      xDataLabel.innerHTML = \"x-values\" + \"\t\";\n      const xDataInput = document.createElement(\"input\");\n      xDataInput.setAttribute(\"id\", \"xDataInput\");\n      xDataInput.setAttribute(\"type\", \"text\");\n      xDataInput.setAttribute(\"value\", \"1,50,100\");\n      const yDataLabel = document.createElement(\"label\");\n      yDataLabel.innerHTML = \"y-values\" + \"\t\";\n      const yDataInput = document.createElement(\"input\");\n      yDataInput.setAttribute(\"id\", \"yDataInput\");\n      yDataInput.setAttribute(\"type\", \"text\");\n      yDataInput.setAttribute(\"value\", \"1,50,100\");\n      const dataButton = document.createElement(\"input\");\n      dataButton.setAttribute(\"type\", \"submit\");\n      dataButton.setAttribute(\"value\", \"Submit data\");\n      document.body.appendChild(dataForm);\n      dataForm.appendChild(xDataLabel);\n      xDataLabel.appendChild(xDataInput);\n      dataForm.appendChild(yDataLabel);\n      yDataLabel.appendChild(yDataInput);\n      dataForm.appendChild(dataButton);\n\n      dataForm.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        scatter.data = create_data(xDataInput.value.replace(/s/g, '').split(','), yDataInput.value.replace(/s/g, '').split(','));\n        settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n        // document.body.removeChild(document.getElementById(\"svgContainer\"));\n        // svg = createSvg(scatter);\n        // plot = createScatterPlot(svg, scatter);\n        // createAxis(svg, scatter, plot);\n        // createGridLines(svg, scatter);\n        // checkRegressionLine(svg, scatter, plot);\n        // plotPoints(svg, scatter, plot);\n        if (scatter.regressionLine.exist) {\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "",
		"type": "text",
		"value": "\".regressionLine\"",
		"args": [
			"\".regressionLine\""
		]
	},
	{
		"methodObject": "svg.selectAll(\".regressionLine\")",
		"d3MethodName": ".remove",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "svg.selectAll(\".regressionLine\").remove()",
		"methodEnd": true
	},
	"\n        }\n        if (scatter.gridLines.exist) {\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "",
		"type": "text",
		"value": "\".x-axis\"",
		"args": [
			"\".x-axis\""
		]
	},
	{
		"methodObject": "svg.selectAll(\".x-axis\")",
		"d3MethodName": ".remove",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "svg.selectAll(\".x-axis\").remove()",
		"methodEnd": true
	},
	"\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "",
		"type": "text",
		"value": "\".y-axis\"",
		"args": [
			"\".y-axis\""
		]
	},
	{
		"methodObject": "svg.selectAll(\".y-axis\")",
		"d3MethodName": ".remove",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "svg.selectAll(\".y-axis\").remove()",
		"methodEnd": true
	},
	"\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "",
		"type": "text",
		"value": "\".grid-line\"",
		"args": [
			"\".grid-line\""
		]
	},
	{
		"methodObject": "svg.selectAll(\".grid-line\")",
		"d3MethodName": ".remove",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "svg.selectAll(\".grid-line\").remove()",
		"methodEnd": true
	},
	"\n          createAxis(svg, scatter, plot);\n        }\n        updatePlot(svg, scatter, plot);\n        createGridLines(svg, scatter);\n        checkRegressionLine(svg, scatter, plot);\n      });\n\n\n      const regressButton = document.createElement(\"button\");\n      regressButton.innerHTML = \"Regression Line\";\n      document.body.appendChild(regressButton);\n      regressButton.addEventListener(\"click\", (e) => {\n        if (scatter.regressionLine.exist) {\n          scatter.regressionLine.exist = false;\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "\".regressionLine\"",
		"args": [
			"\".regressionLine\""
		]
	},
	{
		"methodObject": "svg.select(\".regressionLine\")",
		"d3MethodName": ".remove",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "svg.select(\".regressionLine\").remove()",
		"methodEnd": true
	},
	"\n        } else {\n          scatter.regressionLine.exist = true;\n        }\n        checkRegressionLine(svg, scatter, plot);\n        settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n      });\n\n      let xAxisBool = scatter.axes.xAxis.exist;\n      let yAxisBool = scatter.axes.yAxis.exist;\n      const gridButton = document.createElement(\"button\");\n      gridButton.innerHTML = \"Grid Lines\";\n      document.body.appendChild(gridButton);\n      gridButton.addEventListener(\"click\", (e) => {\n        if (scatter.gridLines.exist) {\n          scatter.gridLines.exist = false;\n          scatter.axes.xAxis.exist = xAxisBool;\n          scatter.axes.yAxis.exist = yAxisBool;\n          if (!xAxisBool) svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "\".x-axis\"",
		"args": [
			"\".x-axis\""
		]
	},
	{
		"methodObject": "svg.select(\".x-axis\")",
		"d3MethodName": ".remove",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "svg.select(\".x-axis\").remove()",
		"methodEnd": true
	},
	"\n          if (!yAxisBool) svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "\".y-axis\"",
		"args": [
			"\".y-axis\""
		]
	},
	{
		"methodObject": "svg.select(\".y-axis\")",
		"d3MethodName": ".remove",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "svg.select(\".y-axis\").remove()",
		"methodEnd": true
	},
	"\n        } else {\n          scatter.gridLines.exist = true;\n          scatter.axes.xAxis.exist = true;\n          scatter.axes.yAxis.exist = true;\n        }\n        createAxis(svg, scatter, plot);\n        createGridLines(svg, scatter);\n        if (!scatter.gridLines.exist) {\n          svg",
	{
		"methodObject": "svg",
		"d3MethodName": ".selectAll",
		"name": "",
		"type": "text",
		"value": "\".grid-line\"",
		"args": [
			"\".grid-line\""
		]
	},
	{
		"methodObject": "svg.selectAll(\".grid-line\")",
		"d3MethodName": ".remove",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	{
		"methodObject": "svg.selectAll(\".grid-line\").remove()",
		"methodEnd": true
	},
	"\n        }\n        settingsArea.innerHTML = JSON.stringify(scatter, null, 2);\n      });\n\n      document.body.appendChild(document.createElement(\"br\"));\n\n      const exportSettings = document.createElement(\"a\");\n      exportSettings.setAttribute(\"id\", \"exportSettings\");\n      exportSettings.innerHTML = \"Export Settings\";\n      document.body.appendChild(exportSettings);\n      exportSettings.addEventListener(\"click\", (e) => {\n        const settingsCopy = scatter;\n        const file = new Blob([JSON.stringify(settingsCopy)], { type: 'text/plain' })\n        exportSettings.href = URL.createObjectURL(file);\n        exportSettings.download = 'scatterPlotSettings.scatterplotsettings';\n      });\n\n      document.body.appendChild(document.createElement(\"br\"));\n\n      const exportSVG = document.createElement(\"a\");\n      exportSVG.setAttribute(\"id\", \"exportSVG\");\n      exportSVG.innerHTML = \"Export SVG\";\n      document.body.appendChild(exportSVG);\n      exportSVG.addEventListener(\"click\", (e) => {\n        const file = new Blob([document.getElementById(\"svgContainer\").innerHTML], { type: 'text/html' });\n        exportSVG.href = URL.createObjectURL(file);\n        exportSVG.download = 'scatterPlotSVG.html';\n      });\n\n\n   \n    });\n  </script>\n</body>"
]