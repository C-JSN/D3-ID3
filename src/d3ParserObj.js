[
	"<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Line Chart</title>\n  <script src=\"https://d3js.org/d3.v4.min.js\"></script>\n</head>\n\n<body>\n\n  <div class=\"chart\"></div>\n\n  <script>\n    var margin = { top: 10, right: 20, bottom: 30, left: 30 };\n    var width = 800 - margin.left - margin.right;\n    var height = 565 - margin.top - margin.bottom;\n\n    var svg = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "'.chart'",
		"args": [
			"'.chart'"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.select('.chart')",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "'svg'",
		"args": [
			"'svg'"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.select('.chart').append('svg')",
		"d3MethodName": ".attr",
		"name": "'width'",
		"type": "text",
		"value": " width + margin.left + margin.right",
		"args": [
			"'width'",
			" width + margin.left + margin.right"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.select('.chart').append('svg')",
		"d3MethodName": ".attr",
		"name": "'height'",
		"type": "text",
		"value": " height + margin.top + margin.bottom",
		"args": [
			"'height'",
			" height + margin.top + margin.bottom"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.select('.chart').append('svg')",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "'g'",
		"args": [
			"'g'"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.select('.chart').append('svg').append('g')",
		"d3MethodName": ".attr",
		"name": "'transform'",
		"type": "text",
		"value": " `translate(${margin.left}, ${margin.top})`",
		"args": [
			"'transform'",
			" `translate(${margin.left}, ${margin.top})`"
		]
	},
	{
		"methodObject": "d3.select('.chart').append('svg').append('g')",
		"methodEnd": true
	},
	"\n\n    var parseTime = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".timeParse",
		"name": "",
		"type": "text",
		"value": "'%Y/%m/%d'",
		"args": [
			"'%Y/%m/%d'"
		]
	},
	{
		"methodObject": "d3",
		"methodEnd": true
	},
	"\n\n    let data = getData();\n\n    data.forEach(company => {\n      company.values.forEach(d => {\n        d.date = parseTime(d.date);\n        d.close = +d.close;\n      });\n    });\n\n    var xScale = d3",
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
	"\n      .domain([\n        d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".min",
		"name": "data",
		"type": "text",
		"value": " co => d3.min(co.values, d => d.date)",
		"args": [
			"data",
			" co => d3.min(co.values, d => d.date)"
		]
	},
	",\n        d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".max",
		"name": "data",
		"type": "text",
		"value": " co => d3.max(co.values, d => d.date)",
		"args": [
			"data",
			" co => d3.max(co.values, d => d.date)"
		]
	},
	"\n      ])\n      ",
	{
		"methodObject": "d3",
		"d3MethodName": ".range",
		"name": "[0",
		"type": "text",
		"value": " width]",
		"args": [
			"[0",
			" width]"
		]
	},
	{
		"methodObject": "d3",
		"methodEnd": true
	},
	"\n    svg\n      ",
	{
		"methodObject": "",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "'g'",
		"args": [
			"'g'"
		]
	},
	"\n      ",
	{
		"methodObject": ".append('g')",
		"d3MethodName": ".attr",
		"name": "'transform'",
		"type": "text",
		"value": " `translate(0, ${height})`",
		"args": [
			"'transform'",
			" `translate(0, ${height})`"
		]
	},
	"\n      ",
	{
		"methodObject": ".append('g')",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "d3.axisBottom(xScale).ticks(5)",
		"args": [
			"d3.axisBottom(xScale).ticks(5)"
		]
	},
	{
		"methodObject": ".append('g')",
		"methodEnd": true
	},
	"\n\n    var yScale = d3",
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
	"\n      .domain([\n        d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".min",
		"name": "data",
		"type": "text",
		"value": " co => d3.min(co.values, d => d.close)",
		"args": [
			"data",
			" co => d3.min(co.values, d => d.close)"
		]
	},
	",\n        d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".max",
		"name": "data",
		"type": "text",
		"value": " co => d3.max(co.values, d => d.close)",
		"args": [
			"data",
			" co => d3.max(co.values, d => d.close)"
		]
	},
	"\n      ])\n      ",
	{
		"methodObject": "d3",
		"d3MethodName": ".range",
		"name": "[height",
		"type": "text",
		"value": " 0]",
		"args": [
			"[height",
			" 0]"
		]
	},
	{
		"methodObject": "d3",
		"methodEnd": true
	},
	"\n    svg\n      ",
	{
		"methodObject": "",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "'g'",
		"args": [
			"'g'"
		]
	},
	"\n      ",
	{
		"methodObject": ".append('g')",
		"d3MethodName": ".call",
		"name": "",
		"type": "text",
		"value": "d3.axisLeft(yScale)",
		"args": [
			"d3.axisLeft(yScale)"
		]
	},
	{
		"methodObject": ".append('g')",
		"methodEnd": true
	},
	"\n\n    var area = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".area",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	"\n      ",
	{
		"methodObject": "d3.area()",
		"d3MethodName": ".x",
		"name": "",
		"type": "text",
		"value": "d => xScale(d.date)",
		"args": [
			"d => xScale(d.date)"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.area()",
		"d3MethodName": ".y0",
		"name": "",
		"type": "text",
		"value": "yScale(yScale.domain()[0])",
		"args": [
			"yScale(yScale.domain()[0])"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.area()",
		"d3MethodName": ".y1",
		"name": "",
		"type": "text",
		"value": "d => yScale(d.close)",
		"args": [
			"d => yScale(d.close)"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.area()",
		"d3MethodName": ".curve",
		"name": "",
		"type": "text",
		"value": "d3.curveCatmullRom.alpha(0.5)",
		"args": [
			"d3.curveCatmullRom.alpha(0.5)"
		]
	},
	{
		"methodObject": "d3.area()",
		"methodEnd": true
	},
	"\n\n    svg\n      ",
	{
		"methodObject": "",
		"d3MethodName": ".selectAll",
		"name": "",
		"type": "text",
		"value": "'.area'",
		"args": [
			"'.area'"
		]
	},
	"\n      .data(data)\n      ",
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
	"\n      ",
	{
		"methodObject": ".enter()",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "'path'",
		"args": [
			"'path'"
		]
	},
	"\n      ",
	{
		"methodObject": ".enter().append('path')",
		"d3MethodName": ".attr",
		"name": "'class'",
		"type": "text",
		"value": " 'area'",
		"args": [
			"'class'",
			" 'area'"
		]
	},
	"\n      ",
	{
		"methodObject": ".enter().append('path')",
		"d3MethodName": ".attr",
		"name": "'d'",
		"type": "text",
		"value": " d => area(d.values)",
		"args": [
			"'d'",
			" d => area(d.values)"
		]
	},
	"\n      ",
	{
		"methodObject": ".enter().append('path')",
		"d3MethodName": ".style",
		"name": "'stroke'",
		"type": "text",
		"value": " (d, i) => ['#FF9900', '#3369E8'][i]",
		"args": [
			"'stroke'",
			" (d, i) => ['#FF9900', '#3369E8'][i]"
		]
	},
	"\n      ",
	{
		"methodObject": ".enter().append('path')",
		"d3MethodName": ".style",
		"name": "'stroke-width'",
		"type": "text",
		"value": " 2",
		"args": [
			"'stroke-width'",
			" 2"
		]
	},
	"\n      ",
	{
		"methodObject": ".enter().append('path')",
		"d3MethodName": ".style",
		"name": "'fill'",
		"type": "text",
		"value": " (d, i) => ['#FF9900', '#3369E8'][i]",
		"args": [
			"'fill'",
			" (d, i) => ['#FF9900', '#3369E8'][i]"
		]
	},
	"\n      ",
	{
		"methodObject": ".enter().append('path')",
		"d3MethodName": ".style",
		"name": "'fill-opacity'",
		"type": "text",
		"value": " 0.1",
		"args": [
			"'fill-opacity'",
			" 0.1"
		]
	},
	{
		"methodObject": ".enter().append('path')",
		"methodEnd": true
	},
	"\n\n    function getData() {\n      return [\n        {\n          \"ticker\": \"AMZN\",\n          \"values\": [\n            {\n              \"date\": \"2016/09/30\",\n              \"close\": 837.31\n            },\n            {\n              \"date\": \"2016/09/29\",\n              \"close\": 829.05\n            },\n            {\n              \"date\": \"2016/09/28\",\n              \"close\": 828.72\n            },\n            {\n              \"date\": \"2016/09/27\",\n              \"close\": 816.11\n            },\n            {\n              \"date\": \"2016/09/26\",\n              \"close\": 799.16\n            },\n            {\n              \"date\": \"2016/09/23\",\n              \"close\": 805.75\n            },\n            {\n              \"date\": \"2016/09/22\",\n              \"close\": 804.7\n            },\n            {\n              \"date\": \"2016/09/21\",\n              \"close\": 789.74\n            },\n            {\n              \"date\": \"2016/09/20\",\n              \"close\": 780.22\n            },\n            {\n              \"date\": \"2016/09/19\",\n              \"close\": 775.1\n            },\n            {\n              \"date\": \"2016/09/16\",\n              \"close\": 778.52\n            },\n            {\n              \"date\": \"2016/09/15\",\n              \"close\": 769.69\n            },\n            {\n              \"date\": \"2016/09/14\",\n              \"close\": 761.09\n            },\n            {\n              \"date\": \"2016/09/13\",\n              \"close\": 761.01\n            },\n            {\n              \"date\": \"2016/09/12\",\n              \"close\": 771.49\n            },\n            {\n              \"date\": \"2016/09/09\",\n              \"close\": 760.14\n            },\n            {\n              \"date\": \"2016/09/08\",\n              \"close\": 784.06\n            },\n            {\n              \"date\": \"2016/09/07\",\n              \"close\": 784.48\n            },\n            {\n              \"date\": \"2016/09/06\",\n              \"close\": 788.87\n            },\n            {\n              \"date\": \"2016/09/02\",\n              \"close\": 772.44\n            },\n            {\n              \"date\": \"2016/09/01\",\n              \"close\": 770.62\n            },\n            {\n              \"date\": \"2016/08/31\",\n              \"close\": 769.16\n            },\n            {\n              \"date\": \"2016/08/30\",\n              \"close\": 767.58\n            },\n            {\n              \"date\": \"2016/08/29\",\n              \"close\": 771.29\n            },\n            {\n              \"date\": \"2016/08/26\",\n              \"close\": 769\n            },\n            {\n              \"date\": \"2016/08/25\",\n              \"close\": 759.22\n            },\n            {\n              \"date\": \"2016/08/24\",\n              \"close\": 757.25\n            },\n            {\n              \"date\": \"2016/08/23\",\n              \"close\": 762.45\n            },\n            {\n              \"date\": \"2016/08/22\",\n              \"close\": 759.48\n            },\n            {\n              \"date\": \"2016/08/19\",\n              \"close\": 757.31\n            },\n            {\n              \"date\": \"2016/08/18\",\n              \"close\": 764.46\n            },\n            {\n              \"date\": \"2016/08/17\",\n              \"close\": 764.63\n            },\n            {\n              \"date\": \"2016/08/16\",\n              \"close\": 764.04\n            },\n            {\n              \"date\": \"2016/08/15\",\n              \"close\": 768.49\n            },\n            {\n              \"date\": \"2016/08/12\",\n              \"close\": 772.56\n            },\n            {\n              \"date\": \"2016/08/11\",\n              \"close\": 771.24\n            },\n            {\n              \"date\": \"2016/08/10\",\n              \"close\": 768.56\n            },\n            {\n              \"date\": \"2016/08/09\",\n              \"close\": 768.31\n            },\n            {\n              \"date\": \"2016/08/08\",\n              \"close\": 766.56\n            },\n            {\n              \"date\": \"2016/08/05\",\n              \"close\": 765.98\n            },\n            {\n              \"date\": \"2016/08/04\",\n              \"close\": 760.77\n            },\n            {\n              \"date\": \"2016/08/03\",\n              \"close\": 754.64\n            },\n            {\n              \"date\": \"2016/08/02\",\n              \"close\": 760.58\n            },\n            {\n              \"date\": \"2016/08/01\",\n              \"close\": 767.74\n            },\n            {\n              \"date\": \"2016/07/29\",\n              \"close\": 758.81\n            },\n            {\n              \"date\": \"2016/07/28\",\n              \"close\": 752.61\n            },\n            {\n              \"date\": \"2016/07/27\",\n              \"close\": 736.67\n            },\n            {\n              \"date\": \"2016/07/26\",\n              \"close\": 735.59\n            },\n            {\n              \"date\": \"2016/07/25\",\n              \"close\": 739.61\n            },\n            {\n              \"date\": \"2016/07/22\",\n              \"close\": 744.86\n            },\n            {\n              \"date\": \"2016/07/21\",\n              \"close\": 744.43\n            },\n            {\n              \"date\": \"2016/07/20\",\n              \"close\": 745.72\n            },\n            {\n              \"date\": \"2016/07/19\",\n              \"close\": 739.95\n            },\n            {\n              \"date\": \"2016/07/18\",\n              \"close\": 736.07\n            },\n            {\n              \"date\": \"2016/07/15\",\n              \"close\": 735.44\n            },\n            {\n              \"date\": \"2016/07/14\",\n              \"close\": 741.2\n            },\n            {\n              \"date\": \"2016/07/13\",\n              \"close\": 742.63\n            },\n            {\n              \"date\": \"2016/07/12\",\n              \"close\": 748.21\n            },\n            {\n              \"date\": \"2016/07/11\",\n              \"close\": 753.78\n            },\n            {\n              \"date\": \"2016/07/08\",\n              \"close\": 745.81\n            },\n            {\n              \"date\": \"2016/07/07\",\n              \"close\": 736.57\n            },\n            {\n              \"date\": \"2016/07/06\",\n              \"close\": 737.61\n            },\n            {\n              \"date\": \"2016/07/05\",\n              \"close\": 728.1\n            },\n            {\n              \"date\": \"2016/07/01\",\n              \"close\": 725.68\n            }\n          ]\n        },\n        {\n          \"ticker\": \"GOOG\",\n          \"values\": [\n            {\n              \"date\": \"2016/09/30\",\n              \"close\": 777.29\n            },\n            {\n              \"date\": \"2016/09/29\",\n              \"close\": 775.01\n            },\n            {\n              \"date\": \"2016/09/28\",\n              \"close\": 781.56\n            },\n            {\n              \"date\": \"2016/09/27\",\n              \"close\": 783.01\n            },\n            {\n              \"date\": \"2016/09/26\",\n              \"close\": 774.21\n            },\n            {\n              \"date\": \"2016/09/23\",\n              \"close\": 786.9\n            },\n            {\n              \"date\": \"2016/09/22\",\n              \"close\": 787.21\n            },\n            {\n              \"date\": \"2016/09/21\",\n              \"close\": 776.22\n            },\n            {\n              \"date\": \"2016/09/20\",\n              \"close\": 771.41\n            },\n            {\n              \"date\": \"2016/09/19\",\n              \"close\": 765.7\n            },\n            {\n              \"date\": \"2016/09/16\",\n              \"close\": 768.88\n            },\n            {\n              \"date\": \"2016/09/15\",\n              \"close\": 771.76\n            },\n            {\n              \"date\": \"2016/09/14\",\n              \"close\": 762.49\n            },\n            {\n              \"date\": \"2016/09/13\",\n              \"close\": 759.69\n            },\n            {\n              \"date\": \"2016/09/12\",\n              \"close\": 769.02\n            },\n            {\n              \"date\": \"2016/09/09\",\n              \"close\": 759.66\n            },\n            {\n              \"date\": \"2016/09/08\",\n              \"close\": 775.32\n            },\n            {\n              \"date\": \"2016/09/07\",\n              \"close\": 780.35\n            },\n            {\n              \"date\": \"2016/09/06\",\n              \"close\": 780.08\n            },\n            {\n              \"date\": \"2016/09/02\",\n              \"close\": 771.46\n            },\n            {\n              \"date\": \"2016/09/01\",\n              \"close\": 768.78\n            },\n            {\n              \"date\": \"2016/08/31\",\n              \"close\": 767.05\n            },\n            {\n              \"date\": \"2016/08/30\",\n              \"close\": 769.09\n            },\n            {\n              \"date\": \"2016/08/29\",\n              \"close\": 772.15\n            },\n            {\n              \"date\": \"2016/08/26\",\n              \"close\": 769.54\n            },\n            {\n              \"date\": \"2016/08/25\",\n              \"close\": 769.41\n            },\n            {\n              \"date\": \"2016/08/24\",\n              \"close\": 769.64\n            },\n            {\n              \"date\": \"2016/08/23\",\n              \"close\": 772.08\n            },\n            {\n              \"date\": \"2016/08/22\",\n              \"close\": 772.15\n            },\n            {\n              \"date\": \"2016/08/19\",\n              \"close\": 775.42\n            },\n            {\n              \"date\": \"2016/08/18\",\n              \"close\": 777.5\n            },\n            {\n              \"date\": \"2016/08/17\",\n              \"close\": 779.91\n            },\n            {\n              \"date\": \"2016/08/16\",\n              \"close\": 777.14\n            },\n            {\n              \"date\": \"2016/08/15\",\n              \"close\": 782.44\n            },\n            {\n              \"date\": \"2016/08/12\",\n              \"close\": 783.22\n            },\n            {\n              \"date\": \"2016/08/11\",\n              \"close\": 784.85\n            },\n            {\n              \"date\": \"2016/08/10\",\n              \"close\": 784.68\n            },\n            {\n              \"date\": \"2016/08/09\",\n              \"close\": 784.26\n            },\n            {\n              \"date\": \"2016/08/08\",\n              \"close\": 781.76\n            },\n            {\n              \"date\": \"2016/08/05\",\n              \"close\": 782.22\n            },\n            {\n              \"date\": \"2016/08/04\",\n              \"close\": 771.61\n            },\n            {\n              \"date\": \"2016/08/03\",\n              \"close\": 773.18\n            },\n            {\n              \"date\": \"2016/08/02\",\n              \"close\": 771.07\n            },\n            {\n              \"date\": \"2016/08/01\",\n              \"close\": 772.88\n            },\n            {\n              \"date\": \"2016/07/29\",\n              \"close\": 768.79\n            },\n            {\n              \"date\": \"2016/07/28\",\n              \"close\": 745.91\n            },\n            {\n              \"date\": \"2016/07/27\",\n              \"close\": 741.77\n            },\n            {\n              \"date\": \"2016/07/26\",\n              \"close\": 738.42\n            },\n            {\n              \"date\": \"2016/07/25\",\n              \"close\": 739.77\n            },\n            {\n              \"date\": \"2016/07/22\",\n              \"close\": 742.74\n            },\n            {\n              \"date\": \"2016/07/21\",\n              \"close\": 738.63\n            },\n            {\n              \"date\": \"2016/07/20\",\n              \"close\": 741.19\n            },\n            {\n              \"date\": \"2016/07/19\",\n              \"close\": 736.96\n            },\n            {\n              \"date\": \"2016/07/18\",\n              \"close\": 733.78\n            },\n            {\n              \"date\": \"2016/07/15\",\n              \"close\": 719.85\n            },\n            {\n              \"date\": \"2016/07/14\",\n              \"close\": 720.95\n            },\n            {\n              \"date\": \"2016/07/13\",\n              \"close\": 716.98\n            },\n            {\n              \"date\": \"2016/07/12\",\n              \"close\": 720.64\n            },\n            {\n              \"date\": \"2016/07/11\",\n              \"close\": 715.09\n            },\n            {\n              \"date\": \"2016/07/08\",\n              \"close\": 705.63\n            },\n            {\n              \"date\": \"2016/07/07\",\n              \"close\": 695.36\n            },\n            {\n              \"date\": \"2016/07/06\",\n              \"close\": 697.77\n            },\n            {\n              \"date\": \"2016/07/05\",\n              \"close\": 694.49\n            },\n            {\n              \"date\": \"2016/07/01\",\n              \"close\": 699.21\n            }\n          ]\n        }\n      ];\n    }\n  </script>\n</body>\n\n</html>"
]