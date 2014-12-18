# Scholars' Lab Fonts

Font icons for Scholars' Lab projects.

See [style.css](style.css) for usage example.

## Compass

Import the [build/css/_icons.scss](build/css/_icons.scss) partial in
your project.

```scss
@import "build/css/icons";
```



# Building Fonts

You'll need the following `brew` packages:

```
$ brew install ttfautohint fontforge --with-python
```

Also, install the `npm` dependencies:

```
$ npm install
```

### Build

This is handled through `grunt`. Any SVG in the 'icons' directory will
be built in to the fonts directory.

```
$ grunt webfont
```



