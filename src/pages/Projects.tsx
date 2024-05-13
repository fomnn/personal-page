export default function Projects() {
  return (
    <div className="py-12 space-y-16">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-white">Projects</h1>
        <p>During my studies at Telkom University, I've been involved in various projects that I'm quite proud of. Many of them are open-source, so feel free to explore the code and contribute if you have ideas for improvement!</p>
      </div>
      <div className=" mt-3 space-y-4">
        <div className="flex items-end gap-2">
          <div className="max-w-[16rem] md:max-w-none">
            <h4 className='text-white font-semibold'>Males</h4>
            <p className='truncate'>High School Learning Material Collection Website</p>
          </div>
          <span className='flex-grow min-w-4 border-b-2 border-zinc-800 border-dashed h-4'></span>
          <img src="https://icon-library.com/images/learning-icon/learning-icon-5.jpg" alt="" className='size-[2rem] object-contain' />
        </div>
        <div className="flex items-end gap-2">
          <div className="max-w-[16rem] md:max-w-none">
            <h4 className='text-white font-semibold'>Sayurt</h4>
            <p className='truncate'>High School Learning Material Collection Website</p>
          </div>
          <span className='flex-grow min-w-4 border-b-2 border-zinc-800 border-dashed h-4'></span>
          <img src="https://icon-library.com/images/learning-icon/learning-icon-5.jpg" alt="" className='size-[2rem] object-contain' />
        </div>
      </div>
    </div>
  )
}