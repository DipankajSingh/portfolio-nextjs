import React from 'react'
import MajorProject from './MajorProject'
export default function Projects() {
    const projects = [
        {
            projectName: "Hysteria",
            projectImg: "/hysteria.webp",
            projectDescription: "Connect, share, chat, and discover on this vibrant social media platform",
            projectLangs: ["NEXTJS", "CSTAILWIND", "EXPRESS JS", "MONGODB"],
            projectLink: "https://hysteria.dipdev.tech"
        },
        {
            projectName: "WebWriter",
            projectImg: "/webWriter.png",
            projectDescription: `Turn your smartphone into a wireless keyboard for any website with this handy Chrome extension`,
            projectLangs: ["SOCKET.IO", "REACT NATIVE", "EXPRESS JS", "QR TECH", "WEB EXTENSION"],
            projectLink: "https://webwrite.dipdev.tech"
        },
        {
            projectName: "SenoScope",
            projectImg: "/senoScope.png",
            projectDescription: `A minimalist stargazing app using your phone's sensors to unveil the night sky's wonders`,
            projectLangs: ["JavaScript", "React Native", "react-native-sensors", "Sky Guide API"],
            projectLink: "https://senoscope.dipdev.tech"
        }
    ]
    return (
        <section id='projects' className={`relative min-h-screen max-h-fit w-full after:absolute 
        after:z-[-1]
        after:inset-0 `}>

            <h2 className='relative text-5xl p-4 
            after:absolute after:inset-0
            after:bg-[url("/pse.png")] 
            after:bg-no-repeat
            topProjects
            isolate
            my-4
            md:my-12
            pt-12 text-center font-bold
             font-nunito w-full 
             bg-black'>Some of my best work</h2>
            <div className={`flex flex-wrap p-4
            max-lg:justify-center`}>

                {projects.map((project, index) => <MajorProject key={index} {...project} />)}

            </div>
        </section>
    )
}
