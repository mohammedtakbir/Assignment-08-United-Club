import React from 'react';

const AddBreak = ({setAddBreaks}) => {
    return (
        <div>
            <h2 className='text-2xl font-medium'>Add a Break</h2>
            <div className='flex bg-slate-200 py-5 mt-5 justify-between rounded-lg px-3 mb-8'>
                <button onClick={(e) =>setAddBreaks(e.target.innerText)} className='list-none bg-white w-[60px] h-[60px] leading-[60px] rounded-full text-center'>10s</button>
                <button onClick={(e) =>setAddBreaks(e.target.innerText)} className='list-none bg-white w-[60px] h-[60px] leading-[60px] rounded-full text-center'>20s</button>
                <button onClick={(e) =>setAddBreaks(e.target.innerText)} className='list-none bg-white w-[60px] h-[60px] leading-[60px] rounded-full text-center'>30s</button>
                <button onClick={(e) =>setAddBreaks(e.target.innerText)} className='list-none bg-white w-[60px] h-[60px] leading-[60px] rounded-full text-center'>40s</button>
            </div>
        </div>
    );
};

export default AddBreak;