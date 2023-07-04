import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import db from "./src/adapters/config/dbconfig.js";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//rota post/create

app.post("/lead", async (req, res) => {

    //Verificando se o email está vazio
    if (!req.body.email || req.body.email === "") {

        res.status(400).send("Email is required");

    } else {

        // 4. Preparando o Lead em um objeto

        const option = {

            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,

        };

        // 5. Verificando erros

        try {

            // 6. If para Lead em bracp/vazio

            const response = await db.insert({

                table: "lead",

                records: [option],

            });

            // 7. Mensagem de sucesso para o frontend

            res.status(200).send(response);

        } catch (error) {

            // 7. Mensagem de erro para o frontend

            res.status(500).send(error);

        }

    }

});

//rota get/read

// 1. rota para GET de todos os leads

app.get("/leads", async (req, res) => {

    // 2. try/catch para pegar erros

    try {

        // 3. query para pegar todos os leads

        const response = await db.query("SELECT * FROM leads.lead");

        // 4. Mensagem de sucesso para o frontend

        res.status(200).send(response);

    } catch (error) {

        // 4. Mensagem de erro para o frontend

        res.status(500).send("something went wrong");

    }

});

// 1 - rota put/update

app.post("/edit", async (req, res) => {

    // 2. set o Lead a ser atualizado pegando o id

    const option = {

        id: req.body.id,

        nome: req.body.nome,

        email: req.body.email,

        telefone: req.body.telefone,

    };

    // 3. try/catch para pegar erros

    try {

        // 4. enciando o update para o banco de dados

        const response = await db.update({

            table: "lead",

            records: [option],

        });

        // 5. enviando mensagem de sucesso para o frontend

        res.status(200).send(response);

    } catch (error) {

        // 5. enviando mensagem de erro para o frontend

        res.status(500).send(error);

    }

});

// 1. Rota para deletar um Lead usando o id

app.post("/delete/:lead_id", async (req, res) => {

    // 2. gpegar o id do Lead através da url

    const { lead_id } = req.params;

    // 3. try/catch para pegar erros

    try {

        // 4. enviando o delete request para o banco de dados

        const response = await db.delete({

            table: "lead",

            hashValues: [lead_id],

        });

        // 5. enviando mensagem de sucesso para o frontend

        res.status(200).send(response);

    } catch (error) {

        // 5. enviando mensagem de erro para o frontend

        res.status(500).send(error);

    }

});






// just a notification in the console

app.listen(PORT, () => {

    console.log(`Your server ⚡ is running 🏃‍♂️ on http://localhost:${PORT}`);

});