const express = require('express')
const bookRoutes = require('./routes/book');
const authRoutes = require('./routes/auth');
const authenticateToken = require('./middleware/middleware');
const {swaggerUi, swaggerSpecs} = require('./config/swagger');



const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/books', authenticateToken, bookRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});