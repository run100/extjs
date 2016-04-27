Ext.define('RUN.view.student.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.studentlist',
    title : '学生信息列表',
    store: 'Students',//引用Store
    initComponent: function() {
        this.columns = [
            {header: '编号',  dataIndex: 'id',  flex: 1},
            {header: '姓名',  dataIndex: 'name',  flex: 1},
            {header: '年龄', dataIndex: 'age', flex: 1},
            {header: '性别', dataIndex: 'sex', flex: 1}
        ];
        this.callParent(arguments);
    }
});
// Ext.define('RUN.view.student.List' ,{
//     extend: 'Ext.container.Viewport',
//     layout: 'fit',
//     recycledNews: false,
//     style: {
//         backgroundColor: '#FFF'
//     },
//     initComponent: function() {
//         this.items = {
//             bodyBorder: false,
//             border: 0,
//             dockedItems: [{
//                 dock: 'top',
//                 height: 88,
//                 margin: '5, 5, 0, 5',
//                 contentEl: 'header',
//                 dockedItems:{
//                     dock: 'bottom',
//                     height: 36
//                 }
//             }]
//         };
//         this.callParent();
//     }
// });
