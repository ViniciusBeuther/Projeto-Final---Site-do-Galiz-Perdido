import dayjs from "dayjs";
import supabase from "../supabase/supabase";

class Card{
    constructor( animalType, locationID, time, image ){
        this.animalType = animalType
        this.locationID = locationID;
        this.locationID = null;
        this.getLocation( location )
        this.time = dayjs(time)
        this.image = image
    }

    // Return the date/hour in DD/MM/YYYY HH:MM 
    formattedDate(){
        const day = this.time.date();
        const month = this.time.month() + 1;
        const year = this.time.year();
        const hour = this.time.hour();
        const minute = this.time.minute(); 

        //Formatting to MM/DD/YYYY
        const formattedDay = String( day ).padStart( 2,0 );
        const formattedMonth = String( month ).padStart( 2,0 );
        const formattedYear = String( year ).padStart( 2,0 );
        const formattedHour = String( hour ).padStart( 2,0 );
        const formattedMinute = String( minute ).padStart( 2,0 );


        const fulldate = `${ formattedDay }/${ formattedMonth }/${ formattedYear } ${ formattedHour }:${ formattedMinute }`;

        return fulldate; 

    }

    async getLocation(){
        try{
            let { data: animals_address, error } = await supabase
            .from('animals_address')
            .select('*') 
            .eq("id", this.locationID);
            this.location = animals_address;
            return console.log("Sucesso....")     
        } catch( error ){
            return console.log("Algo deu errado...", error)
        }
    }

    
}

export default Card