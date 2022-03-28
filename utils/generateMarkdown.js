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
    </head>

    <header>
    My Team
    </header>

    <body>
    # Title: ${data.projectTitle}

  
    ## Table Of Contents
  
    * [Description](#description)
  
    ## Description
    ${data.description}

    </body>
    </html>


  `;
  }
  
  module.exports = generateMarkdown;
  