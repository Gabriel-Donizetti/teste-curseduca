# teste-curseducato 

para iniciar rode o comando yarn

para criar o banco rode o comando yarn prisma migrate dev

rotas para teste

http://localhost:4000/user/signin

{
	"name": "Gabriel Donizetti",
	"email": "gabrieldonizetti@curseduca.com",
	"password":"gabs123"
}

http://localhost:4000/user/login

{
	"email": "gabrieldonizetti@curseduca.com",
	"password":"gabs123"
}

http://localhost:4000/user/getuser

http://localhost:4000/posts/createcomment

{
	"comment": "tenho uma duvia sobre como as baleias se reproduzem",
	"user_id": "11f1ba28-d886-4892-821f-e649eb607cf3",
	"post_id": "2601ee37-94db-4540-a2d2-eac1b8673622"
}

http://localhost:4000/posts/getall

http://localhost:4000/posts/createcomment

{
	"comment": "tenho uma duvia sobre como as baleias se reproduzem",
	"user_id": "11f1ba28-d886-4892-821f-e649eb607cf3",
	"post_id": "2601ee37-94db-4540-a2d2-eac1b8673622"
}

http://localhost:4000/posts/likedislike

{
	"isLike": true,
	"post_id": "",
	"user_id": ""
}

http://localhost:4000/posts/updlike

{
	"isLike": false,
	"id": ""
}
