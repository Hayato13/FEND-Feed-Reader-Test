/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a url defined and that the url is 
         * not empty.
         */
        
        it('urls are defined', function() {
            for(let x = 0; x < allFeeds.length; x++){
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);
            };
        });

        /* Test that loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is 
         * not empty.
         */
        it('names are defined', function(){
            for(let x = 0; x < allFeeds.length; x++){
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name.length).not.toBe(0);
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('Menu', function(){
        const body = document.querySelector('.menu-hidden');
        const menuIcon = document.querySelector('.menu-icon-link');
        

        /* Test that ensures the menu element is
         * hidden by default.
         */ 
        it('menu is hidden by default', function(){
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        /* Test that ensures the menu element changes
         * visiblity when clicked.
         */ 
        it('menu changes visibility when clicked', function(){
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        })
    });

        /* Test that ensures when loadFeed is called, there  
         * is at least a single .entry element within the .feed container.
         */
    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it('should have atleast single entry', function(done){    
            const feed = document.querySelectorAll('.feed .entry');
            expect(feed[0].classList.contains('entry')).toBe(true);
            done();
        });
    });

        /* Test that ensures when loadFeed is called,  
         * the content actually changes.
         */
    describe('New Feed Selection', function(){
        let firstLoad;
        let secondLoad;

        beforeEach(function(done){
            loadFeed(0, function(){
                firstLoad = document.querySelector('.feed').innerHTML;
                loadFeed(1, function(){
                    secondLoad = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        it('feed should change on load', function(done){
            expect(firstLoad).not.toBe(secondLoad);
            done();
        })

    });
}());
