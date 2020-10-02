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

  <div class="col-9 ">
    <div class="row ">
      <div class="container next5Days">
        <div class="row day-panels">
          <div class="col-md-2 mr-1 card daycard">
            <ul id="P1">${staffData[0].name}</ul>
          </div>
        </div>
      </div>
    </div>

  </div>


  </body>
  </html>
  `;

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