const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path'); //wth?


teamMembers = [];

function questionsManager() {

    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the team manager's employee ID?"

        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"

        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
        }

    ]).then(data => {

        const manager = new Manager(data.managerName, data.employeeId, data.email, data.officeNumber);
       // console.log(manager);
        teamMembers.push(manager);
        addTeamMate();


    })

};



function addTeamMate() {
    inquirer.prompt([

        {
            type: "list",
            name: "addteam",
            message: "Add a team member?",
            choices: ['add Engineer', 'add Intern', 'The team is complete']

        }

    ]).then(data => {

        if (data.addteam === "add Engineer") {

            engineerProfile();

        } else if (data.addteam === "add Intern") {

            internProfile();

        } else {

            generateHTML(teamMembers);
        }



    })
};

function engineerProfile() {

    inquirer.prompt([

        {

            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the engineer's employee ID?"

        },
        {
            type: "input",
            name: "email",
            message: "What is the  engineer's email?"

        },
        {
            type: "input",
            name: "gitHub",
            message: "What is the  engineer's gitHub?"
        }
    ]).then(data => {

        const engineer = new Engineer(data.engineerName, data.employeeId, data.email, data.gitHub);
        //console.log(engineer);
        teamMembers.push(engineer);
        addTeamMate();

    })

};

function internProfile() {
    inquirer.prompt([

        {

            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the intern's employee ID?"

        },
        {
            type: "input",
            name: "email",
            message: "What is the  intern's email?"

        },
        {
            type: "input",
            name: "school",
            message: "What is the  intern's school?"
        },


    ]).then(data => {

        const intern = new Intern(data.internName, data.employeeId, data.email, data.school);
       // console.log(intern);
        teamMembers.push(intern);
        addTeamMate();
    })
};








questionsManager();


function generateHTML(arr) {
    let HTMLarr = [];
    for (i = 0; i < arr.length; i++) {
       // console.log(arr[i].getRole());

        if (arr[i].getRole() === "Manager") {
            HTMLarr.push(` 
            <div class="row p-3 m-3">
            <div class="col-sm-4">
            <div class="col-sm-4">
            <div class="card text-white bg-info" style="width: 18rem;">

                <div class="card-body">
                    <h2 class="card-title">${arr[i].getName()}</h2>
                    <h3 class="card-text">${arr[i].getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${arr[i].getId()} </li>
                    <li class="list-group-item">Email:<a href="mailto: ${arr[i].getEmail()} class="card-link">email</a> </li>
                    <li class="list-group-item">Office Number: ${arr[i].getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>`)

        } else if (arr[i].getRole() === "Engineer") {
            HTMLarr.push(` <div class="col-sm-3">
             <div class="col-sm-4">
            <div class="card text-white bg-primary" style="width: 18rem;">

                <div class="card-body">
                    <h2 class="card-title">${arr[i].getName()}</h2>
                    <h3 class="card-text">${arr[i].getRole()}}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${arr[i].getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto: ${arr[i].getEmail()} class="card-link">email</a> </li>
                    <li class="list-group-item">GitHub: <a href=${arr[i].getGithub()} class="card-link">GitHub</a></li>
                </ul>
            </div>
            </div>
        </div>`)



        } else {
            HTMLarr.push(`
        
            <div class="col-sm-3">
            <div class="card text-white bg-success" style="width: 18rem;">
    
                <div class="card-body">
                    <h2 class="card-title">${arr[i].getName()}</h2>
                    <h3 class="card-text">${arr[i].getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${arr[i].getId()}</li>
                    <li class="list-group-item">Email:${arr[i].getEmail()}<a href="mailto: ${arr[i].getEmail()}" class="card-link">email</a> </li>
                    <li class="list-group-item">School: ${arr[i].getSchool()}" </li>
                </ul>
            </div>
        </div>    
        
        </div>    
        </div>`)  // verify HTML is good 


        }
    }

    return `<!DOCTYPE html>
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
                <h1 class="display-4 text-center">Meet the team!</h1>
    
            </div>
        </div>
    
    
        
                ${HTMLarr};
    
    
    </body>
    
    </html>
    `
}




function makeFile(data) {
    fs.writeFile("pageBones.html", data, function(err) {
       if(err){
         console.log(Error);
       }
       else{
         console.log("Your file has been created.")
       }
    })
  }

//last step generate file HW9 as reference 