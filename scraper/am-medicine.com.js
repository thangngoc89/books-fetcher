const Xray = require("x-ray")
const { unescape } = require("lodash")

let i = 1;

const x = new Xray({
  filters: {
    unescape,
    cleanTags: (value) => (value === "Free Medical Books") ? null : value,
  },
})
.delay(200, 600)
.throttle(1, 1000)

x(
  "http://am-medicine.com/",
  "article.post",
  [{
    link: "h2.entry-title > a@href",
    title: "h2.entry-title | unescape",
    tags: [".meta-category > a@html | unescape | cleanTags"],
    content: x("h2.entry-title > a@href", {
      img: "img.lazy@src",
      file: ".mks_toggle_content > a@href"
    })
  }]
)
(
  function (err, obj) {
    if (err) {
      console.error(err)
    }
  }
)
// .paginate("nav#vce-pagination > a@href")
// .write("./results.json")
