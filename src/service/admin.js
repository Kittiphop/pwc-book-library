const adminRepository = require('../repository/admin');
const bcrypt = require('bcryptjs');

class AdminService {
    async createAdmin(adminData) {
        const exist = await adminRepository.isExistAdmin(adminData.username);
        if (exist) {
            throw new Error('Admin already exists');
        }

        const hashedPassword = await bcrypt.hash(adminData.password, 10);
        adminData.hashedPassword = hashedPassword;

        await adminRepository.createAdmin(adminData);

        return null
    }
    
    async getAdminByUsername(username) {
        return await adminRepository.getAdminByUsername(username);
    }
}

module.exports = new AdminService();