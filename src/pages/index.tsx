import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

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

  return (
  <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
  `}>
    <Layout title="Cadastro Simple">
      <Table clients={clients} 
      clientSelect={clientSelect}
      clientExclude={clientExclude}
      />
    </Layout>
  </div>
  )
}
