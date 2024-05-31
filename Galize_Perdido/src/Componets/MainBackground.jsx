import Card from "../Classes/Card";

const MainBackground = (props) => {
  const data = props.data;
  return (
    <section className="flex flex-col items-center">
      <div>
        <article className="bg-customBlack-500 flex flex-wrap p-10 max-w-[1440px] items-start justify-center gap-5">
          {data.map((animal, idx) => {
            const card = new Card(
              animal.animal_type,
              animal.location,
              animal.time,
              animal.image
            );

            return (
              <div
                key={idx}
                className="w-[280px] h-[350px] translucid-green flex flex-col flex-wrap items-center justify-start pt-5 rounded-[20px] shadow-lg"
              >
                <div className="w-[250px] h-[225px]">
                  <img
                    src={card.image}
                    alt={`${card.animalType}-${idx}`}
                    className="h-full w-full object-cover rounded-[10px]"
                  />
                </div>

                
                <h2 className="text-large font-extrabold text-white">
                  {card.animalType}
                </h2>
                
                <div className="flex justify-start">
                    <p className="text-medium text-customGreen-500 font-bold mr-1">Localização: </p>
                    <p className="text-medium text-white">{card.location}</p>
                </div>
                <div>
                    <p className="text-medium text-white">{card.time}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default MainBackground;
