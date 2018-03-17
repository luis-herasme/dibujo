![alt text](https://raw.githubusercontent.com/LuisHerasme/DibujoJs/master/logo/dibujoJs.png)

## Instalation

<code>
npm install dibujo
</code>

## How to use it

<p>
  To start using dibujo you have to first create a dibujo entity
</p>

```javascript
  const dibujo = new dibujo()
```
<p>
  after you have created the first  dibujo instance you can create a scene but if you don't create a scene and add graphics to dibujo     dibujo will use it's default scene to render the graphics you add.
</p>

## Graphics
<p>
  There are several kinds of Graphic objects and when you create a new graphic you have to chosse one of them
  rigth now there are 7 kinds of diferent graphics:
</p>

* Rect
* Circle
* Picture
* Line
* Poligon
* Text
* Arc


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

## Picture(configuration)
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


