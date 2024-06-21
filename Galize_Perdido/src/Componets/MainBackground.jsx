import React, { useEffect, useState } from "react";
import Card from "../Classes/Card";
import Filter from "../Classes/Filter";
import AnimalCard from "./Card";
import FilterBar from "./FilterBar";
import sadIllustration from "../../public/sad_illustration.png";

const MainBackground = (props) => {
  const data = props.data;
  const filter = new Filter();
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [filters, setFilters] = useState({
    animalType: "4",
    neighborhood: "",
  });

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
      setFilteredCards(loadedCards); // Inicialmente, todos os cards estão exibidos
    };

    fetchData();
  }, [data]);

  useEffect(() => {
    applyFilters();
  }, [filters, cards]);

  const applyFilters = () => {
    const filtered = cards.filter((card) => {
      return (
        (filters.animalType === "4" ||
          card.animal_type === filters.animalType) &&
        (!filters.neighborhood ||
          (typeof card.address === "string" &&
            card.address.includes(filters.neighborhood)))
      );
    });
    setFilteredCards(filtered);
  };

  return (
    <section className="flex flex-col items-center m-5">
      <FilterBar setFilters={setFilters} />
      <div>
        {filteredCards.length === 0 ? (
          <div className="bg-customGreen-500 lg:py-2 lg:px-4 md:py-2 md:px-4 py-1 px-2 flex flex-col items-center justify-center rounded-lg shadow-2xl">
            <p className="text-customBlack-500 font-bold mt-5 text-center">
              Infelizmente não encontramos nenhum animal no local selecionado...
              &#128546;
            </p>
            <img src={sadIllustration} alt="sad_illustration" className="w-[124px] h-[156px] lg:w-[256px] lg:h-[256px]" />
          </div>
        ) : (
          <article className="flex flex-wrap lg:p-10 md:p-10 p-5 max-w-[1440px] items-start justify-center gap-5">
            {filteredCards.map((card, idx) => (
              <AnimalCard card={card} key={idx} />
            ))}
          </article>
        )}
      </div>
    </section>
  );
};

export default MainBackground;
