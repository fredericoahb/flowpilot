
export class Ticket {
  constructor(
    public id: string,
    public priority: string,
    public createdAt: Date
  ) {}

  calculateDueDate(): Date {
    const SLA = { P1: 4, P2: 12, P3: 24, P4: 72 }
    return new Date(this.createdAt.getTime() + SLA[this.priority] * 3600000)
  }
}
