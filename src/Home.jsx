import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import SearchBar from './component/SearchBar';
import { Outlet } from 'react-router-dom';
import { QueryProvider } from './Context/QueryContext';
import { SuggestionProvider } from './Context/suggestionContext';

function Home() {
 
  return (
      <>

      <div className='flex flex-row gap-5'>
      <div>
      <NavBar />
      </div>

      <div className='w-full flex flex-col'>

        <div >
          <QueryProvider>
                <SearchBar />
          </QueryProvider>
        </div>

        <div className='h-[630px] relative top-[-1rem]'>
          <Outlet/>
        </div>

      </div>
     
    
    </div>
      </>
    
  );
}

export default Home;
