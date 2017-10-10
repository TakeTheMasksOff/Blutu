var nearables;
var activeStickersIndexes = [];
var divisionCount = 0;             //configuration of screen division
var allowedStickersIndexes;
var divisonPositions;

/** 
* Reads JSON and determines how many screen divisions there will be or shows "Welcome Page"
* @param {string} jsonString - string passed from "reciever"
*/
function ProcessJson(jsonString) {
  nearables = JSON.parse(jsonString);

  var activeStickersCount = HowManyActiveStickers();

  if (activeStickersCount == 1) {
    divisionCount = 1;
    FormDivision();
    // } else if (activeStickersCount >= 4) {
    //   HideWelcomePage();
    //   FormQuadDivision();
  } else if (activeStickersCount >= 2) {
    divisionCount = 2;
    FormDivision();
  } else if (IsTimeForWelcomePage()) {
    console.log("time for welcome Page");
    ShowWelcomePage();
  }
}

/**
 * Determines if it is time to show "Welcome Page"
 * @return {boolean} - "false" if all stickers' Current Motion State Duration < time determined in Cloud Data
 */
function IsTimeForWelcomePage() {
  for (var i = 0; i < nearables.length; i++) {
    if (nearables[i].currentMotionStateDuration < cloudData.welcomePageTime) {
      return false;
    }
    return true;
  }
}

/**
 * Fills array of active stickers
 * @returns {number} - active stickers count
 */
function HowManyActiveStickers() {
  activeStickersIndexes.length = 0;

  for (var i = 0; i < nearables.length; i++) {
    if (nearables[i].currentMotionStateDuration <= cloudData.stickersAreActive)
      activeStickersIndexes.push(i);
  }
  return activeStickersIndexes.length;
}

/*
  Array property. Search for the index of element. Argument - function-comparator
  Returns first found element. Otherwise -1
 */
Object.defineProperty(Array.prototype, 'findIndex', {
  value: function (predicate) {
    // 1. Let O be ? ToObject(this value).
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let len be ? ToLength(? Get(O, "length")).
    var len = o.length >>> 0;

    // 3. If IsCallable(predicate) is false, throw a TypeError exception.
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }

    // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
    var thisArg = arguments[1];

    // 5. Let k be 0.
    var k = 0;

    // 6. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ! ToString(k).
      // b. Let kValue be ? Get(O, Pk).
      // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
      // d. If testResult is true, return k.
      var kValue = o[k];
      if (predicate.call(thisArg, kValue, k, o)) {
        return k;
      }
      // e. Increase k by 1.
      k++;
    }

    // 7. Return -1.
    return -1;
  }
});

/**
 * checks if sticker is listed on Cloud Data
 * @param {number} k - index of the nearable from "reciever"
 * @returns {number} - index of the sticker from Cloud Data or -1 if it's absent there
 */
function IsAllowed(k) {
  return cloudData.stickersParametrs.findIndex(function (element) {
    return element.stickerId == nearables[k].Id;
  });
}

/**
 * Creates array of indexes and fills it with indexes of active allowed stickers
 * @returns {Array} - active allowed stickers indexes
 */
function FindAllowedStickersDataIndexes() {
  var allowed = [];
  for (var i = 0; i < activeStickersIndexes.length; i++)
    allowed.push(IsAllowed(activeStickersIndexes[i]));

  return allowed;
}

/**
 * Calls defined method (behavior for certain orientation) of the sticker
 * @param {object} nearable - sticker which need to be processed
 * @param {number} indexInCloudData - index of the sticker in CloudData
 */
function ProcessSticker(nearable, indexInCloudData) {
  var stickerParameters = cloudData.stickersParametrs[indexInCloudData];
  if (stickerParameters.hasOwnProperty(nearable.orientation)) {
    if (nearable.currentMotionStateDuration <= stickerParameters[nearable.orientation].currentLess) {
      stickerParameters[nearable.orientation].cLCall(divisonPositions.findIndex(function (element) {
        return element == indexInCloudData;
      }));
    }
  }
}

function DivisionPositions(allowedStickersIndexes) {
  var positions = [];
  for (var el in allowedStickersIndexes)
    if (el != -1)
      positions.push(el);
  if (positions.length > 0)
    positions.sort(function compareNumbers(a, b) {
      return a - b;
    });
  return positions;
}

/**
 * Decides what to do with stickers from the "reciever"
 */
