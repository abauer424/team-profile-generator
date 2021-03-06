// TODO: Create a function to generate markdown for HTML
function generateMarkdown(data) {
    console.log(data)
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
            <h1 class="bg-danger text-center text-white py-4">My Awesome Team</h1>
        </nav>
    </header>
    
    <body>
        <div class="container">
            <div class="row">
                    ${data.map((member) => (
        `
                        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <div class="card-body bg-primary text-white">
                    <h5 class="card-title">${member.getName()}</h5>
                    <p class="card-title">${member.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush bg-light">
                    <li class="list-group-item p-2  border mt-4 mx-3" id="id">ID: ${member.getId()}</li>
                    <li class="list-group-item p-2 border mx-3" id="email" href="#">Email: ${member.getEmail()}</li>
                    ${member.getRole() === "Intern" ? `<li class="list-group-item p-2 border mx-3 mb-4" id="school">School Name: ${member.getSchool()}</li>` : member.getRole() === "Engineer" ? `<li class="list-group-item p-2 border mx-3 mb-4" id="gitHub">GitHub Username: ${member.getGitHub()}</li>` : member.getRole() === "Manager" ? `<li class="list-group-item p-2 border mx-3 mb-4" id="officeNum">Office Number: ${member.getOfficeNum()}</li>` : `<div></div>`}
                </ul>
            </div>
        </div> 
                        
                        `

    ))}
                
                </div>
                </div>
    
    </body>
    
    </html>


  `;
}

module.exports = generateMarkdown;
