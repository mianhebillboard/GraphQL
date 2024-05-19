import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// db
import db from './_db.js'

// types
import { typeDefs } from './schema.js'

const resolvers = {
    Query: {
        suppliers() {
            return db.suppliers
        },
        supplier(_, args) {
            return db.suppliers.find((supplier) => supplier.id === args.id)
        },

        products() {
            return db.products
        },
        product(_, args) {
            return db.products.find((product) => product.id === args.id)
        },

        orderitems() {
            return db.orderitems
        },
        orderitem(_, args) {
            return db.orderitems.find((orderitem) => orderitem.id === args.id)
        },

        orders() {
            return db.orders
        },
        order(_, args) {
            return db.orders.find((order) => order.id === args.id)
        },

        customers() {
            return db.customers
        },
        customer(_, args) {
            return db.customers.find((customer) => customer.id === args.id)
        },
    },

    // for nested ones
    Product: {
        supplier: (product) => {
          return db.suppliers.find(supplier => supplier.id === product.supplierid);
        },
    },

    OrderItem: {
        order: (orderitem) => {
          return db.orders.find(order => order.id === orderitem.orderid);
        },
        product: (orderitem) => {
            return db.products.find(order => order.id === orderitem.productid);
        },
    },

    Order: {
        customer: (order) => {
          return db.customers.find(customer => customer.id === order.customerid);
        },
    },

    // Mutations
    Mutation: {
        deleteCustomer(_, args) {
            db.customers = db.customers.filter (customer => customer.id !== args.id)

            return db.customers
        },
        addCustomer(_, args) {
            let customer = {
                ...args.customer,
                id: Math.floor(Math.random() * 1000).toString()
            }
            db.customers.push(customer)

            return customer
        },

        // Sandbox example

        /*
        Operation:
        mutation AddMutation($customer: AddCustomerInput!) {
            addCustomer (customer: $customer) {
                firstname,
                lastname
                city
                country
                phone
            }
        }

        Variables:
        {
        "customer": {
            "firstname": "Bob",
            "lastname": "Golosinda",
            "city": "Cagayan de Oro",
            "country": "Philippines",
            "phone": 143
        }
        }

        */

        updateCustomer(_, args) {
            db.customers = db.customers.map(customer => {
                if (customer.id === args.id) {
                    return {...customer, ...args.edits}
                }

                return customer
            })

            return db.customers.find(customer => customer.id === args.id)
        }

        // Sandbox example

        /*
        Operation:
        mutation EditMutation($edits: EditCustomerInput!, $id: ID!) {
            updateCustomer (edits: $edits, id: $id) {
                firstname,
                lastname,
                city,
                country,
                phone
            }
        }

        Variables:
        {
            "edits": {
                "firstname": "Jane",
                "lastname": "Labrador"
            },
            "id": "2"
        }

        */
    }

}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {} = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Listening to port', 4000)