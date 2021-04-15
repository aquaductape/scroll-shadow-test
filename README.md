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

## linear-gradient

Frames: 20

Time: 325ms

Rendering: 17ms

Painting: 20ms

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
