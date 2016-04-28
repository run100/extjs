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
          href: 'http://baidu.com',
          target: 'blank'
        },
        {
          text: '一级菜单',
          menu: {
            xtype: 'menu',
            items: [
              {
                text: '二级菜单',
                href: 'http://blog.chromev.com'
              },
              {
                text: '来个测试',
                href: 'http://blog.chromev.com'
              },
              {
                text: '三级菜单',
                menu: {
                  xtype: 'menu',
                  items: [
                    {
                      text: '角色管理',
                      href: 'http://blog.chromev.com'
                    }
                  ]
                }
              }
            ]
          }
        }
      ];
      this.callParent();
      console.log('cms.view.Menu');
    }
});
