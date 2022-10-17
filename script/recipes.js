const recipes = document.querySelector(".recipes");

const baseUrl = "https://healthyliving.maleneivy.com/wp-json/wp/v2/posts";

async function fetchRecipes() {

    try {
        const response = await fetch(baseUrl);
        const blogPosts = await response.json();

        console.log(blogPosts);

        recipes.innerHTML = "";

        createHtml(blogPosts);

    }
    catch (error) { }
}

fetchRecipes();

function createHtml(blogPosts) {

    //console.log(blogPosts[0].content);

    for (let i = 0; i < blogPosts.length; i++) {
        const content = blogPosts[i].content;
        const date = blogPosts[i].date;

        console.log(content);
        // console.log(content.rendered);

        recipes.innerHTML += `
                           <section class = "post-name"><h2>Blog Post</h2></header>
                           <section class = "wp-block-wpzoom-recipe-card-block-recipe-card">  <div class = "posted-it"><h3>Posted</h3> ${date}</div>${content.rendered} 
                           </section>`



    }

}