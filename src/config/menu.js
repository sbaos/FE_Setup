export const userMenu = {
    menus: [{
        label: 'Home',
        link: '/',
        icon: 'fa-solid fa-house',
    }, {
        label: 'Print',
        link: '/print',
        icon: 'fa-solid fa-print',
        submenu: [
            {
                label: 'Print',
                link: '/print',
                icon: 'fa-solid fa-print',
                // submenu: [{}]
            }, {
                label: 'History',
                link: '/history',
                icon: 'fa-regular fa-clock',
                submenu: []
            }, {
                label: 'Printer9',
                link: '/printer9',
                icon: 'fa-solid fa-print',
                submenu: [{
                    label: 'Printer11',
                    link: '/printer11',
                    icon: 'fa-solid fa-print',
                }]
            }, {
                label: 'Printer20',
                link: '/printer20',
                icon: 'fa-solid fa-print',
                submenu: [{
                    label: 'Printer33',
                    link: '/printer33',
                    icon: 'fa-solid fa-print',
                }]
            }
        ]
    }, {
        label: 'BKPay',
        link: '/payment',
        icon: 'fa-regular fa-credit-card',
        submenu: [
            {
                label: 'Deposit',
                link: 'payment/deposit',
                icon: 'fa-solid fa-money-check-dollar',
                submenu: []
            }, {
                label: 'Payment history',
                link: '/payment/history',
                icon: 'fa-regular fa-clock',
                submenu: []
            }, {
                label: 'Deposit',
                link: 'payment/deposit',
                icon: 'fa-solid fa-money-check-dollar',
                submenu: []
            }, {
                label: 'Payment history',
                link: '/payment/history',
                icon: 'fa-regular fa-clock',
                submenu: []
            }, {
                label: 'Deposit',
                link: 'payment/deposit',
                icon: 'fa-solid fa-money-check-dollar',
                submenu: []
            }, {
                label: 'Payment history',
                link: '/payment/history',
                icon: 'fa-regular fa-clock',
                submenu: []
            }, {
                label: 'Deposit',
                link: 'payment/deposit',
                icon: 'fa-solid fa-money-check-dollar',
                submenu: []
            }, {
                label: 'Payment historym',
                link: '/payment/history',
                icon: 'fa-regular fa-clock',
                submenu: []
            }
        ]
    }
    ]
}
export const adminMenu = {
    menus: [{
        label: 'Manage',
        link: '/manage',
        icon: 'fa-solid fa-user-tie',
        submenu: []
    }, {
        label: 'Config System Setting',
        link: '/config',
        icon: 'fa-solid fa-wrench',
        submenu: []
    }, {
        label: 'Log',
        link: '/log',
        icon: 'fa-solid fa-table-list',
        submenu: []
    }

    ]
}