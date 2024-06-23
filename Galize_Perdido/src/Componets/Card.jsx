import React, { useState } from 'react';
import Modal from './Modal'; // certifique-se de ajustar o caminho conforme necessário
import '../styles/FlipCard.css';

const AnimalCard = ({ card, idx }) => {
  const [showModal, setShowModal] = useState(false);

  function handleModal(ev) {
    ev.preventDefault();
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <div
        key={idx}
        className="w-[280px] h-[380px] flex items-start justify-center translucid-green shadow-lg rounded-lg flip-card hover:cursor-pointer"
        onClick={(ev) => handleModal(ev)}
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
          <div className="flip-card-back flex flex-col items-start justify-start p-5 gap-5">
            <h2 className="text-large text-center w-full font-extrabold text-white mb-3">
              {card.getTypeDescription()}
            </h2>
            <div className="flex justify-start">
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Cidade:
              </p>
              <p className="text-medium text-white">{card.location.city}</p>
            </div>
            <div className="flex justify-start">
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Estado:
              </p>
              <p className="text-medium text-white">{card.location.street}</p>
            </div>
            <div className="flex justify-start">
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Bairro:
              </p>
              <p className="text-medium text-white">{card.location.neighborhood}</p>
            </div>
            <div className="flex justify-start">
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Rua:
              </p>
              <p className="text-medium text-white">{card.location.street}</p>
            </div>
            <div className="flex justify-start">
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Horário:
              </p>
              <p className="text-medium text-white">{card.formattedDate()}</p>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onClose={closeModal}>
        <h2 className="text-large text-white text-center font-extrabold mb-3">{card.getTypeDescription()}</h2>
        <div className="flex gap-10">
          <img src={card.image} alt={`${card.animalType}-${idx}`} className="h-[50%] w-[50%] object-cover rounded-[10px] mb-3" />

          <div className='textcontent flex flex-col gap-2'>
            <div>
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Cidade:
              </p>
              <p className="text-medium text-white">{card.location.city}</p>
            </div>
            <div>
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Estado:
              </p>
              <p className="text-medium text-white">{card.location.state}</p>
            </div>
            <div>
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Bairro:
              </p>
              <p className="text-medium text-white">{card.location.neighborhood}</p>
            </div>
            <div>
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Rua:
              </p>
              <p className="text-medium text-white">{card.location.street}</p>
            </div>
            <div>
              <p className="text-medium text-customGreen-500 font-bold mr-1 ">
                Horário:
              </p>
              <p className="text-medium text-white">{card.formattedDate()}</p>
            </div>
          </div>

        </div>
      </Modal>
    </>
  );
};

export default AnimalCard;
