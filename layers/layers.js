ol.proj.proj4.register(proj4);
//ol.proj.get("IGNF:LAMB93").setExtent([917750.859509, 6511140.414355, 956637.324762, 6541715.850760]);
var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var lyr_PlanIGN_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r?",
    attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Plan IGN",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGN_1, 0]);
var format_Communes_2 = new ol.format.GeoJSON();
var features_Communes_2 = format_Communes_2.readFeatures(json_Communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_2.addFeatures(features_Communes_2);
var lyr_Communes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_2, 
                style: style_Communes_2,
                popuplayertitle: "Communes",
                interactive: true,
                title: '<img src="styles/legend/Communes_2.png" /> Communes'
            });
var format_Volumesdebacsenplace_3 = new ol.format.GeoJSON();
var features_Volumesdebacsenplace_3 = format_Volumesdebacsenplace_3.readFeatures(json_Volumesdebacsenplace_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_Volumesdebacsenplace_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Volumesdebacsenplace_3.addFeatures(features_Volumesdebacsenplace_3);
var lyr_Volumesdebacsenplace_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Volumesdebacsenplace_3, 
                style: style_Volumesdebacsenplace_3,
                popuplayertitle: "Volumes de bacs en place",
                interactive: true,
    title: 'Volumes de bacs en place<br />\
    <img src="styles/legend/Volumesdebacsenplace_3_0.png" /> 0.0 - 500<br />\
    <img src="styles/legend/Volumesdebacsenplace_3_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/Volumesdebacsenplace_3_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Volumesdebacsenplace_3_3.png" /> 1500 - 5000<br />'
        });
var format_ProjetsPAV_4 = new ol.format.GeoJSON();
var features_ProjetsPAV_4 = format_ProjetsPAV_4.readFeatures(json_ProjetsPAV_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_ProjetsPAV_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjetsPAV_4.addFeatures(features_ProjetsPAV_4);
var lyr_ProjetsPAV_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjetsPAV_4, 
                style: style_ProjetsPAV_4,
                popuplayertitle: "Projets PAV",
                interactive: true,
                title: '<img src="styles/legend/ProjetsPAV_4.png" /> Projets PAV'
            });
var format_PAVexistants_5 = new ol.format.GeoJSON();
var features_PAVexistants_5 = format_PAVexistants_5.readFeatures(json_PAVexistants_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'IGNF:LAMB93'});
var jsonSource_PAVexistants_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAVexistants_5.addFeatures(features_PAVexistants_5);
var lyr_PAVexistants_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PAVexistants_5, 
                style: style_PAVexistants_5,
                popuplayertitle: "PAV existants",
                interactive: true,
                title: '<img src="styles/legend/PAVexistants_5.png" /> PAV existants'
            });
var group_PaysdAlby = new ol.layer.Group({
                                layers: [lyr_Satellite_0,lyr_PlanIGN_1,lyr_Communes_2,lyr_Volumesdebacsenplace_3,lyr_ProjetsPAV_4,lyr_PAVexistants_5,],
                                fold: "open",
                                title: "Pays d'Alby"});
var group_TCSPi = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "TCSPi"});
var group_Modernisation = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Modernisation"});
var group_EquipementPAV = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Equipement PAV"});
var group_ZoomModernisation = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Zoom Modernisation"});
var group_Grilles = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Grilles"});
var group_CollecteincitativeArgonnay = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Collecte incitative Argonnay"});
var group_CollecteincitativeEpagnyMetzTessy = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Collecte incitative Epagny-Metz-Tessy"});
var group_DonnesCollecteCitiPAV = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Données Collecte Citi'PAV"});
var group_ListingPAV = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Listing PAV"});
var group_Flux = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Flux"});
var group_Affichageterritoirevoisin = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Affichage territoire voisin"});
var group_AffichageBlanc = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Affichage Blanc"});
var group_CollecteincitativePringy = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Collecte incitative Pringy"});
var group_CarteADT = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Carte ADT"});
var group_ViuzlaChisaz = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Viuz-la-Chiésaz"});
var group_SuivideschantiersPAV = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Suivi des chantiers PAV"});
var group_Divers = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Divers"});
var group_Commune = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Commune"});
var group_Territoire = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Territoire"});
var group_Nature = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Nature"});
var group_Parcellaire = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Parcellaire"});
var group_Raster = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Raster"});
var group_Topo = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Topo"});

