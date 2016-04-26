Ext.define('RUN.controller.Students', {
    extend: 'Ext.app.Controller',
    views: [
        'student.List'//添加view视图
    ],
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },
    onPanelRendered: function() {
        console.debug('该panel被渲染了');
    }
});
