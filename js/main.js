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
          5,
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
          5,
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
          5,
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
          5,
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
          5,
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
          5,
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
          5,
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
          5,
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
  var zuckModal = document.querySelector("#zuck-modal");
  zuckModal.insertAdjacentHTML(
    "beforeend",
    `<div id="storyBluredBg" style="background-image: url('');"></div>`
  );

  // Every 10 miliseconds check if bg-image is same as curent active image, else change it to that.
  setInterval(() => {
    var storyBluredBg = document.getElementById("storyBluredBg");
    var currentStoryImgElem = document.querySelector(
      " div.story-viewer.viewing > .slides > .item.active > img.media"
    );

    if (currentStoryImgElem != null) {
      var currentStoryImg = currentStoryImgElem.getAttribute("src");
      var storyBluredBgImg = storyBluredBg.style.backgroundImage
        .split('url("')[1]
        .split('")')[0];

      // If storyBluredBgImg not equal to currentStoryImg, if true change bg-image to currentStoryImg
      storyBluredBgImg != currentStoryImg
        ? (storyBluredBg.style.backgroundImage = `url('${currentStoryImg}')`)
        : (storyBluredBg.style.backgroundImage = `url('${currentStoryImg}')`);
    }
  }, 10);
}
addBlurToBg();
