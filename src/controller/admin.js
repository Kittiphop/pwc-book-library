const jwt = require('jsonwebtoken');
const adminService = require('../service/admin');

class AdminAuthController {
    async register(req, res) {
        try {
            await adminService.createAdmin(req.body);
            res.status(201).json({ message: 'Admin registered successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async login(req, res) {
        const { username } = req.body;

        try {
            const admin = await adminService.getAdminByUsername(username);

            if (!admin) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign({ 
                    id: admin.id,
                    role: admin.role
                },
                process.env.JWT_SECRET, { expiresIn: '24h' }
            );

            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AdminAuthController();