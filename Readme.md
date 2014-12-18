# Scholars' Lab Fonts

Font icons for Scholars' Lab projects.

See [style.css](style.css) for usage example.

## Compass

```scss
@import "compass/css3";

@include font-face("rotunda", font-files("fonts/rotunda.woff", "fonts/rotunda.ttf", "fonts/rotunda.svg"), "fonts/rotunda.eot");


[class^="geoblacklight-"], [class*=" geoblacklight-"] {
	font-family: 'uva';
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;

	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.geoblacklight-uva:before {
  content: "\e600";
}
```


