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
  const render = new dibujo.Render()
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

## Picture
This function creates an image object

```javascript
  const picture = new dibujo.Graphic.Picture({
    position: {x: 10, y: 10},
    width: 100,
    height: 100,
    src: './apple.png'
  })
```

| Param | Type | Description |
| --- | --- | --- |
| position | <code>object</code> | This object contains the position of the image |
| src | <code>string</code> | This will be the location where the image is saved |
| width | <code>number</code> | The width |
| height | <code>number</code> | The height |

## Rect
This function creates an image object

```javascript
  const rect = new dibujo.Graphic.Rect({
    position: {x: 10, y: 10},
    width: 100,
    height: 100,
    color: 'blue'
  })
```

| Param | Type | Description |
| --- | --- | --- |
| position | <code>object</code> | This object contains the position of the rect |
| color | <code>string</code> | The color of the rect |
| width | <code>number</code> | The width |
| height | <code>number</code> | The height |


## Point(x, y)
This function creates an Point object

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The X coordinate |
| y | <code>number</code> | The Y coordinate |

<a name="init"></a>


