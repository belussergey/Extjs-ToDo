Ext.define('Test.main.todo.ToDoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todo',

    init: function () {
        this.readFromLocalstorage();
    },

    handleAdd: function () {
        var vm = this.getViewModel(),
            name = vm.get('name'),
            tasks = vm.get('tasks'),
            date = vm.get('date'),
            newTask = true,
            fio = vm.get('fio');

        tasks.each(function (record) {
            if (name === record.get('name')) {
                Ext.Msg.alert('Внимание', 'Такая задача уже существует!');
                newTask = false;
            }
        });

        if (newTask) {
            tasks.add({name: name, date: date, fio: fio, status: false});
            this.saveToLocalStorage();
            vm.set('name', null);
            vm.set('date', null);
            vm.set('fio', null);
        }
    },

    handleAddHuman: function () {
        var vm = this.getViewModel(),
            firstName = vm.get('firstName'),
            lastName = vm.get('lastName'),
            humanList = vm.get('humanList');

        humanList.add({fio: firstName + ' ' + lastName});

        vm.set('firstName', null);
        vm.set('lastName', null);

        this.getView().close();
    },

    handleDeleteTask: function () {
        var vm = this.getViewModel(),
            tasks = vm.get('tasks'),
            selectedTask = vm.get('selectedTask');

        tasks.remove(selectedTask);

        if (tasks.count() === 0) {
            vm.set('hideRemoveAllBtn', true);
        }

        this.saveToLocalStorage();
    },

    handleShowWin: function () {
        var vm = this.getViewModel(),
            win;

        win = Ext.create({
            xtype: 'addhumanwin',
            viewModel:{            //Указывает родительскую ViewModel
                parent: vm
            }
        });
        win.show();
    },

    handleDeleteTasks: function () {
        var vm = this.getViewModel(),
            tasks = vm.get('tasks');

        tasks.removeAll();
        vm.set('hideRemoveAllBtn', true);
        this.saveToLocalStorage();
    },

    handleComplete: function () {
        var vm = this.getViewModel(),
            selectedTask = vm.get('selectedTask');

        selectedTask.set('status', true);
        this.saveToLocalStorage();
    },

    saveToLocalStorage: function () {
        var vm = this.getViewModel(),
            tasks = vm.get('tasks'),
            data = [];

        tasks.each(function (record) {
            data.push({
                name: record.data.name,
                status: record.data.status,
                fio: record.data.fio,
                date: +record.data.date
            });
        });
        localStorage.setItem('tasks', JSON.stringify(data));
    },

    readFromLocalstorage: function () {
        var vm = this.getViewModel(),
            tasks = vm.get('tasks'),
            data = localStorage.getItem('tasks'),
            list = data ? JSON.parse(data) : [];

        tasks.add(list.map(function (item) {
            return {name: item.name, status: item.status, fio: item.fio, date: new Date(item.date)};
        }));
    }
});
