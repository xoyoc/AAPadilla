var express=require('express');
var app=express();

app.use(express.static('public'));

app.get('/', function(req,res){
	res.sendFile(__dirname +'/nosotros.html');
});

app.listen(3000, function(err){
	if(err) return console.log('Hubo un pez'), process.exit(1);
	
	console.log('Servidor corriendo en http://localhost:3000');
});