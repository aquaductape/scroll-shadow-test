Testing scrolling performance. Which is the best css shadow when applied on sticky headers in a scroll container

Inspired by [this airbnb article](https://medium.com/airbnb-engineering/css-box-shadow-can-slow-down-scrolling-d8ea47ec6867)

Tested on Chrome

# Test Result

Table has 200 rows, so there's 200 els that have shadows

## box-shadow

Frames: 20

Time: 334ms

Rendering: 37ms

Painting: 23ms

### Update 8/14/2021, 8:25:24 PM
This time I clicked the smooth scroll button ten times in a row
![2021-08-14_20-21_1](https://user-images.githubusercontent.com/29286430/129465956-2814d7ef-b0dc-447a-9ab3-51e99f43199a.png)


## linear-gradient

Frames: 20

Time: 325ms

Rendering: 17ms

Painting: 20ms

### Update 8/14/2021, 8:25:24 PM
This time I clicked the smooth scroll button ten times in a row
![2021-08-14_20-21](https://user-images.githubusercontent.com/29286430/129466006-a3bbe7db-7b9b-4779-bc91-e8259b0b5987.png)


## blur

Frames 20

Time: 329ms

Rendering: 46ms

Painting: 21ms

## drop-shadow

Frames 20

Time: 335ms

Rendering: 41ms

Painting: 20ms
