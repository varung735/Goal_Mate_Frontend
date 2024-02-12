import React from 'react'

function FeatureOne() {
  return (
    <main className='flex flex-col md:h-[70vh] md:flex-row md:items-center'>
      {/* Text Holder */}
      <div className='bg-tasks bg-cover md:bg-contain md:bg-center bg-no-repeat h-96 md:h-full w-full md:w-1/2'></div>

      {/* Image Holder */}
      <div className='flex flex-col md:w-1/2'>
        <h1 className="font-nunito font-semi-bold text-3xl text-center">Group your Tasks</h1>
        <p className='p-4 font-inter text-center font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quo repudiandae optio 
          spernatur hic quae ipsa modi nulla harum laborum sint veniam, ipsam voluptas perspiciatis 
          vel nostrum reiciendis a eos asperiores dolorem perferendis, tenetur sapiente odio. Laboriosam, 
          illum possimus. Magnam sint vero dolorum nobis quaerat nulla hic voluptatibus vitae modi.
        </p>
      </div>
    </main>
  )
}

export default FeatureOne