# Skeleton NodeJS + ExpressJS + Sequelize
Repositório base para projetos NodeJS + ExpressJS + Sequelize

# Como usar

    git clone https://github.com/luizpicolo/sample-nodejs-express-sequelize.git meu-projeto
    cd meu-projeto && npm i

# Banco de dados

Alterar as configurações em `config/database.js`

    module.exports = {
        username: '',
        password: '',
        database: '',
        host: '',
        dialect: '',
    }
    
# Migrações

    npx sequelize db:migrate
    npx sequelize db:seed:all