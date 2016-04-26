Ext.application({
  requires : ['Ext.container.Viewport'],
  name : 'RUN',
  appFolder : 'app',
  controllers: ['Students'],
  launch : function() {
    console.log("launch triggered!");
    Ext.create('Ext.container.Viewport', {
          layout : 'fit',
          items : [
                {
                    xtype: 'studentlist',
                }
            ]
        });
  }
});
