import dayjs from "dayjs";
import supabase from "../supabase/supabase";

class Card {
    constructor(animalType, locationID, time, image) {
        this.animalType = animalType;
        this.locationID = locationID;
        this.location = null;
        this.time = dayjs(time);
        this.image = image;
        this.getLocation(locationID);
    }

    formattedDate() {
        const day = this.time.date();
        const month = this.time.month() + 1;
        const year = this.time.year();
        const hour = this.time.hour();
        const minute = this.time.minute();

        const formattedDay = String(day).padStart(2, '0');
        const formattedMonth = String(month).padStart(2, '0');
        const formattedYear = String(year).padStart(2, '0');
        const formattedHour = String(hour).padStart(2, '0');
        const formattedMinute = String(minute).padStart(2, '0');

        const fulldate = `${formattedDay}/${formattedMonth}/${formattedYear} ${formattedHour}:${formattedMinute}`;
        return fulldate;
    }

    async getLocation(locationID) {
        try {
            let { data: animals_address, error } = await supabase
                .from('animals_address')
                .select('*')
                .eq('animal_id', locationID);

            if (error) throw error;

            if (animals_address.length > 0) {
                this.location = {
                    "city": animals_address[0].city,
                    "state": animals_address[0].state,
                    "neighborhood": animals_address[0].neighborhood,
                    "street": animals_address[0].street,
                };
                
            } else {
                this.location = "Unknown Location";
            }
            
        } catch (error) {
            console.log('Algo deu errado...', error);
        }
    }

    getTypeDescription(){
        switch (this.animalType){
            case "1":
                return "Cachorro"

            case "2":
                return "Gato"

            case "3":
                return "Outro"
        }
    }
}

export default Card;
