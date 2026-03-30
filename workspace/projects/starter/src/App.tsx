import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Starter App</h1>
      <p className={styles.description}>
        Edit <code>src/App.tsx</code> and save to see changes.
      </p>
      <button className={styles.button} onClick={() => setCount((c) => c + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
