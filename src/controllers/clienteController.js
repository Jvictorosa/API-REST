const Cliente = require('../models/cliente');

const getClientes = async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
};

const createCliente = async (req, res) => {
    const { nome_cliente, email_cliente } = req.body;
    const cliente = new Cliente({ nome_cliente, email_cliente });
    await cliente.save();
    res.status(201).json(cliente);
};

module.exports = { getClientes, createCliente };
