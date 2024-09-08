import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const githubRequestConfig = {
    method: "GET",
    headers: {
        "Authorization": `token ${process.env.GITHUB_API_KEY}`
    }
}

async function getRepoCount() {

    const response = await fetch("https://api.github.com/users/DipankajSingh/repos", githubRequestConfig);
    const data = await response.json();
    return data.length
}

export default async function SmallProjects() {
    return (
        <section className=" relative mr-auto ml-auto text-2xl h-max font-inter text-center" >
            Please visit my github profile to see all {await getRepoCount()} projects <Link className="inline " href="https://github.com/DipankajSingh"><Image className='filter-greeen inline' src="/githubIcon.png" alt="github" width={50} height={50} /></Link>


        </section>
    )
}
