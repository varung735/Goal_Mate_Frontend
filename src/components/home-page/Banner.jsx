import React from 'react'

function Banner() {
  return (
    <main className='flex flex-col h-[100vh] md:flex-row-reverse md:justify-center md:items-center lg:justify-center lg:items-center'>
      {/* Text Holder */}
      <div className='bg-banner bg-center bg-contain bg-no-repeat h-1/2 md:h-full w-full md:w-1/2'></div>

      {/* Image Holder */}
      <div className='flex flex-col md:w-1/2'>
        <h1 className="font-nunito font-semi-bold text-3xl text-center">Manage your goals with GoalMate</h1>
        <p className='p-3 font-inter text-center font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo repudiandae optio 
          spernatur hic quae ipsa modi nulla harum laborum sint veniam, ipsam voluptas perspiciatis 
          vel nostrum reiciendis a eos asperiores dolorem perferendis, tenetur sapiente odio. Laboriosam, 
          illum possimus. Magnam sint vero dolorum nobis quaerat nulla hic voluptatibus vitae modi.
        </p>
      </div>
    </main>
  )
}

export default Banner