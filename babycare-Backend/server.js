app.post('/mensagem', (req, res) => {
  const { nome, mensagem } = req.body;

  if (!nome || !mensagem) {
    return res.status(400).json({ erro: 'Nome e mensagem são obrigatórios.' });
  }

  const data = new Date().toISOString();

  // Aqui você pode enviar para um banco externo, API ou apenas logar por enquanto
  console.log(`Mensagem recebida: ${nome} → ${mensagem} em ${data}`);

  res.status(200).json({ sucesso: true });
});
