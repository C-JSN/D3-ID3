function returnD3methods() {

  const D3methods = {

  // Statistics
  // Methods for computing basic summary statistics.

  'd3.min': null, //- compute the minimum value in an array.
  'd3.max': null, //- compute the maximum value in an array.
  'd3.extent': null, //- compute the minimum and maximum value in an array.
  'd3.sum': null, //- compute the sum of an array of numbers.
  'd3.mean': null, //- compute the arithmetic mean of an array of numbers.
  'd3.median': null, //- compute the median of an array of numbers (the 0.5-quantile).
  'd3.quantile': null, //- compute a quantile for a sorted array of numbers.
  'd3.variance': null, //- compute the variance of an array of numbers.
  'd3.deviation': null, //- compute the standard deviation of an array of numbers.

  // Search
  // Methods for searching arrays for a specific element.

  'd3.scan': null, //- linear search for an element using a comparator.
  'd3.bisect': null, //- binary search for a value in a sorted array.
  'd3.bisectRight': null, //- binary search for a value in a sorted array.
  'd3.bisectLeft': null, //- binary search for a value in a sorted array.
  'd3.bisector': null, //- bisect using an accessor or comparator.
  'bisector.left': null, //- bisectLeft, with the given comparator.
  'bisector.right': null, //- bisectRight, with the given comparator.
  'd3.ascending': null, //- compute the natural order of two values.
  'd3.descending': null, //- compute the natural order of two values.

  // Transformations
  // Methods for transforming arrays and for generating new arrays.

  'd3.cross': null, //- compute the Cartesian product of two arrays.
  'd3.merge': null, //- merge multiple arrays into one array.
  'd3.pairs': null, //- create an array of adjacent pairs of elements.
  'd3.permute': null, //- reorder an array of elements according to an array of indexes.
  'd3.shuffle': null, //- randomize the order of an array.
  'd3.ticks': null, //- generate representative values from a numeric interval.
  'd3.tickIncrement': null, //- generate representative values from a numeric interval.
  'd3.tickStep': null, //- generate representative values from a numeric interval.
  'd3.range': null, //- generate a range of numeric values.
  'd3.transpose': null, //- transpose an array of arrays.
  'd3.zip': null, //- transpose a variable number of arrays.

  // Histograms
  // Bin discrete samples into continuous, non-overlapping intervals.

  'd3.histogram': null, //- create a new histogram generator.
  'histogram': null, //- compute the histogram for the given array of samples.
  'histogram.value': null, //- specify a value accessor for each sample.
  'histogram.domain': null, //- specify the interval of observable values.
  'histogram.thresholds': null, //- specify how values are divided into bins.
  'd3.thresholdFreedmanDiaconis': null, //- the Freedman–Diaconis binning rule.
  'd3.thresholdScott': null, //- Scott’s normal reference binning rule.
  'd3.thresholdSturges': null, //- Sturges’ binning formula.

  // Axes (d3-axis)
  // Human-readable reference marks for scales.

  'd3.axisTop': null, //- create a new top-oriented axis generator.
  'd3.axisRight': null, //- create a new right-oriented axis generator.
  'd3.axisBottom': null, //- create a new bottom-oriented axis generator.
  'd3.axisLeft': null, //- create a new left-oriented axis generator.
  'axis': null, //- generate an axis for the given selection.
  'axis.scale': null, //- set the scale.
  'axis.ticks': null, //- customize how ticks are generated and formatted.
  'axis.tickArguments': null, //- customize how ticks are generated and formatted.
  'axis.tickValues': null, //- set the tick values explicitly.
  'axis.tickFormat': null, //- set the tick format explicitly.
  'axis.tickSize': null, //- set the size of the ticks.
  'axis.tickSizeInner': null, //- set the size of inner ticks.
  'axis.tickSizeOuter': null, //- set the size of outer (extent) ticks.
  'axis.tickPadding': null, //- set the padding between ticks and labels.

  // Brushes (d3-brush)
  // Select a one- or two-dimensional region using the mouse or touch.

  'd3.brush': null, //- create a new two-dimensional brush.
  'd3.brushX': null, //- create a brush along the x-dimension.
  'd3.brushY': null, //- create a brush along the y-dimension.
  'brush': null, //- apply the brush to a selection.
  'brush.move': null, //- move the brush selection.
  'brush.extent': null, //- define the brushable region.
  'brush.filter': null, //- control which input events initiate brushing.
  'brush.handleSize': null, //- set the size of the brush handles.
  'brush.on': null, //- listen for brush events.
  'd3.brushSelection': null, //- get the brush selection for a given node.

  // Chords (d3-chord)

  'd3.chord': null, //- create a new chord layout.
  'chord': null, //- compute the layout for the given matrix.
  'chord.padAngle': null, //- set the padding between adjacent groups.
  'chord.sortGroups': null, //- define the group order.
  'chord.sortSubgroups': null, //- define the source and target order within groups.
  'chord.sortChords': null, //- define the chord order across groups.
  'd3.ribbon': null, //- create a ribbon shape generator.
  'ribbon': null, //- generate a ribbon shape.
  'ribbon.source': null, //- set the source accessor.
  'ribbon.target': null, //- set the target accessor.
  'ribbon.radius': null, //- set the ribbon source or target radius.
  'ribbon.startAngle': null, //- set the ribbon source or target start angle.
  'ribbon.endAngle': null, //- set the ribbon source or target end angle.
  'ribbon.context': null, //- set the render context.

  // Collections (d3-collection)
  // Handy data structures for elements keyed by string.
  // Objects
  // Methods for converting associative arrays (objects) to arrays.

  'd3.keys': null, //- list the keys of an associative array.
  'd3.values': null, //- list the values of an associated array.
  'd3.entries': null, //- list the key-value entries of an associative array.

  // Maps
  // Like ES6 Map, but with string keys and a few other differences.

  'd3.map': null, //- create a new, empty map.
  'map.has': null, //- returns true if the map contains the given key.
  'map.get': null, //- get the value for the given key.
  'map.set': null, //- set the value for the given key.
  'map.remove': null, //- remove the entry for given key.
  'map.clear': null, //- remove all entries.
  'map.keys': null, //- get the array of keys.
  'map.values': null, //- get the array of values.
  'map.entries': null, //- get the array of entries (key-values objects).
  'map.each': null, //- call a function for each entry.
  'map.empty': null, //- returns false if the map has at least one entry.
  'map.size': null, //- compute the number of entries.

  // Sets
  // Like ES6 Set, but with string keys and a few other differences.

  'd3.set': null, //- create a new, empty set.
  'set.has': null, //- returns true if the set contains the given value.
  'set.add': null, //- add the given value.
  'set.remove': null, //- remove the given value.
  'set.clear': null, //- remove all values.
  'set.values': null, //- get the array of values.
  'set.each': null, //- call a function for each value.
  'set.empty': null, //- returns true if the set has at least one value.
  'set.size': null, //- compute the number of values.

  // Nests
  // Group data into arbitrary hierarchies.

  'd3.nest': null, //- create a new nest generator.
  'nest.key': null, //- add a level to the nest hierarchy.
  'nest.sortKeys': null, //- sort the current nest level by key.
  'nest.sortValues': null, //- sort the leaf nest level by value.
  'nest.rollup': null, //- specify a rollup function for leaf values.
  'nest.map': null, //- generate the nest, returning a map.
  'nest.object': null, //- generate the nest, returning an associative array.
  'nest.entries': null, //- generate the nest, returning an array of key-values tuples.

  // Colors (d3-color)
  // Color manipulation and color space conversion.

  'd3.color': null, //- parse the given CSS color specifier.
  'color.rgb': null, //- compute the RGB equivalent of this color.
  'color.brighter': null, //- create a brighter copy of this color.
  'color.darker': null, //- create a darker copy of this color.
  'color.displayable': null, //- returns true if the color is displayable on standard hardware.
  'color.toString': null, //- format the color as an RGB hexadecimal string.
  'd3.rgb': null, //- create a new RGB color.
  'd3.hsl': null, //- create a new HSL color.
  'd3.lab': null, //- create a new Lab color.
  'd3.hcl': null, //- create a new HCL color.
  'd3.cubehelix': null, //- create a new Cubehelix color.

  //Dispatches (d3-dispatch)
  //Separate concerns using named callbacks.

  'd3.dispatch': null, //- create a custom event dispatcher.
  'dispatch.on': null, //- register or unregister an event listener.
  'dispatch.copy': null, //- create a copy of a dispatcher.
  'dispatch.call': null, //- dispatch an event to registered listeners.
  'dispatch.apply': null, //- dispatch an event to registered listeners.

  // Dragging (d3-drag)
  // Drag and drop SVG, HTML or Canvas using mouse or touch input.

  'd3.drag': null, //- create a drag behavior.
  'drag': null, //- apply the drag behavior to a selection.
  'drag.container': null, //- set the coordinate system.
  'drag.filter': null, //- ignore some initiating input events.
  'drag.subject': null, //- set the thing being dragged.
  'drag.on': null, //- listen for drag events.
  'event.on': null, //- listen for drag events on the current gesture.
  'd3.dragDisable': null, //-
  'd3.dragEnable': null, //-

  // Delimiter-Separated Values (d3-dsv)
  // Parse and format delimiter-separated values, most commonly CSV and TSV.

  'd3.dsvFormat': null, //- create a new parser and formatter for the given delimiter.
  'dsv.parse': null, //- parse the given string, returning an array of objects.
  'dsv.parseRows': null, //- parse the given string, returning an array of rows.
  'dsv.format': null, //- format the given array of objects.
  'dsv.formatRows': null, //- format the given array of rows.
  'd3.csvParse': null, //- parse the given CSV string, returning an array of objects.
  'd3.csvParseRows': null, //- parse the given CSV string, returning an array of rows.
  'd3.csvFormat': null, //- format the given array of objects as CSV.
  'd3.csvFormatRows': null, //- format the given array of rows as CSV.
  'd3.tsvParse': null, //- parse the given TSV string, returning an array of objects.
  'd3.tsvParseRows': null, //- parse the given TSV string, returning an array of rows.
  'd3.tsvFormat': null, //- format the given array of objects as TSV.
  'd3.tsvFormatRows': null, //- format the given array of rows as TSV.

  // Easings (d3-ease)
  // Easing functions for smooth animation.

  'ease': null, //- ease the given normalized time.
  'd3.easeLinear': null, //- linear easing; the identity function.
  'd3.easePolyIn': null, //- polynomial easing; raises time to the given power.
  'd3.easePolyOut': null, //- reverse polynomial easing.
  'd3.easePolyInOut': null, //- symmetric polynomial easing.
  'poly.exponent': null, //- specify the polynomial exponent.
  'd3.easeQuad': null, //- an alias for easeQuadInOut.
  'd3.easeQuadIn': null, //- quadratic easing; squares time.
  'd3.easeQuadOut': null, //- reverse quadratic easing.
  'd3.easeQuadInOut': null, //- symmetric quadratic easing.
  'd3.easeCubic': null, //- an alias for easeCubicInOut.
  'd3.easeCubicIn': null, //- cubic easing; cubes time.
  'd3.easeCubicOut': null, //- reverse cubic easing.
  'd3.easeCubicInOut': null, //- symmetric cubic easing.
  'd3.easeSin': null, //- an alias for easeSinInOut.
  'd3.easeSinIn': null, //- sinusoidal easing.
  'd3.easeSinOut': null, //- reverse sinusoidal easing.
  'd3.easeSinInOut': null, //- symmetric sinusoidal easing.
  'd3.easeExp': null, //- an alias for easeExpInOut.
  'd3.easeExpIn': null, //- exponential easing.
  'd3.easeExpOut': null, //- reverse exponential easing.
  'd3.easeExpInOut': null, //- symmetric exponential easing.
  'd3.easeCircle': null, //- an alias for easeCircleInOut.
  'd3.easeCircleIn': null, //- circular easing.
  'd3.easeCircleOut': null, //- reverse circular easing.
  'd3.easeCircleInOut': null, //- symmetric circular easing.
  'd3.easeElastic': null, //- an alias for easeElasticOut.
  'd3.easeElasticIn': null, //- elastic easing, like a rubber band.
  'd3.easeElasticOut': null, //- reverse elastic easing.
  'd3.easeElasticInOut': null, //- symmetric elastic easing.
  'elastic.amplitude': null, //- specify the elastic amplitude.
  'elastic.period': null, //- specify the elastic period.
  'd3.easeBack': null, //- an alias for easeBackInOut.
  'd3.easeBackIn': null, //- anticipatory easing, like a dancer bending his knees before jumping.
  'd3.easeBackOut': null, //- reverse anticipatory easing.
  'd3.easeBackInOut': null, //- symmetric anticipatory easing.
  'back.overshoot': null, //- specify the amount of overshoot.
  'd3.easeBounce': null, //- an alias for easeBounceOut.
  'd3.easeBounceIn': null, //- bounce easing, like a rubber ball.
  'd3.easeBounceOut': null, //- reverse bounce easing.
  'd3.easeBounceInOut': null, //- symmetric bounce easing.

  // Forces (d3-force)
  // Force-directed graph layout using velocity Verlet integration.

  'd3.forceSimulation': null, //- create a new force simulation.
  'simulation.restart': null, //- reheat and restart the simulation’s timer.
  'simulation.stop': null, //- stop the simulation’s timer.
  'simulation.tick': null, //- advance the simulation one step.
  'simulation.nodes': null, //- set the simulation’s nodes.
  'simulation.alpha': null, //- set the current alpha.
  'simulation.alphaMin': null, //- set the minimum alpha threshold.
  'simulation.alphaDecay': null, //- set the alpha exponential decay rate.
  'simulation.alphaTarget': null, //- set the target alpha.
  'simulation.velocityDecay': null, //- set the velocity decay rate.
  'simulation.force': null, //- add or remove a force.
  'simulation.find': null, //- find the closest node to the given position.
  'simulation.on': null, //- add or remove an event listener.
  'force': null, //- apply the force.
  'force.initialize': null, //- initialize the force with the given nodes.
  'd3.forceCenter': null, //- create a centering force.
  'center.x': null, //- set the center x-coordinate.
  'center.y': null, //- set the center y-coordinate.
  'd3.forceCollide': null, //- create a circle collision force.
  'collide.radius': null, //- set the circle radius.
  'collide.strength': null, //- set the collision resolution strength.
  'collide.iterations': null, //- set the number of iterations.
  'd3.forceLink': null, //- create a link force.
  'link.links': null, //- set the array of links.
  'link.id': null, //- link nodes by numeric index or string identifier.
  'link.distance': null, //- set the link distance.
  'link.strength': null, //- set the link strength.
  'link.iterations': null, //- set the number of iterations.
  'd3.forceManyBody': null, //- create a many-body force.
  'manyBody.strength': null, //- set the force strength.
  'manyBody.theta': null, //- set the Barnes–Hut approximation accuracy.
  'manyBody.distanceMin': null, //- limit the force when nodes are close.
  'manyBody.distanceMax': null, //- limit the force when nodes are far.
  'd3.forceX': null, //- create an x-positioning force.
  'x.strength': null, //- set the force strength.
  'x.x': null, //- set the target x-coordinate.
  'd3.forceY': null, //- create an y-positioning force.
  'y.strength': null, //- set the force strength.
  'y.y': null, //- set the target y-coordinate.

  // Number Formats (d3-format)
  // Format numbers for human consumption.

  'd3.format': null, //- alias for locale.format on the default locale.
  'd3.formatPrefix': null, //- alias for locale.formatPrefix on the default locale.
  'd3.formatSpecifier': null, //- parse a number format specifier.
  'd3.formatLocale': null, //- define a custom locale.
  'd3.formatDefaultLocale': null, //- define the default locale.
  'locale.format': null, //- create a number format.
  'locale.formatPrefix': null, //- create a SI-prefix number format.
  'd3.precisionFixed': null, //- compute decimal precision for fixed-point notation.
  'd3.precisionPrefix': null, //- compute decimal precision for SI-prefix notation.
  'd3.precisionRound': null, //- compute significant digits for rounded notation.

  // Geographies (d3-geo)
  // Geographic projections, shapes and math.

  // Paths

  'd3.geoPath': null, //- create a new geographic path generator.
  'path': null, //- project and render the specified feature.
  'path.area': null, //- compute the projected planar area of a given feature.
  'path.bounds': null, //- compute the projected planar bounding box of a given feature.
  'path.centroid': null, //- compute the projected planar centroid of a given feature.
  'path.measure': null, //- compute the projected planar length of a given feature.
  'path.projection': null, //- set the geographic projection.
  'path.context': null, //- set the render context.
  'path.pointRadius': null, //- set the radius to display point features.

  // Projections

  'projection': null, //- project the specified point from the sphere to the plane.
  'projection.invert': null, //- unproject the specified point from the plane to the sphere.
  'projection.stream': null, //- wrap the specified stream to project geometry.
  'projection.clipAngle': null, //- set the radius of the clip circle.
  'projection.clipExtent': null, //- set the viewport clip extent, in pixels.
  'projection.scale': null, //- set the scale factor.
  'projection.translate': null, //- set the translation offset.
  'projection.fitExtent': null, //- set the scale and translate to fit a GeoJSON object.
  'projection.fitSize': null, //- set the scale and translate to fit a GeoJSON object.
  'projection.center': null, //- set the center point.
  'projection.rotate': null, //- set the three-axis spherical rotation angles.
  'projection.precision': null, //- set the precision threshold for adaptive sampling.
  'd3.geoAlbers': null, //- the Albers equal-area conic projection.
  'd3.geoAlbersUsa': null, //- a composite Albers projection for the United States.
  'd3.geoAzimuthalEqualArea': null, //- the azimuthal equal-area projection.
  'd3.geoAzimuthalEquidistant': null, //- the azimuthal equidistant projection.
  'd3.geoConicConformal': null, //- the conic conformal projection.
  'd3.geoConicEqualArea': null, //- the conic equal-area (Albers) projection.
  'd3.geoConicEquidistant': null, //- the conic equidistant projection.
  'conic.parallels': null, //- set the two standard parallels.
  'd3.geoEquirectangular': null, //- the equirectangular (plate carreé) projection.
  'd3.geoGnomonic': null, //- the gnomonic projection.
  'd3.geoMercator': null, //- the spherical Mercator projection.
  'd3.geoOrthographic': null, //- the azimuthal orthographic projection.
  'd3.geoStereographic': null, //- the azimuthal stereographic projection.
  'd3.geoTransverseMercator': null, //- the transverse spherical Mercator projection.
  'project': null, //- project the specified point from the sphere to the plane.
  'project.invert': null, //- unproject the specified point from the plane to the sphere.
  'd3.geoProjection': null, //- create a custom projection.
  'd3.geoProjectionMutator': null, //- create a custom configurable projection.
  'd3.geoAzimuthalEqualAreaRaw': null, //-
  'd3.geoAzimuthalEquidistantRaw': null, //-
  'd3.geoConicConformalRaw': null, //-
  'd3.geoConicEqualAreaRaw': null, //-
  'd3.geoConicEquidistantRaw': null, //-
  'd3.geoEquirectangularRaw': null, //-
  'd3.geoGnomonicRaw': null, //-
  'd3.geoMercatorRaw': null, //-
  'd3.geoOrthographicRaw': null, //-
  'd3.geoStereographicRaw': null, //-
  'd3.geoTransverseMercatorRaw': null, //-

  // Spherical Math

  'd3.geoArea': null, //- compute the spherical area of a given feature.
  'd3.geoBounds': null, //- compute the latitude-longitude bounding box for a given feature.
  'd3.geoCentroid': null, //- compute the spherical centroid of a given feature.
  'd3.geoContains': null, //- test whether a point is inside a given feature.
  'd3.geoDistance': null, //- compute the great-arc distance between two points.
  'd3.geoLength': null, //- compute the length of a line string or the perimeter of a polygon.
  'd3.geoInterpolate': null, //- interpolate between two points along a great arc.
  'd3.geoRotation': null, //- create a rotation function for the specified angles.
  'rotation': null, //- rotate the given point around the sphere.
  'rotation.invert': null, //- unrotate the given point around the sphere.

  // Spherical Shapes

  'd3.geoCircle': null, //- create a circle generator.
  'circle': null, //- generate a piecewise circle as a Polygon.
  'circle.center': null, //- specify the circle center in latitude and longitude.
  'circle.radius': null, //- specify the angular radius in degrees.
  'circle.precision': null, //- specify the precision of the piecewise circle.
  'd3.geoGraticule': null, //- create a graticule generator.
  'graticule': null, //- generate a MultiLineString of meridians and parallels.
  'graticule.lines': null, //- generate an array of LineStrings of meridians and parallels.
  'graticule.outline': null, //- generate a Polygon of the graticule’s extent.
  'graticule.extent': null, //- get or set the major & minor extents.
  'graticule.extentMajor': null, //- get or set the major extent.
  'graticule.extentMinor': null, //- get or set the minor extent.
  'graticule.step': null, //- get or set the major & minor step intervals.
  'graticule.stepMajor': null, //- get or set the major step intervals.
  'graticule.stepMinor': null, //- get or set the minor step intervals.
  'graticule.precision': null, //- get or set the latitudinal precision.
  'd3.geoGraticule10': null, //- generate the default 10° global graticule.

  // Streams

  'd3.geoStream': null, //- convert a GeoJSON object to a geometry stream.
  'stream.point': null, //-
  'stream.lineStart': null, //-
  'stream.lineEnd': null, //-
  'stream.polygonStart': null, //-
  'stream.polygonEnd': null, //-
  'stream.sphere': null, //-

  // Transforms

  'd3.geoIdentity': null, //- scale, translate or clip planar geometry.
  'identity.reflectX': null, //- reflect the x-dimension.
  'identity.reflectY': null, //- reflect the y-dimension.
  'd3.geoTransform': null, //- define a custom geometry transform.

  // Hierarchies (d3-hierarchy)
  // Layout algorithms for visualizing hierarchical data.

  'd3.hierarchy': null, //- constructs a root node from hierarchical data.
  'node.ancestors': null, //- generate an array of ancestors.
  'node.descendants': null, //- generate an array of descendants.
  'node.leaves': null, //- generate an array of leaves.
  'node.path': null, //- generate the shortest path to another node.
  'node.links': null, //- generate an array of links.
  'node.sum': null, //- evaluate and aggregate quantitative values.
  'node.sort': null, //- sort all descendant siblings.
  'node.count': null, //- count the number of leaves.
  'node.each': null, //- breadth-first traversal.
  'node.eachAfter': null, //- post-order traversal.
  'node.eachBefore': null, //- pre-order traversal.
  'node.copy': null, //- copy a hierarchy.
  'd3.stratify': null, //- create a new stratify operator.
  'stratify': null, //- construct a root node from tabular data.
  'stratify.id': null, //- set the node id accessor.
  'stratify.parentId': null, //- set the parent node id accessor.
  'd3.cluster': null, //- create a new cluster (dendrogram) layout.
  'cluster': null, //- layout the specified hierarchy in a dendrogram.
  'cluster.size': null, //- set the layout size.
  'cluster.nodeSize': null, //- set the node size.
  'cluster.separation': null, //- set the separation between leaves.
  'd3.tree': null, //- create a new tidy tree layout.
  'tree': null, //- layout the specified hierarchy in a tidy tree.
  'tree.size': null, //- set the layout size.
  'tree.nodeSize': null, //- set the node size.
  'tree.separation': null, //- set the separation between nodes.
  'd3.treemap': null, //- create a new treemap layout.
  'treemap': null, //- layout the specified hierarchy as a treemap.
  'treemap.tile': null, //- set the tiling method.
  'treemap.size': null, //- set the layout size.
  'treemap.round': null, //- set whether the output coordinates are rounded.
  'treemap.padding': null, //- set the padding.
  'treemap.paddingInner': null, //- set the padding between siblings.
  'treemap.paddingOuter': null, //- set the padding between parent and children.
  'treemap.paddingTop': null, //- set the padding between the parent’s top edge and children.
  'treemap.paddingRight': null, //- set the padding between the parent’s right edge and children.
  'treemap.paddingBottom': null, //- set the padding between the parent’s bottom edge and children.
  'treemap.paddingLeft': null, //- set the padding between the parent’s left edge and children.
  'd3.treemapBinary': null, //- tile using a balanced binary tree.
  'd3.treemapDice': null, //- tile into a horizontal row.
  'd3.treemapSlice': null, //- tile into a vertical column.
  'd3.treemapSliceDice': null, //- alternate between slicing and dicing.
  'd3.treemapSquarify': null, //- tile using squarified rows per Bruls et. al.
  'd3.treemapResquarify': null, //- like d3.treemapSquarify, but performs stable updates.
  'squarify.ratio': null, //- set the desired rectangle aspect ratio.
  'd3.partition': null, //- create a new partition (icicle or sunburst) layout.
  'partition': null, //- layout the specified hierarchy as a partition diagram.
  'partition.size': null, //- set the layout size.
  'partition.round': null, //- set whether the output coordinates are rounded.
  'partition.padding': null, //- set the padding.
  'd3.pack': null, //- create a new circle-packing layout.
  'pack': null, //- layout the specified hierarchy using circle-packing.
  'pack.radius': null, //- set the radius accessor.
  'pack.size': null, //- set the layout size.
  'pack.padding': null, //- set the padding.
  'd3.packSiblings': null, //- pack the specified array of circles.
  'd3.packEnclose': null, //- enclose the specified array of circles.

  // Interpolators (d3-interpolate)
  // Interpolate numbers, colors, strings, arrays, objects, whatever!

  'd3.interpolate': null, //- interpolate arbitrary values.
  'd3.interpolateArray': null, //- interpolate arrays of arbitrary values.
  'd3.interpolateDate': null, //- interpolate dates.
  'd3.interpolateNumber': null, //- interpolate numbers.
  'd3.interpolateObject': null, //- interpolate arbitrary objects.
  'd3.interpolateRound': null, //- interpolate integers.
  'd3.interpolateString': null, //- interpolate strings with embedded numbers.
  'd3.interpolateTransformCss': null, //- interpolate 2D CSS transforms.
  'd3.interpolateTransformSvg': null, //- interpolate 2D SVG transforms.
  'd3.interpolateZoom': null, //- zoom and pan between two views.
  'd3.interpolateRgb': null, //- interpolate RGB colors.
  'd3.interpolateRgbBasis': null, //- generate a B-spline through a set of colors.
  'd3.interpolateRgbBasisClosed': null, //- generate a closed B-spline through a set of colors.
  'd3.interpolateHsl': null, //- interpolate HSL colors.
  'd3.interpolateHslLong': null, //- interpolate HSL colors, the long way.
  'd3.interpolateLab': null, //- interpolate Lab colors.
  'd3.interpolateHcl': null, //- interpolate HCL colors.
  'd3.interpolateHclLong': null, //- interpolate HCL colors, the long way.
  'd3.interpolateCubehelix': null, //- interpolate Cubehelix colors.
  'd3.interpolateCubehelixLong': null, //- interpolate Cubehelix colors, the long way.
  'interpolate.gamma': null, //- apply gamma correction during interpolation.
  'd3.interpolateBasis': null, //- generate a B-spline through a set of values.
  'd3.interpolateBasisClosed': null, //- generate a closed B-spline through a set of values.
  'd3.quantize': null, //- generate uniformly-spaced samples from an interpolator.

  // Paths (d3-path)
  // Serialize Canvas path commands to SVG.

  'd3.path': null, //- create a new path serializer.
  'path.moveTo': null, //- move to the given point.
  'path.closePath': null, //- close the current subpath.
  'path.lineTo': null, //- draw a straight line segment.
  'path.quadraticCurveTo': null, //- draw a quadratic Bézier segment.
  'path.bezierCurveTo': null, //- draw a cubic Bézier segment.
  'path.arcTo': null, //- draw a circular arc segment.
  'path.arc': null, //- draw a circular arc segment.
  'path.rect': null, //- draw a rectangle.
  'path.toString': null, //- serialize to an SVG path data string.

  // Polygons (d3-polygon)
  // Geometric operations for two-dimensional polygons.

  'd3.polygonArea': null, //- compute the area of the given polygon.
  'd3.polygonCentroid': null, //- compute the centroid of the given polygon.
  'd3.polygonHull': null, //- compute the convex hull of the given points.
  'd3.polygonContains': null, //- test whether a point is inside a polygon.
  'd3.polygonLength': null, //- compute the length of the given polygon’s perimeter.

  // Quadtrees (d3-quadtree)
  // Two-dimensional recursive spatial subdivision.

  'd3.quadtree': null, //- create a new, empty quadtree.
  'quadtree.x': null, //- set the x accessor.
  'quadtree.y': null, //- set the y accessor.
  'quadtree.add': null, //- add a datum to a quadtree.
  'quadtree.addAll': null, //-
  'quadtree.remove': null, //- remove a datum from a quadtree.
  'quadtree.removeAll': null, //-
  'quadtree.copy': null, //- create a copy of a quadtree.
  'quadtree.root': null, //- get the quadtree’s root node.
  'quadtree.data': null, //- retrieve all data from the quadtree.
  'quadtree.size': null, //- count the number of data in the quadtree.
  'quadtree.find': null, //- quickly find the closest datum in a quadtree.
  'quadtree.visit': null, //- selectively visit nodes in a quadtree.
  'quadtree.visitAfter': null, //- visit all nodes in a quadtree.
  'quadtree.cover': null, //- extend the quadtree to cover a point.
  'quadtree.extent': null, //- extend the quadtree to cover an extent.

  // Queues (d3-queue)
  // Evaluate asynchronous tasks with configurable concurrency.

  'd3.queue': null, //- manage the concurrent evaluation of asynchronous tasks.
  'queue.defer': null, //- register a task for evaluation.
  'queue.abort': null, //- abort any active tasks and cancel any pending ones.
  'queue.await': null, //- register a callback for when tasks complete.
  'queue.awaitAll': null, //- register a callback for when tasks complete.

  // Random Numbers (d3-random)
  // Generate random numbers from various distributions.

  'd3.randomUniform': null, //- from a uniform distribution.
  'd3.randomNormal': null, //- from a normal distribution.
  'd3.randomLogNormal': null, //- from a log-normal distribution.
  'd3.randomBates': null, //- from a Bates distribution.
  'd3.randomIrwinHall': null, //- from an Irwin–Hall distribution.
  'd3.randomExponential': null, //- from an exponential distribution.

  //Requests (d3-request)
  // A convenient alternative to asynchronous XMLHttpRequest.

  'd3.request': null, //- make an asynchronous request.
  'request.header': null, //- set a request header.
  'request.user': null, //- set the user for authentication.
  'request.password': null, //- set the password for authentication.
  'request.mimeType': null, //- set the MIME type.
  'request.timeout': null, //- set the timeout in milliseconds.
  'request.responseType': null, //- set the response type.
  'request.response': null, //- set the response function.
  'request.get': null, //- send a GET request.
  'request.post': null, //- send a POST request.
  'request.send': null, //- set the request.
  'request.abort': null, //- abort the request.
  'request.on': null, //- listen for a request event.
  'd3.csv': null, //- get a comma-separated values (CSV) file.
  'd3.html': null, //- get an HTML file.
  'd3.json': null, //- get a JSON file.
  'd3.text': null, //- get a plain text file.
  'd3.tsv': null, //- get a tab-separated values (TSV) file.
  'd3.xml': null, //- get an XML file.

  // Scales (d3-scale)
  // Encodings that map abstract data to visual representation.
  // Continuous Scales
  // Map a continuous, quantitative domain to a continuous range.

  'continuous': null, //- compute the range value corresponding to a given domain value.
  'continuous.invert': null, //- compute the domain value corresponding to a given range value.
  'continuous.domain': null, //- set the input domain.
  'continuous.range': null, //- set the output range.
  'continuous.rangeRound': null, //- set the output range and enable rounding.
  'continuous.clamp': null, //- enable clamping to the domain or range.
  'continuous.interpolate': null, //- set the output interpolator.
  'continuous.ticks': null, //- compute representative values from the domain.
  'continuous.tickFormat': null, //- format ticks for human consumption.
  'continuous.nice': null, //- extend the domain to nice round numbers.
  'continuous.copy': null, //- create a copy of this scale.
  'd3.scaleLinear': null, //- create a quantitative linear scale.
  'd3.scalePow': null, //- create a quantitative power scale.
  'pow': null, //- compute the range value corresponding to a given domain value.
  'pow.invert': null, //- compute the domain value corresponding to a given range value.
  'pow.exponent': null, //- set the power exponent.
  'pow.domain': null, //- set the input domain.
  'pow.range': null, //- set the output range.
  'pow.rangeRound': null, //- set the output range and enable rounding.
  'pow.clamp': null, //- enable clamping to the domain or range.
  'pow.interpolate': null, //- set the output interpolator.
  'pow.ticks': null, //- compute representative values from the domain.
  'pow.tickFormat': null, //- format ticks for human consumption.
  'pow.nice': null, //- extend the domain to nice round numbers.
  'pow.copy': null, //- create a copy of this scale.
  'd3.scaleSqrt': null, //- create a quantitative power scale with exponent 0.5.
  'd3.scaleLog': null, //- create a quantitative logarithmic scale.
  'log': null, //- compute the range value corresponding to a given domain value.
  'log.invert': null, //- compute the domain value corresponding to a given range value.
  'log.base': null, //- set the logarithm base.
  'log.domain': null, //- set the input domain.
  'log.range': null, //- set the output range.
  'log.rangeRound': null, //- set the output range and enable rounding.
  'log.clamp': null, //- enable clamping to the domain or range.
  'log.interpolate': null, //- set the output interpolator.
  'log.ticks': null, //- compute representative values from the domain.
  'log.tickFormat': null, //- format ticks for human consumption.
  'log.nice': null, //- extend the domain to nice round numbers.
  'log.copy': null, //- create a copy of this scale.
  'd3.scaleIdentity': null, //- create a quantitative identity scale.
  'd3.scaleTime': null, //- create a linear scale for time.
  'time': null, //- compute the range value corresponding to a given domain value.
  'time.invert': null, //- compute the domain value corresponding to a given range value.
  'time.domain': null, //- set the input domain.
  'time.range': null, //- set the output range.
  'time.rangeRound': null, //- set the output range and enable rounding.
  'time.clamp': null, //- enable clamping to the domain or range.
  'time.interpolate': null, //- set the output interpolator.
  'time.ticks': null, //- compute representative values from the domain.
  'time.tickFormat': null, //- format ticks for human consumption.
  'time.nice': null, //- extend the domain to nice round times.
  'time.copy': null, //- create a copy of this scale.
  'd3.scaleUtc': null, //- create a linear scale for UTC.

  // Sequential Scales
  // Map a continuous, quantitative domain to a continuous, fixed interpolator.

  'd3.scaleSequential': null, //- create a sequential scale.
  'sequential.interpolator': null, //- set the scale’s output interpolator.
  'd3.interpolateViridis': null, //- a dark-to-light color scheme.
  'd3.interpolateInferno': null, //- a dark-to-light color scheme.
  'd3.interpolateMagma': null, //- a dark-to-light color scheme.
  'd3.interpolatePlasma': null, //- a dark-to-light color scheme.
  'd3.interpolateWarm': null, //- a rotating-hue color scheme.
  'd3.interpolateCool': null, //- a rotating-hue color scheme.
  'd3.interpolateRainbow': null, //- a cyclical rotating-hue color scheme.
  'd3.interpolateCubehelixDefault': null, //- a dark-to-light, rotating-hue color scheme.

  // Quantize Scales
  // Map a continuous, quantitative domain to a discrete range.

  'd3.scaleQuantize': null, //- create a uniform quantizing linear scale.
  'quantize': null, //- compute the range value corresponding to a given domain value.
  'quantize.invertExtent': null, //- compute the domain values corresponding to a given range value.
  'quantize.domain': null, //- set the input domain.
  'quantize.range': null, //- set the output range.
  'quantize.nice': null, //- extend the domain to nice round numbers.
  'quantize.ticks': null, //- compute representative values from the domain.
  'quantize.tickFormat': null, //- format ticks for human consumption.
  'quantize.copy': null, //- create a copy of this scale.
  'd3.scaleQuantile': null, //- create a quantile quantizing linear scale.
  'quantile': null, //- compute the range value corresponding to a given domain value.
  'quantile.invertExtent': null, //- compute the domain values corresponding to a given range value.
  'quantile.domain': null, //- set the input domain.
  'quantile.range': null, //- set the output range.
  'quantile.quantiles': null, //- get the quantile thresholds.
  'quantile.copy': null, //- create a copy of this scale.
  'd3.scaleThreshold': null, //- create an arbitrary quantizing linear scale.
  'threshold': null, //- compute the range value corresponding to a given domain value.
  'threshold.invertExtent': null, //- compute the domain values corresponding to a given range value.
  'threshold.domain': null, //- set the input domain.
  'threshold.range': null, //- set the output range.
  'threshold.copy': null, //- create a copy of this scale.

  // Ordinal Scales
  // Map a discrete domain to a discrete range.

  'd3.scaleOrdinal': null, //- create an ordinal scale.
  'ordinal': null, //- compute the range value corresponding to a given domain value.
  'ordinal.domain': null, //- set the input domain.
  'ordinal.range': null, //- set the output range.
  'ordinal.unknown': null, //- set the output value for unknown inputs.
  'ordinal.copy': null, //- create a copy of this scale.
  'd3.scaleImplicit': null, //- a special unknown value for implicit domains.
  'd3.scaleBand': null, //- create an ordinal band scale.
  'band': null, //- compute the band start corresponding to a given domain value.
  'band.domain': null, //- set the input domain.
  'band.range': null, //- set the output range.
  'band.rangeRound': null, //- set the output range and enable rounding.
  'band.round': null, //- enable rounding.
  'band.paddingInner': null, //- set padding between bands.
  'band.paddingOuter': null, //- set padding outside the first and last bands.
  'band.padding': null, //- set padding outside and between bands.
  'band.align': null, //- set band alignment, if there is extra space.
  'band.bandwidth': null, //- get the width of each band.
  'band.step': null, //- get the distance between the starts of adjacent bands.
  'band.copy': null, //- create a copy of this scale.
  'd3.scalePoint': null, //- create an ordinal point scale.
  'point': null, //- compute the point corresponding to a given domain value.
  'point.domain': null, //- set the input domain.
  'point.range': null, //- set the output range.
  'point.rangeRound': null, //- set the output range and enable rounding.
  'point.round': null, //- enable rounding.
  'point.padding': null, //- set padding outside the first and last point.
  'point.align': null, //- set point alignment, if there is extra space.
  'point.bandwidth': null, //- returns zero.
  'point.step': null, //- get the distance between the starts of adjacent points.
  'point.copy': null, //- create a copy of this scale.
  'd3.schemeCategory10': null, //- a categorical scheme with 10 colors.
  'd3.schemeCategory20': null, //- a categorical scheme with 20 colors.
  'd3.schemeCategory20b': null, //- a categorical scheme with 20 colors.
  'd3.schemeCategory20c': null, //- a categorical scheme with 20 colors.

  // Selections (d3-selection)
  // Transform the DOM by selecting elements and joining to data.
  // Selecting Elements

  'd3.selection': null, //- select the root document element.
  'd3.select': null, //- select an element from the document.
  'd3.selectAll': null, //- select multiple elements from the document.
  '.select': null, //- select a descendant element for each selected element.
  '.selectAll': null, //- select multiple descendants for each selected element.
  '.filter': null, //- filter elements based on data.
  '.merge': null, //- merge this selection with another.
  'd3.matcher': null, //- test whether an element matches a selector.
  'd3.selector': null, //- select an element.
  'd3.selectorAll': null, //- select elements.
  'd3.window': null, //- get a node’s owner window.

  // Modifying Elements

  '.attr': null, //- get or set an attribute.
  '.classed': null, //- get, add or remove CSS classes.
  '.style': null, //- get or set a style property.
  '.property': null, //- get or set a (raw) property.
  '.text': null, //- get or set the text content.
  '.html': null, //- get or set the inner HTML.
  '.append': null, //- create, append and select new elements.
  '.insert': null, //- create, insert and select new elements.
  '.remove': null, //- remove elements from the document.
  '.sort': null, //- sort elements in the document based on data.
  '.order': null, //- reorders elements in the document to match the .
  '.raise': null, //- reorders each element as the last child of its parent.
  '.lower': null, //- reorders each element as the first child of its parent.
  'd3.creator': null, //- create an element by name.

  // Joining Data

  '.data': null, //- join elements to data.
  '.enter': null, //- get the enter selection (data missing elements).
  '.exit': null, //- get the exit selection (elements missing data).
  '.datum': null, //- get or set element data (without joining).

  // Handling Events

  '.on': null, //- add or remove event listeners.
  '.dispatch': null, //- dispatch a custom event.
  'd3.event': null, //- the current user event, during interaction.
  'd3.customEvent': null, //- temporarily define a custom event.
  'd3.mouse': null, //- get the mouse position relative to a given container.
  'd3.touch': null, //- get a touch position relative to a given container.
  'd3.touches': null, //- get the touch positions relative to a given container.

  // Control Flow

  '.each': null, //- call a function for each element.
  '.call': null, //- call a function with this selection.
  '.empty': null, //- returns true if this selection is empty.
  '.nodes': null, //- returns an array of all selected elements.
  '.node': null, //- returns the first (non-null) element.
  '.size': null, //- returns the count of elements.

  // Local Variables

  'd3.local': null, //- declares a new local variable.
  'local.set': null, //- set a local variable’s value.
  'local.get': null, //- get a local variable’s value.
  'local.remove': null, //- delete a local variable.
  'local.toString': null, //- get the property identifier of a local variable.

  // Namespaces

  'd3.namespace': null, //- qualify a prefixed XML name, such as “xlink:href”.
  'd3.namespaces': null, //- the built-in XML namespaces.

  // Shapes (d3-shape)
  // Graphical primitives for visualization.
  // Arcs
  // Circular or annular sectors, as in a pie or donut chart.

  'd3.arc': null, //- create a new arc generator.
  'arc': null, //- generate an arc for the given datum.
  'arc.centroid': null, //- compute an arc’s midpoint.
  'arc.innerRadius': null, //- set the inner radius.
  'arc.outerRadius': null, //- set the outer radius.
  'arc.cornerRadius': null, //- set the corner radius, for rounded corners.
  'arc.startAngle': null, //- set the start angle.
  'arc.endAngle': null, //- set the end angle.
  'arc.padAngle': null, //- set the angle between adjacent arcs, for padded arcs.
  'arc.padRadius': null, //- set the radius at which to linearize padding.
  'arc.context': null, //- set the rendering context.

  // Pies
  // Compute the necessary angles to represent a tabular dataset as a pie or donut chart.

  'd3.pie': null, //- create a new pie generator.
  'pie': null, //- compute the arc angles for the given dataset.
  'pie.value': null, //- set the value accessor.
  'pie.sort': null, //- set the sort order comparator.
  'pie.sortValues': null, //- set the sort order comparator.
  'pie.startAngle': null, //- set the overall start angle.
  'pie.endAngle': null, //- set the overall end angle.
  'pie.padAngle': null, //- set the pad angle between adjacent arcs.

  // Lines
  // A spline or polyline, as in a line chart.

  'd3.line': null, //- create a new line generator.
  'line': null, //- generate a line for the given dataset.
  'line.x': null, //- set the x accessor.
  'line.y': null, //- set the y accessor.
  'line.defined': null, //- set the defined accessor.
  'line.curve': null, //- set the curve interpolator.
  'line.context': null, //- set the rendering context.
  'd3.radialLine': null, //- create a new radial line generator.
  'radialLine': null, //- generate a line for the given dataset.
  'radialLine.angle': null, //- set the angle accessor.
  'radialLine.radius': null, //- set the radius accessor.
  'radialLine.defined': null, //- set the defined accessor.
  'radialLine.curve': null, //- set the curve interpolator.
  'radialLine.context': null, //- set the rendering context.

  // Areas
  // An area, defined by a bounding topline and baseline, as in an area chart.

  'd3.area': null, //- create a new area generator.
  'area': null, //- generate an area for the given dataset.
  'area.x': null, //- set the x0 and x1 accessors.
  'area.x0': null, //- set the baseline x accessor.
  'area.x1': null, //- set the topline x accessor.
  'area.y': null, //- set the y0 and y1 accessors.
  'area.y0': null, //- set the baseline y accessor.
  'area.y1': null, //- set the topline y accessor.
  'area.defined': null, //- set the defined accessor.
  'area.curve': null, //- set the curve interpolator.
  'area.context': null, //- set the rendering context.
  'area.lineX0': null, //- derive a line for the left edge of an area.
  'area.lineX1': null, //- derive a line for the right edge of an area.
  'area.lineY0': null, //- derive a line for the top edge of an area.
  'area.lineY1': null, //- derive a line for the bottom edge of an area.
  'd3.radialArea': null, //- create a new radial area generator.
  'radialArea': null, //- generate an area for the given dataset.
  'radialArea.angle': null, //- set the start and end angle accessors.
  'radialArea.startAngle': null, //- set the start angle accessor.
  'radialArea.endAngle': null, //- set the end angle accessor.
  'radialArea.radius': null, //- set the inner and outer radius accessors.
  'radialArea.innerRadius': null, //- set the inner radius accessor.
  'radialArea.outerRadius': null, //- set the outer radius accessor.
  'radialArea.defined': null, //- set the defined accessor.
  'radialArea.curve': null, //- set the curve interpolator.
  'radialArea.context': null, //- set the rendering context.
  'radialArea.lineStartAngle': null, //- derive a line for the start edge of an area.
  'radialArea.lineEndAngle': null, //- derive a line for the end edge of an area.
  'radialArea.lineInnerRadius': null, //- derive a line for the inner edge of an area.
  'radialArea.lineOuterRadius': null, //- derive a line for the outer edge of an area.

  // Curves
  // Interpolate between points to produce a continuous shape.

  'd3.curveBasis': null, //- a cubic basis spline, repeating the end points.
  'd3.curveBasisClosed': null, //- a closed cubic basis spline.
  'd3.curveBasisOpen': null, //- a cubic basis spline.
  'd3.curveBundle': null, //- a straightened cubic basis spline.
  'bundle.beta': null, //- set the bundle tension beta.
  'd3.curveCardinal': null, //- a cubic cardinal spline, with one-sided difference at each end.
  'd3.curveCardinalClosed': null, //- a closed cubic cardinal spline.
  'd3.curveCardinalOpen': null, //- a cubic cardinal spline.
  'cardinal.tension': null, //- set the cardinal spline tension.
  'd3.curveCatmullRom': null, //- a cubic Catmull–Rom spline, with one-sided difference at each end.
  'd3.curveCatmullRomClosed': null, //- a closed cubic Catmull–Rom spline.
  'd3.curveCatmullRomOpen': null, //- a cubic Catmull–Rom spline.
  'catmullRom.alpha': null, //- set the Catmull–Rom parameter alpha.
  'd3.curveLinear': null, //- a polyline.
  'd3.curveLinearClosed': null, //- a closed polyline.
  'd3.curveMonotoneX': null, //- a cubic spline that, given monotonicity in x, preserves it in y.
  'd3.curveMonotoneY': null, //- a cubic spline that, given monotonicity in y, preserves it in x.
  'd3.curveNatural': null, //- a natural cubic spline.
  'd3.curveStep': null, //- a piecewise constant function.
  'd3.curveStepAfter': null, //- a piecewise constant function.
  'd3.curveStepBefore': null, //- a piecewise constant function.
  'curve.areaStart': null, //- start a new area segment.
  'curve.areaEnd': null, //- end the current area segment.
  'curve.lineStart': null, //- start a new line segment.
  'curve.lineEnd': null, //- end the current line segment.
  'curve.point': null, //- add a point to the current line segment.

  // Symbols
  // A categorical shape encoding, as in a scatterplot.

  'd3.symbol': null, //- create a new symbol generator.
  'symbol': null, //- generate a symbol for the given datum.
  'symbol.type': null, //- set the symbol type.
  'symbol.size': null, //- set the size of the symbol in square pixels.
  'symbol.context': null, //- set the rendering context.
  'd3.symbols': null, //- the array of built-in symbol types.
  'd3.symbolCircle': null, //- a circle.
  'd3.symbolCross': null, //- a Greek cross with arms of equal length.
  'd3.symbolDiamond': null, //- a rhombus.
  'd3.symbolSquare': null, //- a square.
  'd3.symbolStar': null, //- a pentagonal star (pentagram).
  'd3.symbolTriangle': null, //- an up-pointing triangle.
  'd3.symbolWye': null, //- a Y shape.
  'symbolType.draw': null, //- draw this symbol to the given context.

  // Stacks
  // Stack shapes, placing one adjacent to another, as in a stacked bar chart.

  'd3.stack': null, //- create a new stack generator.
  'stack': null, //- generate a stack for the given dataset.
  'stack.keys': null, //- set the keys accessor.
  'stack.value': null, //- set the value accessor.
  'stack.order': null, //- set the order accessor.
  'stack.offset': null, //- set the offset accessor.
  'd3.stackOrderAscending': null, //- put the smallest series on bottom.
  'd3.stackOrderDescending': null, //- put the largest series on bottom.
  'd3.stackOrderInsideOut': null, //- put larger series in the middle.
  'd3.stackOrderNone': null, //- use the given series order.
  'd3.stackOrderReverse': null, //- use the reverse of the given series order.
  'd3.stackOffsetExpand': null, //- normalize the baseline to zero and topline to one.
  'd3.stackOffsetNone': null, //- apply a zero baseline.
  'd3.stackOffsetSilhouette': null, //- center the streamgraph around zero.
  'd3.stackOffsetWiggle': null, //- minimize streamgraph wiggling.

  // Time Formats (d3-time-format)
  // Parse and format times, inspired by strptime and strftime.

  'd3.timeFormat': null, //- alias for locale.format on the default locale.
  'd3.timeParse': null, //- alias for locale.parse on the default locale.
  'd3.utcFormat': null, //- alias for locale.utcFormat on the default locale.
  'd3.utcParse': null, //- alias for locale.utcParse on the default locale.
  'd3.isoFormat': null, //- an ISO 8601 UTC formatter.
  'd3.isoParse': null, //- an ISO 8601 UTC parser.
  'd3.timeFormatLocale': null, //- define a custom locale.
  'd3.timeFormatDefaultLocale': null, //- define the default locale.
  'locale.format': null, //- create a time formatter.
  'locale.parse': null, //- create a time parser.
  'locale.utcFormat': null, //- create a UTC formatter.
  'locale.utcParse': null, //- create a UTC parser.

  // Time Intervals (d3-time)
  // A calculator for humanity’s peculiar conventions of time.

  'd3.timeInterval': null, //- implement a new custom time interval.
  'interval': null, //- alias for interval.floor.
  'interval.floor': null, //- round down to the nearest boundary.
  'interval.round': null, //- round to the nearest boundary.
  'interval.ceil': null, //- round up to the nearest boundary.
  'interval.offset': null, //- offset a date by some number of intervals.
  'interval.range': null, //- generate a range of dates at interval boundaries.
  'interval.filter': null, //- create a filtered subset of this interval.
  'interval.every': null, //- create a filtered subset of this interval.
  'interval.count': null, //- count interval boundaries between two dates.
  'd3.timeMillisecond': null, 'd3.utcMillisecond': null, //- the millisecond interval.
  'd3.timeMilliseconds': null, 'd3.utcMilliseconds': null, //- aliases for millisecond.range.
  'd3.timeSecond': null, 'd3.utcSecond': null, //- the second interval.
  'd3.timeSeconds': null, 'd3.utcSeconds': null, //- aliases for second.range.
  'd3.timeMinute': null, 'd3.utcMinute': null, //- the minute interval.
  'd3.timeMinutes': null, 'd3.utcMinutes': null, //- aliases for minute.range.
  'd3.timeHour': null, 'd3.utcHour': null, //- the hour interval.
  'd3.timeHours': null, 'd3.utcHours': null, //- aliases for hour.range.
  'd3.timeDay': null, 'd3.utcDay': null, //- the day interval.
  'd3.timeDays': null, 'd3.utcDays': null, //- aliases for day.range.
  'd3.timeWeek': null, 'd3.utcWeek': null, //- aliases for sunday.
  'd3.timeWeeks': null, 'd3.utcWeeks': null, //- aliases for week.range.
  'd3.timeSunday': null, 'd3.utcSunday': null, //- the week interval, starting on Sunday.
  'd3.timeSundays': null, 'd3.utcSundays': null, //- aliases for sunday.range.
  'd3.timeMonday': null, 'd3.utcMonday': null, //- the week interval, starting on Monday.
  'd3.timeMondays': null, 'd3.utcMondays': null, //- aliases for monday.range.
  'd3.timeTuesday': null, 'd3.utcTuesday': null, //- the week interval, starting on Tuesday.
  'd3.timeTuesdays': null, 'd3.utcTuesdays': null, //- aliases for tuesday.range.
  'd3.timeWednesday': null, 'd3.utcWednesday': null, //- the week interval, starting on Wednesday.
  'd3.timeWednesdays': null, 'd3.utcWednesdays': null, //- aliases for wednesday.range.
  'd3.timeThursday': null, 'd3.utcThursday': null, //- the week interval, starting on Thursday.
  'd3.timeThursdays': null, 'd3.utcThursdays': null, //- aliases for thursday.range.
  'd3.timeFriday': null, 'd3.utcFriday': null, //- the week interval, starting on Friday.
  'd3.timeFridays': null, 'd3.utcFridays': null, //- aliases for friday.range.
  'd3.timeSaturday': null, 'd3.utcSaturday': null, //- the week interval, starting on Saturday.
  'd3.timeSaturdays': null, 'd3.utcSaturdays': null, //- aliases for saturday.range.
  'd3.timeMonth': null, 'd3.utcMonth': null, //- the month interval.
  'd3.timeMonths': null, 'd3.utcMonths': null, //- aliases for month.range.
  'd3.timeYear': null, 'd3.utcYear': null, //- the year interval.
  'd3.timeYears': null, 'd3.utcYears': null, //- aliases for year.range.

  // Timers (d3-timer)
  // An efficient queue for managing thousands of concurrent animations.

  'd3.now': null, //- get the current high-resolution time.
  'd3.timer': null, //- schedule a new timer.
  'timer.restart': null, //- reset the timer’s start time and callback.
  'timer.stop': null, //- stop the timer.
  'd3.timerFlush': null, //- immediately execute any eligible timers.
  'd3.timeout': null, //- schedule a timer that stops on its first callback.
  'd3.interval': null, //- schedule a timer that is called with a configurable period.

  // Transitions (d3-transition)
  // Animated transitions for selections.

  'selection.transition': null, //- schedule a transition for the selected elements.
  'selection.interrupt': null, //- interrupt and cancel transitions on the selected elements.
  'd3.transition': null, //- schedule a transition on the root document element.
  'transition.select': null, //- schedule a transition on the selected elements.
  'transition.selectAll': null, //- schedule a transition on the selected elements.
  'transition.filter': null, //- filter elements based on data.
  'transition.merge': null, //- merge this transition with another.
  'transition.selection': null, //- returns a selection for this transition.
  'transition.transition': null, //- schedule a new transition following this one.
  'transition.call': null, //- call a function with this transition.
  'transition.nodes': null, //- returns an array of all selected elements.
  'transition.node': null, //- returns the first (non-null) element.
  'transition.size': null, //- returns the count of elements.
  'transition.empty': null, //- returns true if this transition is empty.
  'transition.each': null, //- call a function for each element.
  'transition.on': null, //- add or remove transition event listeners.
  'transition.attr': null, //- tween the given attribute using the default interpolator.
  'transition.attrTween': null, //- tween the given attribute using a custom interpolator.
  'transition.style': null, //- tween the given style property using the default interpolator.
  'transition.styleTween': null, //- tween the given style property using a custom interpolator.
  'transition.text': null, //- set the text content when the transition starts.
  'transition.remove': null, //- remove the selected elements when the transition ends.
  'transition.tween': null, //- run custom code during the transition.
  'transition.delay': null, //- specify per-element delay in milliseconds.
  'transition.duration': null, //- specify per-element duration in milliseconds.
  'transition.ease': null, //- specify the easing function.
  'd3.active': null, //- select the active transition for a given node.
  'd3.interrupt': null, //-

  // Voronoi Diagrams (d3-voronoi)
  // Compute the Voronoi diagram of a given set of points.

  'd3.voronoi': null, //- create a new Voronoi generator.
  'voronoi': null, //- generate a new Voronoi diagram for the given points.
  'voronoi.polygons': null, //- compute the Voronoi polygons for the given points.
  'voronoi.triangles': null, //- compute the Delaunay triangles for the given points.
  'voronoi.links': null, //- compute the Delaunay links for the given points.
  'voronoi.x': null, //- set the x accessor.
  'voronoi.y': null, //- set the y accessor.
  'voronoi.extent': null, //- set the observed extent of points.
  'voronoi.size': null, //- set the observed extent of points.
  'diagram.polygons': null, //- compute the polygons for this Voronoi diagram.
  'diagram.triangles': null, //- compute the triangles for this Voronoi diagram.
  'diagram.links': null, //- compute the links for this Voronoi diagram.
  'diagram.find': null, //- find the closest point in this Voronoi diagram.

  // Zooming (d3-zoom)
  // Pan and zoom SVG, HTML or Canvas using mouse or touch input.

  'd3.zoom': null, //- create a zoom behavior.
  'zoom': null, //- apply the zoom behavior to the selected elements.
  'zoom.transform': null, //- change the transform for the selected elements.
  'zoom.translateBy': null, //- translate the transform for the selected elements.
  'zoom.scaleBy': null, //- scale the transform for the selected elements.
  'zoom.scaleTo': null, //- scale the transform for the selected elements.
  'zoom.filter': null, //- control which input events initiate zooming.
  'zoom.extent': null, //- set the extent of the viewport.
  'zoom.scaleExtent': null, //- set the allowed scale range.
  'zoom.translateExtent': null, //- set the extent of the zoomable world.
  'zoom.duration': null, //- set the duration of zoom transitions.
  'zoom.interpolate': null, //- control the interpolation of zoom transitions.
  'zoom.on': null, //- listen for zoom events.
  'd3.zoomTransform': null, //- get the zoom transform for a given element.
  'transform.scale': null, //- scale a transform by the specified amount.
  'transform.translate': null, //- translate a transform by the specified amount.
  'transform.apply': null, //- apply the transform to the given point.
  'transform.applyX': null, //- apply the transform to the given x-coordinate.
  'transform.applyY': null, //- apply the transform to the given y-coordinate.
  'transform.invert': null, //- unapply the transform to the given point.
  'transform.invertX': null, //- unapply the transform to the given x-coordinate.
  'transform.invertY': null, //- unapply the transform to the given y-coordinate.
  'transform.rescaleX': null, //- apply the transform to an x-scale’s domain.
  'transform.rescaleY': null, //- apply the transform to a y-scale’s domain.
  'transform.toString': null, //- format the transform as an SVG transform string.
  'd3.zoomIdentity': null}; //- the identity transform.
  return D3methods;
}

