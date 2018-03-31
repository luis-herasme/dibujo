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


## Scene
<p>
  A scene is a group of graphic objects, when you create a scene you can specify the background color 
  of the scene for example:
</p>

```javascript
const scene = new dibujo.Scene('#FF00FF')
```

<p>
  When you create a scene you can add graphics to the scene
</p>

```javascript
  const rect = new dibujo.Rect({
    position: new dibujo.Vector(10, 10),
    width: 100,
    height: 100,
    color: 'blue'
  })
  
  scene.add(rect)
```

<p>
  And to see the scene the scene must be rendered so you have to add the scene to render in this way:
</p>

```javascript
 render.setScene(scene)
```

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

```javascript
  const picture = new dibujo.Picture({
    position: new dibujo.Vector(10, 10),
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
| opacity | <code>number</code> | The opacity |
| height | <code>number</code> | The height |

## Rect

```javascript
  const rect = new dibujo.Rect({
    position: new dibujo.Vector(10, 10),
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
| stroke | <code>boolean</code> | Draw stroke |
| lineColor | <code>number</code> | Stroke color |
| lineWidth | <code>number</code> | Line width |

## Text

```javascript
  const text = new dibujo.Text({
    position: new dibujo.Vector(10, 10),
    content: 'Hello World'
  })
```

| Param | Type | Description |
| --- | --- | --- |
| position | <code>Point</code> | The coordinates of the text |
| content | <code>string</code> | The content |
| style | <code>object</code> | This is the style of the text |

## Line

```javascript
  const line = new dibujo.Line({
    start: new dibujo.Vector(10, 10),
    end: new dibujo.Vector(20, 20),
    color: 'blue'
  })
```

| Param | Type | Description |
| --- | --- | --- |
| start | <code>Point</code> | The start coordinate of the line |
| end | <code>Point</code> | The end coordinate of the line |
| color | <code>string</code> | This is the color of the line |

## Poligon

```javascript
  const poli = new dibujo.Poligon({
    cords: [
      {x: 10, y: 10},
      {x: 20, y: 20},
      {x: 10, y: 20}
    ],
    color: 'blue'
  })
```

| Param | Type | Description |
| --- | --- | --- | 
| cords | <code>Array<Point></code> | Array of the vertex of the poligon |
| fill | <code>boolean</code> | Fill the poligon |
| stroke | <code>boolean</code> | Stroke the poligon |
| strokeColor | <code>string</code> | This is the color of the lines of the poligon |
| color | <code>string</code> | This is the color of the poligon |
  
## Circle

```javascript
  const circle = new dibujo.Circle({
    position: new dibujo.Vector(10, 10),
    radius: 10,
    color: 'blue'
  })
```

| Param | Type | Description |
| --- | --- | --- | 
| position | <code>Point</code> | Position of the circle |
| radius | <code>number</code> | Radius of the circle |
| color | <code>string</code> | Color of the circle |
| stroke | <code>boolean</code> | Show stroke |
| lineWidth | <code>number</code> | Width of the line |
| lineColor | <code>string</code> | Color of the line |

## Arc

```javascript
  const arc = new dibujo.Arc({
    position: new dibujo.Vector(10, 10),
    radius: 10,
    color: 'blue'
  })
```

| Param | Type | Description |
| --- | --- | --- | 
| color | <code>string</code> | Color of the arc |
| position | <code>Point</code> | Position of the arc |
| radius | <code>number</code> | Radius of the arc |
| lineWidth | <code>number</code> | Width of the line |
| stroke | <code>boolean</code> | Show stroke |
| lineColor | <code>string</code> | Color of the line |
| eAngl | <code>number</code> | End angle of the arc |
| aAngl | <code>number</code> | Start angle of the arc |
