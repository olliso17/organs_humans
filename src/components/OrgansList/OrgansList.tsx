import Button from 'components/Button';
import organs from '../../utils/organs.json';
import '../OrgansList/OrganList.css';

export default function OrgansList(): JSX.Element {
    
    const organ = organs.map(function (value) {
        return <div className='organsList'>
            <Button className='image' onClick={()=>alert(value.name)}>
                <img id='img' src={value.photo} alt={value.name} ></img>
            </Button>

            <div className='list' key={value.id}>
                <p>Id: {value.id}</p>
                <h3>{value.name}</h3>
                <h5>{value.description}</h5>
            </div>


        </div>

    }
    );
    return (
        <div className='container'>
            <h1 className='titulo'>Órgãos do Corpo Humano</h1>
            {organ}
        </div>

    );
}

