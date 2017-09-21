## Members

<dl>
<dt><a href="#add">add</a></dt>
<dd><p>This function adds objects to the stage</p>
</dd>
<dt><a href="#destroy">destroy</a></dt>
<dd><p>This function destroy an object from the stage</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#line">line(start, end, style, stroke)</a></dt>
<dd><p>This function draws a line,
Takes a vector as start point and another vector as end point of the line</p>
</dd>
<dt><a href="#poligon">poligon(vecs, color, stroke)</a></dt>
<dd><p>This function draws a poligon in the screen</p>
</dd>
<dt><a href="#rect">rect(position, width, height, color)</a></dt>
<dd><p>This function draws a rect in the screen</p>
</dd>
<dt><a href="#strokeRect">strokeRect(position, width, height, color, lineWidth)</a></dt>
<dd><p>This function draws the borders of a a rect in the screen</p>
</dd>
<dt><a href="#text">text(texto, position, style, stroke)</a></dt>
<dd><p>This function draws a text in the screen</p>
</dd>
<dt><a href="#strokeCircle">strokeCircle(position, radius, color, width)</a></dt>
<dd><p>Draws the borders of a circle in the screen</p>
</dd>
<dt><a href="#circle">circle(position, radius, color)</a></dt>
<dd><p>Draws a circle in the screen</p>
</dd>
<dt><a href="#strokeArc">strokeArc(position, radius, lineWidth, eAngl, aAngl, color)</a></dt>
<dd><p>This function draws the borders of an arc in the screen</p>
</dd>
<dt><a href="#loadImage">loadImage(name, src)</a></dt>
<dd><p>This function loads an image and saves it.</p>
</dd>
<dt><a href="#drawImage">drawImage(name, position, anchor, rotation, width, height)</a></dt>
<dd><p>This function draws an image on the screen</p>
</dd>
<dt><a href="#SpriteSheet">SpriteSheet(name, config)</a></dt>
<dd><p>This function renders an animation from an srpite sheet in the screen</p>
</dd>
<dt><a href="#Sprite">Sprite(name, position, scale, rotation, anchor, src)</a></dt>
<dd><p>This function creates an image object</p>
</dd>
<dt><a href="#Point">Point(x, y)</a></dt>
<dd><p>This function creates an Point object</p>
</dd>
<dt><a href="#init">init(canvasName, width, height)</a></dt>
<dd><p>This function initializes the canvas</p>
</dd>
<dt><a href="#setScale">setScale(scale)</a></dt>
<dd><p>This function sets the scale of the canvas to the parameter given</p>
</dd>
<dt><a href="#setStyle">setStyle(style)</a></dt>
<dd><p>This function puts all the styles given in the context</p>
</dd>
<dt><a href="#setCenter">setCenter(vec)</a></dt>
<dd><p>This function translates the context to the coordinates given</p>
</dd>
<dt><a href="#clear">clear(color)</a></dt>
<dd><p>Clears the entire screen</p>
</dd>
<dt><a href="#smoth">smoth(state)</a></dt>
<dd><p>Enables and disbales canvas smoth</p>
</dd>
<dt><a href="#Stage">Stage()</a></dt>
<dd><p>This object contains all that will be render</p>
</dd>
<dt><a href="#update">update()</a></dt>
<dd><p>This function renders all the objects of the stage</p>
</dd>
<dt><a href="#Graphic">Graphic(renderFunction, configuration)</a></dt>
<dd><p>This class creates an object that draws in the screen</p>
</dd>
</dl>

<a name="add"></a>

## add
This function adds objects to the stage

**Kind**: global variable
<a name="destroy"></a>

## destroy
This function destroy an object from the stage

**Kind**: global variable

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | This is the name of the object |

<a name="line"></a>

## line(start, end, style, stroke)
Takes a vector as start point and another vector as end point of the line

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| start | <code>array</code> | This will be the start point of the line |
| end | <code>array</code> | This will be the end point of the line |
| style | <code>object</code> | This will be the style of the line |
| stroke | <code>boolean</code> | If true the line will have an stroke |

<a name="poligon"></a>

## poligon(vecs, color, stroke)
This function draws a poligon in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vecs | <code>array</code> | This contains all the points of the figure |
| color | <code>string</code> | This is the color of the poligon |
| stroke | <code>boolean</code> | If this true the poligon will have borders |

<a name="rect"></a>

## rect(position, width, height, color)
This function draws a rect in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| position | <code>array</code> | This array contains the coordinates of the rect |
| width | <code>number</code> | This is the width of the rect |
| height | <code>number</code> | This is the height of the rect |
| color | <code>string</code> | This will be the color of the rect |

<a name="strokeRect"></a>

