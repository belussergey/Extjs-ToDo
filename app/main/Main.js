Ext.define('Test.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'appMain',

    viewModel: {},
    height:'100%',

    items: [{
        title: 'todo list',
        items: [{
            xtype: 'todo'
        }]
    }]
});
