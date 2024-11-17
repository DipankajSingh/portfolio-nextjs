import React from 'react'
import Link from 'next/link'
import Language from "./Language";
export default function MajorProject({ projectName, projectImg, projectDescription, projectLangs, projectLink }) {
    return (
        <article className={`
        relative p-4 
        max-sm:w-full 
        w-1/3 max-lg:w-1/2
        after:absolute
        after:bg-red-50/60 
        after:z-[-1]
        after:h-full
        after:w-0.5
        after:left-full
        after:top-0
        ${projectName.toLowerCase() === 'senoscope' ? 'after:hidden' : ''}
        ${projectName.toLowerCase() === 'webwriter' ? 'after:max-lg:hidden' : ''}
        after:max-sm:hidden
        after:bg-gradient-to-t 
        after:from-black 
        after:via-[#00ff00] 
        after:to-black
`}>
            <h3 className='text-2xl text-green-200 font-bold uppercase font-sans pl-4'>{projectName}</h3>
            <p className=' pl-4 text-gray-50 font-nunito text-xl line-clamp-3'>{projectDescription}</p>
            <Link target='_blank' className='absolute top-8 underline right-8' href={projectLink}>Visit</Link>
            <ul className='relative mt-8 pl-4 flex flex-wrap gap-2'>
                {projectLangs.map((lang, index) => {
                    return <Language key={index} lang={lang} />
                })}
            </ul>
        </article>
    )
}
