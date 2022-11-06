const sliderMain = document.querySelector(".slider-main");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const sliderWrap = document.querySelector(".slider-wrap")

const twelveLatestBlogs = "https://healthyliving.maleneivy.com/wp-json/wp/v2/posts?per_page=12";


async function fetchBlogs() {

    try {
        const response = await fetch(twelveLatestBlogs);
        const blogPosts = await response.json();

        console.log(blogPosts);

        sliderMain.innerHTML = "";

        getLatestBlogPosts(blogPosts);

    }
    catch (error) { }
}

fetchBlogs();

function getLatestBlogPosts(blogPosts) {

    for (let i = 0; i < blogPosts.length; i++) {
        const content = blogPosts[i].content;
        const date = blogPosts[i].date;

        console.log(content)

        sliderMain.innerHTML += `
        <li class="blog-post-wrapper">
            <div class="latest-blog-post">
                ${content.rendered}
                <div class="blog-card-date">${date}</div>
            </div>
        </li>`
    }

    const blogCards = document.querySelector(".blog-post-wrapper");
    const slideWidth = blogCards.clientWidth;

    nextBtn.addEventListener("click", () => {
        sliderMain.scrollLeft += slideWidth;
    });

    prevBtn.addEventListener("click", () => {
        sliderMain.scrollLeft -= slideWidth;
    });
}

