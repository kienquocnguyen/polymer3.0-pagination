# Polymer 3.0 Pagination Example

#### Thanks to "Polymer App Toolbox - Starter Kit" demo

In my project i clone this demo to use it as an appereance of this project.
https://github.com/Polymer/polymer-starter-kit

#### WARNING: For better understanding about this project you should have knowledge about Nodejs and Xampp.

## Setup
Before run this project, you should also clone my api project
https://github.com/kienquocnguyen/nodejs-paginationapi

### Install

After you clone "Polymer 3.0 Submit Form Example" as an demo you need to install it with yarn

    yarn install
    
    
## Overview

After install you need to run command yarn start to start the project.

    yarn start

#### In Source Code
![pagination1](https://user-images.githubusercontent.com/33189395/74640413-1c536280-51a2-11ea-86ec-2034542192b7.jpg)

#### In Browser
![pagination2](https://user-images.githubusercontent.com/33189395/74640454-25dcca80-51a2-11ea-8040-d6419cf8973b.jpg)

## How It's Work

#### 1. API
In this project i've used my "Nodejs Pagination API" and this is how the api look.

![pagination3](https://user-images.githubusercontent.com/33189395/74640589-5f153a80-51a2-11ea-8f95-996d65595c6b.jpg)

This is the api for get data with pagination.

![pagination4](https://user-images.githubusercontent.com/33189395/74640680-88ce6180-51a2-11ea-8669-2e7ff9d5261e.jpg)

In this api I've set limit 4 item for each time that we call it which mean it would be 4 movies per page. Moreover, I also set a param name "offset" so later I can use it to skip 4 first item to go to the next page.

![pagination6](https://user-images.githubusercontent.com/33189395/74641809-79e8ae80-51a4-11ea-973b-804d1618386c.jpg)

This is the api for count how many movies to count how many page that I'm gonna display.
Example: 4 moives/1 page || 8 movies/2 pages

![pagination5](https://user-images.githubusercontent.com/33189395/74640903-ee225280-51a2-11ea-84d1-9be2583f308a.jpg)


#### 2. First i created a page name mymovies.js

![pagination7](https://user-images.githubusercontent.com/33189395/74643261-01cfb800-51a7-11ea-9bfa-85234a087b3f.jpg)

#### 3. Then i used the connectedCallback function to fetch api
_connectedCallback: Called when the element is added to a document. Can be called multiple times during the lifetime of an element.
To understand more about how fetch api work. I suggest you to visit my blog about it.
Link: https://mypolymerblog.com/single-post/?post=polymer-3.0-fetch-api

![pagination8](https://user-images.githubusercontent.com/33189395/74643449-4d826180-51a7-11ea-8689-637d0a65c093.jpg)

Since I don't want it skip any movies in the first time display so my api have params = 0
http://localhost:3000/movies/0

![pagination9](https://user-images.githubusercontent.com/33189395/74643874-047edd00-51a8-11ea-96d6-c07d36fdc55d.jpg)

I also fetch another moviescount api to count how many movies in the data.

![pagination10](https://user-images.githubusercontent.com/33189395/74644196-84a54280-51a8-11ea-95f9-44885ff97874.jpg)

#### 4. I used dom-repeat to display all of the movies

![pagination11](https://user-images.githubusercontent.com/33189395/74644572-0f863d00-51a9-11ea-89e9-a318d9e6d230.jpg)

#### 5. Then I also used "paper-pagination" components to build our pagination.

You can learn more about this components in here:
https://www.webcomponents.org/element/@fluidnext-polymer/paper-pagination

I used dom-repeat to display total movies in "total-items" property and set "item-per-page" = 4. In my data I have 10 movies so we will have 3 pages.

![pagination12](https://user-images.githubusercontent.com/33189395/74645070-dc907900-51a9-11ea-9399-672c0c72f18a.jpg)

![pagination13](https://user-images.githubusercontent.com/33189395/74645220-16617f80-51aa-11ea-8ec6-c97fe29a2d56.jpg)

#### 6. I created an observer to get current page value every time we change the page.

![pagination14](https://user-images.githubusercontent.com/33189395/74650130-9b9d6200-51b3-11ea-9656-1ba57ffb8640.jpg)

#### 7. In client page I want it to have a params for the user to know which page that they are standing.
So I have to use components app-location to change the url every time user switch their page.

![pagination15](https://user-images.githubusercontent.com/33189395/74645950-7278d380-51ab-11ea-95dc-b60fb036aac0.jpg)

#### 8. Set a variable this.page = 0 in constructor as a static variable and a properties querryParams

![pagination16](https://user-images.githubusercontent.com/33189395/74646297-224e4100-51ac-11ea-912b-dac20be06160.jpg)

#### 9. Define all of variable necessary in _currentPageChange

_ location = this.$.location (elements app-location with id location)\
_ this.page = c (c is the current page value)\
_ params = this.queryParams (is the properties queryParams)

![pagination17](https://user-images.githubusercontent.com/33189395/74646714-eff11380-51ac-11ea-8335-e366d13d95f8.jpg)

#### 10. Functional

The first "if" is if this.page (current page) not euqals to 1.\
_ change the location (url) from view1 to view1/this.page\
_ params will use 2 to the power of this.page\
_ set the params in the api so it can offset how many item that we want.\
Example: if current page is number 2 then params would be 4 .\
So if current page is 2 I will skip 4 movies and move to the next 4 movies.\
And change the location (url) from view1 to view1/2

![pagination18](https://user-images.githubusercontent.com/33189395/74646908-49f1d900-51ad-11ea-8e3e-f566ddccb446.jpg)

Then "else" (current page is 1) I don't need to skip any movies so params would be zero and the location (url) would change to the view1/1

![pagination19](https://user-images.githubusercontent.com/33189395/74650067-73adfe80-51b3-11ea-8ddd-009fc2300430.jpg)


## Final Results

![submit-post22](https://user-images.githubusercontent.com/33189395/74583384-28e88700-4ff9-11ea-99c9-691c0c99d2f5.jpg)

![submit-post23](https://user-images.githubusercontent.com/33189395/74583386-2b4ae100-4ff9-11ea-9bf0-9f9446d5db19.jpg)


### Hope you enjoy my work :D