function parseVal() {
  let val = '';
  const scriptElements = document.querySelectorAll("script");
  // Exclude last script tag in for loop because last script tag will be this parser
  for (let i = 0; i < scriptElements.length - 1; i += 1) {
    const elementString = scriptElements[i].innerHTML;
    if (elementString.includes('d3')) val = elementString;
  }
  if (val === '') return 'No D3 script found!';

  const D3methods = returnD3methods();

  const cache = {};
  let word = '';
  let methodName = '';
  let nestedParensCount = 0;
  let D3methodsbool = false;
  let method = '';
  let methodholder = '';
  let methodObject = '';
  for (let i = 0; i < val.length; i += 1) {
    if (D3methodsbool) {
      if (word.includes('(') && !word.includes(')') && val[i] === '(') {
        nestedParensCount += 1;
        word += val[i];
        continue;
      }
      
      if (val[i] === '.' || val[i] === '(' || val[i] === ';') {
        if (word.includes('.') && methodName === '') {
          methodName = word;
          word = '';
        }
        
        if (word.includes('(') && word.includes(')')) {
          if (nestedParensCount > 0) {
            let i = 0;
            word = word.replace('(', '').replace(/\)/g, (match, count) => {
              i += 1;
              return i === nestedParensCount + 1 ? '' : match;
            }).split(',');
          } else {
            word = word.replace('(', '').replace(')', '').split(',');
          }
          //console.log(word[0]);
          
          // if (methodholder !== '') methodName = methodholder + methodName;
          if (word[0].trim() === '') {
            methodholder = methodName.slice(1);
            if (val[i] === '(') {
              let start = i;
              while (val[i] !== ';' && val[i] !== '.') {
                i += 1;
              }
              word.push(val.slice(start + 1, i - 1));
            }
          }
          
          cache[i] = {
          	method: true,
            methodObject: methodObject,
            methodName: methodName,
            args: word,
          }

          if (word[0].trim() === '') methodObject += methodName + '()';

          if (methodName === '.append' || methodName === '.select') {
            methodObject += methodName + '(' + word[0].trim() + ')';
          }
          
          if (val[i] === ';') {
              cache[i + 1] = {
            	final: true,
            }
            i += 1;
            methodObject = '';
            methodholder = '';
          }
          
          methodName = '';
          word = '';
          D3methodsbool = false;
          method = '';
          i -= 1;
          continue;
        }
        nestedParensCount = 0;
      }
      word += val[i];
    } else {
      if (val[i] === '.') {
        let end = i;
        let count = 0;
        while (val[end] !== '(') {
          if (val[end] === '=' || val[end] === ',' || count > 30) break;
          count += 1;
          end += 1;
        }
        method = val.slice(i, end).trim();
        //console.log(method, i);
      }
      if (method !== '') {
        if (D3methods[method] === null || D3methods['d3'+method] === null || D3methods[methodholder + method] === null) {
          D3methodsbool = true;
          if (word !== '') {
            cache[i] = word;
            let start = word.length - 1;
            let end = word.length;
            while (word[start] !== ' ' && start > 0) {
              start -= 1;
            }
            methodObject = word.slice(start + 1, end).trim();
          }
          word = '';
          method = '';
          i -= 1;
          continue;
        } else {
          D3methodsbool = false;
          method = '';
        }
      }
      word += val[i];
      if (i === val.length - 1) cache[i] = word;
    }
  }
  return cache;
}

function reCode(parsed) {
  let code = '';
  Object.keys(parsed).forEach(key => {
    if (parsed[key]['final'] === true) {
      code += ';';
    }
    if (typeof parsed[key] === 'object') {
      if (parsed[key]['method'] === true) {
        code += parsed[key]['methodName'] + '(';
        parsed[key]['args'].forEach((args, i, c) => {
          if (args === '' && c.length > 1) code += ')(';
          else {
            if (c.length - 1 === i && args.includes('\n')) {
              let start = args.indexOf('\n');
              code += args.slice(0, start) + ')' + args.slice(start);
            }
            else if (c.length - 1 === i && !args.includes('\n')) code += args + ')';
            else code += args + ',';
          }
        });
      }
    } else {
      code += parsed[key];
    }
  });
  return code;
}

console.log(parseVal());

console.log(reCode(parseVal()));