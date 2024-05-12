const express = require('express');
const app = express();

// Substitua 'public' pelo caminho da pasta onde seus arquivos estáticos estão localizados
app.use(express.static('path/to/your/angular/dist/folder', {
    setHeaders: function (res, path) {
        if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        }
    }
}));

// Define a porta em que o servidor estará escutando
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
