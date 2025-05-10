import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'
import Image from 'next/image'

function Clients() {
    return (
        <div className='py-20' id='testimonials'>
            <h2 className='font-bold text-4xl md:text-5xl text-center'>
                Kind words from {" "}
                <span className='text-purple-300'>satisfied clients</span>
            </h2>
            <div className='flex flex-col items-center max-lg:mt-10'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                    {companies.map(({ id, img, name, nameImg }) => (
                        <div className='flex md:max-w-60 max-w-32 gap-2' key={id}>
                            <Image
                                src={img}
                                alt={name}
                                width={50}
                                height={50}
                                className='md:w-10 w-5'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <Image
                                src={nameImg}
                                alt={name}
                                width={50}
                                height={50}
                                className='md:w-24 w-20'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Clients