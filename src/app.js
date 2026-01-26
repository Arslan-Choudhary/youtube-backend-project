import app from "#server";
import ENV from "#env";
import { connectDB } from "#connections";

const PORT = ENV.port;

connectDB()
    .then(
        app.listen(PORT || 8000, () =>
            console.log(`Server running on port ${PORT}`)
        )
    )
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
