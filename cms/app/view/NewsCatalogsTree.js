Ext.define('cms.view.NewsCatalogsTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.newscatalogstree',
    store: 'NewsCatalogFolder',
    title: '新闻栏目',
    rootVisible: true,
    frame: true,
    autoScroll: true,
    initComponent: function() {
        this.callParent();
    }
});
