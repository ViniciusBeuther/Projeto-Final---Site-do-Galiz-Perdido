import { useState, useEffect } from "react";
import Database from "./Classes/Database";
import supabase from "./supabase/supabase";
import Header from "./Componets/Header";
import MainBackground from "./Componets/MainBackground";
import ImageUpload from "./Componets/ImageUpload"; // Novo componente

const App = () => {
    const [data, setData] = useState(null);

    // Get data from supabase
    useEffect(() => {
        const fetchData = async () => {
            const database = new Database(supabase);
            const data = await database.init();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        data ? (
            <div>
                <Header />
                <MainBackground data={data} />
                {/* <ImageUpload /> */}
            </div>
        ) : (null)
    );
};

export default App;
