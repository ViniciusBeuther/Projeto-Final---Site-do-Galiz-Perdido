// UploadImg.jsx
import React, { useState } from 'react';

const UploadImg = ({ onUpload }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSubmit = () => {
        if (image) {
            onUpload(image);
        } else {
            console.log("Nenhuma imagem selecionada.");
        }
    };

    return (
        <div>
            <input type="file" name="img-input" id="img-input" onChange={handleImageChange} />
            <button onClick={handleSubmit}>Upload</button>
        </div>
    );
};

export default UploadImg;
