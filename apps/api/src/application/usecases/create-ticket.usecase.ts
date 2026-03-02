
export class CreateTicketUseCase {
  constructor(private repository: any) {}

  async execute(input: any) {
    const ticket = { ...input, createdAt: new Date() }
    return this.repository.save(ticket)
  }
}
