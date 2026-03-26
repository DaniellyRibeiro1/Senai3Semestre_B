import {Link} from 'react-router-dom'

function NotFound(){
return(
    <div>
        <h1>Página não encontrada</h1>
        {/* <a href = '/'> </a> */}
    
          <Link to = '/'>Voltar para a principal</Link>
    </div>
)
}

export default NotFound