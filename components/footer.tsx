import { socialMedia } from '@/data'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/magic-button'

const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]'>
                    Ready to take {" "}
                    <span className='text-purple-300'>your</span>{" "}
                    digital presence to the next level?
                </h2>

                <p className='text-white md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>

                <a href='mailto:surajprince0009@gmail.com'>
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>

            <div className='flex mt-16 flex-col items-center justify-between md:flex-row gap-4 md:gap:0'>
                <p className='text-sm font-light md:text-base md:font-normal'>Copyright © 2025 Suraj Kumar</p>

                <div className='flex items-center md:gap-3 gap-6'>
                    {socialMedia.map((profile) => (
                        <a
                            href={profile.href}
                            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black rounded-lg'
                            key={profile.id}
                        >
                            <Image
                                src={profile.img}
                                alt='profile_svg'
                                width={50}
                                height={50}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className='hover:scale-110 transition-all ease-in duration-300'
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer