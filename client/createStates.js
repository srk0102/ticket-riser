const fs = require("fs");
const readline = require("readline");

const readlineDada = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function create() {
  readlineDada.question("Enter the State Name: ", (value) => {
    if (value.length) {
        let state=''
        let splitedVal=value.split(',')
        splitedVal.forEach((val)=>{
            state+=`const[${val},set${val[0].toUpperCase()}${val.slice(
                1,
                val.length
              )}]=useState('')\n`
        })
      console.log(state);
      readlineDada.question("Enter Line No(after which line it should be displayed): ", (line) => {
        var data = fs.readFileSync("./src/APP/App.js").toString().split("\n");
        data.splice(line, 0, state);
        var text = data.join("\n");

        fs.writeFile("./src/APP/App.js", text, function (err) {
          if (err) return console.log(err);
        });
        readlineDada.close();
      });
    } else {
      console.log("Please enter the State Name");
      create();
    }
  });
}

async function processLineByLine() {
  const allFileContents = fs.readFileSync("./src/APP/App.js", "utf-8");
  allFileContents.split(/\r?\n/).forEach((line, index) => {
    console.log(`Line from file${index}: ${line}`);
  });
}

// useStateFunction()
// processLineByLine();
create();
