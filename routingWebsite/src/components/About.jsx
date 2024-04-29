import React from 'react'

const About = () => {
    return (
        <>
            <div className='flex justify-center items-center m-5 gap-10'>
                <div className="img">
                    <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-auto rounded-xl ' />
                </div>
                <div className="imgText w-auto">
                    <h2 className='font-bold'>This is the About heading</h2>
                    <p className='font-semibold text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil labore accusamus voluptatibus nesciunt architecto? Nihil quo maiores deserunt officia dolore eum non cum quod suscipit minus accusantium, qui rerum sapiente? Officia illum dolorum fugit eius recusandae exercitationem ullam laudantium commodi?</p>
                </div>
            </div>
        </>
    )
}

export default About
