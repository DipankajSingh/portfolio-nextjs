'use client'
import React, { useEffect } from 'react'

export default function CustomCursor() {

    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");
        const boundingBox = cursor.getBoundingClientRect();
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX - boundingBox.width / 2}px`;
            cursor.style.top = `${e.clientY - boundingBox.height / 2}px`;
        });
    })

    return (
        <div className="custom-cursor"></div>
    )
}
