const specificBlog = document.querySelector(".specific-blog");
const sectionBanner = document.querySelector(".section-banner-h1");
const head = document.querySelector("head");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id)

const specificBlogUrl = "https://healthyliving.maleneivy.com/wp-json/wp/v2/posts/" + id;

specificBlog.innerHTML = "";

async function fetchBlog() {

    try {
        const response = await fetch(specificBlogUrl);
        const json = await response.json();

        createHtml(json);
        console.log(json);

    }
    catch (error) { }
}
fetchBlog();


function createHtml(json) {
    head.innerHTML += `<title>Blog Post for the recipe ${json.title.rendered}</title>
    `

    specificBlog.innerHTML += `
                                <section class = "wp-block-wpzoom-recipe-card-block-recipe-card">  
                                     <div class = "posted-it"><h3>Posted</h3> ${json.date}</div>${json.content.rendered}
                                  </section>`

    sectionBanner.innerHTML += `<h1 class="specific-blog-h1">${json.title.rendered}</h1>`
}