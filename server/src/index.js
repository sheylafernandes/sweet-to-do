require('dotenv').config();
const { ApolloServer } = require('apollo-server');
// const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const resolvers = {
    Query: {
        info: () => 'Teste da Sheyla Fernandes 2'
    }
};

/* const resolvers = {
    Query: {
        info: () => 'Teste da Sheyla',
        tasks: async (parent, args, context) => {
            return context.prisma.task.findMany();
        }
    },
    Mutation: {
        createTask: (parent, args, context) => {
            console.log('--- Mutation - createTask ---');
            console.log(args);
            const task = context.prisma.task.create({
                data: {
                    name: args.name,
                    isActive: args.isActive ? 1 : 0,
                    createdAt: new Date().toISOString()
                }
            });

            return task;
        },
        updateTask: (parent, args, context) => {
            console.log('--- Mutation - updateTask ---');
            console.log(args);
            let task = null;
            const currentTask = context.prisma.task.findUnique({
                where: {
                    id: parseInt(args.id)
                }
            });

            if(currentTask) {                
                task = context.prisma.task.update({
                    where: {
                        id: parseInt(args.id)
                    },
                    data: {
                        name: args.name || currentTask.name,
                        isActive: args.isActive ? 1 : 0,
                        updatedAt: new Date().toISOString()
                    }
                });
            }

            return task;
        },
        deleteTask: (parent, args, context) => {
            console.log('--- Mutation - deleteTask ---');
            console.log(args);
            const currentTask = context.prisma.task.findUnique({
                where: {
                    id: parseInt(args.id)
                }
            });

            console.log('currentTask: ');
            console.log(currentTask);

            if(currentTask) {
                const teste = context.prisma.task.delete({
                    where: {
                        id: parseInt(args.id)
                    }
                });
                console.log('teste: ');
                console.log(teste);
            }

            return currentTask;
        }
    }
}; */

// Instantiate Prisma Client
// const prisma = new PrismaClient();

// Instantiate Apollo Server
const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'graphql/schema.graphql'),
        'utf8'
    ),
    resolvers
    /* context: {
        prisma
    } */
});

// Start Apollo Server
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`Server is running on ${url}`)
    console.log('The value of PORT is:', process.env.PORT);
    console.log('The value of NODE_ENV is:', process.env.NODE_ENV);
});

/*
process.on('SIGINT', () => {
    console.log('Server exited');
    process.exit(1);
});

process.on('SIGKILL', () => {
    console.log('Server killed 1');
    process.exit(1);
});
*/