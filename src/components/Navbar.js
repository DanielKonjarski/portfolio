import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <h1 style={styles.name}>Daniel Konjarski</h1>
        </div>
        <div style={styles.navRight}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/personal" style={styles.navLink}>Resume</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/academic" style={styles.navLink}>Academic Work</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/work" style={styles.navLink}>Experience & Academics</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/professional" style={styles.navLink}>Capstone</Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr style={styles.hr} />
    </>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#121212",
    color: "#fff",
    padding: "20px",
    width: "100%",
    boxSizing: "border-box",
  },
  navLeft: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
  },
  name: {
    color: "#c7c7c7",
    fontSize: "24px",
    margin: 0,
    padding: "12px",
  },
  navRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "#c7c7c7",
    textDecoration: "none",
    fontSize: "18px",
  },
  hr: {
    border: "1px solid #c7c7c7",
    margin: "0",
    width: "96%",
    marginLeft: "2%",
    marginTop: "0",
  },
};

export default Navbar;
