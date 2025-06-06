const db = require('../config/db');

const findUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM Usuario WHERE email = ?', [email]);
  return rows[0];
};

// Ahora incluye contraseña y rol
const insertUser = async (email, nombre, apellido, contraseña, rol) => {
  const [result] = await db.query(
    'INSERT INTO Usuario (email, nombre, apellido, contraseña, rol) VALUES (?, ?, ?, ?, ?)',
    [email, nombre, apellido, contraseña, rol]
  );
  return result.insertId;
};

// Ya no se guarda la contraseña en Cliente
const insertCliente = async (id_usuario, fechaN) => {
  await db.query(
    'INSERT INTO Cliente (id_usuario, fechaN) VALUES (?, ?)',
    [id_usuario, fechaN]
  );
};

const findClienteById = async (id_usuario) => {
  const [rows] = await db.query('SELECT * FROM Cliente WHERE id_usuario = ?', [id_usuario]);
  return rows[0];
};

module.exports = {
  findUserByEmail,
  insertUser,
  insertCliente,
  findClienteById
};
