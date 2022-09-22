import "./boton-favorito.css";
import {
  addCharacterToFavorites,
  removeCharacterFromFavorites,
} from "../../redux/store/actions/main.actions";
import { Character } from "../../types/character.types";
import { useDispatch } from "react-redux";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */

interface Props {
  character: Character | undefined;
  favorito: boolean;
}
interface OnClick {
  onClick: (isFavorite: boolean) => void;
}

type IFavoriteProps = Props & OnClick;

const BotonFavorito = ({ character, favorito, onClick }: IFavoriteProps) => {
  const src = favorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";
  const dispatch = useDispatch();

  const handleChange = () => {
    if (favorito) {
      dispatch(removeCharacterFromFavorites(character));
    } else {
      onClick(!favorito);
      dispatch(addCharacterToFavorites(character));
    }
  };

  return (
    <div className="boton-favorito" onClick={handleChange}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
