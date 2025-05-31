echo "Inicializando api do projeto..."

node server.js &

if [ $? -eq 0 ]; then
    echo "API iniciada com sucesso!"
else
    echo "Erro ao iniciar a API."
fi

echo "Inicializando frontend do projeto..."
npm run start
