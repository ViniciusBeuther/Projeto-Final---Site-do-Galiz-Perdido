import { useState } from "react";
import Button from "./Button";
import Filter from "../Classes/Filter";

const FilterBar = () => {

  const filter = new Filter();
  

  function handleClick(ev) {
    ev.preventDefault();
    return alert("clico");
  }

  return (
    <section className="flex items-center justify-center">
      <div className="flex lg:items-end items-start gap-5 max-w-[1440px] flex-col w-full">
        <span className="flex flex-col">
          <label className="text-white" htmlFor="animal_type">
            Tipo:
          </label>
          <select
            name="animal_type"
            id="select_input01"
            className="bg-customGreen-500 py-2 px-4 rounded-lg shadow-lg font-bold"
          >
            <option value="1">Cachorro</option>
            <option value="2">Gato</option>
            <option value="3">Outro</option>
            <option value="4" selected>
              Todos
            </option>
          </select>
        </span>
        <span className="flex flex-col">
          <label className="text-white" htmlFor="neighborhood">
            Bairro:
          </label>
          <select
            name="neighborhood"
            id="select_input01"
            className="bg-customGreen-500 py-2 px-4 rounded-lg shadow-lg font-bold"
          >
            { filter.neighborhood.map((row) => {
              return (
                <option value={row.key} key={row.key} onSelect={() => filter.setFilter(row.value)}>
                  {row.value}
                </option>
              );
            }) }
          </select>
        </span>
        <span>
          <Button text={"Buscar"} handleClick={handleClick} />
        </span>
      </div>
    </section>
  );
};

export default FilterBar;
