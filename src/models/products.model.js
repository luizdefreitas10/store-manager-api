const connection = require('./db/connection');

const modelGetAll = async () => {
   const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const modelGetById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );

  return result;
};

const modelCreateProduct = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  return result.insertId;
};
 
const updateModelProducts = async (name, id) => {
  const [result] = await connection.execute(
    `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?
    `, [name, id],
  );
  return result.affectedRows;
};
 
const deleteModelProducts = async (id) => {
  const [result] = await connection.execute(
    `DELETE FROM StoreManager.products
    WHERE id = ?`, [id],
  );
  return result.affectedRows;
 };

module.exports = {
  modelGetAll,
  modelGetById,
  modelCreateProduct,
  updateModelProducts,
  deleteModelProducts,
};