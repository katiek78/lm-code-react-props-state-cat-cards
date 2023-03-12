import { images } from '../data/cat-data';
import CatImage from './cat_image';

const Card : React.FC<CardProps> = ({name, species, favFoods, birthYear, cardIndex}) => {       
    
    return (
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>
            {cardIndex < images.length && (<CatImage 
                image={images[cardIndex].image}
                altText={images[cardIndex].altText}
                licenceType={images[cardIndex].licenceType}
                licenceUrl={images[cardIndex].licenceUrl}
                attributionName={images[cardIndex].attributionName}
                attributionUrl={images[cardIndex].attributionUrl} 
            />)}
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
            <p className="card__text">Birth Year: {birthYear}</p>
            
        </div>
    );
};

interface CardProps{
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    cardIndex: number;
}

export default Card;