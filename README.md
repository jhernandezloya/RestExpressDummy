# Welcome to PowerDale

configurar el proyecto 
npm init

Instalar el typescript 
npm i -D typescript ts-node

Configurar el typescript
npx typescript --init

Editar el archivo tsconfig.json

{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "./dist",
        "rootDir": "./src",
        /* Strict Type-Checking Options */
        "strict": true,
        "noImplicitAny": true,
        /* Module Resolution Options */
        "moduleResolution": "node",
        "baseUrl": "./src",
        "esModuleInterop": true,
        /* Advanced Options */
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "lib": ["es2015"],
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}

Modificar el archivo package.json y agregar los scripts

{
    // ...
     "main": "app.js",
    "scripts": {
        "start": "nodemon",
        "build": "tsc",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    // ...
}

Instalar el express
npm i -S express
npm i -D @types/express

Compilar 
npm run build

Ejecutar con Node
node build/app.js

Hacer la prueba para ver que funcione el express
curl localhost:5000

Instalar el nodemon
npm i -D nodemon

Crear el archivo nodemon.json
{
    "watch": ["src"],
    "ext": ".ts",
    "ignore": [],
    "exec": "ts-node ./src/index.ts"
}

Instalar Eslint 

npx eslint --init

Instalar pretier

npm install --save-dev --save-exact prettier

configurar el prettier
npx prettier --config .prettierrc.json --write src/**/*.ts

Instalar el jest

npm i -D jest @types/jest ts-jest

configurar el archivo de jest

npx jest --init
Elegir a todo Si , y Babel

modificar el archivo jest.config.js

module.exports = {
    clearMocks: true,
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    preset: 'ts-jest'
};

modificar el package.json y agregar la tarea

"scripts": {
    //...
    "test": "jest"
},

Instalar el superTest para invocar como un agent http y hacer pruebas a los controladoras
npm i -D supertest @types/supertest