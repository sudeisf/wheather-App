import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import { Outlet } from 'react-router-dom';
function Home() {
 
  return (
    <div className='flex flex-row gap-5'>
      <div>
      <NavBar />
      </div>

      <div className='w-full flex flex-col'>

        <div>
          <SearchBar />
        </div>

        <div className='h-[630px] mt-3'>
          <Outlet/>
        </div>

      </div>
     
    
    </div>
  );
}

export default Home;
