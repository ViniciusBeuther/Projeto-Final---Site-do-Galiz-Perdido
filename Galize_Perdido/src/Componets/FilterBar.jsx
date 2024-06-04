import Button from "./Button";

const FilterBar = () => {
    function handleClick(ev){
        ev.preventDefault();
        return alert('clico')
    }

    return(
        <div>
            <span>
                <select name="animal_type" id="select_input01" className="bg-customGreen-500 py-2 px-4 rounded-lg shadow-lg font-bold">
                    <option value="1">Cachorro</option>
                    <option value="2">Gato</option>
                    <option value="3">Outro</option>
                    <option value="4" selected>Todos</option>
                </select>
            </span>
            <span>
                <select name="neighborhood" id="select_input01" className="bg-customGreen-500 py-2 px-4 rounded-lg shadow-lg font-bold">
                    <option value="1">Cruzeiro</option>
                    <option value="2">Lençol</option>
                    <option value="3">Oxford</option>
                    <option value="4" selected>Todos</option>
                </select>
            </span>
            <span>
                <Button text={"Buscar"} handleClick={handleClick} />
            </span>
        </div>
    )
}

export default FilterBar;