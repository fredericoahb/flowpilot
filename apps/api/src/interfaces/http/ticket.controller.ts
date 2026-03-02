
export class TicketController {
  constructor(private createTicket: any) {}

  async create(req, res) {
    const result = await this.createTicket.execute(req.body)
    res.json(result)
  }
}
