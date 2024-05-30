import Card from "../Classes/Card";

const MainBackground = ( props ) => {
    const data = props.data;
    return(
        <section>
            <div>
            <article>
                { data.map((animal, idx) => {
                    const card = new Card( animal.animal_type, animal.location, animal.time, animal.image )

                    return(
                        <div key={idx}>
                            <img src={card.image} alt={`${card.animalType}-${idx}`} />
                            <h2>{card.animalType}</h2>
                            <p>{card.location}</p>
                            <p>{card.time}</p>
                        </div>
                    )
                }) }
                
            </article>
            </div>
        </section>
    )
}

export default MainBackground;