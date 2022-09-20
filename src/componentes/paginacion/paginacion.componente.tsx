import './paginacion.css';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/store/actions/main.actions';
import { useSelector } from '../../redux/store/store';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const { page } = useSelector(state => state.characters);
    const dispatch = useDispatch();

    const handlePage = (arg: string) => {
        if (arg === 'prev' && page >= 0) {
            dispatch(changePage(page - 1))
        } else if (arg === 'next') {
            dispatch(changePage(page + 1))
        }
    }

    return (
        <div className="paginacion">
            <button disabled={page >= 1 ? false : true} onClick={() => handlePage('prev')} className={"primary"}>Anterior</button>
            <button disabled={page <= 42 ? false : true} onClick={() => handlePage('next')} className={"primary"}>Siguiente</button>
        </div>
    )
}

export default Paginacion;