Ext.define('cms.store.NewsCatalogFolder', {
    extend: 'Ext.data.TreeStore',
    model: 'cms.model.NewsCatalogFolder',
    // proxy: {
    //     type: 'ajax',
    //     url: '/news/admin/getNewsCatalogFolder',
    //     reader: {
    //         type: 'json'
    //     }
    // },
    root: {
        text: '新闻类别',
        id: '1',
        expanded: true
    },
    folderSort: true,
    data: [
        {"text":"\u623f\u4ea7","id":30,"leaf":false},
        {"text":"\u5bb6\u88c5","id":80,"leaf":false},
        {"text":"\u8d2d\u7269","id":150,"leaf":false},
        {"text":"\u4f11\u95f2","id":800,"leaf":false},
        {"text":"\u4fbf\u6c11","id":900,"leaf":false},
        {"text":"\u4e07\u5bb6\u4e13\u680f","id":1400,"leaf":false},
        {"text":"\u4eb2\u5b50","id":1580,"leaf":false},
        {"text":"\u5bb6\u7535","id":1900,"leaf":false}
    ]
});
