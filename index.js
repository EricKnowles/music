import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/');
        const genre = response.data;
        res.render('genre', { genre });
    } catch (error) {
        console.error(`Error fetching genre: ${error}`);
        res.send('Failed to fetch genre');
    }
});


app.listen(port, () => {
    console.log(`Genre Generator app listening at http://localhost:${port}`);
});
