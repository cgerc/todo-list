import React, { useState } from "react";

const Home = () => {
  // Estado para el input de nueva tarea
  const [data, setData] = useState("");
  // Estado para la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Manejador para el input de texto
  const handleChange = (event) => {
    setData(event.target.value); // Actualiza el estado data
  };

  // Manejador para agregar una tarea al presionar Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita que el formulario recargue la página
      addTask();
    }
  };

  // Manejador para agregar una nueva tarea
  const addTask = () => {
    if (data.trim()) {
      const newTask = {
        id: Date.now().toString(), // ID único basado en timestamp
        label: data.trim(),
      };
      setTasks((prev) => [...prev, newTask]); // Agrega la tarea usando spread
      setData(""); // Limpia el input
    }
  };

  // Manejador para eliminar una tarea
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>To Do List</h1>

      {/* Input para agregar tareas */}
      <div className="mb-3 w-50">
        <input
          className="form-control"
          type="text"
          name="task"
          value={data}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Agregar tarea"
          aria-label="New task"
        />
      </div>

      {/* Lista de tareas */}
      <ul className="list-group w-50">
        {tasks.length === 0 ? (
          <li className="list-group-item text-muted">
            No hay tareas, añadir tareas
          </li>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex align-items-center"
            >
              <span>{task.label}</span>
              <button
                className="btn btn-danger btn-sm ms-auto d-none d-hover-block"
                onClick={() => removeTask(task.id)}
                aria-label="Eliminar tarea"
              >
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;