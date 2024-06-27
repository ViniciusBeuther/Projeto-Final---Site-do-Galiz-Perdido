import React from 'react';
import UploadImg from './UploadImg';
import Database from '../Classes/Database';
import supabase from '../supabase/supabase';

const ImageUpload = () => {
    const database = new Database(supabase);

    const handleUpload = async (file) => {
        const result = await database.pushImageToStorage(file);
        if (result) {
            console.log("Imagem carregada com sucesso:", result);
        } else {
            console.log("Erro ao carregar imagem.");
        }
    };

    return (
        <div>
            <h2>Upload de Imagem</h2>
            <UploadImg onUpload={handleUpload} />
        </div>
    );
};

export default ImageUpload;
