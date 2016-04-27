Ext.define('RUN.view.student.List' ,{
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    recycledNews: false,
    style: {
        backgroundColor: '#FFF'
    },
    initComponent: function() {
        console.log('RUN.view.student.List');
        this.items = {
            bodyBorder: true,
            border: 1,
            dockedItems: [{
                dock: 'top',
                height: 88,
                margin: '5, 5, 0, 5',
                contentEl: 'header',
                dockedItems:{
                    dock: 'bottom',
                    xtype: 'cmsmenu',
                    height: 36
                }
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            }
        }
        this.callParent();
    }
});
