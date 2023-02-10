import React, { useState } from 'react';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import { nanoid } from 'nanoid';

/*

interface EnumServiceItem {
    id: number; label: string; key: any
}

interface EnumServiceItems extends Array<EnumServiceItem>{}


// Option A 
var result: EnumServiceItem[] = [
    { id: 0, label: 'CId', key: 'contentId' },
    { id: 1, label: 'Modified By', key: 'modifiedBy' },
    { id: 2, label: 'Modified Date', key: 'modified' },
    { id: 3, label: 'Status', key: 'contentStatusId' },
    { id: 4, label: 'Status > Type', key: ['contentStatusId', 'contentTypeId'] },
    { id: 5, label: 'Title', key: 'title' },
    { id: 6, label: 'Type', key: 'contentTypeId' },
    { id: 7, label: 'Type > Status', key: ['contentTypeId', 'contentStatusId'] }
];

*/

interface appProps {
	tasks: Array<{id: string, name: string, completed: boolean}>;
}

function App(props: appProps) {
	const [tasks, setTasks] = useState(props.tasks);

	const taskList = tasks.map((task) =>
		<Todo
			name={task.name}
			completed={task.completed}
			id={task.id}
			key={task.id}
			toggleTaskCompleted={toggleTaskCompleted}
			deleteTask={deleteTask}
		/>
	);

	const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
	const headingText = `${taskList.length} ${tasksNoun} remaining`;

	function addTask(name: string) {
		const newTask = {id: `todo-${nanoid()}`, name, completed: false};
		setTasks([...tasks, newTask]);
	}

	function toggleTaskCompleted(id: string) {
		const updatedTasks = tasks.map((task) => {
			if (id === task.id) {
				task.completed = !task.completed;
			}
			return task;
		});
		setTasks(updatedTasks);
		console.log(tasks[0]);
	}

	function deleteTask(id: string) {
		const filteredTasks = tasks.filter((task) => {
			return task.id !== id;
		});
		setTasks(filteredTasks);
	}

	return (
		<div className="todoapp stack-large">
			<h1>TodoMatic</h1>
			<Form addTask={addTask}/>
			<div className="filters btn-group stack-exception">
				<FilterButton />
				<FilterButton />
				<FilterButton />
			</div>
			<h2 id="list-heading">{headingText}</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading"
			>
				{
					taskList
				}
			</ul>
		</div>
	);
}

export default App;
