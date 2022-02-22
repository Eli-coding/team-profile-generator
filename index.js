const inquirer = require("inquirer");
const employee = require ("./lib/Employee.js");
const manager = require ("./lib/Manager.js");
const engineer = require ("./lib/Emgineer.js");
const intern = require ("./lib/Intern.js"); 


const generateHTML = ({name,role,id,email,offNumber,gitHub,school}) =>
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container p-3 m-3">
            <h1 class="display-4 text-center">Let me introduce you to the team...</h1>

        </div>
    </div>


    <div class="row p-3 m-3">
        <div class="col-sm-4">
            <div class="card text-white bg-info" style="width: 18rem;">

                <div class="card-body">
                    <h2 class="card-title">${name}</h2>
                    <h3 class="card-text">${role}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id} </li>
                    <li class="list-group-item">Email: <a href="${email}" class="card-link">email</a> </li>
                    <li class="list-group-item">Office Number: ${officeNumber}</a></li>
                </ul>
            </div>
        </div>


        <div class="col-sm-4">
            <div class="card text-white bg-primary" style="width: 18rem;">

                <div class="card-body">
                    <h2 class="card-title">${name}</h2>
                    <h3 class="card-text">${role}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${id}</li>
                    <li class="list-group-item">Email: <a href="${email}" class="card-link">email</a> </li>
                    <li class="list-group-item">GitHub: <a href="${gitHub}" class="card-link">GitHub</a></li>
                </ul>
            </div>

        </div>

    <div class="col-sm-3">
        <div class="card text-white bg-success" style="width: 18rem;">

            <div class="card-body">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-text">${role}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${id}</li>
                <li class="list-group-item">Email: <a href="${email}" class="card-link">email</a> </li>
                <li class="list-group-item">GitHub: <a href="${gitHub}" class="card-link">GitHub</a></li>
            </ul>
        </div>
    </div>    
</div>

<div class="row p-3 m-3">
    <div class="col-sm-4">
        <div class="card card text-white bg-warning" style="width: 18rem;">

            <div class="card-body">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-text">${role}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="${email}" class="card-link">email</a> </li>
                <li class="list-group-item">GitHub: <a href="${gitHub}" class="card-link">GitHub</a></li>
            </ul>
        </div>
    </div>

    <div class="col-sm-4">
        <div class="card text-white bg-danger" style="width: 18rem;">

            <div class="card-body">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-text">${role}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${id}</li>
                <li class="list-group-item">Email: <a href="${email}" class="card-link">email</a> </li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>
    </div>
</div>   





</body>

</html>`