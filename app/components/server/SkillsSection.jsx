import React from 'react'

export default function SkillsSection() {
    return (
        <div id="skills" className="skillsSection">
            <div className="watchContainer">
                <div className="watchHolder">
                    <button className="watchHolder__on"></button>
                    <button className="watchHolder__left"></button>
                    <button className="watchHolder__right"></button>
                </div>
                <div className="watchBody"></div>
                <div data-watchOn="false" className="watchX"></div>
                <dir className="focusBeam"></dir>
                <div className="skillIcons">
                    <img data-selected="false" src="./icons/html.svg" alt="html" />
                    <img data-selected="false" src="./icons/css.svg" alt=" css" />
                    <img data-selected="false" src="./icons/js.svg" alt=" js" />
                    <img data-selected="false" src="./icons/react.svg" alt=" react" />
                    <img data-selected="false" src="./icons/nodejs.svg" alt=" node" />
                    <img data-selected="false" src="./icons/mongodb.svg" alt=" mongo" />
                    <img data-selected="false" src="./icons/git.svg" alt=" git" />
                    <img data-selected="false" src="./icons/github.svg" alt=" github" />
                    <img
                        data-selected="false"
                        src="./icons/tailwind.svg"
                        alt=" tailwind"
                    />
                </div>
            </div>
        </div>
    )
}
