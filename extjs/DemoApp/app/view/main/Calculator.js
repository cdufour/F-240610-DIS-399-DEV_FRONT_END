Ext.define('DemoApp.view.main.Calculator', {
    extend: 'Ext.Panel',
    xtype: 'maincalculator',
    title: 'Calculator',

    //html: '<p>Panel</p>'
    items: [
        {
           xtype: 'textfield',
           bind: {
            value: '{operand1}'
           }
        },
        {
            xtype: 'radiogroup',
            vertical: true,
            bind: '{operation}',
            items: [
                { boxLabel: 'Addition', name: 'op', inputValue: 'add' },
                { boxLabel: 'Soustraction', name: 'op', inputValue: 'sub' },
                { boxLabel: 'multiplication', name: 'op', inputValue: 'mul' },
                { boxLabel: 'division', name: 'op', inputValue: 'div' },
            ],
            
        },
        {
            xtype: 'textfield',
            bind: {
                value: '{operand2}'
            }
        },
        {
            xtype: 'button',
            bind: {
                text: '='
            },
            listeners: {
                click: 'compute'
            }
        },
        {
            xtype: 'displayfield',
            bind: {
                value: '{result}'
            } 
        }
    ]
});
