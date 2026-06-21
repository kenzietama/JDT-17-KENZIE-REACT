import { useState } from "react";

interface Todo {
	id: string;
	text: string;
	isCompleted: boolean;
}

const useTodo = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (text: string) => {
		console.log("add");
		setTodos((prev) => [
			...prev,
			{ id: Date.now().toString(), text, isCompleted: false },
		]);
	};

	const removeTodo = (id: string) => {
		console.log("remove");
		setTodos((prev) => prev.filter((item) => item.id !== id));
	};

	const toggleTodo = (id: string) => {
		console.log("toggle");
		setTodos((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, isCompleted: !item.isCompleted }
					: item,
			),
		);
	};

	return { addTodo, removeTodo, toggleTodo, todos };
};

export default useTodo;
