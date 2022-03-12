export default function carousel(bestBeaches) {
  //-------- We take the width of ------------
  //-------- the screen --------------------
  let widthPX = window.screen.width;

  //--------- We program the carousel -------
  const d = document;
  const images = d.querySelector(bestBeaches);

  let step = 1;
  let maxScrollLeft = images.scrollWidth - images.clientWidth;
  let interval = null;

  const start = () => {
    interval = setInterval(function () {

      images.scrollLeft = images.scrollLeft + step;
      if (images.scrollLeft === maxScrollLeft) {
        step = step * -1;
      } else if (images.scrollLeft === 0) {
        step = step * -1;
      }
    }, 10);
  };

  const stop = () => {
    clearInterval(interval);
  };

  d.addEventListener("mouseover", (e) => {
    if (
      e.target.matches(`${bestBeaches} img`) ||
      e.target.matches(`${bestBeaches} h3`) ||
      e.target.matches(`${bestBeaches} a`)
    ) {
      stop();
    }
  });

  d.addEventListener("mouseout", (e) => {
    if (
      e.target.matches(`${bestBeaches} img`) ||
      e.target.matches(`${bestBeaches} h3`) ||
      e.target.matches(`${bestBeaches} a`)
    ) {
      if (widthPX >= 800) {
        stop();
        start();
      }
    }
  });

  //------------ We start carousel if --------
  //------------ the width is less than ------
  //------------ or equal to 800 -------------
  if (widthPX >= 800) {
    start();
  }

  //------------ We check that when ---------
  //------------ resizing the screen --------
  //----------- the width remains equal ------
  //----------- to or greater than 800 --------
  window.addEventListener(
    "resize",
    function () {
      let newWidthPX;
      newWidthPX = window.screen.width;
      if (newWidthPX >= 800) {
        // We take the new width dimensions of the carousel
        maxScrollLeft = images.scrollWidth - images.clientWidth;
        stop(); // We clean interval
        start();
      }else{
        stop();
      }
    },
    true
  );
}