const specificBlog = document.querySelector(".specific-blog");
const sectionBanner = document.querySelector(".section-banner-h1");
const head = document.querySelector("head");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

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

    setBreadcrumbs([
        { path: "/", title: "Home" },
        { path: "/blog.html", title: "Blog" },
        { path: "/specificBlog.html", title: json.title.rendered }
    ])

    head.innerHTML += `< title > Blog Post for the recipe ${json.title.rendered}</title > `

    specificBlog.innerHTML += `
                                <section class = "wp-block-wpzoom-recipe-card-block-recipe-card">  
                                     ${json.content.rendered}
                                  </section>
                                  <div class="posted-it">${json.date}</div>`;

    sectionBanner.innerHTML += `<h1 class="specific-blog-h1">${json.title.rendered}</h1>`;

    const body = document.querySelector("body");
    const img = document.querySelector(".wpzoom-recipe-card-image");
    body.innerHTML += `
        <div class="modal-background">

            <span class="close-modal">&times;</span>

            <img class="modal-image" id=${img.id} src=${img.src} alt=${img.alt};>

            <div id="caption">${img.alt}</div>

        </div>
    `;

    const modalBackground = document.querySelector(".modal-background");

    const blogImage = document.querySelector("figure");
    blogImage.onclick = function () {
        modalBackground.style.display = "block";
    }

    const closeModalBtn = document.querySelector(".close-modal");

    closeModalBtn.onclick = function () {
        modalBackground.style.display = "none";
    }
}