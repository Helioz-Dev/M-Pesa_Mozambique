
# 🟦 M-Pesa Payment Proxy – Node.js

Este projeto é um **servidor backend em Node.js** criado para executar pagamentos M-Pesa através da API da **e2Payments** de forma **segura**, sem expor dados sensíveis como:

- `client_id`  
- `Authorization Bearer Token`

O backend funciona como um **proxy seguro**:
Desenvolvido por: [Helioz Dev](https://api.whatsapp.com/send/?phone=258842834889&text&type=phone_number&app_absent=0&wame_ctl=1)  
o aplicativo ou frontend envia apenas *phone*, *amount* e *reference*, e o servidor completa a requisição usando as credenciais protegidas em **variáveis de ambiente** como Render.

---

## 🚀 Funcionalidades

- Endpoint simples `/mpesa` para processar pagamentos C2B.
- Esconde completamente as chaves sensíveis usando `process.env`.
- Integração com Deploy Exemplo Como **Render.com** (Deploy fácil).
- Usa **axios** para chamadas externas.
- Projetado para ser usado por **aplicativos Android**, sistemas web e qualquer cliente HTTP.

---

## 📌 Como Funciona

1. O cliente/app envia:
   ```json
   {
     "phone": "84xxxxxxx",
     "amount": "10",
     "reference": "HeliozPay"
   }
   ```

2. O servidor adiciona automaticamente:
   - `client_id`
   - `Authorization Bearer Token`

3. O servidor chama a API da e2Payments.
4. Retorna ao cliente o resultado do pagamento.

---

## 🛠 Tecnologias

- Node.js
- Express.js
- Axios
- Deploy fácil (Como render.com)
- GitHub (Repositório público)

---

## ⚙ Instalação Local

```bash
git clone https://github.com/Helioz-Dev/M-Pesa_Mozambique.git
cd M-Pesa_Mozambique
npm install
npm start
```

Crie um arquivo `.env` com:

```
CLIENT_ID=xxxxxxxxxxxx
AUTH_TOKEN=xxxxxxxxxxxx
```

---

## 🌐 Endpoint

**POST** `/mpesa`

### Body:
```json
{
  "phone": "84xxxxxxx",
  "amount": "10",
  "reference": "HeliozPay"
}
```

---

## 🔒 Segurança

- Tokens **NUNCA** são enviados ao cliente.
- Todas as chaves ficam protegidas nas **variáveis de ambiente como Render**.
- Backend impede o acesso direto às credenciais.

---

## 📄 Licença

Servidor simples e seguro em **Node.js** que protege **CLIENT_ID e Authorization Bearer Token** e faz requisições seguras para a e2payments.  
Desenvolvido por: [Helioz Dev](https://api.whatsapp.com/send/?phone=258842834889&text&type=phone_number&app_absent=0&wame_ctl=1)

Este projeto está disponível sob a licença **MIT**.
