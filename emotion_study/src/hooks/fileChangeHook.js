/*import { useState } from "react";

export function FileChangehook () {
const [inputImages, setLoadImages] = useState(" ");

const handleFileChange = (e) => {
    const { files } = e.target;
    const fileArray = Array.from(files);

    if(fileArray.length === 0) {
        return;
    }

    console.log(fileArray.map(file => file.name));

    let promises = [];

    promises = fileArray.map(file => new Promise(resolve => {
        const loadImage = {
            id: imageIdRef.current += 1,
            file,
            dataURL: ""
        };

        const fileReader = new FileReader();

        fileReader.onload = (e) => {
            resolve({
                ...loadImage,
                dataURL: e.target.result
            });
        }

        fileReader.readAsDataURL(file);
    }));

    Promise.all(promises)
    .then(result => {
        setLoadImages(result);
            });
        }

        return [inputImages, handleFileChange]
    } */
