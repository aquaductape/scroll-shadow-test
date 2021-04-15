const radioEls = document.querySelectorAll('input[name="css"]');
const tableEl = document.querySelector(".table");
const contentContainerEl = document.querySelector(".content-container");
const headerContainerEl = document.querySelector(".header-container");
const scrollBtn = document.querySelector("button");
const countEl = document.querySelector(".count");

const headersList = [];
const contentList = [];

const headers = [
  "Lorem, ipsum.",
  "Lorem, ipsum dolor.",
  "Lorem ipsum dolor sit amet.",
  "Lorem.",
];
const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facilis nisi ab. Fugiat quo rerum impedit nihil, blanditiis dolores iusto perspiciatis eum numquam error cupiditate voluptas maxime, nisi fuga amet. Adipisci ab explicabo nam, fugiat non incidunt tempora illo exercitationem similique distinctio voluptatum recusandae mollitia enim tempore porro vel, perspiciatis ea nulla omnis. Nisi optio alias molestias ipsum, consequuntur placeat architecto, laboriosam, iste voluptas quo neque accusantium dolores ut ex ipsam quam fugit omnis eos. Eligendi culpa, reiciendis sit nobis laboriosam quas itaque. Ad, in, architecto cum optio facere minus nisi eos eaque nemo eveniet ipsam. Rerum aut sit officiis.";

for (let i = 0; i < 50; i++) {
  headersList.push(...headers);
}

for (let i = 0; i < headersList.length; i++) {
  contentList.push(content);
}

countEl.textContent = contentList.length;

headerContainerEl.innerHTML = headersList
  .map(
    (header) => `
      <div class="header">
        <div class="header-content">${header}</div>
        <div class="shadow-container">
          <div class="shadow box-shadow"></div>
        </div>
      </div>
`
  )
  .join("");

contentContainerEl.innerHTML = contentList
  .map(
    (content) => `
      <div class="content">${content}</div>
`
  )
  .join("");

radioEls[0].checked = true;

radioEls.forEach((radioEl) => {
  radioEl.addEventListener("change", (e) => {
    const shadowEls = document.querySelectorAll(".shadow");
    const value = e.target.value;

    shadowEls.forEach((shadowEl) => {
      shadowEl.className = `shadow ${value}`;
    });
  });
});

scrollBtn.addEventListener("click", () => {
  tableEl.scrollLeft = 0;
  // reflow
  document.body.clientWidth;
  tableEl.scrollTo({ left: 2000, behavior: "smooth" });
});
