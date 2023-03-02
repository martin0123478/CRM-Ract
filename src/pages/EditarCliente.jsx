import {Form,useNavigate,useLoaderData} from 'react-router-dom'
import {obtenerCliente} from '../data/clientes'
import Formulario from '../components/Formulario'

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
    const navigate = useNavigate()
    const cliente = useLoaderData()
   
  return (
    <div>
     <>
   <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
    <p className='mt-3'>Podras modificar los datos de un cliente</p>
    <div className='flex justify-end'>

      <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
      onClick={() => navigate('/')}>
        Volver
      </button>

    </div>

    <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

      {/* {errores?.length && errores.map((error,i)=><Error key={i}>{error}</Error>)} */}

      <Form
        method="post"
        noValidate
       
      >
      <Formulario
      
      
      cliente={ cliente}/>
      <input
        type="submit"
        className="mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg"
        value="Registrar cliente"
      
      />
      </Form>
    </div>
   </>
    </div>
  )
}

export default EditarCliente
