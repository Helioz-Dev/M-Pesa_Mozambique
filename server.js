import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// Endpoint que seu app vai chamar
app.post("/mpesa", async (req, res) => {
  try {
    const { phone, amount, reference } = req.body;

    if (!phone || !amount) {
      return res.status(400).json({ error: true, message: "phone e amount são obrigatórios" });
    }

    const response = await axios.post(
      "https://e2payments.explicador.co.mz/v1/c2b/mpesa-payment/585916",
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

    return res.json(response.data);

  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.response?.data || error.message
    });
  }
});

// Porta exigida pelo Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));