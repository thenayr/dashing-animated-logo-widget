# Animated Logo widget for Dashing

![](http://i.imgur.com/M36AW01.gif)

## Live demo

See a demo of this widget on the [live demo page](http://widget.iamnayr.com:3000)

## Description

A simple widget for quick access to a smoothly animated logo on your dashboard.

Although basic in nature, the animated logo is nice to look at and adds a bit of eye-catching flare to your dashboard.

## Dependencies

The animated logo widget uses the wonderful [Pixi JS 2d animation library](https://github.com/GoodBoyDigital/pixi.js/).

We will be setting this up below.

## Using the animated logo widget

Copy over the files `assets/javascripts/pixi-trans.js` and `assets/javascripts/logo.js` to your dashboards `assets/javascripts` folder.

Copy over the `widgets/animated_logo` folder into your `widgets` directory.
Place your logo in the `assets/images` folder with the name `logo.png` (note you can change this to whatever you like, just update the logo.js file)

Now add the widget into your dashboard:

```html
<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
  <div id="animated-logo" data-view="AnimatedLogo"></div>
</li>
```

## Customize logo animation and colors

Customizing the animation `assets/javascripts/logo.js` file.

If you would like to load a different image other than the standard `logo.png` file, just update the following line:

```
var LogoTexture = PIXI.Texture.fromImage("/assets/logo.png");
```

To change the background color of the widget, update the file `widgets/animated_logo/animated_logo.scss`

Change the following CSS declaration:

```
.widget.widget-animated-logo {
  background-color: #FFF;
}
```
