Ext.define('RUN.store.Students', {
    extend: 'Ext.data.Store',
    fields: ['id','name', 'age','sex'],
    data: [
        {id:1,name: '张三1',    age: 30,sex:'男'},
        {id:2,name: '李四',    age: 20,sex:'女'}
    ]
});
