import { Link } from "react-router-dom";

import { Button } from "ui";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <div className={styles.nav}>
        <Link to={`/`}>Home</Link>
        &nbsp;&nbsp;
        <Link to={`/app1`}>App1</Link>
        &nbsp;&nbsp;
        <Link to={`/app2`}>App2</Link>
      </div>
      <Button>Login</Button>
    </header>
  );
};
