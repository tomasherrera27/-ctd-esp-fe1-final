import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import {Character} from "../../types/character.types"
import {useState} from "react"
import {useLocation} from "react-router-dom"

type Props = {
  character: Character;
}
/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

const TarjetaPersonaje = ({ character }: Props) => {
  const location = useLocation().pathname
  const [favorito, setFavorito] = useState<boolean>(location === "/favoritos" ? true : false);
  return (
    <div className="tarjeta-personaje">
      <img src={character.image} alt="images" />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito favorito={favorito} character={character} onClick={setFavorito} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
