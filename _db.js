let suppliers = [
    { id: '1', companyname: 'Acme Corp', location: 'New York, USA' },
    { id: '2', companyname: 'Global Industries', location: 'London, UK' },
    { id: '3', companyname: 'Tech Supplies Ltd', location: 'Berlin, Germany' },
    { id: '4', companyname: 'Supreme Widgets', location: 'Tokyo, Japan' },
    { id: '5', companyname: 'Industrial Tools Co', location: 'Toronto, Canada' }
];

let products = [
    { id: '1', productname: 'Hammer', supplierid: '1', price: 25 },
    { id: '2', productname: 'Screwdriver', supplierid: '2', price: 15 },
    { id: '3', productname: 'Wrench', supplierid: '3', price: 30 },
    { id: '4', productname: 'Drill', supplierid: '4', price: 50 },
    { id: '5', productname: 'Saw', supplierid: '5', price: 40 }
];

let orderitems = [
    { id: '1', orderid: '101', productid: '1', unitprice: 25, quantity: 2 },
    { id: '2', orderid: '102', productid: '2', unitprice: 15, quantity: 5 },
    { id: '3', orderid: '103', productid: '3', unitprice: 30, quantity: 1 },
    { id: '4', orderid: '104', productid: '4', unitprice: 50, quantity: 3 },
    { id: '5', orderid: '105', productid: '5', unitprice: 40, quantity: 4 }
];

let orders = [
    { id: '101', orderdate: '2024-05-15', customerid: '1', totalamount: 50 },
    { id: '102', orderdate: '2024-05-16', customerid: '2', totalamount: 75 },
    { id: '103', orderdate: '2024-05-17', customerid: '3', totalamount: 30 },
    { id: '104', orderdate: '2024-05-18', customerid: '4', totalamount: 150 },
    { id: '105', orderdate: '2024-05-19', customerid: '5', totalamount: 160 }
];

let customers = [
    { id: '1', firstname: 'John', lastname: 'Doe', city: 'New York', country: 'USA', phone: 12345 },
    { id: '2', firstname: 'Jane', lastname: 'Smith', city: 'London', country: 'UK', phone: 2345 },
    { id: '3', firstname: 'Hans', lastname: 'Müller', city: 'Berlin', country: 'Germany', phone: 3456 },
    { id: '4', firstname: 'Yuki', lastname: 'Tanaka', city: 'Tokyo', country: 'Japan', phone: 4567 },
    { id: '5', firstname: 'Liam', lastname: 'Brown', city: 'Toronto', country: 'Canada', phone: 5678 }
];

export default { suppliers, products, orderitems, orders, customers }