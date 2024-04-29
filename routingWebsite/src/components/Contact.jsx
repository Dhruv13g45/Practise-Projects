import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container  flex items-center w-full gap-10 ">
                <div className="contactImage">
                    <img src="https://media.istockphoto.com/id/695858734/photo/is-there-anything-else-i-can-help-with.jpg?s=1024x1024&w=is&k=20&c=g9p16WY5H4yEl1NkZv1QbTHgGLYXjzZpmDJKjp2StE4=" alt="" className='w-auto rounded-r-3xl rounded-l-3xl' />
                </div>
                <form onSubmit={(event) => event.preventDefault()} className='flex flex-col w-1/2 items-center'>
                    <h1 className='font-bold text-xl'>Connect with us</h1>
                    <input type="text" placeholder='Enter your Name....'
                        className='h-10 border border-slate-600 w-80 my-10 rounded-md'
                    />
                    <input type="email" placeholder='Enter your E-Mail....'
                        className='h-10 border border-slate-600 w-80 rounded-md' />
                    <button type="submit"
                        className='my-5 font-semibold bg-blue-950 text-white w-1/4 p-3 rounded-md shadow-lg active:bg-blue-900'
                    >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
