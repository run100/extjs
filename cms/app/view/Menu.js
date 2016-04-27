Ext.define('RUN.view.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.cmsmenu',
    initComponent: function() {
        console.log('RUN.view.Menu');
        this.defaults = {
            hrefTarget: ''
        };
        this.items = [{
            text: '新闻',
            menu: {
                xtype: 'menu',
                items: [{
                    text: '新闻列表',
                    href: '/news/admin/list'
                }]
            }
        }];
        this.callParent();
    }
});
