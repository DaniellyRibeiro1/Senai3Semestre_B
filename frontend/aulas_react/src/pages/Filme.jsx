import {Link, useParams} from 'react-router-dom'


function Filme(){
    const {id} = useParams();

return(
    <div>
        <h1>Este é o filme {id}</h1>
          <Link to = '/'>Voltar para a principal</Link>
    </div>
)
}

export default Filme