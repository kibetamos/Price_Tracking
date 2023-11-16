import React from 'react';
// import {Link, useNavigate} from "react-router-dom";
// import styles from './Login.module.css';
// import styles from '../../Pages/Home/Home.module.css';




function SearchTextList({ searchTexts, onSearchTextClick }) {
  return (
    
    <div class="dashboard_bar">
      <h2 >All Products</h2>
      <ul>
        {searchTexts.map((searchText, index) => (
          <li key={index} onClick={() => onSearchTextClick(searchText)}>
            <button>{searchText}</button>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default SearchTextList;
