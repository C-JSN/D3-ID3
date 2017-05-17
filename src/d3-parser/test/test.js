const expect = chai.expect;

describe('returnD3methods', () => {
  it('should return object', () => {
    expect(returnD3methods()).to.be.a('object');
  });
  it('should have over 900 D3 methods', () => {
    expect(Object.keys(returnD3methods())).to.have.length.above(900);
  });
  it('should have D3 .select method', () => {
    expect(returnD3methods()).to.include.keys('.select');
  });
  it('should have D3 .append method', () => {
    expect(returnD3methods()).to.include.keys('.append');
  });
  it('should have D3 .attr method', () => {
    expect(returnD3methods()).to.include.keys('.attr');
  });
  it('should have D3 .style method', () => {
    expect(returnD3methods()).to.include.keys('.style');
  });
});

describe('findScript', () => {
  it('should return string', () => {
    expect(findScript()).to.be.a('string');
  });
});

describe('parseD3("var color = d3.scaleOrdinal(d3.schemeCategory10);")', () => {
  let str = '';
  let key = '';
  let obj;

  beforeEach(() => {
    str = 'var color = d3.scaleOrdinal(d3.schemeCategory10);'
    obj = parseD3(str);
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      if (typeof obj[Object.keys(obj)[i]] === 'object') {
        return key = Object.keys(obj)[i];
      }
    }
  });

  it('should return object', () => {
    expect(parseD3(str)).to.be.an('object');
  });
  it('D3 method index should have value type of an object', () => {
    expect(obj[key]).to.be.an('object');
  });
  it('D3 method should have deep property of d3MethodName, methodObject, and args', () => {
    expect(obj[key]).to.have.property('d3MethodName');
    expect(obj[key]).to.have.property('methodObject');
    expect(obj[key]).to.have.property('args');
  });
  it('D3 method should have .scaleOrdinal as d3MethodName', () => {
    expect(obj[key]).to.have.property('d3MethodName', '.scaleOrdinal');
  });
  it('d3.scaleOrdinal should have args property with value type array and 1 element d3.schemeCategory10', () => {
    expect(obj[key]).to.have.property('args')
      .that.is.an('array')
      .to.include('d3.schemeCategory10');
  });
});

describe('parseD3("var svgContainer = d3.select("#graphContainer").append("svg").attr("width", width).attr("height", height).style("border", "3px solid #736084");")', () => {
  let str = '';
  let obj;

  beforeEach(() => {
    str = 'var svgContainer = d3.select("#graphContainer").append("svg").attr("width", width).attr("height", height).style("border", "3px solid #736084");';
    obj = parseD3(str);
  });

  it('must have 1 string and 6 nested objects (1 for each D3 method plus 1 for method end)', () => {
    expect(obj).to.satisfy(obj => {
      let strcount = 0;
      let objcount = 0;
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (typeof obj[Object.keys(obj)[i]] === 'object') {
          objcount += 1;
        }
        if (typeof obj[Object.keys(obj)[i]] === 'string') {
          strcount += 1;
        }
      }
      if (strcount === 1 && objcount === 6) return true;
    });
  });
  it('must have a methodEnd for a D3 method chain with semicolon', () => {
    expect(obj).to.satisfy(obj => {
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['methodEnd']) return true;
      }
    });
  });
  it('.attr and .style must have args length of 2', () => {
    expect(obj).to.satisfy(obj => {
      let count = 0;
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.attr' && obj[Object.keys(obj)[i]]['args'].length === 2) count += 1;
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.style' && obj[Object.keys(obj)[i]]['args'].length === 2) count += 1;
      }
      if (count === 3) return true;
    });
  });
  it('.select and .append should chain onto the methodObject until methodEnd', () => {
    expect(obj).to.satisfy(obj => {
      let count = 0;
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['methodEnd']) {
          return obj[Object.keys(obj)[i]]['methodObject'].includes('.select') && obj[Object.keys(obj)[i]]['methodObject'].includes('.append');
        }
      }
    });
  });
});

