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

    var roll;
    var emp;
    for( var i = 0; i < staffData.length; i++ ) {

        // Handle the different rolls
        roll = staffData[i].getRoll();

        // Handle the 'manager' roll
        if( roll === 'Manager' ) {
        
          return `
          <div class="col-4 col-md-3 mb-2 text-light p-3 flex-column">
            <h3 class="redwhite">Manager: ${staffData[i].name}</h3>

            <p class="whiteblue">ID: ${staffData[i].id}</p>
            <p class="whiteblue">Email: ${staffData[i].email}</p>
            <p class="whiteblue">Office: ${staffData[i].officeNumber}</p>           
          </div>
        `
        }
             
        // Handle the 'Intern' roll
        if( roll === 'Intern' ) {
        
            return `
            <div class="col-4 col-md-3  mb-2 text-light p-3 flex-column">
              <h3 class="redwhite">Intern: ${staffData[i].name}</h3>
  
              <p class="whiteblue">ID: ${staffData[i].id}</p>
              <p class="whiteblue">Email: ${staffData[i].email}</p>
              <p class="whiteblue">School: ${staffData[i].school}</p>
              
            </div>
          `
        }
                       
        // Handle the 'Engineer' roll
        if( roll === 'Engineer' ) {
        
            return `
            <div class="col-4 col-md-3  mb-2 text-light p-3 flex-column">
              <h3 class="redwhite">Engineer: ${staffData[i].name}</h3>
  
              <p  class="whiteblue">ID: ${staffData[i].id}</p>
              <p  class="whiteblue">Email: ${staffData[i].email}</p>
              <p  class="whiteblue">GitHub: ${staffData[i].gitHub}</p>
              
            </div>
          `
        }
    };
 };


//////////////////////////////////////////////////////////////////////////////
// Function to write the 'HTML' file
const writeFile = (fileData) => {

    console.log( "in writeFile" );
    console.log( "Filedata: " );
    console.log( fileData );

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