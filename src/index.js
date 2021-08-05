import app from './app';

app.set('port', 3000);

app.listen( process.env.PORT || app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`)
})