define([
    'dojo/i18n!./nls/main'
], function (i18n) {

    return {
        map: true,
        editable: false,
        bookmarks: [
            {
                // extent for new bookmarks can be figured here, http://davidspriggs.github.io/js-extent-helper/extentHelper/ 
				// wkid 102100 is web mercatur.
				extent: {"xmin":-13810699.59833319,"ymin":5772609.439811254,"xmax":-13774009.824756356,"ymax":5790763.23402896,"spatialReference":{"wkid":102100}},
                name: 'Necanicum River'
            },
            {
                extent: {"xmin":-13810537.169648083,"ymin":5721864.807658502,"xmax":-13773847.39607125,"ymax":5740018.601876208,"spatialReference":{"wkid":102100}},
                name: 'Nehalem Bay'
            },
			{
                extent:  {"xmin":-13820808.395323891,"ymin":5684362.890656022,"xmax":-13755072.550998729,"ymax":5716237.131450897,"spatialReference":{"wkid":102100}},
                name: 'Tillamook Bay'
            },
			{
                extent:  {"xmin":-13813069.146210028,"ymin":5676661.860056302,"xmax":-13780201.224047447,"ymax":5692598.980453739,"spatialReference":{"wkid":102100}},
                name: 'Netarts Bay'
            },
			{
                extent:  {"xmin":-13806634.103891278,"ymin":5661054.374343351,"xmax":-13790200.142809985,"ymax":5669022.93454207,"spatialReference":{"wkid":102100}},
                name: 'Sand Lake'
            },
			{
                extent:  {"xmin":-13814516.672433177,"ymin":5642852.806982969,"xmax":-13781648.750270596,"ymax":5658789.927380406,"spatialReference":{"wkid":102100}},
                name: 'Nestucca River'
            },
			{
                extent: {"xmin":-13810862.027018268,"ymin":5623132.053685393,"xmax":-13794428.065936975,"ymax":5631100.613884112,"spatialReference":{"wkid":102100}},
                name: 'Salmon River'
            },
			{
                extent: {"xmin":-13820703.294409972,"ymin":5596789.9428126495,"xmax":-13787835.37224739,"ymax":5612727.063210087,"spatialReference":{"wkid":102100}},
                name: 'Siletz River'
            },
			{
                extent: {"xmin":-13814521.449747568,"ymin":5589681.299181899,"xmax":-13805349.006353104,"ymax":5593980.882023053,"spatialReference":{"wkid":102100}},
                name: 'Depoe Bay'
            },
			{
                extent:  {"xmin":-13818868.805731129,"ymin":5551348.129497174,"xmax":-13786000.883568548,"ymax":5567285.249894612,"spatialReference":{"wkid":102100}},
                name: 'Yaquina Bay'
            },
			{
                extent:  {"xmin":-13823779.884798447,"ymin":5523161.975317054,"xmax":-13790911.962635865,"ymax":5539099.095714492,"spatialReference":{"wkid":102100}},
                name: 'Alsea Bay'
            },
			{
                extent: {"xmin":-13832035.083853235,"ymin":5451808.00941294,"xmax":-13766299.239528073,"ymax":5483682.250207814,"spatialReference":{"wkid":102100}},
                name: 'Siuslaw River'
            },
			{
                extent: {"xmin":-13836200.901894772,"ymin":5402467.907654926,"xmax":-13770465.05756961,"ymax":5434342.148449801,"spatialReference":{"wkid":102100}},
                name: 'Umpqua River'
            },
			{
                extent:  {"xmin":-13860278.565804567,"ymin":5353051.368868628,"xmax":-13794542.721479405,"ymax":5384925.609663502,"spatialReference":{"wkid":102100}},
                name: 'Coos Bay'
            },
			{
                extent:  {"xmin":-13868419.109316926,"ymin":5319839.480078764,"xmax":-13802683.264991764,"ymax":5351713.720873639,"spatialReference":{"wkid":102100}},
                name: 'Coquille River'
            },
			{
                extent:  {"xmin":-13868930.281943576,"ymin":5283722.984214071,"xmax":-13852496.320862284,"ymax":5291691.54441279,"spatialReference":{"wkid":102100}},
                name: 'Sixes River'
            },
			{
                extent: {"xmin":-13869388.90411328,"ymin":5277641.463151148,"xmax":-13852954.943031987,"ymax":5285610.023349866,"spatialReference":{"wkid":102100}},
                name: 'Elk River'
            },
			{
                extent: {"xmin":-13855138.175652396,"ymin":5221923.6468455875,"xmax":-13822270.253489815,"ymax":5237860.767243025,"spatialReference":{"wkid":102100}},
                name: 'Rogue River'
            },
			{
                extent: {"xmin":-13838885.75251328,"ymin":5166100.72962616,"xmax":-13822451.791431988,"ymax":5174069.289824879,"spatialReference":{"wkid":102100}},
                name: 'Pistol River'
            },
			{
                extent: {"xmin":-13850356.08407041,"ymin":5161750.984984807,"xmax":-13813666.310493577,"ymax":5178949.3163489485,"spatialReference":{"wkid":102100}},
                name: 'Chetco River'
            },
			{
                extent: {"xmin":-13830052.498432152,"ymin":5160181.637248299,"xmax":-13821835.51789128,"ymax":5164165.917347769,"spatialReference":{"wkid":102100}},
                name: 'Winchuck River'
            }
        ]
    };
});