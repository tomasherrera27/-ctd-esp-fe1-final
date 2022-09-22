import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useDispatch } from "react-redux";
import {removeAllCharactersFromFavorites} from "../redux/store/actions/main.actions";
import { useSelector } from '../redux/store/store';

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.characters);
    
    return (<div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=> dispatch(removeAllCharactersFromFavorites())}>Eliminar todos de favoritos</button>
        </div>
        <div className="grilla-personajes">
       {favorites.map((character) => (
            <TarjetaPersonaje character={character} />
        ))}
    </div>
    </div>
    )
}

export default PaginaFavoritos