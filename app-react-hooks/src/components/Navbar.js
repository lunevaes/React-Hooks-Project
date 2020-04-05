import React from 'react'

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      Github Search
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Главная</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">Информация</a>
      </li>
    </ul>
  </nav>
)
