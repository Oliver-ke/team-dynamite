import consola from 'consola';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

const app = express();
// Normal express config defaults
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
dotenv.config();

app.get('/', async (req, res) => {
	return res.status(200).json({ message: 'welcome to push' });
});

app.use('/api/v1/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	consola.success(`Find me on port ${port}`);
});
