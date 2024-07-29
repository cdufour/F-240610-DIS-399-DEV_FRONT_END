/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('DemoApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    myFunction: function (sender, record, index, eOpts) {
        console.log('My Function');
        console.log(record.data.name);
    },

    compute: function() {
        console.log('compute');
        const me = this;
        const vm = me.getViewModel();
        op1 = parseFloat(vm.get('operand1'));
        op2 = parseFloat(vm.get('operand2'));
        op = vm.get('operation').op;
        var result;
        if (op === 'add') {
            result = op1 + op2;
        } else if (op === 'sub') {
            result = op1 - op2;
        } else if (op === 'mul') {
            result = op1 * op2;
        } else if (op === 'div') {
            result = op1 / op2;
        } else {
            result = 0;
        }
        vm.set('result', result) // update des data en binding
    }
});
