# node-red-contrib-ui-widget-thermometer
Node-RED UI Widget Thermometer node for Node-RED Dashboard

## Installation
```
npm install @studiobox/node-red-contrib-ui-widget-thermometer
```

## Help

### Node Settings

![Node Settings](/resources/widget-settings.png?raw=true "Node Settings")

### Widget Display

![Widget display](/resources/widget-display.png?raw=true "Widget display")

#### Description

1. Title - Thermometer's title
2. Top Area Color - Thermometer's mercury color at top area
3. Middle Area Color - Thermometer's mercury color at middle area
4. Bottom Area Color - Thermometer's mercury color at bottom area
5. Min. Temperature - Mininum temperature of thermometer for display
6. Max. Temperature - Maxinum temperature of thermometer for display
7. Unit - Unit for display
8. Scale - Thermometer size for display, includes 'normal' and 'small'

### Input API
Using *msg* object.

| Property     | Mandatory   | Type    | Description |
| ------------ |:-----------:|:-------:| ----------- |
| payload      | Yes         | Integer | Value for display on thermometer |

*Remark*

*If payload has value more than Max. Temperature settings, result thermometer mercury height at 100%. And if payload has value less than Mix. Temperature settings, result thermometer mercury height at 0%.*

## Examples
After install, see usage examples at Node-RED Import menu. Examples at '@studiobox/node-red-contrib-ui-widget-thermometer'.