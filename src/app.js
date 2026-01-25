import app from "#server"
import ENV from "#env";

const PORT = ENV.port

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))