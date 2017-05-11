define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dojo/_base/lang',
    'esri/dijit/Legend'
], function (
    declare,
    _WidgetBase,
    lang,
    Legend
) {
    return declare([_WidgetBase], {
        startup: function () {
            this.inherited(arguments);
			      this.legend = new Legend({
                arrangement: this.arrangement || Legend.ALIGN_LEFT,
                autoUpdate: this.autoUpdate || true,
                id: this.id + '_legend',
                layerInfos: this.layerInfos,
                map: this.map,
                respectCurrentMapScale: this.respectCurrentMapScale || true
            }, this.domNode);
            this.legend.startup();

            this.map.on('update-end', lang.hitch(this, function () {
                var ids = this.map.layerIds,
                    i = 0;
                for(i; i < ids.length; i++) {
                  if(this.map.getLayer(ids[i]).displayInLegend == true) {
                    _addLayerToLegend.call(this, this.map.getLayer(ids[i]));
                  }
                }

                this.legend.refresh();
            }));

            function _addLayerToLegend(lyr) {
              // this.legend.layerInfos => { layer: {layerobj}, title: "title"}
              // already in layerInfos?
              var inLegend = false,
                  i = 0;
              if(lyr.label) {
                delete(lyr.layerInfos[0].name);
              } else {
                lyr.label = lyr.layerInfos[0].name
              }
              for(i; i < this.legend.layerInfos.length; i++) {
                if(this.legend.layerInfos[i].title == lyr.label) {
                  //do nothing
                  inLegend = true;
                  return;
                }
              }

              if(!inLegend) {
                this.legend.layerInfos.push({
                  layer: lyr,
                  title: lyr.label
                })
              }
            }
        }
    });
});
