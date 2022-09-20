
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import {FC, useEffect} from "react"
import { useSelector } from '../../redux/store/store';
import { fetchCharactersThunk } from '../../redux/store/actions/main.actions';
import { useDispatch } from 'react-redux';
/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes:FC = () => {
  const { search, status, characters, page } = useSelector(state => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    if (search === ''){
      dispatch(fetchCharactersThunk(page))
    }
  }, [search, page, dispatch])

  if(status === 'LOADING') {
    return (
      <span>Loading...</span>
    )
  } else if(status === 'ERROR') {
    return (
      <span>Error</span>
    )
  } else if (status === 'NOTKNOWN') {
    return (
      <span>Desconocido</span>
    )
  }

  return (
    <div className="grilla-personajes">
       {characters.map((character) => (
            <TarjetaPersonaje character={character} />
        ))}
        
    </div>
)
}
 
export default GrillaPersonajes;