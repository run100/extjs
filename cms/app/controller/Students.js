Ext.define('RUN.controller.Students', {
    extend: 'Ext.app.Controller',
    stores: ['Students'],
    model: ['Student'],
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
          'viewport > studentlist': {
                itemdblclick: this.editStudent
            },
            'studentedit button[action=save]': {
                //  获取studentedit视图中的button配置action=‘save’的按钮事件
                click: this.updateStudent
            }
        });
    },
    editStudent: function(grid, record) {
        console.log('Double clicked on ' + record.get('name'));
        var view = Ext.widget('studentedit');//注册组件，显示窗口
        view.down('form').loadRecord(record);//加载数据到表单中
    },
    updateStudent: function(button) {
        // console.log('clicked the Save button');
        var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
        record.set(values);
        win.close();
    },
    onPanelRendered: function() {
        console.debug('该panel被渲染了');
    }
});
