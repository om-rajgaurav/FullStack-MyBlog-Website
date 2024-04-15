import { MongoClient } from "mongodb";

let db;

// mongosh "mongodb+srv://cluster0.usd5bse.mongodb.net/" --apiVersion 1 --username omrajgaurav --password kv1j85b1NrPBOGR3

async function connectToDb(cb) {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.usd5bse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
  await client.connect();
  db = client.db("react-blog-db");
  cb();
}

export { db, connectToDb };
