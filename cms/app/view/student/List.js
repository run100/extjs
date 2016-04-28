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
            items: [{
                layout: 'border',
                title: '点击收缩面板 →',
                titleCollapse: true,
                frame: true,
                headerPosition: 'left',
                animCollapse: false,
                collapsible: true,
                collapseDirection: 'left',
                split:true,
                margin: '5, 2, 5, 5',
                width: 300,
                items:[
                    {
                        xtype: 'newscatalogstree',
                        title: '',
                        region:'north',
                        recycledNews: this.recycledNews,
                        border: true,
                        frame: false,
                        height: '40%'
                    }
                ]
            }]
        }

        this.callParent();
        console.log('cms.view.student.List2');

    }
});
