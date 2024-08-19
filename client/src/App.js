import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';

function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/create' element={<CreateBook />} />
          <Route path='/books/details/:id' element={<ShowBook />} />
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/delete/:id' element={<DeleteBook />} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App