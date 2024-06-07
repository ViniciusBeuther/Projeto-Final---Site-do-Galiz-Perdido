import Card from "../Classes/Card";
import Filter from "../Classes/Filter";
import AnimalCard from "./Card";
import FilterBar from "./FilterBar";


const MainBackground = (props) => {
  const data = props.data;
  const filter = new Filter();

  return (
    <section className="flex flex-col items-center">
      <FilterBar />
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
              <AnimalCard card={card} key={idx} />
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default MainBackground;
