import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// Endpoint que seu app vai chamar
app.post("/mpesa", async (req, res) => {
  try {
    const { phone, amount, reference } = req.body;

    // Envia a requisição diretamente para o servidor E2Payments
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

    // Retorna a resposta do E2Payments
    return res.status(response.status).json(response.data);

  } catch (error) {
    // Retorna o erro exato do E2Payments
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.status(500).json({ error: true, message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
