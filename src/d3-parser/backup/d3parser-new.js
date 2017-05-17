function returnD3methods() {

  const D3methods = {

    // Statistics
    // Methods for computing basic summary statistics.

    'd3.min': 'exist', //- compute the minimum value in an array.
    'd3.max': 'exist', //- compute the maximum value in an array.
    'd3.extent': 'exist', //- compute the minimum and maximum value in an array.
    'd3.sum': 'exist', //- compute the sum of an array of numbers.
    'd3.mean': 'exist', //- compute the arithmetic mean of an array of numbers.
    'd3.median': 'exist', //- compute the median of an array of numbers (the 0.5-quantile).
    'd3.quantile': 'exist', //- compute a quantile for a sorted array of numbers.
    'd3.variance': 'exist', //- compute the variance of an array of numbers.
    'd3.deviation': 'exist', //- compute the standard deviation of an array of numbers.

    // Search
    // Methods for searching arrays for a specific element.

    'd3.scan': 'exist', //- linear search for an element using a comparator.
    'd3.bisect': 'exist', //- binary search for a value in a sorted array.
    'd3.bisectRight': 'exist', //- binary search for a value in a sorted array.
    'd3.bisectLeft': 'exist', //- binary search for a value in a sorted array.
    'd3.bisector': 'exist', //- bisect using an accessor or comparator.
    'bisector.left': 'exist', //- bisectLeft, with the given comparator.
    'bisector.right': 'exist', //- bisectRight, with the given comparator.
    'd3.ascending': 'exist', //- compute the natural order of two values.
    'd3.descending': 'exist', //- compute the natural order of two values.

    // Transformations
    // Methods for transforming arrays and for generating new arrays.

    'd3.cross': 'exist', //- compute the Cartesian product of two arrays.
    'd3.merge': 'exist', //- merge multiple arrays into one array.
    'd3.pairs': 'exist', //- create an array of adjacent pairs of elements.
    'd3.permute': 'exist', //- reorder an array of elements according to an array of indexes.
    'd3.shuffle': 'exist', //- randomize the order of an array.
    'd3.ticks': 'exist', //- generate representative values from a numeric interval.
    'd3.tickIncrement': 'exist', //- generate representative values from a numeric interval.
    'd3.tickStep': 'exist', //- generate representative values from a numeric interval.
    'd3.range': 'exist', //- generate a range of numeric values.
    'd3.transpose': 'exist', //- transpose an array of arrays.
    'd3.zip': 'exist', //- transpose a variable number of arrays.

    // Histograms
    // Bin discrete samples into continuous, non-overlapping intervals.

    'd3.histogram': 'exist', //- create a new histogram generator.
    'histogram': 'exist', //- compute the histogram for the given array of samples.
    'histogram.value': 'exist', //- specify a value accessor for each sample.
    'histogram.domain': 'exist', //- specify the interval of observable values.
    'histogram.thresholds': 'exist', //- specify how values are divided into bins.
    'd3.thresholdFreedmanDiaconis': 'exist', //- the Freedman–Diaconis binning rule.
    'd3.thresholdScott': 'exist', //- Scott’s normal reference binning rule.
    'd3.thresholdSturges': 'exist', //- Sturges’ binning formula.

    // Axes (d3-axis)
    // Human-readable reference marks for scales.

    'd3.axisTop': 'exist', //- create a new top-oriented axis generator.
    'd3.axisRight': 'exist', //- create a new right-oriented axis generator.
    'd3.axisBottom': 'exist', //- create a new bottom-oriented axis generator.
    'd3.axisLeft': 'exist', //- create a new left-oriented axis generator.
    'axis': 'exist', //- generate an axis for the given selection.
    'axis.scale': 'exist', //- set the scale.
    'axis.ticks': 'exist', //- customize how ticks are generated and formatted.
    'axis.tickArguments': 'exist', //- customize how ticks are generated and formatted.
    'axis.tickValues': 'exist', //- set the tick values explicitly.
    'axis.tickFormat': 'exist', //- set the tick format explicitly.
    'axis.tickSize': 'exist', //- set the size of the ticks.
    'axis.tickSizeInner': 'exist', //- set the size of inner ticks.
    'axis.tickSizeOuter': 'exist', //- set the size of outer (extent) ticks.
    'axis.tickPadding': 'exist', //- set the padding between ticks and labels.

    // Brushes (d3-brush)
    // Select a one- or two-dimensional region using the mouse or touch.

    'd3.brush': 'exist', //- create a new two-dimensional brush.
    'd3.brushX': 'exist', //- create a brush along the x-dimension.
    'd3.brushY': 'exist', //- create a brush along the y-dimension.
    'brush': 'exist', //- apply the brush to a selection.
    'brush.move': 'exist', //- move the brush selection.
    'brush.extent': 'exist', //- define the brushable region.
    'brush.filter': 'exist', //- control which input events initiate brushing.
    'brush.handleSize': 'exist', //- set the size of the brush handles.
    'brush.on': 'exist', //- listen for brush events.
    'd3.brushSelection': 'exist', //- get the brush selection for a given node.

    // Chords (d3-chord)

    'd3.chord': 'exist', //- create a new chord layout.
    'chord': 'exist', //- compute the layout for the given matrix.
    'chord.padAngle': 'exist', //- set the padding between adjacent groups.
    'chord.sortGroups': 'exist', //- define the group order.
    'chord.sortSubgroups': 'exist', //- define the source and target order within groups.
    'chord.sortChords': 'exist', //- define the chord order across groups.
    'd3.ribbon': 'exist', //- create a ribbon shape generator.
    'ribbon': 'exist', //- generate a ribbon shape.
    'ribbon.source': 'exist', //- set the source accessor.
    'ribbon.target': 'exist', //- set the target accessor.
    'ribbon.radius': 'exist', //- set the ribbon source or target radius.
    'ribbon.startAngle': 'exist', //- set the ribbon source or target start angle.
    'ribbon.endAngle': 'exist', //- set the ribbon source or target end angle.
    'ribbon.context': 'exist', //- set the render context.

    // Collections (d3-collection)
    // Handy data structures for elements keyed by string.
    // Objects
    // Methods for converting associative arrays (objects) to arrays.

    'd3.keys': 'exist', //- list the keys of an associative array.
    'd3.values': 'exist', //- list the values of an associated array.
    'd3.entries': 'exist', //- list the key-value entries of an associative array.

    // Maps
    // Like ES6 Map, but with string keys and a few other differences.

    'd3.map': 'exist', //- create a new, empty map.
    'map.has': 'exist', //- returns true if the map contains the given key.
    'map.get': 'exist', //- get the value for the given key.
    'map.set': 'exist', //- set the value for the given key.
    'map.remove': 'exist', //- remove the entry for given key.
    'map.clear': 'exist', //- remove all entries.
    'map.keys': 'exist', //- get the array of keys.
    'map.values': 'exist', //- get the array of values.
    'map.entries': 'exist', //- get the array of entries (key-values objects).
    'map.each': 'exist', //- call a function for each entry.
    'map.empty': 'exist', //- returns false if the map has at least one entry.
    'map.size': 'exist', //- compute the number of entries.

    // Sets
    // Like ES6 Set, but with string keys and a few other differences.

    'd3.set': 'exist', //- create a new, empty set.
    'set.has': 'exist', //- returns true if the set contains the given value.
    'set.add': 'exist', //- add the given value.
    'set.remove': 'exist', //- remove the given value.
    'set.clear': 'exist', //- remove all values.
    'set.values': 'exist', //- get the array of values.
    'set.each': 'exist', //- call a function for each value.
    'set.empty': 'exist', //- returns true if the set has at least one value.
    'set.size': 'exist', //- compute the number of values.

    // Nests
    // Group data into arbitrary hierarchies.

    'd3.nest': 'exist', //- create a new nest generator.
    'nest.key': 'exist', //- add a level to the nest hierarchy.
    'nest.sortKeys': 'exist', //- sort the current nest level by key.
    'nest.sortValues': 'exist', //- sort the leaf nest level by value.
    'nest.rollup': 'exist', //- specify a rollup function for leaf values.
    'nest.map': 'exist', //- generate the nest, returning a map.
    'nest.object': 'exist', //- generate the nest, returning an associative array.
    'nest.entries': 'exist', //- generate the nest, returning an array of key-values tuples.

    // Colors (d3-color)
    // Color manipulation and color space conversion.

    'd3.color': 'exist', //- parse the given CSS color specifier.
    'color.rgb': 'exist', //- compute the RGB equivalent of this color.
    'color.brighter': 'exist', //- create a brighter copy of this color.
    'color.darker': 'exist', //- create a darker copy of this color.
    'color.displayable': 'exist', //- returns true if the color is displayable on standard hardware.
    'color.toString': 'exist', //- format the color as an RGB hexadecimal string.
    'd3.rgb': 'exist', //- create a new RGB color.
    'd3.hsl': 'exist', //- create a new HSL color.
    'd3.lab': 'exist', //- create a new Lab color.
    'd3.hcl': 'exist', //- create a new HCL color.
    'd3.cubehelix': 'exist', //- create a new Cubehelix color.

    //Dispatches (d3-dispatch)
    //Separate concerns using named callbacks.

    'd3.dispatch': 'exist', //- create a custom event dispatcher.
    'dispatch.on': 'exist', //- register or unregister an event listener.
    'dispatch.copy': 'exist', //- create a copy of a dispatcher.
    'dispatch.call': 'exist', //- dispatch an event to registered listeners.
    'dispatch.apply': 'exist', //- dispatch an event to registered listeners.

    // Dragging (d3-drag)
    // Drag and drop SVG, HTML or Canvas using mouse or touch input.

    'd3.drag': 'exist', //- create a drag behavior.
    'drag': 'exist', //- apply the drag behavior to a selection.
    'drag.container': 'exist', //- set the coordinate system.
    'drag.filter': 'exist', //- ignore some initiating input events.
    'drag.subject': 'exist', //- set the thing being dragged.
    'drag.on': 'exist', //- listen for drag events.
    'event.on': 'exist', //- listen for drag events on the current gesture.
    'd3.dragDisable': 'exist', //-
    'd3.dragEnable': 'exist', //-

    // Delimiter-Separated Values (d3-dsv)
    // Parse and format delimiter-separated values, most commonly CSV and TSV.

    'd3.dsvFormat': 'exist', //- create a new parser and formatter for the given delimiter.
    'dsv.parse': 'exist', //- parse the given string, returning an array of objects.
    'dsv.parseRows': 'exist', //- parse the given string, returning an array of rows.
    'dsv.format': 'exist', //- format the given array of objects.
    'dsv.formatRows': 'exist', //- format the given array of rows.
    'd3.csvParse': 'exist', //- parse the given CSV string, returning an array of objects.
    'd3.csvParseRows': 'exist', //- parse the given CSV string, returning an array of rows.
    'd3.csvFormat': 'exist', //- format the given array of objects as CSV.
    'd3.csvFormatRows': 'exist', //- format the given array of rows as CSV.
    'd3.tsvParse': 'exist', //- parse the given TSV string, returning an array of objects.
    'd3.tsvParseRows': 'exist', //- parse the given TSV string, returning an array of rows.
    'd3.tsvFormat': 'exist', //- format the given array of objects as TSV.
    'd3.tsvFormatRows': 'exist', //- format the given array of rows as TSV.

    // Easings (d3-ease)
    // Easing functions for smooth animation.

    'ease': 'exist', //- ease the given normalized time.
    'd3.easeLinear': 'exist', //- linear easing; the identity function.
    'd3.easePolyIn': 'exist', //- polynomial easing; raises time to the given power.
    'd3.easePolyOut': 'exist', //- reverse polynomial easing.
    'd3.easePolyInOut': 'exist', //- symmetric polynomial easing.
    'poly.exponent': 'exist', //- specify the polynomial exponent.
    'd3.easeQuad': 'exist', //- an alias for easeQuadInOut.
    'd3.easeQuadIn': 'exist', //- quadratic easing; squares time.
    'd3.easeQuadOut': 'exist', //- reverse quadratic easing.
    'd3.easeQuadInOut': 'exist', //- symmetric quadratic easing.
    'd3.easeCubic': 'exist', //- an alias for easeCubicInOut.
    'd3.easeCubicIn': 'exist', //- cubic easing; cubes time.
    'd3.easeCubicOut': 'exist', //- reverse cubic easing.
    'd3.easeCubicInOut': 'exist', //- symmetric cubic easing.
    'd3.easeSin': 'exist', //- an alias for easeSinInOut.
    'd3.easeSinIn': 'exist', //- sinusoidal easing.
    'd3.easeSinOut': 'exist', //- reverse sinusoidal easing.
    'd3.easeSinInOut': 'exist', //- symmetric sinusoidal easing.
    'd3.easeExp': 'exist', //- an alias for easeExpInOut.
    'd3.easeExpIn': 'exist', //- exponential easing.
    'd3.easeExpOut': 'exist', //- reverse exponential easing.
    'd3.easeExpInOut': 'exist', //- symmetric exponential easing.
    'd3.easeCircle': 'exist', //- an alias for easeCircleInOut.
    'd3.easeCircleIn': 'exist', //- circular easing.
    'd3.easeCircleOut': 'exist', //- reverse circular easing.
    'd3.easeCircleInOut': 'exist', //- symmetric circular easing.
    'd3.easeElastic': 'exist', //- an alias for easeElasticOut.
    'd3.easeElasticIn': 'exist', //- elastic easing, like a rubber band.
    'd3.easeElasticOut': 'exist', //- reverse elastic easing.
    'd3.easeElasticInOut': 'exist', //- symmetric elastic easing.
    'elastic.amplitude': 'exist', //- specify the elastic amplitude.
    'elastic.period': 'exist', //- specify the elastic period.
    'd3.easeBack': 'exist', //- an alias for easeBackInOut.
    'd3.easeBackIn': 'exist', //- anticipatory easing, like a dancer bending his knees before jumping.
    'd3.easeBackOut': 'exist', //- reverse anticipatory easing.
    'd3.easeBackInOut': 'exist', //- symmetric anticipatory easing.
    'back.overshoot': 'exist', //- specify the amount of overshoot.
    'd3.easeBounce': 'exist', //- an alias for easeBounceOut.
    'd3.easeBounceIn': 'exist', //- bounce easing, like a rubber ball.
    'd3.easeBounceOut': 'exist', //- reverse bounce easing.
    'd3.easeBounceInOut': 'exist', //- symmetric bounce easing.

    // Forces (d3-force)
    // Force-directed graph layout using velocity Verlet integration.

    'd3.forceSimulation': 'exist', //- create a new force simulation.
    'simulation.restart': 'exist', //- reheat and restart the simulation’s timer.
    'simulation.stop': 'exist', //- stop the simulation’s timer.
    'simulation.tick': 'exist', //- advance the simulation one step.
    'simulation.nodes': 'exist', //- set the simulation’s nodes.
    'simulation.alpha': 'exist', //- set the current alpha.
    'simulation.alphaMin': 'exist', //- set the minimum alpha threshold.
    'simulation.alphaDecay': 'exist', //- set the alpha exponential decay rate.
    'simulation.alphaTarget': 'exist', //- set the target alpha.
    'simulation.velocityDecay': 'exist', //- set the velocity decay rate.
    'simulation.force': 'exist', //- add or remove a force.
    'simulation.find': 'exist', //- find the closest node to the given position.
    'simulation.on': 'exist', //- add or remove an event listener.
    'force': 'exist', //- apply the force.
    'force.initialize': 'exist', //- initialize the force with the given nodes.
    'd3.forceCenter': 'exist', //- create a centering force.
    'center.x': 'exist', //- set the center x-coordinate.
    'center.y': 'exist', //- set the center y-coordinate.
    'd3.forceCollide': 'exist', //- create a circle collision force.
    'collide.radius': 'exist', //- set the circle radius.
    'collide.strength': 'exist', //- set the collision resolution strength.
    'collide.iterations': 'exist', //- set the number of iterations.
    'd3.forceLink': 'exist', //- create a link force.
    'link.links': 'exist', //- set the array of links.
    'link.id': 'exist', //- link nodes by numeric index or string identifier.
    'link.distance': 'exist', //- set the link distance.
    'link.strength': 'exist', //- set the link strength.
    'link.iterations': 'exist', //- set the number of iterations.
    'd3.forceManyBody': 'exist', //- create a many-body force.
    'manyBody.strength': 'exist', //- set the force strength.
    'manyBody.theta': 'exist', //- set the Barnes–Hut approximation accuracy.
    'manyBody.distanceMin': 'exist', //- limit the force when nodes are close.
    'manyBody.distanceMax': 'exist', //- limit the force when nodes are far.
    'd3.forceX': 'exist', //- create an x-positioning force.
    'x.strength': 'exist', //- set the force strength.
    'x.x': 'exist', //- set the target x-coordinate.
    'd3.forceY': 'exist', //- create an y-positioning force.
    'y.strength': 'exist', //- set the force strength.
    'y.y': 'exist', //- set the target y-coordinate.

    // Number Formats (d3-format)
    // Format numbers for human consumption.

    'd3.format': 'exist', //- alias for locale.format on the default locale.
    'd3.formatPrefix': 'exist', //- alias for locale.formatPrefix on the default locale.
    'd3.formatSpecifier': 'exist', //- parse a number format specifier.
    'd3.formatLocale': 'exist', //- define a custom locale.
    'd3.formatDefaultLocale': 'exist', //- define the default locale.
    'locale.format': 'exist', //- create a number format.
    'locale.formatPrefix': 'exist', //- create a SI-prefix number format.
    'd3.precisionFixed': 'exist', //- compute decimal precision for fixed-point notation.
    'd3.precisionPrefix': 'exist', //- compute decimal precision for SI-prefix notation.
    'd3.precisionRound': 'exist', //- compute significant digits for rounded notation.

    // Geographies (d3-geo)
    // Geographic projections, shapes and math.

    // Paths

    'd3.geoPath': 'exist', //- create a new geographic path generator.
    'path': 'exist', //- project and render the specified feature.
    'path.area': 'exist', //- compute the projected planar area of a given feature.
    'path.bounds': 'exist', //- compute the projected planar bounding box of a given feature.
    'path.centroid': 'exist', //- compute the projected planar centroid of a given feature.
    'path.measure': 'exist', //- compute the projected planar length of a given feature.
    'path.projection': 'exist', //- set the geographic projection.
    'path.context': 'exist', //- set the render context.
    'path.pointRadius': 'exist', //- set the radius to display point features.

    // Projections

    'projection': 'exist', //- project the specified point from the sphere to the plane.
    'projection.invert': 'exist', //- unproject the specified point from the plane to the sphere.
    'projection.stream': 'exist', //- wrap the specified stream to project geometry.
    'projection.clipAngle': 'exist', //- set the radius of the clip circle.
    'projection.clipExtent': 'exist', //- set the viewport clip extent, in pixels.
    'projection.scale': 'exist', //- set the scale factor.
    'projection.translate': 'exist', //- set the translation offset.
    'projection.fitExtent': 'exist', //- set the scale and translate to fit a GeoJSON object.
    'projection.fitSize': 'exist', //- set the scale and translate to fit a GeoJSON object.
    'projection.center': 'exist', //- set the center point.
    'projection.rotate': 'exist', //- set the three-axis spherical rotation angles.
    'projection.precision': 'exist', //- set the precision threshold for adaptive sampling.
    'd3.geoAlbers': 'exist', //- the Albers equal-area conic projection.
    'd3.geoAlbersUsa': 'exist', //- a composite Albers projection for the United States.
    'd3.geoAzimuthalEqualArea': 'exist', //- the azimuthal equal-area projection.
    'd3.geoAzimuthalEquidistant': 'exist', //- the azimuthal equidistant projection.
    'd3.geoConicConformal': 'exist', //- the conic conformal projection.
    'd3.geoConicEqualArea': 'exist', //- the conic equal-area (Albers) projection.
    'd3.geoConicEquidistant': 'exist', //- the conic equidistant projection.
    'conic.parallels': 'exist', //- set the two standard parallels.
    'd3.geoEquirectangular': 'exist', //- the equirectangular (plate carreé) projection.
    'd3.geoGnomonic': 'exist', //- the gnomonic projection.
    'd3.geoMercator': 'exist', //- the spherical Mercator projection.
    'd3.geoOrthographic': 'exist', //- the azimuthal orthographic projection.
    'd3.geoStereographic': 'exist', //- the azimuthal stereographic projection.
    'd3.geoTransverseMercator': 'exist', //- the transverse spherical Mercator projection.
    'project': 'exist', //- project the specified point from the sphere to the plane.
    'project.invert': 'exist', //- unproject the specified point from the plane to the sphere.
    'd3.geoProjection': 'exist', //- create a custom projection.
    'd3.geoProjectionMutator': 'exist', //- create a custom configurable projection.
    'd3.geoAzimuthalEqualAreaRaw': 'exist', //-
    'd3.geoAzimuthalEquidistantRaw': 'exist', //-
    'd3.geoConicConformalRaw': 'exist', //-
    'd3.geoConicEqualAreaRaw': 'exist', //-
    'd3.geoConicEquidistantRaw': 'exist', //-
    'd3.geoEquirectangularRaw': 'exist', //-
    'd3.geoGnomonicRaw': 'exist', //-
    'd3.geoMercatorRaw': 'exist', //-
    'd3.geoOrthographicRaw': 'exist', //-
    'd3.geoStereographicRaw': 'exist', //-
    'd3.geoTransverseMercatorRaw': 'exist', //-

    // Spherical Math

    'd3.geoArea': 'exist', //- compute the spherical area of a given feature.
    'd3.geoBounds': 'exist', //- compute the latitude-longitude bounding box for a given feature.
    'd3.geoCentroid': 'exist', //- compute the spherical centroid of a given feature.
    'd3.geoContains': 'exist', //- test whether a point is inside a given feature.
    'd3.geoDistance': 'exist', //- compute the great-arc distance between two points.
    'd3.geoLength': 'exist', //- compute the length of a line string or the perimeter of a polygon.
    'd3.geoInterpolate': 'exist', //- interpolate between two points along a great arc.
    'd3.geoRotation': 'exist', //- create a rotation function for the specified angles.
    'rotation': 'exist', //- rotate the given point around the sphere.
    'rotation.invert': 'exist', //- unrotate the given point around the sphere.

    // Spherical Shapes

    'd3.geoCircle': 'exist', //- create a circle generator.
    'circle': 'exist', //- generate a piecewise circle as a Polygon.
    'circle.center': 'exist', //- specify the circle center in latitude and longitude.
    'circle.radius': 'exist', //- specify the angular radius in degrees.
    'circle.precision': 'exist', //- specify the precision of the piecewise circle.
    'd3.geoGraticule': 'exist', //- create a graticule generator.
    'graticule': 'exist', //- generate a MultiLineString of meridians and parallels.
    'graticule.lines': 'exist', //- generate an array of LineStrings of meridians and parallels.
    'graticule.outline': 'exist', //- generate a Polygon of the graticule’s extent.
    'graticule.extent': 'exist', //- get or set the major & minor extents.
    'graticule.extentMajor': 'exist', //- get or set the major extent.
    'graticule.extentMinor': 'exist', //- get or set the minor extent.
    'graticule.step': 'exist', //- get or set the major & minor step intervals.
    'graticule.stepMajor': 'exist', //- get or set the major step intervals.
    'graticule.stepMinor': 'exist', //- get or set the minor step intervals.
    'graticule.precision': 'exist', //- get or set the latitudinal precision.
    'd3.geoGraticule10': 'exist', //- generate the default 10° global graticule.

    // Streams

    'd3.geoStream': 'exist', //- convert a GeoJSON object to a geometry stream.
    'stream.point': 'exist', //-
    'stream.lineStart': 'exist', //-
    'stream.lineEnd': 'exist', //-
    'stream.polygonStart': 'exist', //-
    'stream.polygonEnd': 'exist', //-
    'stream.sphere': 'exist', //-

    // Transforms

    'd3.geoIdentity': 'exist', //- scale, translate or clip planar geometry.
    'identity.reflectX': 'exist', //- reflect the x-dimension.
    'identity.reflectY': 'exist', //- reflect the y-dimension.
    'd3.geoTransform': 'exist', //- define a custom geometry transform.

    // Hierarchies (d3-hierarchy)
    // Layout algorithms for visualizing hierarchical data.

    'd3.hierarchy': 'exist', //- constructs a root node from hierarchical data.
    'node.ancestors': 'exist', //- generate an array of ancestors.
    'node.descendants': 'exist', //- generate an array of descendants.
    'node.leaves': 'exist', //- generate an array of leaves.
    'node.path': 'exist', //- generate the shortest path to another node.
    'node.links': 'exist', //- generate an array of links.
    'node.sum': 'exist', //- evaluate and aggregate quantitative values.
    'node.sort': 'exist', //- sort all descendant siblings.
    'node.count': 'exist', //- count the number of leaves.
    'node.each': 'exist', //- breadth-first traversal.
    'node.eachAfter': 'exist', //- post-order traversal.
    'node.eachBefore': 'exist', //- pre-order traversal.
    'node.copy': 'exist', //- copy a hierarchy.
    'd3.stratify': 'exist', //- create a new stratify operator.
    'stratify': 'exist', //- construct a root node from tabular data.
    'stratify.id': 'exist', //- set the node id accessor.
    'stratify.parentId': 'exist', //- set the parent node id accessor.
    'd3.cluster': 'exist', //- create a new cluster (dendrogram) layout.
    'cluster': 'exist', //- layout the specified hierarchy in a dendrogram.
    'cluster.size': 'exist', //- set the layout size.
    'cluster.nodeSize': 'exist', //- set the node size.
    'cluster.separation': 'exist', //- set the separation between leaves.
    'd3.tree': 'exist', //- create a new tidy tree layout.
    'tree': 'exist', //- layout the specified hierarchy in a tidy tree.
    'tree.size': 'exist', //- set the layout size.
    'tree.nodeSize': 'exist', //- set the node size.
    'tree.separation': 'exist', //- set the separation between nodes.
    'd3.treemap': 'exist', //- create a new treemap layout.
    'treemap': 'exist', //- layout the specified hierarchy as a treemap.
    'treemap.tile': 'exist', //- set the tiling method.
    'treemap.size': 'exist', //- set the layout size.
    'treemap.round': 'exist', //- set whether the output coordinates are rounded.
    'treemap.padding': 'exist', //- set the padding.
    'treemap.paddingInner': 'exist', //- set the padding between siblings.
    'treemap.paddingOuter': 'exist', //- set the padding between parent and children.
    'treemap.paddingTop': 'exist', //- set the padding between the parent’s top edge and children.
    'treemap.paddingRight': 'exist', //- set the padding between the parent’s right edge and children.
    'treemap.paddingBottom': 'exist', //- set the padding between the parent’s bottom edge and children.
    'treemap.paddingLeft': 'exist', //- set the padding between the parent’s left edge and children.
    'd3.treemapBinary': 'exist', //- tile using a balanced binary tree.
    'd3.treemapDice': 'exist', //- tile into a horizontal row.
    'd3.treemapSlice': 'exist', //- tile into a vertical column.
    'd3.treemapSliceDice': 'exist', //- alternate between slicing and dicing.
    'd3.treemapSquarify': 'exist', //- tile using squarified rows per Bruls et. al.
    'd3.treemapResquarify': 'exist', //- like d3.treemapSquarify, but performs stable updates.
    'squarify.ratio': 'exist', //- set the desired rectangle aspect ratio.
    'd3.partition': 'exist', //- create a new partition (icicle or sunburst) layout.
    'partition': 'exist', //- layout the specified hierarchy as a partition diagram.
    'partition.size': 'exist', //- set the layout size.
    'partition.round': 'exist', //- set whether the output coordinates are rounded.
    'partition.padding': 'exist', //- set the padding.
    'd3.pack': 'exist', //- create a new circle-packing layout.
    'pack': 'exist', //- layout the specified hierarchy using circle-packing.
    'pack.radius': 'exist', //- set the radius accessor.
    'pack.size': 'exist', //- set the layout size.
    'pack.padding': 'exist', //- set the padding.
    'd3.packSiblings': 'exist', //- pack the specified array of circles.
    'd3.packEnclose': 'exist', //- enclose the specified array of circles.

    // Interpolators (d3-interpolate)
    // Interpolate numbers, colors, strings, arrays, objects, whatever!

    'd3.interpolate': 'exist', //- interpolate arbitrary values.
    'd3.interpolateArray': 'exist', //- interpolate arrays of arbitrary values.
    'd3.interpolateDate': 'exist', //- interpolate dates.
    'd3.interpolateNumber': 'exist', //- interpolate numbers.
    'd3.interpolateObject': 'exist', //- interpolate arbitrary objects.
    'd3.interpolateRound': 'exist', //- interpolate integers.
    'd3.interpolateString': 'exist', //- interpolate strings with embedded numbers.
    'd3.interpolateTransformCss': 'exist', //- interpolate 2D CSS transforms.
    'd3.interpolateTransformSvg': 'exist', //- interpolate 2D SVG transforms.
    'd3.interpolateZoom': 'exist', //- zoom and pan between two views.
    'd3.interpolateRgb': 'exist', //- interpolate RGB colors.
    'd3.interpolateRgbBasis': 'exist', //- generate a B-spline through a set of colors.
    'd3.interpolateRgbBasisClosed': 'exist', //- generate a closed B-spline through a set of colors.
    'd3.interpolateHsl': 'exist', //- interpolate HSL colors.
    'd3.interpolateHslLong': 'exist', //- interpolate HSL colors, the long way.
    'd3.interpolateLab': 'exist', //- interpolate Lab colors.
    'd3.interpolateHcl': 'exist', //- interpolate HCL colors.
    'd3.interpolateHclLong': 'exist', //- interpolate HCL colors, the long way.
    'd3.interpolateCubehelix': 'exist', //- interpolate Cubehelix colors.
    'd3.interpolateCubehelixLong': 'exist', //- interpolate Cubehelix colors, the long way.
    'interpolate.gamma': 'exist', //- apply gamma correction during interpolation.
    'd3.interpolateBasis': 'exist', //- generate a B-spline through a set of values.
    'd3.interpolateBasisClosed': 'exist', //- generate a closed B-spline through a set of values.
    'd3.quantize': 'exist', //- generate uniformly-spaced samples from an interpolator.

    // Paths (d3-path)
    // Serialize Canvas path commands to SVG.

    'd3.path': 'exist', //- create a new path serializer.
    'path.moveTo': 'exist', //- move to the given point.
    'path.closePath': 'exist', //- close the current subpath.
    'path.lineTo': 'exist', //- draw a straight line segment.
    'path.quadraticCurveTo': 'exist', //- draw a quadratic Bézier segment.
    'path.bezierCurveTo': 'exist', //- draw a cubic Bézier segment.
    'path.arcTo': 'exist', //- draw a circular arc segment.
    'path.arc': 'exist', //- draw a circular arc segment.
    'path.rect': 'exist', //- draw a rectangle.
    'path.toString': 'exist', //- serialize to an SVG path data string.

    // Polygons (d3-polygon)
    // Geometric operations for two-dimensional polygons.

    'd3.polygonArea': 'exist', //- compute the area of the given polygon.
    'd3.polygonCentroid': 'exist', //- compute the centroid of the given polygon.
    'd3.polygonHull': 'exist', //- compute the convex hull of the given points.
    'd3.polygonContains': 'exist', //- test whether a point is inside a polygon.
    'd3.polygonLength': 'exist', //- compute the length of the given polygon’s perimeter.

    // Quadtrees (d3-quadtree)
    // Two-dimensional recursive spatial subdivision.

    'd3.quadtree': 'exist', //- create a new, empty quadtree.
    'quadtree.x': 'exist', //- set the x accessor.
    'quadtree.y': 'exist', //- set the y accessor.
    'quadtree.add': 'exist', //- add a datum to a quadtree.
    'quadtree.addAll': 'exist', //-
    'quadtree.remove': 'exist', //- remove a datum from a quadtree.
    'quadtree.removeAll': 'exist', //-
    'quadtree.copy': 'exist', //- create a copy of a quadtree.
    'quadtree.root': 'exist', //- get the quadtree’s root node.
    'quadtree.data': 'exist', //- retrieve all data from the quadtree.
    'quadtree.size': 'exist', //- count the number of data in the quadtree.
    'quadtree.find': 'exist', //- quickly find the closest datum in a quadtree.
    'quadtree.visit': 'exist', //- selectively visit nodes in a quadtree.
    'quadtree.visitAfter': 'exist', //- visit all nodes in a quadtree.
    'quadtree.cover': 'exist', //- extend the quadtree to cover a point.
    'quadtree.extent': 'exist', //- extend the quadtree to cover an extent.

    // Queues (d3-queue)
    // Evaluate asynchronous tasks with configurable concurrency.

    'd3.queue': 'exist', //- manage the concurrent evaluation of asynchronous tasks.
    'queue.defer': 'exist', //- register a task for evaluation.
    'queue.abort': 'exist', //- abort any active tasks and cancel any pending ones.
    'queue.await': 'exist', //- register a callback for when tasks complete.
    'queue.awaitAll': 'exist', //- register a callback for when tasks complete.

    // Random Numbers (d3-random)
    // Generate random numbers from various distributions.

    'd3.randomUniform': 'exist', //- from a uniform distribution.
    'd3.randomNormal': 'exist', //- from a normal distribution.
    'd3.randomLogNormal': 'exist', //- from a log-normal distribution.
    'd3.randomBates': 'exist', //- from a Bates distribution.
    'd3.randomIrwinHall': 'exist', //- from an Irwin–Hall distribution.
    'd3.randomExponential': 'exist', //- from an exponential distribution.

    //Requests (d3-request)
    // A convenient alternative to asynchronous XMLHttpRequest.

    'd3.request': 'exist', //- make an asynchronous request.
    'request.header': 'exist', //- set a request header.
    'request.user': 'exist', //- set the user for authentication.
    'request.password': 'exist', //- set the password for authentication.
    'request.mimeType': 'exist', //- set the MIME type.
    'request.timeout': 'exist', //- set the timeout in milliseconds.
    'request.responseType': 'exist', //- set the response type.
    'request.response': 'exist', //- set the response function.
    'request.get': 'exist', //- send a GET request.
    'request.post': 'exist', //- send a POST request.
    'request.send': 'exist', //- set the request.
    'request.abort': 'exist', //- abort the request.
    'request.on': 'exist', //- listen for a request event.
    'd3.csv': 'exist', //- get a comma-separated values (CSV) file.
    'd3.html': 'exist', //- get an HTML file.
    'd3.json': 'exist', //- get a JSON file.
    'd3.text': 'exist', //- get a plain text file.
    'd3.tsv': 'exist', //- get a tab-separated values (TSV) file.
    'd3.xml': 'exist', //- get an XML file.

    // Scales (d3-scale)
    // Encodings that map abstract data to visual representation.
    // Continuous Scales
    // Map a continuous, quantitative domain to a continuous range.

    'continuous': 'exist', //- compute the range value corresponding to a given domain value.
    'continuous.invert': 'exist', //- compute the domain value corresponding to a given range value.
    'continuous.domain': 'exist', //- set the input domain.
    'continuous.range': 'exist', //- set the output range.
    'continuous.rangeRound': 'exist', //- set the output range and enable rounding.
    'continuous.clamp': 'exist', //- enable clamping to the domain or range.
    'continuous.interpolate': 'exist', //- set the output interpolator.
    'continuous.ticks': 'exist', //- compute representative values from the domain.
    'continuous.tickFormat': 'exist', //- format ticks for human consumption.
    'continuous.nice': 'exist', //- extend the domain to nice round numbers.
    'continuous.copy': 'exist', //- create a copy of this scale.
    'd3.scaleLinear': 'exist', //- create a quantitative linear scale.
    'd3.scalePow': 'exist', //- create a quantitative power scale.
    'pow': 'exist', //- compute the range value corresponding to a given domain value.
    'pow.invert': 'exist', //- compute the domain value corresponding to a given range value.
    'pow.exponent': 'exist', //- set the power exponent.
    'pow.domain': 'exist', //- set the input domain.
    'pow.range': 'exist', //- set the output range.
    'pow.rangeRound': 'exist', //- set the output range and enable rounding.
    'pow.clamp': 'exist', //- enable clamping to the domain or range.
    'pow.interpolate': 'exist', //- set the output interpolator.
    'pow.ticks': 'exist', //- compute representative values from the domain.
    'pow.tickFormat': 'exist', //- format ticks for human consumption.
    'pow.nice': 'exist', //- extend the domain to nice round numbers.
    'pow.copy': 'exist', //- create a copy of this scale.
    'd3.scaleSqrt': 'exist', //- create a quantitative power scale with exponent 0.5.
    'd3.scaleLog': 'exist', //- create a quantitative logarithmic scale.
    'log': 'exist', //- compute the range value corresponding to a given domain value.
    'log.invert': 'exist', //- compute the domain value corresponding to a given range value.
    'log.base': 'exist', //- set the logarithm base.
    'log.domain': 'exist', //- set the input domain.
    'log.range': 'exist', //- set the output range.
    'log.rangeRound': 'exist', //- set the output range and enable rounding.
    'log.clamp': 'exist', //- enable clamping to the domain or range.
    'log.interpolate': 'exist', //- set the output interpolator.
    'log.ticks': 'exist', //- compute representative values from the domain.
    'log.tickFormat': 'exist', //- format ticks for human consumption.
    'log.nice': 'exist', //- extend the domain to nice round numbers.
    'log.copy': 'exist', //- create a copy of this scale.
    'd3.scaleIdentity': 'exist', //- create a quantitative identity scale.
    'd3.scaleTime': 'exist', //- create a linear scale for time.
    'time': 'exist', //- compute the range value corresponding to a given domain value.
    'time.invert': 'exist', //- compute the domain value corresponding to a given range value.
    'time.domain': 'exist', //- set the input domain.
    'time.range': 'exist', //- set the output range.
    'time.rangeRound': 'exist', //- set the output range and enable rounding.
    'time.clamp': 'exist', //- enable clamping to the domain or range.
    'time.interpolate': 'exist', //- set the output interpolator.
    'time.ticks': 'exist', //- compute representative values from the domain.
    'time.tickFormat': 'exist', //- format ticks for human consumption.
    'time.nice': 'exist', //- extend the domain to nice round times.
    'time.copy': 'exist', //- create a copy of this scale.
    'd3.scaleUtc': 'exist', //- create a linear scale for UTC.

    // Sequential Scales
    // Map a continuous, quantitative domain to a continuous, fixed interpolator.

    'd3.scaleSequential': 'exist', //- create a sequential scale.
    'sequential.interpolator': 'exist', //- set the scale’s output interpolator.
    'd3.interpolateViridis': 'exist', //- a dark-to-light color scheme.
    'd3.interpolateInferno': 'exist', //- a dark-to-light color scheme.
    'd3.interpolateMagma': 'exist', //- a dark-to-light color scheme.
    'd3.interpolatePlasma': 'exist', //- a dark-to-light color scheme.
    'd3.interpolateWarm': 'exist', //- a rotating-hue color scheme.
    'd3.interpolateCool': 'exist', //- a rotating-hue color scheme.
    'd3.interpolateRainbow': 'exist', //- a cyclical rotating-hue color scheme.
    'd3.interpolateCubehelixDefault': 'exist', //- a dark-to-light, rotating-hue color scheme.

    // Quantize Scales
    // Map a continuous, quantitative domain to a discrete range.

    'd3.scaleQuantize': 'exist', //- create a uniform quantizing linear scale.
    'quantize': 'exist', //- compute the range value corresponding to a given domain value.
    'quantize.invertExtent': 'exist', //- compute the domain values corresponding to a given range value.
    'quantize.domain': 'exist', //- set the input domain.
    'quantize.range': 'exist', //- set the output range.
    'quantize.nice': 'exist', //- extend the domain to nice round numbers.
    'quantize.ticks': 'exist', //- compute representative values from the domain.
    'quantize.tickFormat': 'exist', //- format ticks for human consumption.
    'quantize.copy': 'exist', //- create a copy of this scale.
    'd3.scaleQuantile': 'exist', //- create a quantile quantizing linear scale.
    'quantile': 'exist', //- compute the range value corresponding to a given domain value.
    'quantile.invertExtent': 'exist', //- compute the domain values corresponding to a given range value.
    'quantile.domain': 'exist', //- set the input domain.
    'quantile.range': 'exist', //- set the output range.
    'quantile.quantiles': 'exist', //- get the quantile thresholds.
    'quantile.copy': 'exist', //- create a copy of this scale.
    'd3.scaleThreshold': 'exist', //- create an arbitrary quantizing linear scale.
    'threshold': 'exist', //- compute the range value corresponding to a given domain value.
    'threshold.invertExtent': 'exist', //- compute the domain values corresponding to a given range value.
    'threshold.domain': 'exist', //- set the input domain.
    'threshold.range': 'exist', //- set the output range.
    'threshold.copy': 'exist', //- create a copy of this scale.

    // Ordinal Scales
    // Map a discrete domain to a discrete range.

    'd3.scaleOrdinal': 'exist', //- create an ordinal scale.
    'ordinal': 'exist', //- compute the range value corresponding to a given domain value.
    'ordinal.domain': 'exist', //- set the input domain.
    'ordinal.range': 'exist', //- set the output range.
    'ordinal.unknown': 'exist', //- set the output value for unknown inputs.
    'ordinal.copy': 'exist', //- create a copy of this scale.
    'd3.scaleImplicit': 'exist', //- a special unknown value for implicit domains.
    'd3.scaleBand': 'exist', //- create an ordinal band scale.
    'band': 'exist', //- compute the band start corresponding to a given domain value.
    'band.domain': 'exist', //- set the input domain.
    'band.range': 'exist', //- set the output range.
    'band.rangeRound': 'exist', //- set the output range and enable rounding.
    'band.round': 'exist', //- enable rounding.
    'band.paddingInner': 'exist', //- set padding between bands.
    'band.paddingOuter': 'exist', //- set padding outside the first and last bands.
    'band.padding': 'exist', //- set padding outside and between bands.
    'band.align': 'exist', //- set band alignment, if there is extra space.
    'band.bandwidth': 'exist', //- get the width of each band.
    'band.step': 'exist', //- get the distance between the starts of adjacent bands.
    'band.copy': 'exist', //- create a copy of this scale.
    'd3.scalePoint': 'exist', //- create an ordinal point scale.
    'point': 'exist', //- compute the point corresponding to a given domain value.
    'point.domain': 'exist', //- set the input domain.
    'point.range': 'exist', //- set the output range.
    'point.rangeRound': 'exist', //- set the output range and enable rounding.
    'point.round': 'exist', //- enable rounding.
    'point.padding': 'exist', //- set padding outside the first and last point.
    'point.align': 'exist', //- set point alignment, if there is extra space.
    'point.bandwidth': 'exist', //- returns zero.
    'point.step': 'exist', //- get the distance between the starts of adjacent points.
    'point.copy': 'exist', //- create a copy of this scale.
    'd3.schemeCategory10': 'exist', //- a categorical scheme with 10 colors.
    'd3.schemeCategory20': 'exist', //- a categorical scheme with 20 colors.
    'd3.schemeCategory20b': 'exist', //- a categorical scheme with 20 colors.
    'd3.schemeCategory20c': 'exist', //- a categorical scheme with 20 colors.

    // Selections (d3-selection)
    // Transform the DOM by selecting elements and joining to data.
    // Selecting Elements

    'd3.selection': 'selection', //- select the root document element.
    'd3.select': 'selection', //- select an element from the document.
    'd3.selectAll': 'selection', //- select multiple elements from the document.
    '.select': 'selection', //- select a descendant element for each selected element.
    '.selectAll': 'selection', //- select multiple descendants for each selected element.
    '.filter': 'selection', //- filter elements based on data.
    '.merge': 'selection', //- merge this selection with another.
    'd3.matcher': 'selection', //- test whether an element matches a selector.
    'd3.selector': 'selection', //- select an element.
    'd3.selectorAll': 'selection', //- select elements.
    'd3.window': 'selection', //- get a node’s owner window.

    // Modifying Elements

    '.attr': 'exist', //- get or set an attribute.
    '.classed': 'exist', //- get, add or remove CSS classes.
    '.style': 'exist', //- get or set a style property.
    '.property': 'exist', //- get or set a (raw) property.
    '.text': 'exist', //- get or set the text content.
    '.html': 'exist', //- get or set the inner HTML.
    '.append': 'selection', //- create, append and select new elements.
    '.insert': 'selection', //- create, insert and select new elements.
    '.remove': 'exist', //- remove elements from the document.
    '.sort': 'exist', //- sort elements in the document based on data.
    '.order': 'exist', //- reorders elements in the document to match the .
    '.raise': 'exist', //- reorders each element as the last child of its parent.
    '.lower': 'exist', //- reorders each element as the first child of its parent.
    'd3.creator': 'exist', //- create an element by name.

    // Joining Data

    '.data': 'exist', //- join elements to data.
    '.enter': 'exist', //- get the enter selection (data missing elements).
    '.exit': 'exist', //- get the exit selection (elements missing data).
    '.datum': 'exist', //- get or set element data (without joining).

    // Handling Events

    '.on': 'exist', //- add or remove event listeners.
    '.dispatch': 'exist', //- dispatch a custom event.
    'd3.event': 'exist', //- the current user event, during interaction.
    'd3.customEvent': 'exist', //- temporarily define a custom event.
    'd3.mouse': 'exist', //- get the mouse position relative to a given container.
    'd3.touch': 'exist', //- get a touch position relative to a given container.
    'd3.touches': 'exist', //- get the touch positions relative to a given container.

    // Control Flow

    '.each': 'exist', //- call a function for each element.
    '.call': 'exist', //- call a function with this selection.
    '.empty': 'exist', //- returns true if this selection is empty.
    '.nodes': 'exist', //- returns an array of all selected elements.
    '.node': 'exist', //- returns the first (non-'exist') element.
    '.size': 'exist', //- returns the count of elements.

    // Local Variables

    'd3.local': 'exist', //- declares a new local variable.
    'local.set': 'exist', //- set a local variable’s value.
    'local.get': 'exist', //- get a local variable’s value.
    'local.remove': 'exist', //- delete a local variable.
    'local.toString': 'exist', //- get the property identifier of a local variable.

    // Namespaces

    'd3.namespace': 'exist', //- qualify a prefixed XML name, such as “xlink:href”.
    'd3.namespaces': 'exist', //- the built-in XML namespaces.

    // Shapes (d3-shape)
    // Graphical primitives for visualization.
    // Arcs
    // Circular or annular sectors, as in a pie or donut chart.

    'd3.arc': 'exist', //- create a new arc generator.
    'arc': 'exist', //- generate an arc for the given datum.
    'arc.centroid': 'exist', //- compute an arc’s midpoint.
    'arc.innerRadius': 'exist', //- set the inner radius.
    'arc.outerRadius': 'exist', //- set the outer radius.
    'arc.cornerRadius': 'exist', //- set the corner radius, for rounded corners.
    'arc.startAngle': 'exist', //- set the start angle.
    'arc.endAngle': 'exist', //- set the end angle.
    'arc.padAngle': 'exist', //- set the angle between adjacent arcs, for padded arcs.
    'arc.padRadius': 'exist', //- set the radius at which to linearize padding.
    'arc.context': 'exist', //- set the rendering context.

    // Pies
    // Compute the necessary angles to represent a tabular dataset as a pie or donut chart.

    'd3.pie': 'exist', //- create a new pie generator.
    'pie': 'exist', //- compute the arc angles for the given dataset.
    'pie.value': 'exist', //- set the value accessor.
    'pie.sort': 'exist', //- set the sort order comparator.
    'pie.sortValues': 'exist', //- set the sort order comparator.
    'pie.startAngle': 'exist', //- set the overall start angle.
    'pie.endAngle': 'exist', //- set the overall end angle.
    'pie.padAngle': 'exist', //- set the pad angle between adjacent arcs.

    // Lines
    // A spline or polyline, as in a line chart.

    'd3.line': 'exist', //- create a new line generator.
    'line': 'exist', //- generate a line for the given dataset.
    'line.x': 'exist', //- set the x accessor.
    'line.y': 'exist', //- set the y accessor.
    'line.defined': 'exist', //- set the defined accessor.
    'line.curve': 'exist', //- set the curve interpolator.
    'line.context': 'exist', //- set the rendering context.
    'd3.radialLine': 'exist', //- create a new radial line generator.
    'radialLine': 'exist', //- generate a line for the given dataset.
    'radialLine.angle': 'exist', //- set the angle accessor.
    'radialLine.radius': 'exist', //- set the radius accessor.
    'radialLine.defined': 'exist', //- set the defined accessor.
    'radialLine.curve': 'exist', //- set the curve interpolator.
    'radialLine.context': 'exist', //- set the rendering context.

    // Areas
    // An area, defined by a bounding topline and baseline, as in an area chart.

    'd3.area': 'exist', //- create a new area generator.
    'area': 'exist', //- generate an area for the given dataset.
    'area.x': 'exist', //- set the x0 and x1 accessors.
    'area.x0': 'exist', //- set the baseline x accessor.
    'area.x1': 'exist', //- set the topline x accessor.
    'area.y': 'exist', //- set the y0 and y1 accessors.
    'area.y0': 'exist', //- set the baseline y accessor.
    'area.y1': 'exist', //- set the topline y accessor.
    'area.defined': 'exist', //- set the defined accessor.
    'area.curve': 'exist', //- set the curve interpolator.
    'area.context': 'exist', //- set the rendering context.
    'area.lineX0': 'exist', //- derive a line for the left edge of an area.
    'area.lineX1': 'exist', //- derive a line for the right edge of an area.
    'area.lineY0': 'exist', //- derive a line for the top edge of an area.
    'area.lineY1': 'exist', //- derive a line for the bottom edge of an area.
    'd3.radialArea': 'exist', //- create a new radial area generator.
    'radialArea': 'exist', //- generate an area for the given dataset.
    'radialArea.angle': 'exist', //- set the start and end angle accessors.
    'radialArea.startAngle': 'exist', //- set the start angle accessor.
    'radialArea.endAngle': 'exist', //- set the end angle accessor.
    'radialArea.radius': 'exist', //- set the inner and outer radius accessors.
    'radialArea.innerRadius': 'exist', //- set the inner radius accessor.
    'radialArea.outerRadius': 'exist', //- set the outer radius accessor.
    'radialArea.defined': 'exist', //- set the defined accessor.
    'radialArea.curve': 'exist', //- set the curve interpolator.
    'radialArea.context': 'exist', //- set the rendering context.
    'radialArea.lineStartAngle': 'exist', //- derive a line for the start edge of an area.
    'radialArea.lineEndAngle': 'exist', //- derive a line for the end edge of an area.
    'radialArea.lineInnerRadius': 'exist', //- derive a line for the inner edge of an area.
    'radialArea.lineOuterRadius': 'exist', //- derive a line for the outer edge of an area.

    // Curves
    // Interpolate between points to produce a continuous shape.

    'd3.curveBasis': 'exist', //- a cubic basis spline, repeating the end points.
    'd3.curveBasisClosed': 'exist', //- a closed cubic basis spline.
    'd3.curveBasisOpen': 'exist', //- a cubic basis spline.
    'd3.curveBundle': 'exist', //- a straightened cubic basis spline.
    'bundle.beta': 'exist', //- set the bundle tension beta.
    'd3.curveCardinal': 'exist', //- a cubic cardinal spline, with one-sided difference at each end.
    'd3.curveCardinalClosed': 'exist', //- a closed cubic cardinal spline.
    'd3.curveCardinalOpen': 'exist', //- a cubic cardinal spline.
    'cardinal.tension': 'exist', //- set the cardinal spline tension.
    'd3.curveCatmullRom': 'exist', //- a cubic Catmull–Rom spline, with one-sided difference at each end.
    'd3.curveCatmullRomClosed': 'exist', //- a closed cubic Catmull–Rom spline.
    'd3.curveCatmullRomOpen': 'exist', //- a cubic Catmull–Rom spline.
    'catmullRom.alpha': 'exist', //- set the Catmull–Rom parameter alpha.
    'd3.curveLinear': 'exist', //- a polyline.
    'd3.curveLinearClosed': 'exist', //- a closed polyline.
    'd3.curveMonotoneX': 'exist', //- a cubic spline that, given monotonicity in x, preserves it in y.
    'd3.curveMonotoneY': 'exist', //- a cubic spline that, given monotonicity in y, preserves it in x.
    'd3.curveNatural': 'exist', //- a natural cubic spline.
    'd3.curveStep': 'exist', //- a piecewise constant function.
    'd3.curveStepAfter': 'exist', //- a piecewise constant function.
    'd3.curveStepBefore': 'exist', //- a piecewise constant function.
    'curve.areaStart': 'exist', //- start a new area segment.
    'curve.areaEnd': 'exist', //- end the current area segment.
    'curve.lineStart': 'exist', //- start a new line segment.
    'curve.lineEnd': 'exist', //- end the current line segment.
    'curve.point': 'exist', //- add a point to the current line segment.

    // Symbols
    // A categorical shape encoding, as in a scatterplot.

    'd3.symbol': 'exist', //- create a new symbol generator.
    'symbol': 'exist', //- generate a symbol for the given datum.
    'symbol.type': 'exist', //- set the symbol type.
    'symbol.size': 'exist', //- set the size of the symbol in square pixels.
    'symbol.context': 'exist', //- set the rendering context.
    'd3.symbols': 'exist', //- the array of built-in symbol types.
    'd3.symbolCircle': 'exist', //- a circle.
    'd3.symbolCross': 'exist', //- a Greek cross with arms of equal length.
    'd3.symbolDiamond': 'exist', //- a rhombus.
    'd3.symbolSquare': 'exist', //- a square.
    'd3.symbolStar': 'exist', //- a pentagonal star (pentagram).
    'd3.symbolTriangle': 'exist', //- an up-pointing triangle.
    'd3.symbolWye': 'exist', //- a Y shape.
    'symbolType.draw': 'exist', //- draw this symbol to the given context.

    // Stacks
    // Stack shapes, placing one adjacent to another, as in a stacked bar chart.

    'd3.stack': 'exist', //- create a new stack generator.
    'stack': 'exist', //- generate a stack for the given dataset.
    'stack.keys': 'exist', //- set the keys accessor.
    'stack.value': 'exist', //- set the value accessor.
    'stack.order': 'exist', //- set the order accessor.
    'stack.offset': 'exist', //- set the offset accessor.
    'd3.stackOrderAscending': 'exist', //- put the smallest series on bottom.
    'd3.stackOrderDescending': 'exist', //- put the largest series on bottom.
    'd3.stackOrderInsideOut': 'exist', //- put larger series in the middle.
    'd3.stackOrderNone': 'exist', //- use the given series order.
    'd3.stackOrderReverse': 'exist', //- use the reverse of the given series order.
    'd3.stackOffsetExpand': 'exist', //- normalize the baseline to zero and topline to one.
    'd3.stackOffsetNone': 'exist', //- apply a zero baseline.
    'd3.stackOffsetSilhouette': 'exist', //- center the streamgraph around zero.
    'd3.stackOffsetWiggle': 'exist', //- minimize streamgraph wiggling.

    // Time Formats (d3-time-format)
    // Parse and format times, inspired by strptime and strftime.

    'd3.timeFormat': 'exist', //- alias for locale.format on the default locale.
    'd3.timeParse': 'exist', //- alias for locale.parse on the default locale.
    'd3.utcFormat': 'exist', //- alias for locale.utcFormat on the default locale.
    'd3.utcParse': 'exist', //- alias for locale.utcParse on the default locale.
    'd3.isoFormat': 'exist', //- an ISO 8601 UTC formatter.
    'd3.isoParse': 'exist', //- an ISO 8601 UTC parser.
    'd3.timeFormatLocale': 'exist', //- define a custom locale.
    'd3.timeFormatDefaultLocale': 'exist', //- define the default locale.
    'locale.format': 'exist', //- create a time formatter.
    'locale.parse': 'exist', //- create a time parser.
    'locale.utcFormat': 'exist', //- create a UTC formatter.
    'locale.utcParse': 'exist', //- create a UTC parser.

    // Time Intervals (d3-time)
    // A calculator for humanity’s peculiar conventions of time.

    'd3.timeInterval': 'exist', //- implement a new custom time interval.
    'interval': 'exist', //- alias for interval.floor.
    'interval.floor': 'exist', //- round down to the nearest boundary.
    'interval.round': 'exist', //- round to the nearest boundary.
    'interval.ceil': 'exist', //- round up to the nearest boundary.
    'interval.offset': 'exist', //- offset a date by some number of intervals.
    'interval.range': 'exist', //- generate a range of dates at interval boundaries.
    'interval.filter': 'exist', //- create a filtered subset of this interval.
    'interval.every': 'exist', //- create a filtered subset of this interval.
    'interval.count': 'exist', //- count interval boundaries between two dates.
    'd3.timeMillisecond': 'exist', 'd3.utcMillisecond': 'exist', //- the millisecond interval.
    'd3.timeMilliseconds': 'exist', 'd3.utcMilliseconds': 'exist', //- aliases for millisecond.range.
    'd3.timeSecond': 'exist', 'd3.utcSecond': 'exist', //- the second interval.
    'd3.timeSeconds': 'exist', 'd3.utcSeconds': 'exist', //- aliases for second.range.
    'd3.timeMinute': 'exist', 'd3.utcMinute': 'exist', //- the minute interval.
    'd3.timeMinutes': 'exist', 'd3.utcMinutes': 'exist', //- aliases for minute.range.
    'd3.timeHour': 'exist', 'd3.utcHour': 'exist', //- the hour interval.
    'd3.timeHours': 'exist', 'd3.utcHours': 'exist', //- aliases for hour.range.
    'd3.timeDay': 'exist', 'd3.utcDay': 'exist', //- the day interval.
    'd3.timeDays': 'exist', 'd3.utcDays': 'exist', //- aliases for day.range.
    'd3.timeWeek': 'exist', 'd3.utcWeek': 'exist', //- aliases for sunday.
    'd3.timeWeeks': 'exist', 'd3.utcWeeks': 'exist', //- aliases for week.range.
    'd3.timeSunday': 'exist', 'd3.utcSunday': 'exist', //- the week interval, starting on Sunday.
    'd3.timeSundays': 'exist', 'd3.utcSundays': 'exist', //- aliases for sunday.range.
    'd3.timeMonday': 'exist', 'd3.utcMonday': 'exist', //- the week interval, starting on Monday.
    'd3.timeMondays': 'exist', 'd3.utcMondays': 'exist', //- aliases for monday.range.
    'd3.timeTuesday': 'exist', 'd3.utcTuesday': 'exist', //- the week interval, starting on Tuesday.
    'd3.timeTuesdays': 'exist', 'd3.utcTuesdays': 'exist', //- aliases for tuesday.range.
    'd3.timeWednesday': 'exist', 'd3.utcWednesday': 'exist', //- the week interval, starting on Wednesday.
    'd3.timeWednesdays': 'exist', 'd3.utcWednesdays': 'exist', //- aliases for wednesday.range.
    'd3.timeThursday': 'exist', 'd3.utcThursday': 'exist', //- the week interval, starting on Thursday.
    'd3.timeThursdays': 'exist', 'd3.utcThursdays': 'exist', //- aliases for thursday.range.
    'd3.timeFriday': 'exist', 'd3.utcFriday': 'exist', //- the week interval, starting on Friday.
    'd3.timeFridays': 'exist', 'd3.utcFridays': 'exist', //- aliases for friday.range.
    'd3.timeSaturday': 'exist', 'd3.utcSaturday': 'exist', //- the week interval, starting on Saturday.
    'd3.timeSaturdays': 'exist', 'd3.utcSaturdays': 'exist', //- aliases for saturday.range.
    'd3.timeMonth': 'exist', 'd3.utcMonth': 'exist', //- the month interval.
    'd3.timeMonths': 'exist', 'd3.utcMonths': 'exist', //- aliases for month.range.
    'd3.timeYear': 'exist', 'd3.utcYear': 'exist', //- the year interval.
    'd3.timeYears': 'exist', 'd3.utcYears': 'exist', //- aliases for year.range.

    // Timers (d3-timer)
    // An efficient queue for managing thousands of concurrent animations.

    'd3.now': 'exist', //- get the current high-resolution time.
    'd3.timer': 'exist', //- schedule a new timer.
    'timer.restart': 'exist', //- reset the timer’s start time and callback.
    'timer.stop': 'exist', //- stop the timer.
    'd3.timerFlush': 'exist', //- immediately execute any eligible timers.
    'd3.timeout': 'exist', //- schedule a timer that stops on its first callback.
    'd3.interval': 'exist', //- schedule a timer that is called with a configurable period.

    // Transitions (d3-transition)
    // Animated transitions for selections.

    'selection.transition': 'exist', //- schedule a transition for the selected elements.
    'selection.interrupt': 'exist', //- interrupt and cancel transitions on the selected elements.
    'd3.transition': 'exist', //- schedule a transition on the root document element.
    'transition.select': 'exist', //- schedule a transition on the selected elements.
    'transition.selectAll': 'exist', //- schedule a transition on the selected elements.
    'transition.filter': 'exist', //- filter elements based on data.
    'transition.merge': 'exist', //- merge this transition with another.
    'transition.selection': 'exist', //- returns a selection for this transition.
    'transition.transition': 'exist', //- schedule a new transition following this one.
    'transition.call': 'exist', //- call a function with this transition.
    'transition.nodes': 'exist', //- returns an array of all selected elements.
    'transition.node': 'exist', //- returns the first (non-'exist') element.
    'transition.size': 'exist', //- returns the count of elements.
    'transition.empty': 'exist', //- returns true if this transition is empty.
    'transition.each': 'exist', //- call a function for each element.
    'transition.on': 'exist', //- add or remove transition event listeners.
    'transition.attr': 'exist', //- tween the given attribute using the default interpolator.
    'transition.attrTween': 'exist', //- tween the given attribute using a custom interpolator.
    'transition.style': 'exist', //- tween the given style property using the default interpolator.
    'transition.styleTween': 'exist', //- tween the given style property using a custom interpolator.
    'transition.text': 'exist', //- set the text content when the transition starts.
    'transition.remove': 'exist', //- remove the selected elements when the transition ends.
    'transition.tween': 'exist', //- run custom code during the transition.
    'transition.delay': 'exist', //- specify per-element delay in milliseconds.
    'transition.duration': 'exist', //- specify per-element duration in milliseconds.
    'transition.ease': 'exist', //- specify the easing function.
    'd3.active': 'exist', //- select the active transition for a given node.
    'd3.interrupt': 'exist', //-

    // Voronoi Diagrams (d3-voronoi)
    // Compute the Voronoi diagram of a given set of points.

    'd3.voronoi': 'exist', //- create a new Voronoi generator.
    'voronoi': 'exist', //- generate a new Voronoi diagram for the given points.
    'voronoi.polygons': 'exist', //- compute the Voronoi polygons for the given points.
    'voronoi.triangles': 'exist', //- compute the Delaunay triangles for the given points.
    'voronoi.links': 'exist', //- compute the Delaunay links for the given points.
    'voronoi.x': 'exist', //- set the x accessor.
    'voronoi.y': 'exist', //- set the y accessor.
    'voronoi.extent': 'exist', //- set the observed extent of points.
    'voronoi.size': 'exist', //- set the observed extent of points.
    'diagram.polygons': 'exist', //- compute the polygons for this Voronoi diagram.
    'diagram.triangles': 'exist', //- compute the triangles for this Voronoi diagram.
    'diagram.links': 'exist', //- compute the links for this Voronoi diagram.
    'diagram.find': 'exist', //- find the closest point in this Voronoi diagram.

    // Zooming (d3-zoom)
    // Pan and zoom SVG, HTML or Canvas using mouse or touch input.

    'd3.zoom': 'exist', //- create a zoom behavior.
    'zoom': 'exist', //- apply the zoom behavior to the selected elements.
    'zoom.transform': 'exist', //- change the transform for the selected elements.
    'zoom.translateBy': 'exist', //- translate the transform for the selected elements.
    'zoom.scaleBy': 'exist', //- scale the transform for the selected elements.
    'zoom.scaleTo': 'exist', //- scale the transform for the selected elements.
    'zoom.filter': 'exist', //- control which input events initiate zooming.
    'zoom.extent': 'exist', //- set the extent of the viewport.
    'zoom.scaleExtent': 'exist', //- set the allowed scale range.
    'zoom.translateExtent': 'exist', //- set the extent of the zoomable world.
    'zoom.duration': 'exist', //- set the duration of zoom transitions.
    'zoom.interpolate': 'exist', //- control the interpolation of zoom transitions.
    'zoom.on': 'exist', //- listen for zoom events.
    'd3.zoomTransform': 'exist', //- get the zoom transform for a given element.
    'transform.scale': 'exist', //- scale a transform by the specified amount.
    'transform.translate': 'exist', //- translate a transform by the specified amount.
    'transform.apply': 'exist', //- apply the transform to the given point.
    'transform.applyX': 'exist', //- apply the transform to the given x-coordinate.
    'transform.applyY': 'exist', //- apply the transform to the given y-coordinate.
    'transform.invert': 'exist', //- unapply the transform to the given point.
    'transform.invertX': 'exist', //- unapply the transform to the given x-coordinate.
    'transform.invertY': 'exist', //- unapply the transform to the given y-coordinate.
    'transform.rescaleX': 'exist', //- apply the transform to an x-scale’s domain.
    'transform.rescaleY': 'exist', //- apply the transform to a y-scale’s domain.
    'transform.toString': 'exist', //- format the transform as an SVG transform string.
    'd3.zoomIdentity': 'exist'
  }; //- the identity transform.
  return D3methods;
}

