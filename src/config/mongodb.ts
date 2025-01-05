import { MongoClient, ServerApiVersion } from "mongodb";

let trelloDatabaseInstance: any = null;

const mongoClientInstance: MongoClient = new MongoClient(process.env.MONGODB_URI || '', {
    serverApi: {
        version : ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
    },
});

export const CONNECT_DB = async () => {
    await mongoClientInstance.connect(); // wait for the connection to be established
    trelloDatabaseInstance = mongoClientInstance.db(process.env.DB_NAME);
};

// NOTE: only use it when the connection is established
export const GET_DB = () => {
    if (!trelloDatabaseInstance) throw new Error("Database is not connected");
    return trelloDatabaseInstance;
};
export const CLOSE_DB = async () => {
    await mongoClientInstance.close();
};
