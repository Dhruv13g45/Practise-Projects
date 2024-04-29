import React from 'react'
import search from "../assets/search.png"

const Home = () => {
    return (
        <>
            <div className='flex justify-evenly m-5 h-full gap-10'>
                <div className="img h-full grid grid-rows-2 grid-cols-2 gap-5">
                    <img src="https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=400" alt="p1"
                        className='rounded-lg w-auto hover:scale-105 duration-300 cursor-pointer' />
                    <img src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="p2"
                        className='rounded-lg w-auto hover:scale-105 duration-300 cursor-pointer' />
                    <img src="https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=400" alt="p3"
                        className='rounded-lg w-auto  hover:scale-105 duration-300 cursor-pointer' />
                    <img src="https://images.pexels.com/photos/2723450/pexels-photo-2723450.jpeg?auto=compress&cs=tinysrgb&w=400" alt="p3"
                        className='rounded-lg w-auto h-full hover:scale-105 duration-300 cursor-pointer ' />
                </div>
                <div className="hometext w-auto text-center place-items-center">
                    <h1 className='text-5xl my-5'>Explore the <span className='text-blue-500'>World</span></h1>
                    <p className='text-gray-700 font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe accusantium repudiandae vero exercitationem velit officia fuga reprehenderit enim omnis quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus soluta quis rerum dolorum nesciunt dolorem, facilis alias odit eligendi!</p>
                    <button type="button"
                        className='bg-blue-700 p-3 w-1/3 m-3 mx-5 flex justify-around items-center text-white text-lg font-bold rounded-lg cursor-pointer shadow-md active:shadow-sm shadow-gray-600'
                    >Explore
                        <span>
                            <img src={search} />
                        </span></button>
                </div>
            </div>
        </>
    )
}

export default Home
