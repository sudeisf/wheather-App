import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import { Outlet } from 'react-router-dom';
function Home() {
 
  return (
    <div className='flex flex-row'>
      <div>
      <NavBar />
      </div>

      <div className='w-full'>

        <div>
          <SearchBar />
        </div>

        <div className='mt-5 ml-5'>
          <Outlet/>
        </div>

      </div>
     
    
    </div>
  );
}

export default Home;
