const db = require('../database/db');

class AdminRepository {
    async createAdmin(admin) {
        const { username, hashedPassword } = admin;
        const result = await db.query('INSERT INTO admins (username, password, role) VALUES ($1, $2, $3)', [username, hashedPassword, 'admin']);
        return result.rows[0];
    }

    async isExistAdmin(username) {
        const result = await db.query('SELECT id FROM admins WHERE username = $1', [username]);
        return result.rowCount > 0;
    }

    async getAdminByUsername(username) {
        const result = await db.query('SELECT * FROM admins WHERE username = $1', [username]);
        return result.rows[0];
    }
}

module.exports = new AdminRepository();