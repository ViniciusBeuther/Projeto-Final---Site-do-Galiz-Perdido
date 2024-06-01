const AnimalCard = ({ card, idx }) => {
  return (
    <div
      key={idx}
      className="w-[280px] h-[380px] translucid-green flex flex-col flex-wrap items-center justify-start pt-5 rounded-[20px] shadow-lg"
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

      <div>
        <div className="flex justify-start mt-3">
          <p className="text-medium text-customGreen-500 font-bold mr-1 ml-2">
            Localização:{" "}
          </p>
          <p className="text-medium text-white">{card.location}</p>
        </div>
        <div className="flex justify-start mt-4">
          <p className="text-medium text-customGreen-500  font-bold mr-1 ml-2">
            Horário:{" "}
          </p>
          <p className="text-medium text-white">{card.formattedDate()}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
