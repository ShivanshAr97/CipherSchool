import React from 'react'

const Other = () => {
    return (
        <div className='mx-12 my-4'>
            <div className='mx-2 mt-8'>
                <div className='flex justify-between items-center align-middle'>
                    <h3 className='text-lg my-2 font-semibold'>ABOUT ME</h3>
                    <button className='rounded-lg text-white bg-red-500 text-sm font-medium px-3 py-1'>EDIT</button>
                </div>
                <input className='rounded-lg bg-gray-200 h-20 w-full' type="text" />
            </div>

            <div className='flex justify-between items-center align-middle mt-8'>
                <h3 className='text-lg font-semibold'>ON THE WEB</h3>
                <button className='rounded-lg text-white bg-red-500 text-sm font-medium px-3 py-1'>EDIT</button>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col mx-2'>
                    <h3 className='text-lg my-2'>LinkedIn</h3>
                    <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />
                </div>
                <div className='flex flex-col mx-2'>
                    <h3 className='text-lg my-2'>GitHub</h3>
                    <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />
                </div>

                <div className='flex flex-col mx-2'>
                    <h3 className='text-lg my-2'>Facebook</h3>
                    <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />
                </div>
                <div className='flex flex-col mx-2'>
                    <h3 className='text-lg my-2'>Twitter</h3>
                    <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />
                </div>

                <div className='flex flex-col mx-2'>
                    <h3 className='text-lg my-2'>Instagram</h3>
                    <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />
                </div>
                <div className='flex flex-col mx-2'>
                    <h3 className='text-lg my-2'>Website</h3>
                    <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />
                </div>
            </div>

            <div className='flex mt-8 justify-between items-center align-middle'>
                <h3 className='text-lg font-semibold'>PERSONAL INFORMATION</h3>
                <button className='rounded-lg text-white bg-red-500 text-sm font-medium px-3 py-1'>EDIT</button>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col mx-2'>
                    <h3 className='text-lg my-2'>Highest Education</h3>
                    <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />
                </div>
                <div className='flex flex-col mx-2'>
                    <h3 className='text-lg my-2'>What do you currently study?</h3>
                    <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />
                </div>
            </div>

            <div className='flex mt-8 justify-between items-center align-middle'>
                <h3 className='text-lg font-semibold'>PASSWORD AND SECURITY</h3>
                <button className='rounded-lg text-white bg-red-500 text-sm font-medium px-3 py-1'>EDIT</button>
            </div>
            <div className='mx-2'>
                <h3 className='text-lg my-2'>Password</h3>
                <input className='rounded-lg bg-gray-200 h-12 w-full' type="text" />

            </div>
            <div className='mx-2 mt-8 flex justify-between items-center align-middle'>
                <h3 className='text-lg my-2 font-semibold'>INTERESTS</h3>
                <button className='rounded-lg text-white bg-red-500 text-sm font-medium px-3 py-1'>EDIT</button>
            </div>
        </div>
    )
}

export default Other