/* eslint-disable react/jsx-key */
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='relative grid place-items-center h-screen bg-black'>
      <video 
        src={'https://vzttuuhch5enulra.public.blob.vercel-storage.com/digital-wave-bk-hd-UJx1vLqgDnQ9mgLe5pkmHSZ6xfTorU.mov'} 
        autoPlay 
        loop 
        muted 
        className='absolute top-0 left-0 object-cover w-full h-full'
      />
      <div className='h-1/4'>
        <h1 className='relative text-center text-4xl md:text-6xl text-stone-200 tracking-[0.3em]'>Gon Silva</h1>
      </div>
      <div className='h-1/4'>
        <p className='relative text-center text-sm md:text-base text-stone-300 tracking-[0.3em]'>Welcome to my personal website</p>
        <p className='relative text-center text-sm md:text-base text-stone-400 tracking-[0.3em]'>Explore my techblog</p>
      </div>
      
      <Link href={`/blog`} className='h-1/2'>
        <div className='relative z-10 border border-stone-400 p-4 
                        rounded-md shadow-md h-15 w-40 transition ease-in-out 
                        delay-150 hover:-translate-y-1 hover:scale-110 
                        hover:bg-stone-400 text-stone-300 hover:text-stone-900 duration-300'>
          <p className='font-bold text-center'>Blog</p>
        </div>
      </Link>
    </div>
  )
}

export default HomePage