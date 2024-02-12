const routes = {
    users: {
        signup: '/users/signup',
        login: '/users/login',
        forget_password: '/users/forget/password',
        reset_password: '/users/reset/password',
        send_email_link: '/users/verify/email/send_link',
        verify_email: '/users/verify/email'
    },
    tasks: {
        getGroups: '/tasks/group/get',
        addGroup: '/tasks/group/add',
        editGroup: '/tasks/group/edit',
        getDates: '/tasks/group/get/dates',
        deleteGroup: '/tasks/group/delete',
        addTask: '/tasks/group/task/add',
        editTask: '/tasks/group/task/edit',
        deleteTask: '/tasks/group/task/delete'
    },
    expenses: {
        getDates: '/expenses/get/dates',
        currentExpenses: '/expenses/current',
        monthlyExpenses: '/expenses/monthly',
        yearlyExpenses: '/expenses/yearly',
        addExpense: '/expenses/add',
        editExpense: '/expenses/edit',
        deleteExpense: '/expenses/delete',
        getExpCategories: '/expenses/categories/expense',
        getInCategories: '/expenses/categories/income',
        addCategories: '/expenses/categories/add',
        editCategories: '/expenses/categories/edit',
        deleteCategories: '/expenses/categories/delete'
    },
    folders: {
        getMainContent: '/folders/get/main',
        getSubContent: '/folders/get/sub_folder',
        createFolder: '/folders/create',
        editFolder: '/folders/edit',
        deleteFolder: '/folders/delete'
    },
    journals: {
        getJournals: '/journals/get',
        getJournal: '/journals/get_journal',
        addJournal: '/journals/add',
        editJournal: '/journals/edit',
        deleteJournal: '/journals/delete'
    }
};

export default routes;