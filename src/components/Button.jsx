import React from 'react'

function Button() {
    function handleClick() {
        alert('Click');
    }
    return (
        <section className='w-3/4 mx-auto'>
            <button 
                className='rounded px-4 bg-indigo-500 hover:bg-indigo-800 text-white' 
                onClick={handleClick}
            >
                Click
            </button>
        </section>
    )
}

export default Button
