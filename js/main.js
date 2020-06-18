function buildItem(
  id,
  type,
  length,
  src,
  preview,
  link,
  linkText,
  seen,
  time,
  sellsAs
) {
  linkText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Amet qui vel alias aliquam molestias ullam, iste minima.
    Debitis quia iste possimus odio ducimus? Voluptas facilis
    maiores harum? Illum, tempora nesciunt.`;

  return {
    id,
    type,
    length,
    src,
    preview,
    link,
    linkText,
    seen,
    time,
  };
}

const stories = new Zuck("stories", {
  backNative: true,
  autoFullScreen: "false",
  skin: "Snapgram",
  avatars: "true",
  list: false,
  cubeEffect: "true",
  localStorage: true,
  stories: [
    {
      id: "cusicon",
      photo: "testImages/me_circle.png",
      name: "@Cusicon",
      link: "",
      lastUpdated: "",
      items: [
        buildItem(
          "1",
          "photo",
          500,
          "testImages/me_stand.jpg",
          "",
          "https://successchukwu.com",
          "",
          false,
          Date.now()
        ),
        buildItem(
          "2",
          "photo",
          500,
          "testImages/me_stand2.jpg",
          "",
          "https://successchukwu.com",
          "",
          false,
          Date.now()
        ),
        buildItem(
          "3",
          "photo",
          500,
          "testImages/me_stand3.jpg",
          "",
          "https://successchukwu.com",
          "",
          false,
          Date.now()
        ),
      ],
    },
    {
      id: "cheaplead",
      photo: "testImages/cheaplead-icon.png",
      name: "@Cheaplead",
      link: "",
      lastUpdated: "",
      items: [
        buildItem(
          "1",
          "photo",
          500,
          "testImages/cheaplead-icon.png",
          "",
          "https://cheaplead.net",
          "",
          false,
          Date.now()
        ),
        buildItem(
          "2",
          "photo",
          500,
          "testImages/cheaplead_white.png",
          "",
          "https://cheaplead.net",
          "",
          false,
          Date.now()
        ),
        buildItem(
          "3",
          "photo",
          500,
          "testImages/cheaplead_by.png",
          "",
          "https://cheaplead.net",
          "",
          false,
          Date.now()
        ),
      ],
    },
    {
      id: "tsd",
      photo: "testImages/new_tsd_logo.png",
      name: "@TSD",
      link: "",
      lastUpdated: "",
      items: [
        buildItem(
          "1",
          "photo",
          500,
          "testImages/wallpaper.png",
          "",
          "https://tsdates.com",
          "",
          false,
          Date.now()
        ),
        buildItem(
          "2",
          "photo",
          500,
          "testImages/WAD-ad2.jpg",
          "",
          "https://tsdates.com",
          "",
          false,
          Date.now()
        ),
      ],
    },
  ],
});

function addBlurToBg() {
  // Created the "story Blured Background"
  document
    .querySelectorAll("#zuck-modal")[0]
    .insertAdjacentHTML(
      "beforeend",
      `<div id="storyBluredBg" style="background-image: url('');"></div>`
    );

  var itemsLink = document.querySelectorAll(`.item-link`);
  itemsLink.forEach((itemLink) => {
    itemLink.ownerDocument.onclick = (e) => {
      var storyBluredBg = document.getElementById("storyBluredBg");
      var currentStoryImg = document
        .querySelector(".slides > .item.active img.media")
        .getAttribute("src");

      storyBluredBg.style.backgroundImage = `url('${currentStoryImg}')`;
    };
  });
}
addBlurToBg();

// function addDescBox(desc) {
//   document
//     .querySelectorAll("#zuck-modal-content .story-viewer .slides .item")
//     .forEach((img) => {
//       img.insertAdjacentHTML(
//         "beforeend",
//         `<center><div class="desc" id="desc"><p>${desc}</p></div></center>`
//       );
//     });
// }

// function changelinkTextToShop(type) {
//   var itemsLink = document.querySelectorAll(`.item-link`);
//   itemsLink.forEach((itemLink) => {
//     itemLink.ownerDocument.onclick = (e) => {
//       var linkHtmls = document.querySelectorAll(".tip");
//       linkHtmls.forEach((linkHtml) => {
//         var icon = document.createElement("i");
//         type != "shop"
//           ? icon.setAttribute("class", "fa fa-user")
//           : icon.setAttribute("class", "fa fa-shop");
//         linkHtml.innerText = `See my ${type}`;
//         linkHtml.prepend(icon);
//       });
//       // addDescBox(
//       //   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet qui vel alias aliquam molestias ullam, iste minima. Debitis quia iste possimus odio ducimus? Voluptas facilis maiores harum? Illum, tempora nesciunt."
//       // );
//     };
//   });
// }

// changelinkTextToShop("item");
