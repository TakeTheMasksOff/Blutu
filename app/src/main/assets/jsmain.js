var myNearable;

function ProcessJson(jsonString) {
  myNearable = JSON.parse(jsonString);
  var i;
  for (i = 0; i < myNearable.length; i++) {
    if (myNearable[i].Id == "881908feb12d0b14") {
      if (myNearable[i].currentMotionStateDuration < 8) {
        if (myNearable[i].orientation == "VERTICAL") {
          if ('index.html' != getNameOfPage()) {
            document.location.href = "index.html";

          }

        }
      } else if (myNearable[i].currentMotionStateDuration > 15) {
        if ('DiscoveryPage.html' != getNameOfPage()) {
          document.location.href = "DiscoveryPage.html";
        }
      }
    }
  }
}

function getNameOfPage() {

  var path = document.location.pathname;
  var page = path.split("/").pop();

  return page;
}
