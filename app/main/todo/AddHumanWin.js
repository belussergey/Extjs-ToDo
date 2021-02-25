Ext.define('Test.main.todo.AddHumanWin', {
    extend: 'Ext.window.Window',
    xtype: 'addhumanwin',

    viewModel: 'todo',
    controller: 'todo',

    title: 'Добавление нового сотрудника',
    modal: true,
    width: 300,
    height: 200,
    padding: 15,
    layout: 'vbox',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Фамилия',
            width: 250,
            labelWidth: 55,
            bind: {
                value: '{lastName}'
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Имя',
            width: 250,
            labelWidth: 55,
            bind: {
                value: '{firstName}'
            }
        }],
    bbar: [
        '->',
        {
            text: 'Сохранить',
            width: 100,
            bind: {
                disabled: '{!disableSaveBtn}'
            },
            handler: 'handleAddHuman'
        },
        {
            text: 'Отменить',
            width: 100,
            handler: function () {
                this.up('window').close();
            }
        }
    ]
});
