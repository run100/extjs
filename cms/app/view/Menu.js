Ext.define('cms.view.Menu', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.cmsmenu',
    initComponent: function() {
      this.defaults = {
          hrefTarget: ''
      };
      this.items = [
        {
            text: '区块',
            href: '/news/admin/block'
        }
      ];
      this.callParent();
      console.log('cms.view.Menu');
    }
});
