import '../styles/FlipCard.css';

const AnimalCard = ({ card, idx }) => {
  return (
    <div
      key={idx}
      className="w-[280px] h-[380px] flex items-start justify-center translucid-green shadow-lg rounded-lg flip-card"
    >
      <div className="flip-card-inner flex flex-col flex-wrap items-center justify-start rounded-[20px]">
        <div className="flip-card-front">
          <div className="w-full h-full p-1">
            <img
              src={card.image}
              alt={`${card.animalType}-${idx}`}
              className="h-full w-full object-cover rounded-[10px]"
            />
          </div>
        </div>
        <div className="flip-card-back flex flex-col items-start justify-start p-5">
          <h2 className="text-large text-center w-full font-extrabold text-white mb-3">
            {card.animalType}
          </h2>
          <div className="flex justify-start">
            <p className="text-medium text-customGreen-500 font-bold mr-1 ml-2">
              Cidade:
            </p>
            <p className="text-medium text-white">{card.location}</p>
          </div>
          <div className="flex justify-start mt-4">
            <p className="text-medium text-customGreen-500 font-bold mr-1 ml-2">
              Horário:
            </p>
            <p className="text-medium text-white">{card.formattedDate()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
