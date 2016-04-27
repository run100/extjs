Ext.define('RUN.view.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.cmsmenu',
    initComponent: function() {
        console.log('RUN.view.Menu');
        this.defaults = {
            hrefTarget: ''
        };
        this.items = [{
            text: '区块',
            href: '/news/admin/block'
        }];
        this.callParent();
    }
});
