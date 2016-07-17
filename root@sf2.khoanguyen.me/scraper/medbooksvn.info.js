const Xray = require("x-ray")
const x = new Xray()

x(
  "http://www.medbooksvn.info/",
  ".post-outer",
  [{
    link: "a.thumbimgx@href",
    title: "a.thumbimgx > img@alt",
    img: "a.thumbimgx > img@src",
    timestamp: "span[title]@title",
    content: x("a.thumbimgx@href", {
      title: "title",
      file: `a[content="FREE DOWNLOAD HERE"]@href`,
      img: "a[imganchor]@href"
    })
  }]
)
(
  (err, obj) => {
    if (err) {
      console.error(err)
    }
    console.log(obj)
  }
)
