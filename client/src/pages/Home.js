import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';

const Home = () => {
    const [books, setBooks] = useState([]);  // Initialize as an empty array
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:4000/books/get')
            .then((res) => {
                console.log(res.data)
                setBooks(res.data || []); // Ensure `data` is an array
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>
                    Books List
                </h1> 
                <Link to="/books/create">
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? (
                <Spinner />
            ) : (
                books.length > 0 ? (
                    <table className='w-full border-separate border-spacing-2'>
                        <thead>
                            <tr>
                                <th className='border border-slate-600 rounded-md'>No</th>
                                <th className='border border-slate-600 rounded-md'>Title</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Publish Year</th>
                                <th className='border border-slate-600 rounded-md max-md:hidden'>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={book._id} className='h-8'>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {index + 1}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {book.bookname}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {book.author}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {book.publishYear}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No books available.</p>
                )
            )}
        </div>
    );
};

export default Home;
