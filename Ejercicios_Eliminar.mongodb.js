
db.createCollection('usersInfo');

db.usersInfo.insertMany([
    {
        name: "John",
        lastName: "Doe",
        age: 23,
        height: 170,
        weight: 120,
        country: "Francia",
        residencia: "París",
        salary: 2000,
        email: "borrar@riwi.com"
    },
    {
        name: "Fernando",
        lastName: "Gómez",
        age: 23,
        height: 170,
        weight: 150,
        country: "Colombia",
        residencia: "Medellín",
        salary: 2500,
        email: "fernando123@yahoo.com"
      },
      {
        name: "Sophia",
        lastName: "Johnson",
        age: 29,
        height: 165,
        weight: 185,
        country: "United States",
        residencia: "New York City",
        salary: 4500,
        email: "sophia.johnson@example.com"
      },
      {
        name: "Luis",
        lastName: "Martinez",
        age: 35,
        height: 180,
        weight: 100,
        country: "France",
        residencia: "Paris",
        salary: 6000,
        email: "luis.martinez@francemail.com"
      },
      {
        name: "Yuki",
        lastName: "Tanaka",
        age: 31,
        height: 160,
        weight: 110,
        country: "Japan",
        residencia: "Tokyo",
        salary: 1500,
        email: ""
      },
      {
        name: "Mia",
        lastName: "Garcia",
        age: 27,
        height: 168,
        weight: 150,
        country: "Australia",
        residencia: "Sydney",
        salary: 3500,
        email: "mia_garcia@australia.net"
      },
      {
        name: "Andrei",
        lastName: "Popescu",
        age: 30,
        height: 175,
        weight: 200,
        country: "Romania",
        residencia: "Bucharest",
        salary: 5000,
        email: "andrei_popescu@romania.com"
      },
      {
        name: "Isabella",
        lastName: "Silva",
        age: 26,
        height: 163,
        weight: 179,
        country: "Brazil",
        residencia: "Rio de Janeiro",
        salary: 7600,
        email: "isabella_silva@brazilmail.com"
      },
      {
        name: "Mohammed",
        lastName: "Ali",
        age: 33,
        height: 175,
        weight: 300,
        country: "Egypt",
        residencia: "Cairo",
        salary: 6500,
        email: "mohammed.ali@egyptmail.com"
      },
      {
        name: "Hans",
        lastName: "Müller",
        age: 32,
        height: 178,
        weight: 120,
        country: "Germany",
        residencia: "Berlin",
        salary: 1000,
        email: ""
      },
      {
        name: "Chen",
        lastName: "Wei",
        age: 28,
        height: 172,
        weight: 134,
        country: "China",
        residencia: "Shanghai",
        salary: 6500,
        email: "chen_wei@chinamail.com"
      },
      {
        name: "Elena",
        lastName: "Petrova",
        age: 25,
        height: 166,
        weight: 145,
        country: "Russia",
        residencia: "Moscow",
        salary: 2000,
        email: ""
      },
      {
        name: "John",
        lastName: "Smith",
        age: 30,
        height: 180,
        weight: 189,
        country: "Canada",
        residencia: "Toronto",
        salary: 2000,
        email: "john.smith@canadamail.com"
      },
      {
        name: "Fatima",
        lastName: "Al-Farsi",
        age: 28,
        height: 160,
        weight: 130,
        country: "United Arab Emirates",
        residencia: "Dubai",
        salary: 8000,
        email: "fatima.alfarsi@uaemail.com"
      },
      {
        name: "Diego",
        lastName: "Gonzalez",
        age: 31,
        height: 175,
        weight: 90,
        country: "Mexico",
        residencia: "Mexico City",
        salary: 8500,
        email: "borrar@riwi.com"
      },
      {
        name: "Anna",
        lastName: "Kovalenko",
        age: 29,
        height: 170,
        weight: 143,
        country: "Ukraine",
        residencia: "Kyiv",
        salary: 9000,
        email: ""
      },
      {
        name: "Liam",
        lastName: "Jones",
        age: 27,
        height: 185,
        weight: 150,
        country: "United Kingdom",
        residencia: "London",
        salary: 2000,
        email: ""
      },
      {
        name: "Maria",
        lastName: "Garcia",
        age: 33,
        height: 162,
        weight: 200,
        country: "Argentina",
        residencia: "Buenos Aires",
        salary: 10000,
        email: "borrar@riwi.com"
      },
      {
        name: "Sara",
        lastName: "Andersson",
        age: 26,
        height: 167,
        weight: 240,
        country: "Sweden",
        residencia: "Stockholm",
        salary: 12000,
        email: ""
      },
      {
        name: "Javier",
        lastName: "Lopez",
        age: 34,
        height: 175,
        weight: 100,
        country: "Chile",
        residencia: "Santiago",
        salary: 2000,
        email: ""
      },
      {
        name: "Ahmed",
        lastName: "Mohammed",
        age: 30,
        height: 170,
        weight: 130,
        country: "Saudi Arabia",
        residencia: "Riyadh",
        salary: 1200,
        email:""
      }
]);


