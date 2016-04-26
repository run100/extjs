Ext.define('RUN.controller.Students', {
    extend: 'Ext.app.Controller',
    stores: ['Students'],
    views: [
        'student.List',//添加view视图
        'student.Edit'
    ],
    init: function() {
        // this.control({
        //     'viewport > panel': {
        //         render: this.onPanelRendered
        //     }
        // });
        this.control({
          'studentlist': {
              itemdblclick: this.editStudent//添加行双击事件
          }
        });
    },
    editStudent: function(grid, record) {
        console.log('Double clicked on ' + record.get('name'));
        var view = Ext.widget('studentedit');//注册组件，显示窗口
        view.down('form').loadRecord(record);//加载数据到表单中
    },
    onPanelRendered: function() {
        console.debug('该panel被渲染了');
    }
});
