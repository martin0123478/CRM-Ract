import {Form,useNavigate,useLoaderData, useActionData,redirect} from 'react-router-dom'
import {obtenerCliente,actualizarCliente} from '../data/clientes'
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

export async function action({request,params}){
    const formData = await request.formData()
  //console.log(formData.get('nombre'))
  const datos = Object.fromEntries(formData)
 
  const email = formData.get('email')

  //Validación
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')

  }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if(!regex.test(email)){
      errores.push('el email no es valido')
    }

  //Retornar datos si hay errores
  if(Object.keys(errores).length){
    return errores
  }
 //actualizarCliente
 await actualizarCliente(params.clienteId,datos)
  
   return redirect('/')

}


const EditarCliente = () => {
    const navigate = useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()
   
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

      {errores?.length && errores.map((error,i)=><Error key={i}>{error}</Error>)} 

      <Form
        method="post"
        noValidate
       
      >
      <Formulario
      
      
      cliente={ cliente}/>
      <input
        type="submit"
        className="mt-5 w-full bg-blue-800 uppercase font-bold text-white text-lg"
        value="Modificar cliente"
      
      />
      </Form>
    </div>
   </>
    </div>
  )
}

export default EditarCliente
