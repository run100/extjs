Ext.define('cms.controller.Students', {
  extend: 'Ext.app.Controller',
  refs: [{
    ref: 'newsCatalogsTree',
    selector: 'newscatalogstree'
  }],
  //stores: ['NewsCatalogFolder'],
  //views: ['NewsCatalogsTree'],
  init: function() {
    console.log('cms.controller.Students');
    this.control({
      'newscatalogstree': {
        beforerender: function(store) {
                console.log(2222);
                var tree_panel = this.getNewsCatalogsTree();
                if (tree_panel.recycledNews) {
                    store.on('load', function(){
                        var root_node = store.getRootNode();
                        tree_panel.getSelectionModel().select(root_node);
                    }, store, {single: true})
                } else {
                    store.on('load', function(){
                        var root_node = store.getRootNode();
                        var my_news_node = root_node.insertChild(0, Ext.create('cms.model.NewsCatalogFolder', {
                            id: 0,
                            text: '我的新闻',
                            leaf: true
                        }));
                        tree_panel.getSelectionModel().select(my_news_node);
                    }, store, {single: true})
                }
            }
        }
    });
  }
});
