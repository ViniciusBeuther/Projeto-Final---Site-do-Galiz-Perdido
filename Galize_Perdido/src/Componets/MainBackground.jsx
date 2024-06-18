import React, { useEffect, useState } from 'react';
import Card from "../Classes/Card";
import Filter from "../Classes/Filter";
import AnimalCard from "./Card";
import FilterBar from "./FilterBar";

const MainBackground = (props) => {
  const data = props.data;
  const filter = new Filter();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const loadedCards = await Promise.all(
        data.map(async (animal) => {
          const card = new Card(
            animal.animal_type,
            animal.address,
            animal.time,
            animal.image
          );
          await card.getLocation(animal.address);
          return card;
        })
      );
      setCards(loadedCards);
    };

    fetchData();
  }, [data]);

  return (
    <section className="flex flex-col items-center" id="main_body">
      <FilterBar />
      <div>
        <article className="flex flex-wrap p-10 max-w-[1440px] items-start justify-center gap-5">
          {cards.map((card, idx) => (
            <AnimalCard card={card} key={idx} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default MainBackground;
