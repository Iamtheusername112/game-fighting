// STEP 1: Pulling our canvas from HTML to Javascript using the DOM mab=nipulation by assigning it to a variable called "canvas"

const canvas = document.querySelector("canvas");

/** STEP2: Next we will select our canvas context and this is what is going to be responsible for drawing shapes and sprites on our game. So to pull in our context, we create a context called "context" and call a method "getContext('2d)" on it. This method simply gets a 2d context. because it is a 2d game. */

const context = canvas.getContext("2d");

// STEP4: Next we are going to be styling our canvas this time not with CSS but with javascript

// STEP5: First we select the width property and assinng a value to it and we would do the same to the height.

canvas.width = 1024;
canvas.height = 576;

// STEP6: Next we would make our canvas our canvas have a default of white background so that we can differenciate it from our actual browser background.

// STEP7: So we would go ahead and select our our canvas context which can be used to draw shapes on screen like we said initially, and once we have our canvas contex, we can begin using canvas API's and thats basically an API method we can to draw a white background so we call context.fillRect() to draw a big rectangle to fill up the entire width and height of the canvas.

// STEP8: Note also that the fillRect() takes 4 arguments where the first 2 arguments represent the X and Y axis

context.fillRect(0, 0, canvas.width, canvas.height);

// STEP9: Next we will start creating the players and enemies using pure rectangles cos a lot of games are actually created that way. And we are going to be using object oriented programmig method and we also start by creating classes.

class Sprite {
  constructor(position) {
    this.position = position;
  }
  // STEP13: The draw method, so whenever the draw method is called, it should tell us what the the player looks like. For now our payer would be repreaented with a rectangle so to do that we call context.fillRect() to create a rectangle.

  draw() {
    context.fillRect(this.position.x);
    //   note that the 'x' is the x position created on the object on STEP12
  }
}

//STEP10:  So now that we have our class and our constructor, we can go ahead to creating a player and enemy so to do that, we are basically going to be creating a new player first.
// Note to create a new object from the class, we use the "new".

const player = new Sprite({
  // STEP11: so we can look inside of our class to see what argument this take and that would be the "position" and this is the position we want associated with our player and also we are putting the positions inside of an object "{}" so: the position could be an object, a string, an array etc but in our case we wanna use an object so:

  x: 0,
  y: 0,
});
console.log(player);

// STEP12: So now we need some sort of way to define what our player actually looks like so we would do that within the our Sprite class, so we go back to the Sprite class above, so there we would create a draw method, note this method could be called anything, we are naming the method "draw" to show that the function would handle drawing our player.

// Continue from step 13 thanks
