let theInput = document.querySelector('.get-repos input');
let getBtn = document.querySelector('.get-btn');
let reposData = document.querySelector('.show-data');
// 
getBtn.addEventListener('click', getRepos)

function getRepos(){
    if(theInput.value == ''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The Input Can't Be Empty!",
        });
    }
    else{
        //ElzeroWebSchool
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((res) => res.json())

        .then((repositories) => {

            reposData.innerHTML = '';

            // Loop On Repos
            repositories.forEach(repo => {

                //main div
                let mainDiv = document.createElement("div");
                let repoName = document.createTextNode(repo.
                name);
                mainDiv.appendChild(repoName);

                //repo url
                let theUrl = document.createElement('a');
                let theUrlText = document.createTextNode("Visit");

                theUrl.appendChild(theUrlText);

                // Add The Hypertext Reference "href"
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                // Set Attribute Blank
                theUrl.setAttribute('target', '_blank');

                // Append Url Anchor To Main Div
                mainDiv.appendChild(theUrl);


                //create stars
                let starsSpan = document.createElement("span");

                //Stars Count Text
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                // Add Stars Count Text To Stars Span
                starsSpan.appendChild(starsText);

                // Append Stars Count Span To Main Div
                mainDiv.appendChild(starsSpan);

                // Add Class On Main Div
                mainDiv.className = 'repo-box';

                // Append The Main Div To Container
                reposData.appendChild(mainDiv);
            });

        });

    }

}