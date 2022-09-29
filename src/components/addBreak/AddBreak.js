import React from 'react'
import './AddBreak.css'
const AddBreak = ({ setAddBreaks }) => {
    return (
        <div>
            <h2 className='text-2xl font-medium'>Add a Break</h2>
            <div className='flex bg-slate-200 py-5 mt-5 justify-between md:justify-around rounded-lg px-3 mb-10'>
                <button onClick={(e) =>{
                    setAddBreaks((e.target.innerText).slice(0, 2))
                    localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                }} className='list-none bg-white w-[50px] h-[50px] leading-[50px] rounded-full text-center font-medium hover:bg-teal-500 hover:text-white'>10s</button>
                <button onClick={(e) =>{
                    setAddBreaks((e.target.innerText).slice(0, 2))
                    localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                }} className='list-none bg-white w-[50px] h-[50px] leading-[50px] rounded-full text-center font-medium hover:bg-teal-500 hover:text-white'>20s</button>
                <button onClick={(e) =>{
                    setAddBreaks((e.target.innerText).slice(0, 2))
                    localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                }} className='list-none bg-white w-[50px] h-[50px] leading-[50px] rounded-full text-center font-medium hover:bg-teal-500 hover:text-white'>30s</button>
                <button onClick={(e) =>{
                    setAddBreaks((e.target.innerText).slice(0, 2))
                    localStorage.setItem('addTime', JSON.stringify((e.target.innerText).slice(0, 2)))
                }} className='list-none bg-white w-[50px] h-[50px] leading-[50px] rounded-full text-center font-medium hover:bg-teal-500 hover:text-white'>40s</button>
            </div>
        </div>
    );
};

export default AddBreak;