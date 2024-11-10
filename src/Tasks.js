import React, { useState } from 'react';

const Tasks = () => {
    const [taskInput, setTaskInput] = useState('');
    const [dueDateInput, setDueDateInput] = useState('');
    const [priorityInput, setPriorityInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [completedMessageVisible, setCompletedMessageVisible] = useState(false);

    const handleAddTask = (event) => {
        event.preventDefault();
        const newTask = {
            taskInput,
            dueDateInput,
            priorityInput,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setTaskInput('');
        setDueDateInput('');
        setPriorityInput('');
    };

    const handleEditTask = (index) => {
        const newTask = prompt('Edit Task:', tasks[index].taskInput);
        if (newTask) {
            const updatedTasks = [...tasks];
            updatedTasks[index].taskInput = newTask;
            setTasks(updatedTasks);
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
        checkIfAllCompleted(updatedTasks);
    };

    const checkIfAllCompleted = (taskList) => {
        const allCompleted = taskList.every(task => task.completed);
        setCompletedMessageVisible(allCompleted);
    };

    const handleSearch = (event) => {
        setSearchValue(event.target.value.toLowerCase());
    };

    const handleCheckboxToggle = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
        checkIfAllCompleted(updatedTasks);
    };

    return (
        <div>
            <header>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="white">
                        <path d="M480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-83.67 30.83-156.67 30.84-73 84.84-127t127-85.16Q395.67-880 480-880q71.67 0 134.33 22.33Q677-835.33 728-796l-48 48.33q-42-31.33-92.33-48.5-50.34-17.16-107.67-17.16-141 0-237.17 96.16Q146.67-621 146.67-480t96.16 237.17Q339-146.67 480-146.67q35.33 0 68.33-6.66Q581.33-160 612-173l50 51q-41 20-86.67 31Q529.67-80 480-80Zm286.67-86.67v-120h-120v-66.66h120v-120h66.66v120h120v66.66h-120v120h-66.66ZM422-297.33 255.33-464.67 304-513.33l118 118L831.33-805l49.34 48.67-458.67 459Z"/>
                    </svg>
                    Task Manager
                </h1>
                <nav>
                    <a href="/">🏠 Home</a>
                    <a href="tasks">📝 Tasks</a>
                    <a href="login">🔑 Login</a>
                    <a className="space" href="register">🆕 Register</a>
                </nav>
            </header>

            <main className="centered">
                <div className="box">
                    <h2>Your Tasks</h2>
                    <form onSubmit={handleAddTask}>
                        <label htmlFor="taskInput">New Task:</label>
                        <input
                            type="text"
                            id="taskInput"
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                            placeholder="🌼 What do you want to accomplish?"
                            required
                        />
                        <label htmlFor="dueDate">Due Date:</label>
                        <input
                            type="date"
                            id="dueDate"
                            value={dueDateInput}
                            onChange={(e) => setDueDateInput(e.target.value)}
                            required
                        />
                        <label htmlFor="priority">Priority:</label>
                        <select
                            id="priority"
                            value={priorityInput}
                            onChange={(e) => setPriorityInput(e.target.value)}
                            required
                        >
                            <option value="">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <button type="submit">Add Task</button>
                    </form>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={handleSearch}
                        placeholder="🔍 Search tasks..."
                        style={{ marginTop: '15px' }}
                    />
                    <ul id="taskList">
                        {tasks
                            .filter(task => task.taskInput.toLowerCase().includes(searchValue))
                            .map((task, index) => (
                                <li key={index} data-priority={task.priorityInput}>
                                    <input
                                        type="checkbox"
                                        className="task-checkbox"
                                        checked={task.completed}
                                        onChange={() => handleCheckboxToggle(index)}
                                        style={{ marginRight: '10px' }}
                                    />
                                    {task.taskInput} (Due: {task.dueDateInput}, Priority: {task.priorityInput})
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => handleEditTask(index)}
                                    >
                                        ✏
                                    </button>
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => handleDeleteTask(index)}
                                    >
                                        ❌
                                    </button>
                                </li>
                            ))}
                    </ul>
                    {completedMessageVisible && (
                        <div style={{ marginTop: '15px' }}>All tasks are completed! 🎉</div>
                    )}
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Task Management App - Stay organized! 🌈</p>
            </footer>
        </div>
    );
};

export default Tasks;