function FormDivision() {
  var shownStickers = 0;
  allowedStickersIndexes = FindAllowedStickersDataIndexes();
  divisonPositions = [0];
  if (divisionCount > 1)
    divisonPositions = DivisionPositions(allowedStickersIndexes);

  for (var i = 0; shownStickers < divisionCount && i < allowedStickersIndexes.length && i < activeStickersIndexes.length; i++ , shownStickers++) {
    if (allowedStickersIndexes[i] != -1) {
      ProcessSticker(nearables[activeStickersIndexes[i]], allowedStickersIndexes[i]);
    } else {
      //sticker doesn't listed in cloudData
      console.log("Sticker " + nearables[i].Id + "doesn't belongs to you");
    }
  }
  if (shownStickers < activeStickersIndexes.length) {
    //show toast for users if their stickers aren't going to be displayed
    console.log("There are unshown stickers");
  }
}

function ShowWelcomePage() {
  if (document.getElementById("WelcomePage").style.display != "block") {
    console.log("show Welcome Video");
    var vid = document.getElementById("sVideo");
    vid.pause();
    document.getElementById("sVideo").style.display = "none";
    document.getElementById("doubleDivision").style.display = "none";
    document.getElementById("leftSticker").style.display = "none";
    document.getElementById("rightSticker").style.display = "none";
    document.getElementById("singleDivision").style.display = "none";
    document.getElementById("WelcomePage").style.display = "block";
    var vidWelcome = document.getElementById("WelcomeVideo");
    vidWelcome.load();
    vidWelcome.play();
  }
  else {
    console.log("miss Welcome Video");
  }
}

function ShowSingleDivision() {
  if ((document.getElementById("singleDivision").style.display != "block") ||
    (document.getElementById("sVideo").style.display == "block")) {
    console.log("show Single Division");
    document.getElementById("WelcomePage").style.display = "none";
    document.getElementById("doubleDivision").style.display = "none";
    document.getElementById("leftSticker").style.display = "none";
    document.getElementById("rightSticker").style.display = "none";
    var vidWelcome = document.getElementById("WelcomeVideo");
    vidWelcome.pause();
    var vid = document.getElementById("sVideo");
    vid.pause();
    document.getElementById("sVideo").style.display = "none";

    document.getElementById("textPart").style.display = "flex";
    document.getElementById("interactivePart").style.display = "flex";
    document.getElementById("singleDivision").style.display = "block";
  }
  else {
    console.log("miss Single Division");
  }
}

function ShowDoubleDivision() {
  if (document.getElementById("doubleDivision").style.display != "block") {
    console.log("show Double division");
    var vidWelcome = document.getElementById("WelcomeVideo");
    vidWelcome.pause();
    var vid = document.getElementById("sVideo");
    vid.pause();
    document.getElementById("sVideo").style.display = "none";
    document.getElementById("WelcomePage").style.display = "none";
    document.getElementById("singleDivision").style.display = "none";
    document.getElementById("doubleDivision").style.display = "block";
    document.getElementById("leftSticker").style.display = "flex";
    document.getElementById("rightSticker").style.display = "flex";
  }
  else {
    console.log("miss Double division");
  }
}

function ShowSVIDEO() {
  if (document.getElementById("sVideo").style.display != "block") {
    console.log("show sVideo");
    var vidWelcome = document.getElementById("WelcomeVideo");
    vidWelcome.pause();

    document.getElementById("leftSticker").style.display = "none";
    document.getElementById("rightSticker").style.display = "none";
    document.getElementById("WelcomePage").style.display = "none";
    document.getElementById("doubleDivision").style.display = "none";
    document.getElementById("singleDivision").style.display = "block";
    document.getElementById("textPart").style.display = "none";
    document.getElementById("interactivePart").style.display = "none";
    document.getElementById("sVideo").style.display = "block";

    var vid = document.getElementById("sVideo");
    vid.play();
  }
  else {
    console.log("miss sVideo");
  }
}

function ShowLeftIcons() {
  document.getElementById("lIcon1").style.display = "block";
  document.getElementById("lIcon2").style.display = "block";
  document.getElementById("lIcon3").style.display = "block";
}

function ShowRightIcons() {
  document.getElementById("rIcon1").style.display = "block";
  document.getElementById("rIcon2").style.display = "block";
  document.getElementById("rIcon3").style.display = "block";
}

function ShowIcons() {
  document.getElementById("icon1").style.display = "block";
  document.getElementById("icon2").style.display = "block";
  document.getElementById("icon3").style.display = "block";
}

// function HideWelcomePage() {
//   document.getElementById("WelcomePage").style.display = "none";
// }

// function Show2VIDEOS() {
//   document.getElementById("WelcomePage").style.display = "none";
//   document.getElementById("singleDivision").style.display = "none";
//   document.getElementById("doubleDivision").style.display = "block";

//   document.getElementById("leftSticker").style.display = "none";
//   document.getElementById("rightSticker").style.display = "none";

//   document.getElementById("lVideo").style.display = "block";
//   document.getElementById("rVideo").style.display = "block";
//   var vid1 = document.getElementById("lVideo");
//   var vid2 = document.getElementById("rVideo");
//   vid1.play();
//   vid2.play();
// }