import Client from "../core/Client";
import { IconEdition, IconTrash } from "./Icons";

interface TableProps {
  clients: Client[]
  clientSelect?: (Client: Client) => void
  clientExclude?: (Client: Client) => void
}

export default function Table(props: TableProps) {

  const exibirAcoes = props.clientSelect || props.clientExclude

  function renderizarCabecalho(){
    return (
    <tr>
      <th className="text-left p-4">Código</th>
      <th className="text-left p-4">Nome</th>
      <th className="text-left p-4">Idade</th>
      {exibirAcoes ? <th className="p-4">Ações</th> : false }
  </tr>
    )
  }

  function renderizarDados(){
    return props.clients?.map((Client, i) => {
      return (
        <tr key={Client.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left pt-4">{Client.id}</td>
          <td className="text-left pt-4">{Client.name}</td>
          <td className="text-left pt-4">{Client.age}</td>
          {exibirAcoes ? renderizarAcoes(Client) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(client: Client){
    return(
      <td className="flex justify-center">
        {props.clientSelect ? (
          <button onClick={() => props.clientSelect?.(client)} className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50 
        `}>
          {IconEdition}
        </button>
        ) : false}
        {props.clientExclude ? (
          <button onClick={() => props.clientExclude?.(client)} className={`
          flex justify-center items-center
          text-red-600 rounded-full p-2 m-1
          hover:bg-purple-50 
          `}>
            {IconTrash}
          </button>
        ) : false}
      </td>
    )
  }
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
      {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
     
    </table>
  )
}