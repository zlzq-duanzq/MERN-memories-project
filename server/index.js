import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

// mongodb.com/cloud/atlas
// henry-duanzq
// 180326duanzq

const CONNECTION_URL = 'mongodb+srv://henry-duanzq:180326duanzq@cluster0.0xxttpy.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5200;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);