// times in seconds => 1500: 25min | 300: 5min | 900: 15min
const timerController = timer(1500, 300, 900);
const taskListController = taskList();

timerController.init();
taskListController.init();