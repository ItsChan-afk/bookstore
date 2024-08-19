import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    <Link to="/">My Book App</Link>
                </div>
                <div className="flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link to="/books/create" className="text-gray-300 hover:text-white">
                        Create Book
                    </Link>
                    <Link to="/books/details/:id" className="text-gray-300 hover:text-white">
                        Show Book
                    </Link>
                    <Link to="/books/edit/:id" className="text-gray-300 hover:text-white">
                        Edit Book
                    </Link>
                    <Link to="/books/delete/:id" className="text-gray-300 hover:text-white">
                        Delete Book
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
