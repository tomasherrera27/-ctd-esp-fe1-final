import './filtros.css';
import {searchCharactersThunk} from '../../redux/store/actions/main.actions'
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/store/store';


const Filtros = () => {
    const { search } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input 
        type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={search}
            onChange={(e) => dispatch(searchCharactersThunk(e.target.value))}
        />
    </div>
}

export default Filtros;