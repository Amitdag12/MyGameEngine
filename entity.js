// JavaScript source code
class entity {
    constructor() {
        //remmber to add update function to all children
        this.x;
        this.name;
        this.y;
        this.width;
        this.height;
        this.dx;
        this.dy;
    }
    set render(image) {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var img = image;
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
}