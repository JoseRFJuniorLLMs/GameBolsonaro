const bgColor = document.getElementsByClassName("bg-color")
const moon = document.getElementsByClassName("moon")
const sun = document.getElementsByClassName("sun")
const windows = document.getElementsByClassName("windows")
const buildingFace = document.getElementsByClassName("building--face")
const hillFront = document.getElementsByClassName("hill_front")
const hillBack = document.getElementsByClassName("hill_back")
const crack = document.getElementsByClassName("crack")
const walkway = document.getElementsByClassName("walkway")
const trees = document.getElementsByClassName("tree")
const riverBottom = document.getElementsByClassName("river_bottom")
const riverTop = document.getElementsByClassName("river_top")
const buildingRight = document.getElementsByClassName("building--right")
const mountainsLargeFront = document.getElementsByClassName("mountains_large_front")
const mountainsLargeBack = document.getElementsByClassName("mountains_large_back")
const mountainsSmallBack = document.getElementsByClassName("mountains_small_back")
const mountainsSmallFront = document.getElementsByClassName("mountains_small_front")
const night = document.getElementsByClassName("night")


var tl = new TimelineMax({repeat:-1, yoyo:true});

tl.to(bgColor, 10, {backgroundImage:"linear-gradient(to top, #4b6cb7, #000000)"}, "dawn")
tl.to(night, 2, {opacity:0.2}, "dawn")
tl.to(bgColor, 2, {backgroundImage:"linear-gradient(to top, #e55d87, #5fc3e4)"}, "dawn")
tl.to(sun, 5, {delay:1, y:"-200%", ease: Power3.easeNone}, "dawn")
tl.to(windows, 1, {delay:2,fill:"#000"}, "dawn")
tl.to(buildingFace, 3, {fill:"#ecf0f1"}, "dawn")
tl.to(bgColor, 3, {delay:3, backgroundImage:"linear-gradient(to top, #50C9C3, #5fc3e4)"}, "dawn")
tl.to(hillFront, 5, {delay:1, fill:"#2ecc71"}, "dawn")
tl.to(hillBack, 5, {delay:1, fill:"#28b162"}, "dawn")
tl.to(crack, 5, {delay:1, fill:"#28b162"}, "dawn")
tl.to(walkway, 5, {delay:1, fill:"#28b162"}, "dawn")
tl.to(trees, 5, {delay:1, fill:"#098c40"}, "dawn")
tl.to(riverBottom, 5, {delay:1, fill:"#3498db"}, "dawn")
tl.to(riverTop, 5, {delay:1, fill:"#3498db"}, "dawn")
tl.to(buildingRight, 5, {delay:1, fill:"#bdc3c7"}, "dawn")
tl.to(mountainsLargeFront, 5, {delay:1, fill:"#afa5a5"}, "dawn")
tl.to(mountainsLargeBack, 5, {delay:1, fill:"#707273"}, "dawn")
tl.to(mountainsSmallBack, 5, {delay:1, fill:"#707273"}, "dawn")
tl.to(mountainsSmallFront, 5, {delay:1, fill:"#988f8f"}, "dawn")
console.log("duration is: " + tl.duration());

//$("<audio></audio>").attr({
//    'src':'https://s3-us-west-2.amazonaws.com/s.cdpn.io/341817/Screaming_Sun_cut.mp3',
//    'volume':0.4,
//    'autoplay':'false',
//    'loop':'loop'
//}).appendTo("body");
//@IanHazelton