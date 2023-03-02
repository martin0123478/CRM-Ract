import {obtenerCliente} from '../data/clientes'

export async function loader({params}){
   const clienete = await obtenerCliente(params.clienteId)
   if(Object.values(clienete).length === 0){
    throw new Response('',{
        status:404,
        statusText:'No hay resultados'
    })
   }
   
    return clienete
}
const EditarCliente = () => {
  return (
    <div>
      Editar
    </div>
  )
}

export default EditarCliente
