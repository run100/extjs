Ext.define('RUN.store.Students', {
    extend: 'Ext.data.Store',
    //fields: ['id','name', 'age','sex'],
    model: 'RUN.model.Student',
    autoLoad: true,
    data: [
        {id:1,name: '张三1',    age: 30,sex:'男'},
        {id:2,name: '李四',    age: 20,sex:'女'}
    ]
    // proxy: {
    //     type: 'ajax',
    //     url: 'data/students.json',
    //     reader: {
    //         type: 'json',
    //         root: 'students',
    //         successProperty: 'success'
    //     }
    // }
});
