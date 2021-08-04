import Client from "./Client";

export default interface ClientRepository {
  salvar(client: Client): Promise<Client>
  exclude(client: Client): Promise<void>
  getAll(): Promise<Client[]>
}