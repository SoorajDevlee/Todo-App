import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const handleDelele = (item) => {
    console.log("delete button clicked for item=> ", item);
    // const updatedTodos = todos.filter((todo) => todo !== item);
    // setTodos(updatedTodos);
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleClick = (name) => {
    // const updateTodo = todos.map((todo) =>
    //   todo.name === name ? { ...todo, done: !todo.done } : todo
    // );
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  };

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.list}>
      <div className={styles.listName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelele(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
