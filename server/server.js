import express from 'express'
import path from 'path';
import posts from './routes/posts'

const app = express();
const port = process.env.PORT || 3001;

// example
// app.get('/', (req, res) => {
//     res.send('Nice to meet u')
// });

app.use('/', express.static(__dirname + 'dist'));
// app.use(express.static(path.join(__dirname, 'dist')));

app.get('/hello', (req, res) => {
    return res.send('This is hello page!!!');
});

// routes
app.use('/posts', posts);

app.listen(port, () => console.log(`listening on port ${port}`));