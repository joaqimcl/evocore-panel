const { Client } = require('pg');
const bcrypt = require('bcryptjs');

// Usaremos la variable de entorno directamente
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  try {
    await client.connect();
    console.log('✅ Conectado a la BD');

    // 1. Crear Tabla Usuarios
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        company_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabla Users lista');

    // 2. Crear Usuario Admin (El Bar)
    const email = "admin@elbar.com";
    const password = "1234"; 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Insertar si no existe (ON CONFLICT)
    await client.query(`
      INSERT INTO users (email, password_hash, company_name)
      VALUES ($1, $2, 'Bar EvoCore')
      ON CONFLICT (email) DO NOTHING;
    `, [email, hash]);

    console.log(`🎉 Usuario ${email} creado/verificado.`);

  } catch (e) {
    console.error(e);
  } finally {
    await client.end();
  }
}

main();