describe('parseD3("var arc = d3.arc().outerRadius(100).innerRadius(50);")', () => {
  let str = '';
  let obj;

  beforeEach(() => {
    str = 'var arc = d3.arc().outerRadius(100).innerRadius(50);';
    obj = parseD3(str);
  });
  
  it('should handle d3 method calling with no arguments', () => {
    expect(obj).to.satisfy(obj => {
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.arc' && obj[Object.keys(obj)[i]]['args'][0] === '') return true;
      }
    });
  });
  it('should work with arc prefix of inner and outer radius', () => {
    expect(obj).to.satisfy(obj => {
      let count = 0;
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.innerRadius') count += 1;
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.outerRadius') count += 1;
      }
      if (count === 2) return true;
    });
  });
  it('should have correct arguments for inner and outer radius', () => {
    expect(obj).to.satisfy(obj => {
      let count = 0;
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.innerRadius' && obj[Object.keys(obj)[i]]['args'][0] === '50') count += 1;
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.outerRadius' && obj[Object.keys(obj)[i]]['args'][0] === '100') count += 1;
      }
      if (count === 2) return true;
    });
  });
  it('should have d3.arc() as methodObject for both inner and outer radius chain', () => {
    expect(obj).to.satisfy(obj => {
      let count = 0;
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.innerRadius' && obj[Object.keys(obj)[i]]['methodObject'] === 'd3.arc()') count += 1;
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.outerRadius' && obj[Object.keys(obj)[i]]['methodObject'] === 'd3.arc()') count += 1;
      }
      if (count === 2) return true;
    });
  });
});

describe('parseD3("var group = svgContainer.append("g").attr("transform", "translate(" + 576 / 2 + "," + 320 / 2 + ")");")', () => {
  let str = '';
  let obj;

  beforeEach(() => {
    str = 'var group = svgContainer.append("g").attr("transform", "translate(" + 576 / 2 + "," + 320 / 2 + ")");';
    obj = parseD3(str);
  });
  
  it('should handle nested parens and commas in args', () => {
    expect(obj).to.satisfy(obj => {
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.attr' && obj[Object.keys(obj)[i]]['args'].length === 2) return true;
      }
    });
  });
  it('should store same string with nested parens and commas in args', () => {
    expect(obj).to.satisfy(obj => {
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.attr' && obj[Object.keys(obj)[i]]['args'][1].trim() === '"translate(" + 576 / 2 + "," + 320 / 2 + ")"') return true;
      }
    });
  });
});

describe('parseD3("var arcs = d3.pie()(data);")', () => {
  let str = '';
  let obj;

  beforeEach(() => {
    str = 'var arcs = d3.pie()(data);';
    obj = parseD3(str);
  });
  
  it('should handle executing d3 method call that calls a function with argument', () => {
    expect(obj).to.satisfy(obj => {
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.pie' && obj[Object.keys(obj)[i]]['args'].length === 2) return true;
      }
    });
  });
  it('should have correct arguments', () => {
    expect(obj).to.satisfy(obj => {
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (obj[Object.keys(obj)[i]]['d3MethodName'] === '.pie' && obj[Object.keys(obj)[i]]['args'][0] === '' && obj[Object.keys(obj)[i]]['args'][1] === 'data') return true;
      }
    });
  });
});

describe('parseD3("arcs.forEach(function (d, i) {group.append("path").attr("d", arc(d)).attr("fill", color(i));})")', () => {
  let str = '';
  let obj;

  beforeEach(() => {
    str = 'arcs.forEach(function (d, i) {group.append("path").attr("d", arc(d)).attr("fill", color(i));})';
    obj = parseD3(str);
  });
  
  it('should not group .forEach as a D3 method', () => {
    expect(obj).to.satisfy(obj => {
      for (let i = 0; i < Object.keys(obj).length; i += 1) {
        if (typeof obj[Object.keys(obj)[i]] === 'string') {
          return obj[Object.keys(obj)[i]].includes('.forEach');
        }
      }
    });
  });
});

describe('reCode', () => {
  it('Recoding parsed string should return same string (including spaces and new lines)', () => {
    let str = 'var data = [10, 20, 30, 20];var width = 576;var height = 320;var color = d3.scaleOrdinal(d3.schemeCategory10);var graphContainer = document.getElementById("graphContainer");var svgContainer = d3.select("#graphContainer").append("svg").attr("width", width).attr("height", height).style("border", "3px solid #736084");var arc = d3.arc().outerRadius(100).innerRadius(50);var group = svgContainer.append("g").attr("transform", "translate(" + 576 / 2 + "," + 320 / 2 + ")");var arcs = d3.pie()(data);arcs.forEach(function (d, i) {group.append("path").attr("d", arc(d)).attr("fill", color(i));})';
    expect(reCode(parseD3(str))).to.equal(str);
  });
});