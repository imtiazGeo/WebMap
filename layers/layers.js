var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_majheeblocks_sa12_20181022_compiled_1 = new ol.format.GeoJSON();
var features_majheeblocks_sa12_20181022_compiled_1 = format_majheeblocks_sa12_20181022_compiled_1.readFeatures(json_majheeblocks_sa12_20181022_compiled_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_majheeblocks_sa12_20181022_compiled_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_majheeblocks_sa12_20181022_compiled_1.addFeatures(features_majheeblocks_sa12_20181022_compiled_1);
var lyr_majheeblocks_sa12_20181022_compiled_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_majheeblocks_sa12_20181022_compiled_1, 
                style: style_majheeblocks_sa12_20181022_compiled_1,
                interactive: true,
                title: '<img src="styles/legend/majheeblocks_sa12_20181022_compiled_1.png" /> majheeblocks_sa12_20181022_compiled'
            });
var format_majheeblocks_sa12_20181022_compiled_centroids_2 = new ol.format.GeoJSON();
var features_majheeblocks_sa12_20181022_compiled_centroids_2 = format_majheeblocks_sa12_20181022_compiled_centroids_2.readFeatures(json_majheeblocks_sa12_20181022_compiled_centroids_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_majheeblocks_sa12_20181022_compiled_centroids_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_majheeblocks_sa12_20181022_compiled_centroids_2.addFeatures(features_majheeblocks_sa12_20181022_compiled_centroids_2);
var lyr_majheeblocks_sa12_20181022_compiled_centroids_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_majheeblocks_sa12_20181022_compiled_centroids_2, 
                style: style_majheeblocks_sa12_20181022_compiled_centroids_2,
                interactive: true,
                title: '<img src="styles/legend/majheeblocks_sa12_20181022_compiled_centroids_2.png" /> majheeblocks_sa12_20181022_compiled_centroids'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_majheeblocks_sa12_20181022_compiled_1.setVisible(true);lyr_majheeblocks_sa12_20181022_compiled_centroids_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_majheeblocks_sa12_20181022_compiled_1,lyr_majheeblocks_sa12_20181022_compiled_centroids_2];
lyr_majheeblocks_sa12_20181022_compiled_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Block_ID': 'Block_ID', 'SimpleBloc': 'SimpleBloc', 'SiteName': 'SiteName', 'LocalBlock': 'LocalBlock', 'LocalCamp': 'LocalCamp', 'Households': 'Households', 'Population': 'Population', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_majheeblocks_sa12_20181022_compiled_centroids_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Block_ID': 'Block_ID', 'SimpleBloc': 'SimpleBloc', 'SiteName': 'SiteName', 'LocalBlock': 'LocalBlock', 'LocalCamp': 'LocalCamp', 'Households': 'Households', 'Population': 'Population', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_majheeblocks_sa12_20181022_compiled_1.set('fieldImages', {'OBJECTID': '', 'Block_ID': '', 'SimpleBloc': '', 'SiteName': '', 'LocalBlock': '', 'LocalCamp': '', 'Households': '', 'Population': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_majheeblocks_sa12_20181022_compiled_centroids_2.set('fieldImages', {'OBJECTID': '', 'Block_ID': '', 'SimpleBloc': '', 'SiteName': '', 'LocalBlock': '', 'LocalCamp': '', 'Households': '', 'Population': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_majheeblocks_sa12_20181022_compiled_1.set('fieldLabels', {'OBJECTID': 'no label', 'Block_ID': 'no label', 'SimpleBloc': 'no label', 'SiteName': 'no label', 'LocalBlock': 'no label', 'LocalCamp': 'no label', 'Households': 'no label', 'Population': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_majheeblocks_sa12_20181022_compiled_centroids_2.set('fieldLabels', {'OBJECTID': 'no label', 'Block_ID': 'no label', 'SimpleBloc': 'no label', 'SiteName': 'no label', 'LocalBlock': 'no label', 'LocalCamp': 'no label', 'Households': 'no label', 'Population': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_majheeblocks_sa12_20181022_compiled_centroids_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});