lyr_Satellite_0.setVisible(false);lyr_PlanIGN_1.setVisible(true);lyr_Communes_2.setVisible(true);lyr_Volumesdebacsenplace_3.setVisible(true);lyr_ProjetsPAV_4.setVisible(true);lyr_PAVexistants_5.setVisible(true);
var layersList = [group_PaysdAlby];
lyr_Communes_2.set('fieldAliases', {'ID': 'ID', 'PREC_PLANI': 'PREC_PLANI', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARRONDISST': 'ARRONDISST', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPUL': 'POPUL', 'MULTICAN': 'MULTICAN', });
lyr_Volumesdebacsenplace_3.set('fieldAliases', {'NUM': 'NUM', 'LAT': 'LAT', 'LONG': 'LONG', 'ADRESSE': 'ADRESSE', 'COMMUNE': 'COMMUNE', 'TYPE': 'TYPE', 'NOM': 'NOM', 'LITRAGE': 'LITRAGE', });
lyr_ProjetsPAV_4.set('fieldAliases', {'id': 'id', 'ADRESSE': 'ADRESSE', });
lyr_PAVexistants_5.set('fieldAliases', {'ETAT': 'ETAT', 'EX COL': 'EX COL', 'FLUX': 'FLUX', 'COMMUNE': 'COMMUNE', 'LAT': 'LAT', 'LONG': 'LONG', 'NUM': 'NUM', 'VOIE': 'VOIE', 'RUE': 'RUE', 'NOM VOIE COMPLET': 'NOM VOIE COMPLET', 'NOM CHAUFFEUR': 'NOM CHAUFFEUR', 'PRO': 'PRO', 'NUMERO DE GRUE': 'NUMERO DE GRUE', 'JOUR': 'JOUR', 'SEMAINE': 'SEMAINE', 'SAISONNALITE': 'SAISONNALITE', 'PREHENSION': 'PREHENSION', 'TYPE': 'TYPE', 'MARQUE': 'MARQUE', 'MODELE': 'MODELE', 'VOLUME COLLECTE': 'VOLUME COLLECTE', 'CA TGP': 'CA TGP', 'CA COVERING': 'CA COVERING', 'REF COVERING': 'REF COVERING', 'TYPE CA': 'TYPE CA', 'TYPE CSE': 'TYPE CSE', 'OPERCULE OM': 'OPERCULE OM', 'TYPE CE': 'TYPE CE', 'DATE OUVERTURE': 'DATE OUVERTURE', 'DATE RENOVATION': 'DATE RENOVATION', 'DATE SUPPRESSION': 'DATE SUPPRESSION', 'TYPE DE TRAVAUX': 'TYPE DE TRAVAUX', 'COMMENTAIRES': 'COMMENTAIRES', 'Date vérif. Photo': 'Date vérif. Photo', 'Nom photo': 'Nom photo', });
lyr_Communes_2.set('fieldImages', {'ID': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARRONDISST': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPUL': 'Range', 'MULTICAN': 'TextEdit', });
lyr_Volumesdebacsenplace_3.set('fieldImages', {'NUM': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'ADRESSE': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE': 'TextEdit', 'NOM': 'TextEdit', 'LITRAGE': 'TextEdit', });
lyr_ProjetsPAV_4.set('fieldImages', {'id': 'TextEdit', 'ADRESSE': 'TextEdit', });
lyr_PAVexistants_5.set('fieldImages', {'ETAT': 'TextEdit', 'EX COL': 'TextEdit', 'FLUX': 'TextEdit', 'COMMUNE': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'NUM': 'TextEdit', 'VOIE': 'TextEdit', 'RUE': 'TextEdit', 'NOM VOIE COMPLET': 'TextEdit', 'NOM CHAUFFEUR': 'TextEdit', 'PRO': 'TextEdit', 'NUMERO DE GRUE': 'TextEdit', 'JOUR': 'TextEdit', 'SEMAINE': 'TextEdit', 'SAISONNALITE': 'TextEdit', 'PREHENSION': 'TextEdit', 'TYPE': 'TextEdit', 'MARQUE': 'TextEdit', 'MODELE': 'TextEdit', 'VOLUME COLLECTE': 'TextEdit', 'CA TGP': 'TextEdit', 'CA COVERING': 'TextEdit', 'REF COVERING': 'TextEdit', 'TYPE CA': 'TextEdit', 'TYPE CSE': 'TextEdit', 'OPERCULE OM': 'TextEdit', 'TYPE CE': 'TextEdit', 'DATE OUVERTURE': 'TextEdit', 'DATE RENOVATION': 'TextEdit', 'DATE SUPPRESSION': 'TextEdit', 'TYPE DE TRAVAUX': 'TextEdit', 'COMMENTAIRES': 'TextEdit', 'Date vérif. Photo': 'TextEdit', 'Nom photo': 'TextEdit', });
lyr_Communes_2.set('fieldLabels', {'ID': 'header label - always visible', 'PREC_PLANI': 'header label - visible with data', 'NOM': 'header label - visible with data', 'CODE_INSEE': 'hidden field', 'STATUT': 'hidden field', 'CANTON': 'hidden field', 'ARRONDISST': 'hidden field', 'DEPART': 'hidden field', 'REGION': 'hidden field', 'POPUL': 'hidden field', 'MULTICAN': 'hidden field', });
lyr_Volumesdebacsenplace_3.set('fieldLabels', {'NUM': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'ADRESSE': 'no label', 'COMMUNE': 'no label', 'TYPE': 'no label', 'NOM': 'no label', 'LITRAGE': 'no label', });
lyr_ProjetsPAV_4.set('fieldLabels', {'id': 'no label', 'ADRESSE': 'no label', });
lyr_PAVexistants_5.set('fieldLabels', {'ETAT': 'no label', 'EX COL': 'no label', 'FLUX': 'no label', 'COMMUNE': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'NUM': 'no label', 'VOIE': 'no label', 'RUE': 'no label', 'NOM VOIE COMPLET': 'no label', 'NOM CHAUFFEUR': 'no label', 'PRO': 'no label', 'NUMERO DE GRUE': 'no label', 'JOUR': 'no label', 'SEMAINE': 'no label', 'SAISONNALITE': 'no label', 'PREHENSION': 'no label', 'TYPE': 'no label', 'MARQUE': 'no label', 'MODELE': 'no label', 'VOLUME COLLECTE': 'no label', 'CA TGP': 'no label', 'CA COVERING': 'no label', 'REF COVERING': 'no label', 'TYPE CA': 'no label', 'TYPE CSE': 'no label', 'OPERCULE OM': 'no label', 'TYPE CE': 'no label', 'DATE OUVERTURE': 'no label', 'DATE RENOVATION': 'no label', 'DATE SUPPRESSION': 'no label', 'TYPE DE TRAVAUX': 'no label', 'COMMENTAIRES': 'no label', 'Date vérif. Photo': 'no label', 'Nom photo': 'no label', });
lyr_PAVexistants_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});