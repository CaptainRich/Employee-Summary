// Reference the node modules needed
const fs          = require( 'fs' );



///////////////////////////////////////////////////////////////////////////////
// Function to prepare the HTML data in memory
const prepareFile = (staffData) => {

    console.log( "In prepareFile" );
    
  return `
  <!DOCTYPE html> 
  <html lang="en"> 

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link rel="stylesheet" href="style.css" />
  <title>My Team</title>
</head>

<body class="flex-column min-100-vh">
  <header class="hero">
    <h1 class="app-title">My Team</h1>
  </header>

  <section class="col-12">
    <div class="flex-row justify-space-between">
       ${generateEmployees(staffData)}
    </div>
  </section>

  </body>
  </html>
  `;

};


//////////////////////////////////////////////////////////////////////////////
// Generate the HTML for each of the employees
const generateEmployees = ( staffData ) => {

    console.log( "Number of Employees: " + staffData.length );

    // Use successive 'filter' and 'map' instances to generate the HTML for
    // the staff.

    var html = [];

    html.push( staffData 
      .filter(employee => employee.getRoll() === 'Manager') 
      .map(manager => generateManager(manager))
      );

      
    html.push( staffData 
      .filter(employee => employee.getRoll() === 'Engineer') 
      .map(engineer => generateEngineer(engineer))
      );

           
    html.push( staffData 
      .filter(employee => employee.getRoll() === 'Intern') 
      .map(intern => generateIntern(intern))
      );

      return html;

 
 };

 ////////////////////////////////////////////////////////////////////////////
 // Function to generate the HTML for a 'manager'
generateManager = (manager) => {
  return `
  <div class="col-4 col-md-3 mb-2 text-light p-3 flex-column border border-primary rounded-lg">
    <h4 class="redwhite">Manager: ${manager.name}</h4>

    <p class="whiteblue">ID: ${manager.id}</p>
    <p class="whiteblue">Email: ${manager.email}</p>
    <p class="whiteblue">Office: ${manager.officeNumber}</p>           
  </div>
`
}

/////////////////////////////////////////////////////////////////////////////
// Function to generate the HTML for an "Engineer"
generateEngineer = (engineer) => {
  return `
  <div class="col-4 col-md-3  mb-2 text-light p-3 flex-column border border-primary rounded-lg">
    <h4 class="redwhite">Engineer: ${engineer.name}</h4>

    <p  class="whiteblue">ID: ${engineer.id}</p>
    <p  class="whiteblue">Email: ${engineer.email}</p>
    <p  class="whiteblue">GitHub: ${engineer.gitHub}</p>
    
  </div>
`
}

//////////////////////////////////////////////////////////////////////////////
// Function to generate the HTML for an "Intern"
generateIntern = (intern) => {
  return `
  <div class="col-4 col-md-3  mb-2 text-light p-3 flex-column border border-primary rounded-lg">
    <h4 class="redwhite">Intern: ${intern.name}</h4>

    <p class="whiteblue">ID: ${intern.id}</p>
    <p class="whiteblue">Email: ${intern.email}</p>
    <p class="whiteblue">School: ${intern.school}</p>
    
  </div>
`
}


//////////////////////////////////////////////////////////////////////////////
// Function to write the 'HTML' file
const writeFile = (fileData) => {

    console.log( "in writeFile" );
    //console.log( "Filedata: " );
    //console.log( fileData );

    // Define the pathname of the 'readme'
    const fileName = "./dist/index.html";

    // Write the file
    fs.writeFile(fileName, fileData, function (err) {

        if (err) {
            return console.log(err);
        };
    });

};


module.exports = {writeFile,
                  prepareFile};