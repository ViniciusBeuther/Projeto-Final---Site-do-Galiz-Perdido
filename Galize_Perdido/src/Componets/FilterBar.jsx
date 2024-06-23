import React from "react";
import Filter from "../Classes/Filter";

const FilterBar = ({ setFilters }) => {
  const filter = new Filter();
  
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <section className="flex items-center justify-center">
      <div className="flex lg:items-end md:items-end items-start gap-5 max-w-[1440px] flex-col lg:flex-row md:flex-row mb-5 w-full">
        <span className="flex flex-col">
          <label className="text-white" htmlFor="animalType">
            Tipo:
          </label>
          <select
            name="animalType"
            id="animalType"
            className="bg-customGreen-500 py-2 px-4 rounded-lg shadow-lg font-bold"
            defaultValue="4" // Adicionando defaultValue para garantir que "Todos" esteja selecionado por padrão
            onChange={handleFilterChange}
          >
            <option value="4">Todos</option>
            <option value="1">Cachorro</option>
            <option value="2">Gato</option>
            <option value="3">Outro</option>
          </select>
        </span>
        <span className="flex flex-col">
          <label className="text-white" htmlFor="neighborhood">
            Bairro:
          </label>
          <select
            name="neighborhood"
            id="neighborhood"
            className="bg-customGreen-500 py-2 px-4 rounded-lg shadow-lg font-bold"
            onChange={handleFilterChange}
          >
            <option value="">Todos</option>
            { filter.neighborhood.map((row) => {
              return (
                <option value={row.value} key={row.key}>
                  {row.value}
                </option>
              );
            }) }
          </select>
        </span>
      </div>
    </section>
  );
};

export default FilterBar;
