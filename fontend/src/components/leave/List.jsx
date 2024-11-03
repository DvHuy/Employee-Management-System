import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className="p-6">
        <div className="text-center">
            <h3 className='text-2xl font-bold mb-6'>Manage Leaves</h3>
        </div>
        <div className="flex justify-between items-center">
            <input type="text"
            placeholder='Search By Dep Name'
            className='px-4 py-0.5 border'
            />
            <Link
            to="/"
            className="px-4 py-1 bg-teal-600 rounded text-white"
            >
            Add Leave
            </Link>
        </div>
    </div>
  )
}

export default List