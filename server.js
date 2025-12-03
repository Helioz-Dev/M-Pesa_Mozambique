import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// CORS aberto para qualquer site
app.use(cors()); // sem parâmetros = aceita todas as origens
app.use(express.json());

app.post("/mpesa", async (req, res) => {
  try {
    const { phone, amount, reference } = req.body;

    const response = await axios.post(
      `https://e2payments.explicador.co.mz/v1/c2b/mpesa-payment/${process.env.PAYMENT_ID}`,
      {
        client_id: process.env.CLIENT_ID,
        phone,
        amount,
        reference: reference || "HeliozDev"
      },
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.AUTH_TOKEN}`
        }
      }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.status(500).json({ error: true, message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
