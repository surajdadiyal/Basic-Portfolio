import { workExperience } from '@/data';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/moving-border';

function Experience() {

    return (
        <div className='py-20' id='experience'>
            <h2 className='font-bold text-4xl md:text-5xl text-center'>
                My {" "}
                <span className='text-purple-300'>work experience</span>
            </h2>
            <div className='w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10'>
                {workExperience.map((card) => (
                    <Button
                        className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                        borderRadius='1.75rem'
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        key={card.id}
                        style={{
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                    >
                        <div className='flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                            <Image
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                width={50}
                                height={50}
                                className='lg:w-32 md:w-20 w-16'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className='lg:ms-5'>
                                <h1 className='text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </h1>
                                <p className='text-start text-white mt-3 font-semibold'>
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>

    )
}

export default Experience