let state = {
    contentData: {
        taskData: {
            tasks: [
                {to: '/tasks/1', category: 'Машина', description: 'Почистить салон', percent: 50},
                {to: '/tasks/2', category: 'Дом', description: 'Сложить вещи', percent: 22},
                {to: '/tasks/3', category: 'Учеба', description: 'Пройти курс реакта', percent: 11}
            ],
            createTaskPanelData: {
                to: '/tasks/newTask',
                description: 'Новая задача'
            }
        }
    },

    navbarData: {
        itemsData: [
            {to: '/tasks', description: 'Задачи'},
            {to: '/finance', description: 'Финансы'},
            {to: '/statistic', description: 'Статистика'}
        ]
    },

    taskData: {
        percent: 0
    },
}

function _getAllPercent(state) {
    let tasks = state.contentData.taskData.tasks;
    let allTasksCount = tasks.length;
    let sumOfAllTaskPercent = tasks
        .reduce((accumulator, currentValue) => accumulator + currentValue.percent, 0);
    return Number(sumOfAllTaskPercent / allTasksCount).toFixed(2);
}

function _renderPercent(state) {
    state.taskData.percent = _getAllPercent(state);
}

_renderPercent(state);

export default state;