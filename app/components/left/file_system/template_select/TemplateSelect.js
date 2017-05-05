import React from 'react';

function toggleDropdown(event) {
  document.getElementById("template-menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {

    let dropdowns = document.getElementsByClassName("dropdown-menu");

    for (let i = 0; i < dropdowns.length; i += 1) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

export default (props) => {
  return (
    <div className="dropdown">
      <button className="dropdown-btn button" onClick={toggleDropdown}>
        Templates
      </button>
      <div id="template-menu" className="dropdown-menu">
        <a href="#">Scatter Plot</a>
        <a href="#">Area Graph</a>
        <a href="#">Line Graph</a>
        <a href="#">Bar Chart</a>
      </div>
    </div>
  );
}
