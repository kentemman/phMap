var wms_layers = [];

var format_Regions_0 = new ol.format.GeoJSON();
var features_Regions_0 = format_Regions_0.readFeatures(json_Regions_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_0.addFeatures(features_Regions_0);
var lyr_Regions_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Regions_0, 
                style: style_Regions_0,
                interactive: true,
    title: 'Regions<br />\
    <img src="styles/legend/Regions_0_0.png" /> 1,722,006 - 2,991,283<br />\
    <img src="styles/legend/Regions_0_1.png" /> 2,991,283 - 4,260,560<br />\
    <img src="styles/legend/Regions_0_2.png" /> 4,260,560 - 5,529,836<br />\
    <img src="styles/legend/Regions_0_3.png" /> 5,529,836 - 6,799,113<br />\
    <img src="styles/legend/Regions_0_4.png" /> 6,799,113 - 8,068,390<br />\
    <img src="styles/legend/Regions_0_5.png" /> 8,068,390 - 9,337,667<br />\
    <img src="styles/legend/Regions_0_6.png" /> 9,337,667 - 10,606,944<br />\
    <img src="styles/legend/Regions_0_7.png" /> 10,606,944 - 11,876,220<br />\
    <img src="styles/legend/Regions_0_8.png" /> 11,876,220 - 13,145,497<br />\
    <img src="styles/legend/Regions_0_9.png" /> 13,145,497 - 14,414,774<br />'
        });

lyr_Regions_0.setVisible(true);
var layersList = [lyr_Regions_0];
lyr_Regions_0.set('fieldAliases', {'REGION': 'REGION', 'POPULATION': 'POPULATION', });
lyr_Regions_0.set('fieldImages', {'REGION': 'TextEdit', 'POPULATION': 'TextEdit', });
lyr_Regions_0.set('fieldLabels', {'REGION': 'header label', 'POPULATION': 'header label', });
lyr_Regions_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});