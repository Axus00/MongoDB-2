//Se crea una database nueva
db.createCollection('usersInfo2');

//Información usuarios
db.usersInfo.insertMany([
    {
        name: "Fernando",
        lastName: "Gómez",
        age: 23,
        height: 170,
        weight: 120,
        country: "Colombia",
        residencia: "Medellin",
        salary: 2000,
        email: "fernando@gmail.com"
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

//Puntos ejercicios
//Incrementar el salario de todos los usuarios en un 10%.
db.usersInfo.updateMany(
    {},
    {$inc: {salary: 0.10}}
);

db.usersInfo.count();



//Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.usersInfo.updateMany({
    residencia: {$eq: "New York"},
    Set: {residencia: {$eq: "Los Ángeles"}}
});

//Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".

//Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.

//Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

//Aumentar la altura de todos los usuarios en 5 centímetros.

//Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".

//Actualizar el peso del usuario con nombre "Maria" a 140 libras.

//Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

//Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

//Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

//Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.

//Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".

//Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

//Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

//Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

//Incrementar el salario de los usuarios que viven en "London" en un 25%.

//Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

//Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

//Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".


