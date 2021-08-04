import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useEffect, useState } from "react"
import ClientRepository from "../core/ClientRepository"
import CollectionClient from "../backend/db/CollectionClient"

export default function Home() {

  const repo: ClientRepository = new CollectionClient()

  const [ client, setClient ] = useState<Client>(Client.vazio())
  const [ clientes, setClientes ] = useState<Client[]>([])
  const [ visivel, setVisivel ] = useState <'table' | 'form'>('table')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clientes => {
      setClientes(clientes)
      setVisivel('table')
    })
  }

  function clientSelect(client: Client){
    setClient(client)
    setVisivel('form')
  }

  async function clientExclude(client: Client){
   await repo.exclude(client)
   getAll()
 }
 
  async function saveClient(client: Client){
    await repo.salvar(client)
    getAll()
  }
  function newClient() {
    setClient(Client.vazio())
    setVisivel('form')
  }
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
            onClick={newClient}
            >Novo Cliente</Botao>
          </div>
          <Table clients={clientes} 
          clientSelect={clientSelect}
          clientExclude={clientExclude}
          />
        </>
      ) : (
        <Formulario 
        client={client}
        clientChange={saveClient}
        cancelado={() => setVisivel('table')}
        />
      )}
      
      
    </Layout>
  </div>
  )
}
