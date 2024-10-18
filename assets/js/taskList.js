function taskList() {
    const taskList = document.getElementById('task-list');
    const formAddTask = document.getElementById('container-add-task');
    const inputNewTask = document.getElementById('input-new-task');


    const factoryTask = (taskText) => {
        const liElement = document.createElement('li');
        liElement.classList.add('task-item');

        const divElement = document.createElement('div');
        divElement.classList.add('container-task');

        const labelElement = document.createElement('label');
        labelElement.classList.add('checkbox-label');

        const inputCheckboxElement = document.createElement('input');
        inputCheckboxElement.type = 'checkbox';
        inputCheckboxElement.classList.add('input-checkbox');

        const spanElement = document.createElement('span');
        spanElement.classList.add('custom-checkbox');

        const inputTextElement = document.createElement('p');
        inputTextElement.classList.add('input-add-task');
        inputTextElement.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn-delete-task');
        deleteButton.textContent = 'Delete';


        labelElement.appendChild(inputCheckboxElement);
        labelElement.appendChild(spanElement);
        divElement.appendChild(labelElement);
        divElement.appendChild(inputTextElement);
        divElement.appendChild(deleteButton);
        liElement.appendChild(divElement);

        return liElement;
    }

    const clearAndFocusInput = () => {
        inputNewTask.value = '';
        inputNewTask.focus();
    }
    
    const addTask = (taskText) => {
        const newTask = factoryTask(taskText);
        taskList.appendChild(newTask);
        attachTaskEvents(newTask);
        return newTask;
    }

    const attachTaskEvents = (taskItem) => {
        const checkbox = taskItem.querySelector('.input-checkbox');
        const inputTextElement = taskItem.querySelector('.input-add-task');
        const deleteButton = taskItem.querySelector('.btn-delete-task');

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                inputTextElement.classList.add("complete-task");
            } else {
                inputTextElement.classList.remove("complete-task");
            }
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
    
    const init = () => {
        formAddTask.addEventListener('submit', (e) => {
            e.preventDefault();
            if(inputNewTask.value.trim() === '') {
                return;
            }
            const taskText = inputNewTask.value.trim();
            addTask(taskText);
            clearAndFocusInput();
        });
    }

    return { init }
}