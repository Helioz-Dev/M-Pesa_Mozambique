
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

## 👨‍💻 Desenvolvido por
[Helioz Dev](https://api.whatsapp.com/send/?phone=258842834889&text&type=phone_number&app_absent=0&wame_ctl=1) — soluções práticas e seguras para integração com e2payments.  
> 💡 Personaliza livremente e integra facilmente nos teus próprios sistemas.

---

## 📄 MIT License

Copyright (c) 2025 Helioz Dev

A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e dos arquivos de documentação associados (o "Software"), para
lidar com o Software sem restrições, incluindo, sem limitação, os direitos de
usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
cópias do Software, e permitir que pessoas a quem o Software é fornecido o façam,
sujeito às seguintes condições:

O aviso de copyright acima e este aviso de permissão devem ser incluídos em
todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM QUALQUER TIPO DE
GARANTIA, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS
DE COMERCIABILIDADE, ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO E NÃO VIOLAÇÃO.
EM NENHUMA HIPÓTESE OS AUTORES OU DETENTORES DOS DIREITOS AUTORAIS SERÃO
RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANO OU OUTRA RESPONSABILIDADE,
SEJA EM UMA AÇÃO DE CONTRATO, ATO ILÍCITO OU OUTRA FORMA, DECORRENTE DE,
OU EM CONEXÃO COM, O SOFTWARE OU O USO OU OUTRAS TRANSAÇÕES NO SOFTWARE.
