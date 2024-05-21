'use client'
import { useState } from "react";
import axios from "axios";

export default function Download() {
    const [downloadStatus, setDownloadStatus] = useState("");

    const downloadResume = async () => {
        try {
            const response = await axios.get("/api/download?file=DipankajResume.pdf", {
                responseType: "blob", // Important for binary data
            });

            // Extract filename from content-disposition header
            const contentDisposition = response.headers["content-disposition"];
            const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
            const fileName = fileNameMatch ? fileNameMatch[1] : "downloadedFile";

            // Create a temporary anchor element to trigger the download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            // Setting filename received in response
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setDownloadStatus("Downloaded");
        } catch (error) {
            console.error("Error downloading file:", error);
            setDownloadStatus("Error downloading");
        }
    };

    return (
        <>
            <button style={{ fontSize: "25px" }}
                onClick={downloadResume}>
                <img src="./download.png" alt="resume download" />
            </button>
        </>
    );
}
