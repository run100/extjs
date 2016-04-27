Ext.define('RUN.view.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.menu',
    initComponent: function() {
        this.defaults = {
            hrefTarget: ''
        };

        this.callParent();
    },
});
