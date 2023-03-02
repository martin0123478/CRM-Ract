import { useLoaderData } from "react-router-dom";
import {obtenerClientes} from '../data/clientes'
import Cklientes from "../components/Cklientes";

export function loader(){
    const clientes  = obtenerClientes()
    return clientes
}


const Index = () => {
    const datos = useLoaderData()
    
  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
    <p className='mt-3'>Administra tus clientes</p>

    {datos.length ? (
        <table className="w-full shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
                <tr>
                    <th className="p-2">Cliente</th>
                    <th className="p-2">Contacto</th>
                    <th className="p-2">Acciones</th>
                </tr>
                </thead>
                <tbody>
                    {datos.map(cliente =>(
                        <Cklientes
                        cliente={cliente}
                        key={cliente.id}
                        />
                    ))}
                </tbody>

            
        </table>
    ) : (
        <p className="text-center mt-10">No hay clientes aun</p>
    )}
    </>
  )
}

export default Index
