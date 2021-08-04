import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState } from "react"

export default function Home() {

  const clients = [
    new Client('Amanda', 22,"1"),
    new Client('Pedro', 1,"2"),
    new Client('Shamira', 18,"3"),
    new Client('Paolo', 23,"4"),
  ]

  function clientSelect(client: Client){
     console.log(client.name)
  }

  function clientExclude(client: Client){
    console.log(`Excluir ... ${client.name}`)
 }
 
  function saveClient(client: Client){
    console.log(client)
  }
 const [ visivel, setVisivel ] = useState <'table' | 'form'>('table')

  return (
  <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
  `}>
    <Layout title="Cadastro Simple">
      {visivel === "table" ? (
        <>
          <div className="flex justify-end">
            <Botao cor="green" className="mb-4"
            onClick={() => setVisivel('form')}
            >Novo Cliente</Botao>
          </div>
          <Table clients={clients} 
          clientSelect={clientSelect}
          clientExclude={clientExclude}
          />
        </>
      ) : (
        <Formulario 
        client={clients[1]}
        clientChange={saveClient}
        cancelado={() => setVisivel('table')}
        />
      )}
      
      
    </Layout>
  </div>
  )
}
