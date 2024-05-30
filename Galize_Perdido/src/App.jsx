import { useState, useEffect } from "react";
import Card from "./Classes/Card";
import Database from "./Classes/Database";
import supabase from "./supabase/supabase";
import Header from "./Componets/Header";
import MainBackground from "./Componets/MainBackground";

const App = () => {
    const card = new Card('CAO', 'QLQ LUGAR', 'HORARIO QUALUQER', 'image');
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

    console.log(data);
    
    return (
      data ? (
        <div>
            <Header />
            <MainBackground data={data} />
        </div>
      ) : (null)
        
    );
};

export default App;
