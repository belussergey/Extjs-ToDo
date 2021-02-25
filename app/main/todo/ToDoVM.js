Ext.define('Test.main.todo.ToDoVM', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.todo',

    data: {
        name: '',
        selectedTask: null,
        date: null,
        hideRemoveAllBtn: false,
        lastName: '',
        firstName: ''
    },

    formulas: {
        hideAddBtn: {
            bind: {
                name: '{name}',
                date: '{date}'
            },
            get: function (data) {
                return data.name && data.date
            }

        },
        disableSaveBtn: {
            bind: {
                firstName: '{firstName}',
                lastName: '{lastName}'
            },
            get: function (data) {
                return data.firstName && data.lastName
            }

        }
    },


    stores: {
        tasks: {
            fields: [],
            data: []
        },
        humanList: {
            fields: ['fio'],
            data: [
                {fio: 'Иванов Иван'},
                {fio: 'Воронько Benn'},
                {fio: 'Василькович Романус'}
            ]
        }
    }
});
