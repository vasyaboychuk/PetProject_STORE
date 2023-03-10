module.exports={
    PORT:process.env.PORT||5000,
    DB_NAME:process.env.DB_NAME||'postgres',
    DB_USER:process.env.DB_USER||'postgres',
    DB_PASSWORD:process.env.DB_PASSWORD||'postgres',
    DB_HOST:process.env.DB_HOST||'localhost',
    DB_PORT:process.env.DB_PORT||'5432',

    ACCESS_SECRET:process.env.ACCESS_SECRET||'secretWord',
    REFRESH_SECRET:process.env.REFRESH_SECRET||'secretRefreshWord'
}
