import { projects } from '@/data'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa6'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h2 className='font-bold text-4xl md:text-5xl text-center'>
                A small selection of {" "}
                <span className='text-purple-300'>recent projects</span>
            </h2>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>

                {projects.map(({ id, des, iconLists, img, link, title }) => (
                    <div
                        key={id}
                        className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
                    >
                        {link ? (
                            <PinContainer title={link} href={link}>
                                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                    <div className='relative w-full overflow-hidden lg:rounded-3xl'>
                                        {/* <Image
                                                src={'/bg.png'}
                                                alt='bg-img'
                                                width={500}
                                                height={500}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            /> */}

                                        <Image
                                            width={1200}
                                            height={1200}
                                            src={img}
                                            alt={title}
                                            // className='z-10 absolute bottom-0'
                                            className='object-cover'
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>

                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                    {title}
                                </h1>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                    {des}
                                </p>

                                <div className='flex items-center justify-between mt-7 mb-3'>

                                    <div className='flex items-center'>
                                        {iconLists.map((icon, index) => (
                                            <div
                                                key={icon}
                                                className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'
                                                style={{
                                                    transform: `translateX(-${5 * index * 2}px)`
                                                }}
                                            >
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src={icon}
                                                    alt={icon}
                                                    className='p-2'
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <p className='flex lg:text-xl md:text-xs text-sm text-purple-300'>Check Live Site</p>
                                        <FaLocationArrow className='ms-3 hidden md:block' color='#CBACF9' />
                                    </div>
                                </div>
                            </PinContainer>
                        ) : (
                            <PinContainer title={title}>
                                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                        <Image
                                            src={'/bg.png'}
                                            alt='bg-img'
                                            width={500}
                                            height={500}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={img}
                                        alt={title}
                                        className='z-10 absolute bottom-0'
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                    {title}
                                </h1>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                    {des}
                                </p>

                                <div className='flex items-center justify-between mt-7 mb-3'>

                                    <div className='flex items-center'>
                                        {iconLists.map((icon, index) => (
                                            <div
                                                key={icon}
                                                className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center'
                                                style={{
                                                    transform: `translateX(-${5 * index * 2}px)`
                                                }}
                                            >
                                                <Image
                                                    height={500}
                                                    width={500}
                                                    src={icon}
                                                    alt={icon}
                                                    className='p-2'
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </PinContainer>
                        )}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default RecentProjects