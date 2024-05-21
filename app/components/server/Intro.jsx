import React from 'react'

export default function Intro({ children }) {
    return (
        <main className="intro">
            <h1>
                <span>hello,</span>
                <span> i'm
                    <span className="content">
                        <span>Dipankaj</span>
                        <span>Dipankaj</span>
                    </span>
                </span>
            </h1>
            <div className="intro__info">
                {children}
                <strong>fullstack developer</strong>
            </div>
            <svg className="circuitBoard" fill="red" viewBox="0 0 100 100">
                <g>
                    <polygon
                        className="line line1"
                        points="41.031,32.583 40.662,32.256 44.494,27.944 72.611,27.944 72.611,28.439 44.716,28.439  "
                    />
                </g>
                <circle className="circle c1" cx="6.602" cy="54.198" r="3.597" />
                <circle className="circle c2" cx="60.471" cy="33.838" r="4.598" />
                <circle className="circle c3" cx="72.61" cy="28.192" r="3.598" />
                <circle className="circle c4" cx="82.961" cy="46.856" r="5.598" />
                <circle className="circle c5" cx="40.846" cy="32.419" r="4.597" />
                <g>
                    <polygon
                        className="line line2"
                        points="51.381,51.248 51.012,50.92 54.844,46.608 82.961,46.608 82.961,47.104 55.065,47.104  "
                    />
                </g>
                <circle className="circle c6" cx="51.196" cy="51.084" r="3.598" />
                <g>
                    <polygon
                        className="line line3"
                        points="28.314,54.444 6.602,54.444 6.602,53.951 28.11,53.951 48.472,33.591 57.44,33.591 57.44,34.085 48.676,34.085     "
                    />
                </g>
                <circle className="circle c7" cx="18.053" cy="60.347" r="4.598" />
                <g>
                    <polygon
                        className="line line4"
                        points="31.253,60.594 18.053,60.594 18.053,60.1 31.049,60.1 51.408,39.741 74.563,39.741 74.563,40.235 51.612,40.235"
                    />
                </g>
            </svg>
            <div className="
            glowingBackground
            
            "></div>

        </main>
    )
}
