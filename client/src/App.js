import { useState, useEffect } from "react";


function App() {

	const [todos, setTodos] =useEffect([]);
	const [popupActive, setPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState("");

	useEffect(()=> {
		GetTodos();
	},[])


		return (
				<div className="App">
						<h1>Welcome, Sai Sumanth!</h1>
						<h4>Your Tasks</h4>
						
						<div className="todos">
							<div className="todo">
								<div className="checkbox">
									

									<div className="text">Get the Fish</div>

									<div className="delete-todo">X</div>
								</div>
							</div>
						</div>
				</div>
		);
}

export default App;