function parseD3() {
  let str = '';
  const scriptElements = document.querySelectorAll("script");
  // Exclude last script tag in for loop because last script tag will be this parser
  for (let i = 0; i < scriptElements.length - 1; i += 1) {
    const elementString = scriptElements[i].innerHTML;
    if (elementString.includes('d3')) str = elementString;
  }
  if (str === '') return 'No D3 script found!';

  const D3methods = returnD3methods();

  const cache = {};
  let substr = '';
  let method = '';
  let methodObject = '';
  let methodholder = '';
  let args = '';
  let start = 0;
  let end = 0;
  let count = 0;
  let nestedParens = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '.') {
      start = i;
      end = i;
      count = 0;
      while (str[end] !== '(') {
        if (str[end] === '=' || str[end] === ',' || str[end] === ')' || count > 30) break;
        count += 1;
        end += 1;
      }
      count = 0;
      method = str.slice(start, end).trim();

      if (methodObject === '') {
        start = substr.length - 1;
        end = substr.length;
        while (substr[start] !== ' ' && start > 0) {
          start -= 1;
        }
        methodObject = substr.slice(start + 1, end).trim();
      }
    }

    if (method !== '') {
      if (D3methods[method] || D3methods[methodObject + method] || D3methods[methodholder + method]) {
        if (substr !== '') cache[i] = substr;
        substr = '';

        if (str[i] !== '(') {
          while (str[i] !== '(') {
            if (str[i] === ')' || i > str.length) break;
            i += 1;
          }
          i += 1;
        }

        start = i;
        while (str[i] !== ')') {
          if (str[i] === ';' || i > str.length) break;
          if (str[i] === '(') nestedParens += 1;
          if (str[i + 1] === ')' && nestedParens > 0) {
            nestedParens -= 1;
            i += 1;
          }
          i += 1;
        }
        args = str.slice(start, i).split(/,(.+)/, 2);

        // move i past closing parens
        i += 1;

        if (args[0].trim() === '') {
          if (str[i] === '(') {
            start = i;
            while (str[i] !== ';' && str[i] !== '.') {
              if (i > str.length) break;
              i += 1;
            }
            args.push(str.slice(start + 1, i - 1));
          }
        }

        cache[i] = {
          methodObject: methodObject,
          d3MethodName: method,
          args: args,
        }

        if (args[0].trim() === '') {
          methodholder = method.slice(1);
          methodObject += method + '()';
        }

        if (D3methods[method] === 'selection' || D3methods['d3' + method] === 'selection') {
          methodObject += method + '(' + args[0].trim() + ')';
        }

        if (str[i] === ';') {
          cache[i + 1] = {
            methodObject: methodObject,
            methodEnd: true,
          }
          i += 1;
          methodholder = '';
          methodObject = '';
        }

        args = '';
        method = '';
        i -= 1;
        continue;
      } else {
        methodObject = '';
      }
    }




    substr += str[i];
    if (i === str.length - 1) cache[i] = substr;
  }

  return cache;
}

function reCode(parsed) {
  let code = '';
  Object.keys(parsed).forEach(key => {
    if (parsed[key]['methodEnd']) {
      code += ';';
    }
    if (typeof parsed[key] === 'object') {
      if (parsed[key]['d3MethodName']) {
        code += parsed[key]['d3MethodName'] + '(';
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

console.log(parseD3());

console.log(reCode(parseD3()));