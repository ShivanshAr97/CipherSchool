import React, { useEffect, useState } from 'react'
import './Welcome.css'
import axios from 'axios'

const Welcome = () => {

    const getData = async () => {
        const { data } = await axios.get("/th")
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className='wel'>
            <div className='flex justify-between align-middle items-center mx-20'>
                <div className='flex align-middle mt-2 items-center'>
                    <img className='rounded-full h-20 w-20' src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg" alt="" />
                    <div className='flex flex-col mx-4 align-middle'>
                        <p className='text-lg'>Hello,</p>
                        <h1 className='font-bold text-2xl'>Shivansh</h1>
                        <h3 className='text-sm'>email</h3>
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-lg'>0 followers</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome