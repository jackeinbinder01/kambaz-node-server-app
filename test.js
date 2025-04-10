import mongoose from "mongoose";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz";

(async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("✅ Connected to MongoDB Atlas");
    process.exit(0);
  } catch (err) {
    console.error("❌ Connection failed:", err.message, err.stack);
    process.exit(1);
  }
})();