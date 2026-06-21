import useTodo from "../../hooks/useTodo";
import { useState } from "react";

const Todo = () => {
	const { todos, addTodo, removeTodo, toggleTodo } = useTodo();
	const [textTodo, setTextTodo] = useState<string>("");

	const handleAdd = () => {
		addTodo(textTodo);
		setTextTodo("");
	};

	const handleRemove = (id: string) => {
		removeTodo(id);
	};

	const toggle = (id: string) => {
		toggleTodo(id);
	};

	return (
		<div className="p-6 max-w-2xl mx-auto">
			{/* input */}
			<div className="flex gap-2 mb-6">
				<input
					className="bg-white border border-gray-300 rounded px-3 py-2 text-black flex-1"
					value={textTodo}
					onChange={(e) => setTextTodo(e.target.value)}
					placeholder="Enter a new todo..."
				/>
				<button
					className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded"
					onClick={handleAdd}
				>
					Add
				</button>
			</div>

			{/* table */}
			{todos.length > 0 ? (
				<table className="w-full border-collapse border shadow-sm rounded-lg overflow-hidden">
					<thead>
						<tr className="text-left uppercase text-sm tracking-wider">
							<th className="p-3 border-b border-gray-200 w-12 text-center">
								Status
							</th>
							<th className="p-3 border-b border-gray-200">
								Task
							</th>
							<th className="p-3 border-b border-gray-200 w-24 text-center">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((item) => (
							<tr
								key={item.id}
								className="border-b transition-colors"
							>
								<td className="p-3 text-center vertical-middle">
									<input
										type="checkbox"
										className="w-4 h-4 cursor-pointer accent-blue-500"
										checked={item.isCompleted}
										onChange={() => toggle(item.id)}
									/>
								</td>

								<td
									className={`p-3 ${item.isCompleted ? "line-through text-gray-400" : ""}`}
								>
									{item.text}
								</td>

								<td className="p-3 text-center">
									<button
										className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded transition-colors"
										onClick={() => handleRemove(item.id)} // Direct execution
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p className="text-gray-500 text-center mt-4">
					No tasks yet. Add one above!
				</p>
			)}
		</div>
	);
};
export default Todo;
