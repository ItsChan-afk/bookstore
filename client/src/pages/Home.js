import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:4000/books/get')
            .then((res) => {
                console.log(res.data)
                setBooks(res.data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className='flex justify-center'>
                <h2 className='text-3xl my-10'>Book Lists</h2>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-6 gap-3'>
                    {books.map((book, index) => (
                        <React.Fragment key={book._id}>
                            <div className='col-span-1 border-slate-500 border-2 h-20 bg-cyan-300 text-center m-2 p-3 shadow-2xl hover:scale-95'>
                                <p>{index + 1}</p>
                            </div>
                            <div className='col-span-2 border-slate-500 border-2 h-20 bg-cyan-300 text-center m-2 p-3 shadow-2xl hover:scale-95'>
                                <p>{book.bookname}</p>
                            </div>
                            <div className='col-span-2 border-slate-500 border-2 h-20 bg-cyan-300 text-center m-2 p-3 shadow-2xl hover:scale-95'>
                                <p>{book.author}</p>
                            </div>
                            <div className='col-span-1 border-slate-500 border-2 h-20 bg-cyan-300 text-center m-2 p-3 shadow-2xl hover:scale-95'>
                                <p>{book.publishYear}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