## strokeRect(position, width, height, color, lineWidth)
This function draws the borders of a a rect in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| position | <code>array</code> | This array contains the coordinates of the rect |
| width | <code>number</code> | This is the width of the rect |
| height | <code>number</code> | This is the height of the rect |
| color | <code>string</code> | This will be the color of the rect |
| lineWidth | <code>number</code> | This is the width of the line |

<a name="text"></a>

## text(texto, position, style, stroke)
This function draws a text in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| texto | <code>string</code> | This is the text that will be drawn |
| position | <code>array</code> | This array contains the coordinates of the text |
| style | <code>object</code> | This object contais the styles of the text |
| stroke | <code>boolean</code> | If true the text will have borders |

<a name="strokeCircle"></a>

## strokeCircle(position, radius, color, width)
Draws the borders of a circle in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| position | <code>array</code> | This array contains the X and Y coordinates |
| radius | <code>number</code> | This will be the radius of the circle |
| color | <code>string</code> | This will be the color of the circle |
| width | <code>number</code> | This is the width of the line |

<a name="circle"></a>

## circle(position, radius, color)
Draws a circle in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| position | <code>array</code> | This array contains the X and Y coordinates |
| radius | <code>number</code> | This will be the radius of the circle |
| color | <code>string</code> | This will be the color of the circle |

<a name="strokeArc"></a>

## strokeArc(position, radius, lineWidth, eAngl, aAngl, color)
This function draws the borders of an arc in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| position | <code>array</code> | This array contains the X and Y coordinates |
| radius | <code>number</code> | This is the radius of the arc |
| lineWidth | <code>number</code> | This is the width of the line |
| eAngl | <code>number</code> | This is the end angle |
| aAngl | <code>number</code> | This is the start angle |
| color | <code>string</code> | This is the color of the arc |

<a name="loadImage"></a>

## loadImage(name, src)
This function loads an image and saves it.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | With this name the loaded image will be save in a image cache for later use |
| src | <code>string</code> | This is where the image is save |

<a name="drawImage"></a>

## drawImage(name, position, anchor, rotation, width, height)
This function draws an image on the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | This is the name of the image saved in the imageCache |
| position | <code>object</code> | This object contains the position of the image |
| anchor | <code>object</code> | This will be the point of rotation of the image |
| rotation | <code>number</code> | This will be the rotation of the image |
| width | <code>number</code> | This will be the width of the image |
| height | <code>number</code> | This will be the height of the image |

<a name="SpriteSheet"></a>

## SpriteSheet(name, config)
This function renders an animation from an srpite sheet in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | This will be the name of the animation |
| config | <code>object</code> | This object contains the configuration of the animation |

<a name="Sprite"></a>

## Sprite(name, position, scale, rotation, anchor, src)
This function creates an image object

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | This will be the name of the image |
| position | <code>object</code> | This object contains the position of the image |
| scale | <code>object</code> | This object contains the scale of the image |
| rotation | <code>number</code> | This is the rotation of the image |
| anchor | <code>object</code> | This will be the point of rotation of the image |
| src | <code>string</code> | This will be the location where the image is saved |

<a name="Point"></a>

## Point(x, y)
This function creates an Point object

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X coordinate |
| y | <code>number</code> | The Y coordinate |

<a name="init"></a>

## init(canvasName, width, height)
This function initializes the canvas

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| canvasName | <code>string</code> | If this parameter is given the render will try to find a canvas with this ID to draw in |
| width | <code>number</code> | This will be the width of the canvas |
| height | <code>number</code> | This will be the height of the canvas |

<a name="setScale"></a>

## setScale(scale)
This function sets the scale of the canvas to the parameter given

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| scale | <code>number</code> | This will be the scale of the canvas |

<a name="setStyle"></a>

## setStyle(style)
This function puts all the styles given in the context

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| style | <code>object</code> | This object contains the styles |

<a name="setCenter"></a>

## setCenter(vec)
This function translates the context to the coordinates given

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| vec | <code>array</code> | This is an array of coordinates |

<a name="clear"></a>

## clear(color)
Clears the entire screen

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>string</code> | <code>&quot;#000&quot;</code> | With this color the canvas will be clear |

<a name="smoth"></a>

## smoth(state)
Enables and disbales canvas smoth

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| state | <code>boolean</code> | If true enables canvas smoth and if false disbales canvas smoth |

<a name="Stage"></a>

## Stage()
This object contains all that will be render

**Kind**: global function
<a name="update"></a>

## update()
This function renders all the objects of the stage

**Kind**: global function
<a name="Graphic"></a>

## Graphic(renderFunction, configuration)
This class creates an object that draws in the screen

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| renderFunction | <code>function</code> | This function draws in the screen |
| configuration | <code>object</code> | This object contais information as the position of where things will be drawn the rotation etc.. |