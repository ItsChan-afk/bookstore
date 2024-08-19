import React, {  useState } from 'react'
import axios from 'axios'

const CreateBook = () => {

  const [bookname, setBookName] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')



  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      axios.post('http://localhost:4000/books', {
        bookname,
        author,
        publishYear
      });
      
      alert("Successfully created")
      setAuthor('')
      setPublishYear('')
      setBookName('')
    }
    catch (err) {
      console.log('Error Occured ', err)
    }
  }


  return (
    <div className='flex justify-center items-center'>

      <div className='w-[70%]'>

        <form className='bg-cyan-200 border-teal-400 border-2 shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit}
        >
          <h3 className='font-bold text-center'>Add Your Book</h3>
          <label className='block text-gray-700 text-sm font-bold my-4' >
            BookName:
          </label>
          <input className='shadow appearance-none border rounded w-[40%]' placeholder='Bookname'
            value={bookname}
            onChange={(e) => setBookName(e.target.value)}
          />
          <label className='block text-gray-700 text-sm font-bold my-4' >
            Author:
          </label>
          <input className='shadow appearance-none border rounded w-[40%]' placeholder='Author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label className='block text-gray-700 text-sm font-bold my-4' >
            publishYear:
          </label>
          <input className='shadow appearance-none border rounded w-[40%]' placeholder='PublishYear'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-10 rounded-full'
            type='submit'
          >Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBook