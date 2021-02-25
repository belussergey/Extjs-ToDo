Ext.define('Test.main.moviedb.ToDo', {
    extend: 'Ext.container.Container',
    xtype: 'todo',
    padding: 10,
    viewModel: 'todo',
    controller: 'todo',
    items: [{
        xtype: 'container',
        layout: 'vbox',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Введите название задачи:',
            labelWidth: 180,
            width: 400,
            bind: {
                value: '{name}'
            }
        }, {
            xtype: 'datefield',
            fieldLabel: 'Введите дату',
            labelWidth: 180,
            width: 400,
            bind: {
                value: '{date}'
            }
        }, {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'combobox',
                    valueField: 'fio',
                    displayField: 'fio',
                    fieldLabel: 'Сотрудники',
                    labelWidth: 180,
                    width: 400,
                    bind: {
                        store: '{humanList}',
                        value: '{fio}',
                    }
                },
                {
                    xtype: 'button',
                    text: 'Добавить нового сотрудника',
                    margin: '0 0 0 20',
                    handler: 'handleShowWin'
                }]
        },
            {
                xtype: 'button',
                text: 'Добавить',
                bind: {
                    hidden: '{!hideAddBtn}',
                },
                handler: 'handleAdd'

            }]
    }, {
        xtype: 'grid',
        width: '100%',
        height: 700,
        bind: {
            store: '{tasks}',
            selection: '{selectedTask}'
        },
        columns: [
            {
                text: 'Название задачи',
                dataIndex: 'name',
                align: 'left',
                flex: 2
            },
            {
                xtype: 'datecolumn',
                text: 'Дата',
                align: 'center',
                format: 'd.m.Y h:i:s',
                dataIndex: 'date',
                flex: 2
            },
            {
                text: 'Сотрудник',
                align: 'left',
                dataIndex: 'fio',
                flex: 1
            },
            {
                text: 'Статус',
                align: 'center',
                dataIndex: 'status',
                renderer: function (value) {
                    return value ? 'Выполнена' : 'Не выполнена';
                },
                flex: 1
            },],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'button',
                    text: 'Удалить',
                    bind: {
                        hidden: '{!selectedTask}'
                    },
                    handler: 'handleDeleteTask'
                },
                {
                    xtype: 'button',
                    text: 'Выполнить',
                    bind: {
                        hidden: '{!selectedTask}'
                    },
                    handler: 'handleComplete'
                },
                {
                    xtype: 'button',
                    text: 'Удалить всё',
                    bind: {
                        hidden: '{hideRemoveAllBtn}'
                    },
                    handler: 'handleDeleteTasks'

                }]
        },]

    }]
});
