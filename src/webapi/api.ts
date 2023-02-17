import express from "express";
import cors from "cors";
import { notaServicoController } from "./controllers/nota-servico-controller";

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send("Bem-vindo!");
});

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use("/api", notaServicoController);

app.use((_req, res) => {
  res.status(404).json({ msg: "URL não encontrada." });
});

app.use((err: any, _req: any, res: any, _next: any) => {
  res.status(500).json({ err });
});

function start() {
  app.listen(PORT, () => {
    console.info(`Servidor no ar ${HOSTNAME}:${PORT}.`);
  });
}

export { start };
