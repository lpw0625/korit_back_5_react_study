/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useMemo, useRef, useState } from "react";
import { storage } from "../../configs/firebase/firebaseConfig";
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid"
// import { app } from "../../configs/firebase/firebaseConfig";

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

function ImageEx() {
    const [url,setUrl ] = useState("");
    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [ previews, setPreviews ] = useState([]);
    const [ progressPercent, setProgressPercent ] = useState(0);
    const imgFileRef = useRef();

    useEffect(() => {
        setUrl(!localStorage.getItem("urls") ? [] : JSON.parse(localStorage.getItem("urls")));
    }, [])

    const handleFileChange = (e) => {
        
        const files = Array.from(e.target.files);

        if(files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }

        setUploadFiles(files);

        let promises = [];

        promises = files.map(file => new Promise((resolve) => {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                resolve(e.target.result); // 
            }

            fileReader.readAsDataURL(file);
        }));

        Promise.all(promises)
        .then(result => {
            setPreviews(result);
        });        
    }

    const handleImageUpload = () => {
        const file = uploadFiles[0];
        console.log(uploadFiles);
        const storageRef = ref(storage, `files/test/${uuid()}_${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
            },
            (error) => {},
            () => {
                getDownloadURL(storageRef).then(url => {
                    localStorage.setItem("url", url);
                    setUrl(url);
                    setPreviews([]); // 후처리 하는 곳.
                })

            } 

        );
    }

    return (
        <div css={layout}>
           {/* {url.map(url =>
          
               <div css={imageLayout}>
               <img src={url} alt="" />
                  </div>

            )} */}
                  {previews.map((preview, index) => 
                    <>
                        <div key={index} css={imageLayout}>
                            < img src={preview} alt="" />
                        </div>
                        <Line percent={progressPercent} strokeWidth={4} strokeColor={"#ffea76"}/>
                    </>
            )}
            
            <input style={{display: "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleFileChange}/>
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default ImageEx;