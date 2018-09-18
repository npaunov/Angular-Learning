"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var melon_1 = require("./melon");
// // task 1 Data Class
// const sample = new RequestObject(
//     "GET",
//     "http://google.com",
//     "HTTP/1.1",
//     ""
// )
// console.log(sample);
// // task 2 Tickets
// function processTickets(tickets: Array<string>, sorting: string) {
//     let data = new Array<Ticket>();
//     for (const ticket of tickets) {
//         const args = ticket.split("|")
//         const [destination, price, status] = args;
//         data.push(new Ticket(destination, Number(price), status))
//     }
//     data = data.sort((a, b) => a[sorting].localeCompare(b[sorting]));
//     return data;
// }
// const entry1: any =
//     [
//         [
//             'Philadelphia|94.20|available',
//             'New York City|95.99|available',
//             'New York City|95.99|sold',
//             'Boston|126.20|departed'
//         ],
//         'destination'
//     ]
// const entry2: any =
//     [
//         ['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//        'status'
//     ]
//// console.log(processTickets(entry1[0], entry1[1]))
// console.log(processTickets(entry2[0], entry2[1]))
// task 3
// const junior = new Junior("Pesho", 25);
// const senior = new Senior("Georgi", 35);
// const manager = new Manager("Mitko", 45);
// junior.salary = 2000;
// junior.work();
// junior.collectSalary();
// senior.salary = 4000;
// for (let i = 1; i <= 4; i++) {
//     senior.work();
// }
// senior.collectSalary();
// manager.salary = 6000;
// manager.dividend = 800;
// for(let i = 1; i<=3; i++){
//     manager.work();
// }
// manager.collectSalary();
var waterMelon = new melon_1.Watermelon(12.5, "Kingsize");
var melolemonmelon = new melon_1.Melonlemonmelon(12.5, "Kingsize");
debugger;
for (var i = 0; i < 11; i++) {
    melolemonmelon.morph();
}
console.log(melolemonmelon.toString());
//# sourceMappingURL=app.js.map