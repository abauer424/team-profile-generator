// TODO: Create a function to generate markdown for HTML
function generateMarkdown(data) {
    return `
   

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profle Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
    </head>

    <header>
    <nav>
        <h1>My Team</h1>
    </nav>
</header>
 
    <body>

    <div class="col-4">
    <div class="card">
        <h2 class="card-header">${data.projectTitle}</span></h2>
    </div>

    </body>
    </html>


  `;
  }
  
  module.exports = generateMarkdown;
   