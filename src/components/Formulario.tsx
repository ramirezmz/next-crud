import { useState } from "react";
import Entrada from "./Entrada";
import Client from "../core/Client"
import Botao from "./Botao";

interface FormularioProps{
  client: Client
  clientChange?: (client: Client) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.client?.id ?? null
  const [ name, setName ] = useState(props.client?.name ?? '')
  const [ age, setAge ] = useState(props.client?.age ?? '')
  
  return(
    <div>
      {id ? (
        <Entrada
        somenteLeitura
        texto= "Código"
        valor={id}
        className="mb-4"
        />
      ) : false}
      <Entrada
        texto= "Nome"
        valor={name}
        onChange={setName}
        className="mb-4"
      />
      <Entrada
        texto= "Idade"
        tipo="number"
        valor={age}
        onChange={setAge}
      />
      <div className="flex justify-end mt-3">
        <Botao cor="blue" className="mr-2"
        onClick={() => props.clientChange?.(new Client(name, +age, id))}
        >{id ? 'Alterar' : 'Salvar'
        }</Botao>
        <Botao onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  )
}