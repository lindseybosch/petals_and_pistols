<p align="center">
 <a>Petals & Pistols</a>
</p> 
*****************
![](https://i.imgur.com/wXxWAD2.jpg =300x)

![](https://i.imgur.com/3AQOzEr.jpg =300x)

####Trello 
https://trello.com/b/wFc5D2ea/pedals-and-pistols
* Wireframing
* Models 
* Project Management 


####Technology Used: 
* Javascript
* JQuery
* Node.js
* Angular.js 
* Mongoose
* HTML

___

###Technologies Used

Development | Design | Deployment
------------|------|-------------------
HTML|  | Heroku
Git | Flickity | MongoLab
GitHub | Materialize | 
JavaScript/jQuery | CSS
Node.js | Photoshop
Angular.js |
MongoDB |

___


#####User Model

Parameters|Value|Description|Example|
----------|-----|-----------|-------|
`name`|String|*captured by Google OAuth API*
`email`|String|*captured by Google OAuth API*
`spots`|[spotSchema]|spots embedded into user|see "Spot Model"
`googleId`|String|*captured by Google OAuth API*

  
#####Spot Model

Parameters|Value|Description|Example|
----------|-----|-----------|-------|
`title`|String|name of spot
`description`|String|description of spot
`flickr_url`|String|Flickr url provided by user
`image_url`|String|*the url returned by our API to embed the image from Flickr to a site*
`lat`|Number|*latitude from Flickr API geo-location*
`lng`|Number|*longitude from Flickr API geo-location*
`address`|String|user supplied street address of spot
`zipcode`|String|*zipcode passed from Flickr API geo-location to GeoNames API*
`rating`|Number|users can upvote or downvote a spot (default 0)
`tags`|[tagSchema]|tags embedded into spot for search functionality|see "Tag Model"
 

___

[Trello Board](https://trello.com/b/KkLQVJFb/pixel-spot) (Includes data models, wireframes, and our presentation deck)  

___  

###Development Process



___

###Unsolved Problems/Major Hurdles

- We require a specific url pattern to be able to parse the url for the information we need
- When using geo-location the data doesn't always map exactly back to a specific zipcode.  There's not a one-to-one relationship between lattitude/longitude and zipcodes 
- user input needs to be sanitized
- implement a more robust search feature that matches partial results
- need better error handling. e.g. search breaks when no input is specified

