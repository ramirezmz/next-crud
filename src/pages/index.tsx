import Layout from "../components/Layout"
import Table from "../components/Table"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import useClientes from "../hooks/useClientes"

export default function Home() {
  const { 
    clientSelect,
    clientExclude,
    newClient,
    client,
    clientes,
    saveClient,
    tabelaVisible,
    showTable
  } = useClientes()
  return (
  <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
  `}>
    <Layout title="Cadastro Simple">
      {tabelaVisible ? (
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
        cancelado={showTable}
        />
      )}
      
      
    </Layout>
  </div>
  )
}
