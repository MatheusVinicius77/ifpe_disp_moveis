// cloudinary-server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary').v2;

// Configure sua conta do Cloudinary
cloudinary.config({ 
  cloud_name: 'dw4e20iav', 
  api_key: '353125277935912', 
  api_secret: 'K63iZs6qIgflYG1J8SBphCPcufo'
});

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// ✅ Listar imagens com uma tag (usa o upload_preset como tag)
app.get('/images', async (req, res) => {
  const { tag = 'matheusaula08' } = req.query;
  console.log(`[GET] /images -> Buscando imagens com a tag: ${tag}`);

  try {
    const result = await cloudinary.api.resources_by_tag(tag, {
      type: 'upload',
      prefix: '',
      max_results: 100,
    });

    console.log(`[GET] /images -> ${result.resources.length} imagens encontradas`);
    res.json(result.resources);
  } catch (err) {
    console.error(`[GET] /images -> Erro:`, err);
    res.status(500).json({ error: 'Erro ao buscar imagens' });
  }
});

// ✅ Deletar imagem por public_id
app.delete('/delete-image', async (req, res) => {
  const { public_id } = req.body;

  if (!public_id) {
    console.warn('[DELETE] /delete-image -> public_id não fornecido');
    return res.status(400).json({ error: 'public_id é obrigatório' });
  }

  console.log(`[DELETE] /delete-image -> Deletando imagem: ${public_id}`);

  try {
    const result = await cloudinary.uploader.destroy(public_id);
    console.log(`[DELETE] /delete-image -> Resultado:`, result);
    res.json(result);
  } catch (err) {
    console.error(`[DELETE] /delete-image -> Erro ao deletar imagem:`, err);
    res.status(500).json({ error: 'Erro ao deletar imagem' });
  }
});

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
