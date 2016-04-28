Ext.define('cms.view.student.List' ,{
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    recycledNews: false,
    style: {
        backgroundColor: '#fff'
    },
    initComponent: function() {
        this.items = {
            bodyBorder: false,
            border: 0,
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
            },
        }

        this.callParent();
        console.log('cms.view.student.List2');

    }
});
