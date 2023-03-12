

const DogCard : React.FC<DogCardProps> = ({name, species, favFoods, birthYear, dogIndex}) => {       
    
    return (
        <div className="card">
            <h3 className="card__text card__header">{name}</h3>           
            <p className="card__text">Species: {species}</p>
            <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
            <p className="card__text">Birth Year: {birthYear}</p>            
        </div>
    );
};

interface DogCardProps{
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    dogIndex: number;
}

export default DogCard;