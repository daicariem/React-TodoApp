import React from "react";

import "./header.css";


function Header() {
    
  return (
    <body>
    <header class="header">
        <div class="logo-title">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" class="logo"/>
            <h1 class="title">Todo List</h1>
        </div>
        <nav class="nav">
            <a href="#" class="nav-link">Home</a>
        </nav>
    </header>
</body>
  );
}

export default Header;
