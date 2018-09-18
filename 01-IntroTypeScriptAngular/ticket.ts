interface ITicket{
    destination: string,
    price: number,
    status: string
}

class Ticket implements ITicket{

    constructor(
        public destination: string,
        public price: number,
        public status: string
    ) {}
}

export default Ticket