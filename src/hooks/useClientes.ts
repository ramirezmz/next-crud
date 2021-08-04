import { useEffect, useState } from "react"
import CollectionClient from "../backend/db/CollectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClientes() {

  const repo: ClientRepository = new CollectionClient()

  const { tabelaVisible, formularioVisivel, showForm, showTable } = useTableOrForm()
  const [ client, setClient ] = useState<Client>(Client.vazio())
  const [ clientes, setClientes ] = useState<Client[]>([])
  

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(clientes => {
      setClientes(clientes)
      showTable()
    })
  }

  function clientSelect(client: Client){
    setClient(client)
    showForm()
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
    showForm()
  }
  return {
    
    clientExclude,
    newClient,
    saveClient,
    clientSelect,
    getAll,
    client,
    clientes,
    tabelaVisible,
    showTable,
  }
}