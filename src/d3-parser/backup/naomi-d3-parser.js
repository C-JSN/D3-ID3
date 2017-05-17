const val = 'var svgContainer = d3.select("#graphContainer").append("svg").attr("width", width).attr("height", height).style("border", "3px solid #736084");'

var enter = document.createElement("BUTTON");
var t = document.createTextNode("Enter");
enter.appendChild(t);
document.body.appendChild(enter);
var width;
var height;
var inputW = document.createElement('input');
inputW.id = 'width';
inputW.addEventListener('change', () => {
  width = document.getElementById('width').value;
})
document.body.appendChild(inputW);
var inputH = document.createElement('input');
inputH.id = 'height';
inputH.addEventListener('change', () => {
  height = document.getElementById('height').value;
})
document.body.appendChild(inputH);
var demo = document.createElement('div');
demo.id = 'demo';
document.body.appendChild(demo);
const buttons = [];
//var width = 200;
//var height = 100;
// while we are not at end of string, keep moving forward character by character
// collect characters until we hit space, =, period or ( );
function parseVal(val) {
  const cache = {};
  let word = '';
  let methodName = '';
  let varType = '';
  for (let i = 0; i < val.length; i += 1) {
    if (val[i] === ';') {
      cache[i] = {
        final: true,
      }
    }

    if (val[i] === '.' || val[i] === '(' || val[i] === ';') {
      if (word.includes('.')) {
        methodName = word;
        word = '';
      }

      if (word.includes('(') && word.includes(')')) {
        word = word.replace('(', '').replace(')', '').split(',');
        // console.log(word);
        cache[i] = {
          method: true,
          'methodName': methodName,
          'arguments': word,
        }

        var obj = {
          handleEvent: function () {
            if (cache[i]['arguments'][0] === '"height"') {
              cache[i]['arguments'][1] = height;
            }
            if (cache[i]['arguments'][0] === '"width"') {
              cache[i]['arguments'][1] = width;
            }

          },
          id: i
        };
        var button = document.createElement("BUTTON");
        button.className = methodName.toString();
        button.id = i;
        var t = document.createTextNode(methodName);
        button.appendChild(t);
        button.addEventListener("click", obj, false);
        buttons.push(button);
        //document.body.appendChild(button);
        // alert(cache[methodName]['arguments']);
        methodName = '';
        word = '';
        // console.log(cache[i]);
      } else {
        cache[i] = word.trim();
        word = '';
      }
    }
    word += val[i]
  }
  return cache;
}

function reCode(parsed) {
  let code = '';
  for (let key in parsed) {
    //alert(key)
    if (parsed[key]['final'] === true) {
      //alert(JSON.stringify(parsed[key]['final'] === true));
      code += ';';
    } else if (typeof parsed[key] === 'object') {
      //alert(parsed[key]);
      if (parsed[key]['method'] === true) {
        if (parsed[key]['arguments'].length > 1) {
          code += parsed[key]['methodName'] + '(' + parsed[key]['arguments'][0] + ', ' + parsed[key]['arguments'][1] + ')'
        } else {
          code += parsed[key]['methodName'] + '(' + parsed[key]['arguments'][0] + ')'
        }
      }
    } else {
      code += parsed[key];
    }
  }
  return code;
}
parsed = parseVal(val);

for (let i = 0; i < buttons.length; i += 1) {
  document.body.appendChild(buttons[i]);
}

var oldParsed = document.createElement('div');
oldParsed.innerHTML = JSON.stringify(parsed);
document.body.appendChild(oldParsed);

enter.addEventListener("click", () => {
  var newCode = reCode(parsed);
  var codeBox = document.createElement('DIV');
  codeBox.innerHTML = newCode;
  document.body.appendChild(codeBox);
});


