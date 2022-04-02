//Created a function that returns an icon based on which role is passed in
// If there is no license, return an empty string
function renderIcon(getRole) {
    if(getRole === 'Engineer'){
      return `<span class="fa-solid fa-glasses"></span><h4>Engineer</h4>`
    }
    else if(getRole === 'Manager') {
        return '(https://fontawesome.com/icons/mug-hot?s=solid)[Manager]'
    }
    else if(getRole === 'Intern') {
        return '(https://fontawesome.com/icons/glasses?s=solid)[Intern]'
    }
  }


// TODO: Create a function to generate markdown for HTML
function generateMarkdown(team) {
    console.log(team)
    return `
   
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profle Generator</title>
        <script src="https://use.fontawesome.com/0e73077b20.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <header>
        <nav>
            <h1 class="bg-danger text-center text-white py-4">My Team</h1>
        </nav>
    </header>
    
    <body>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body bg-primary text-white">
                            <h5 class="card-title">${data.getName}</h5>
                            <p class="card-title">${renderIcon(data.getRole)}</p>
                        </div>
                        <ul class="list-group list-group-flush bg-light">
                            <li class="list-group-item p-2  border mt-4 mx-3" id="id">ID:${data.getId}</li>
                            <li class="list-group-item p-2 border mx-3" id="email" href="#">Email:${data.getEmail}</li>
                            <li class="list-group-item p-2 border mx-3 mb-4" id="officeNum">GitHub Username:${data.getGithub}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body bg-primary text-white">
                            <h5 class="card-title">Employee Name</h5>
                            <p class="card-title">Employee Title</p>
                        </div>
                        <ul class="list-group list-group-flush bg-light">
                            <li class="list-group-item p-2  border mt-4 mx-3" id="id">ID:</li>
                            <li class="list-group-item p-2 border mx-3" id="email" href="#">Email:</li>
                            <li class="list-group-item p-2 border mx-3 mb-4" id="officeNum">Office Number:</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body bg-primary text-white">
                            <h5 class="card-title">Employee Name</h5>
                            <p class="card-title">Employee Title</p>
                        </div>
                        <ul class="list-group list-group-flush bg-light">
                            <li class="list-group-item p-2  border mt-4 mx-3" id="id">ID:</li>
                            <li class="list-group-item p-2 border mx-3" id="email" href="#">Email:</li>
                            <li class="list-group-item p-2 border mx-3 mb-4" id="officeNum">Office Number:</li>
                        </ul>
                    </div>
                </div>
    
                <div class="col-sm-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body bg-primary text-white">
                            <h5 class="card-title">Employee Name</h5>
                            <p class="card-title">Employee Title</p>
                        </div>
                        <ul class="list-group list-group-flush bg-light">
                            <li class="list-group-item p-2  border mt-4 mx-3" id="id">ID:</li>
                            <li class="list-group-item p-2 border mx-3" id="email" href="#">Email:</li>
                            <li class="list-group-item p-2 border mx-3 mb-4" id="officeNum">Office Number:</li>
                        </ul>
                    </div>
                </div>
    
                <div class="col-sm-4">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body bg-primary text-white">
                            <h5 class="card-title">Employee Name</h5>
                            <p class="card-title">Employee Title</p>
                        </div>
                        <ul class="list-group list-group-flush bg-light">
                            <li class="list-group-item p-2  border mt-4 mx-3" id="id">ID:</li>
                            <li class="list-group-item p-2 border mx-3" id="email" href="#">Email:</li>
                            <li class="list-group-item p-2 border mx-3 mb-4" id="officeNum">Office Number:</li>
                        </ul>
                    </div>
                </div>
    
    </body>
    
    </html>


  `;
  }
  
  module.exports = generateMarkdown;
   