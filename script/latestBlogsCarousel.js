const sliderMain = document.querySelector(".slider-main");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const sliderWrap = document.querySelector(".slider-wrap");


const twelveLatestBlogs = "https://healthyliving.maleneivy.com/wp-json/wp/v2/posts?per_page=12";


async function fetchBlogs() {

    try {
        const response = await fetch(twelveLatestBlogs);
        const blogPosts = await response.json();

        sliderMain.innerHTML = "";

        getLatestBlogPosts(blogPosts);

    }
    catch (error) { }
}

fetchBlogs();

function getLatestBlogPosts(blogPosts) {

    for (let i = 0; i < blogPosts.length; i++) {
        const content = blogPosts[i].content;

        let dateString = blogPosts[i].date;
        let newDate = new Date(dateString);

        let dateOnBlog = `Posted: ${newDate.toDateString()}`

        sliderMain.innerHTML += `
        
        <li class="blog-post-wrapper">
        <div class="latest-blog-post">
        <a href="specificBlog.html?id=${blogPosts[i].id}">
                ${content.rendered}
                <div class="blog-card-date">${dateOnBlog}</div></a>
        </li>
   
        `
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