//Actividad eliminar de la base de datos
//Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.usersInfo.deleteMany({
    salary: {$lt: 2000}
});

//Eliminar usuarios que tienen una edad menor que 25 años.
db.usersInfo.deleteMany({
    age: {$lt: 25}
});

//Borrar todos los usuarios que viven en "París".
db.usersInfo.deleteMany({
    residencia: {$eq: "París"}
});

//Eliminar usuarios que tienen un peso superior a 180 libras.
db.usersInfo.deleteMany({
    weight: {$gt: 180}
});

db.usersInfo.find({
    weight: {$gt: 180}
});
//Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.usersInfo.deleteMany({
    height: {$lt: 160}
});

//Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.usersInfo.deleteMany({
    $and: [
        {name: {$eq: "John"}},
        {lastName: {$eq: "Doe"}}
    ]
});

//Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.usersInfo.deleteMany({
    email: {$regex: /borrar@riwi.com/?}
});

//Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.usersInfo.deleteMany({
    email: {$exists: true}
});

db.usersInfo.find({
    email: {$exists: false}
});

//Eliminar usuarios que viven en "Tokyo".
db.usersInfo.deleteMany({
    residencia: {$eq: "Tokyo"}
});

//Borrar todos los usuarios que son menores de 18 años.
db.usersInfo.deleteMany({
    age: {$lt: 18}
});

//Eliminar usuarios que tienen un salario igual a 0.
db.usersInfo.deleteMany({
    salary: {$eq: 0}
});

//Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
db.usersInfo.deleteMany({
    $and: [
        {residencia: {$eq: "New York"}},
        {salary: {$gt: 5000}}
    ]
});

//Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.usersInfo.deleteMany({
    email: {$regex: /spam/?}
});

//Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.usersInfo.deleteMany({
    $and: [
        {residencia: {$eq: "Bello"}},
        {age: {$gt: 50}}
    ]
});

//Eliminar todos los usuarios que tienen el apellido "González".
db.usersInfo.deleteMany({
    lastName: {$eq: "González"}
});

//Borrar usuarios que tienen una edad superior a 70 años.
db.usersInfo.deleteMany({
    age: {$gt: 70}
});

//Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.usersInfo.deleteMany({
    $and: [
        {country: {$eq: "Canadá"}},
        {salary: {$lt: 4000}}
    ]
});

//Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
db.usersInfo.deleteMany({
    $and: [
        {salary: {$gte: 1000}},
        {salary: {$lte: 2000}}
    ]
});

db.usersInfo.find({
    $and: [
        {salary: {$gte: 1000}},
        {salary: {$lte: 2000}}
    ]
});

//Eliminar usuarios que tienen una edad igual a 30 años.
db.usersInfo.deleteMany({
    age: {$eq: 30}
});

//Borrar usuarios que tienen una altura superior a 190 centímetros.
db.usersInfo.deleteMany({
    height: {$gt: 190}
});