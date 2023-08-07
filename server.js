let env = require("./env.json");
let axios = require("axios");

axios.get("https://api.github.com/search/repositories?q=language:python+stars:%3E50000&sort=stars&order=asc", {
    headers: {
      Authorization: 'Bearer ' + env["token"]
    }
   }).then(response => {
    if (response.status >= 400) {
        console.log("Bad request");
    } else {
        for (let repo of response.data.items.slice(0, 5)) {
            console.log(`repo["full_name"] (${repo["stargazers_count"]} stars)`);
        }
    }
}).catch(error => {
    console.log(error);
})
