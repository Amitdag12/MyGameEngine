// JavaScript source code

class game {
    constructor() {
        this.entityArray = [];
        this.keyPressed = [];//array of all key pressed ibt he last render
        this.entitySprites;//a map of all sprites
        var lastUpdate = Date.now();

        this.startGameLoop = function () {//start the game loop
            var myInterval = setInterval(this.gameLoop, 0);
        }
        this.gameLoop = function () {
            var now = Date.now();
            var dt = now - lastUpdate;
            lastUpdate = now;
            if (dt >= 0.016666) {
                this.update(dt); //modify data which is used to render
            }
            this.render();
        }
        this.update = function () {//updates entitys logic
            entityArray.forEach(function (entity) {
                entity.update();//updates
            })
        };

        this.render = function () {//renders entities to screen
            entityArray.forEach(function (entity) {
                entity.render(entitySprites[entity.name]);
                this.keyPressed = [];//wipe all the keys because they have already been handeled
            })
        };

        this.addListener = document.addEventListener('keypress', function (event) {
            var key = parseInt(event.keyCode);

            keyPressed.push(key);
        }, false);
    };
}