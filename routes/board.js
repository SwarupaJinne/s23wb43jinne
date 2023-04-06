extends layout

block content
  h1= title
  - var image_names = ["shirt1.jpg","shirt2.jpg","shirt3.jpg","shirt4.jpg","shirt5.jpg"]
  - for(let i=0;i<3;i++){
     - let random= Math.floor(Math.random()*5)
     img(src=`/images/${image_names[random]}` alt=`Image No ${random}` height="300px" width="300px")
  - }