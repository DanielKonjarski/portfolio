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
              <Link to="/personal" style={styles.navLink}>Personal Data</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/academic" style={styles.navLink}>Academic Credentials</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/work" style={styles.navLink}>Work Experience</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/professional" style={styles.navLink}>Professional Summary</Link>
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
    backgroundColor: "#121212", // Dark background like the rest of the page
    color: "#fff", // White text like the rest of the page
    padding: "20px",
    width: "100%", // Ensures it takes full width of the screen
    boxSizing: "border-box", // Avoids any unaccounted-for padding or margins
  },
  navLeft: {
    flex: 1, // Allows it to take up available space on the left
    display: "flex",
    justifyContent: "flex-start", // Aligns the content to the left
    padding: 0, // Ensures no padding on the left
    margin: 0, // Removes any unwanted margins
  },
  name: {
    color: "#c7c7c7", // Same color for the name as the links
    fontSize: "24px",
    margin: 0, // Removes the margin around the name
    padding: "12px", // Ensures no padding around the name
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
    color: "#c7c7c7", // Same color as the rest of the links
    textDecoration: "none",
    fontSize: "18px",
  },
  hr: {
    border: "1px solid #c7c7c7", // Adds a small line under the navbar
    margin: "0",
    width: "96%", // Line width adjusted
    marginLeft: "2%", // Centers the line in the navbar
    marginTop: "0", // Ensures no space between navbar and the line
  },
};

export default Navbar;
