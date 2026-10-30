
import { MongoClient } from "mongodb";
import "dotenv/config";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("MONGODB_URI is missing from .env");
}

const client = new MongoClient(uri);

await client.connect();

console.log("Connected to MongoDB Atlas!");

const db = client.db("campusEcho");

export const experiencesCollection =
    db.collection("experiences");
