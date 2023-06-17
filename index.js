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
  // Note that we are wrapping the podition and velocity in one curly bracket to remember the order in future. so wrapping them round the curly bracket means the order does not matter anymore. So to that effect we would go down to the sprite instantiation and refactor it as well with the curly brackets and this is going to happen also because we are going to be adding the velocity object/property on the sprite instance down below.
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;

    // note that we are adding the height property according to STEP20's specification, and we are setting it to the static value '150' which we used on the draw() method, line 42. and so then we would swap the 150 0n line 42 to this.height.
    this.height = 150;
  }

  // ---------------------------------------------
  // STEP13: The draw method, so whenever the draw method is called, it should tell us what the the player looks like. For now our payer would be repreaented with a rectangle so to do that we call context.fillRect() to create a rectangle.

  draw() {
    // Fill the rectangle/sprite with a red color
    context.fillStyle = "red";

    // note that this.height was initially set to 150 and was replced with this.height following STEP20's specification.
    context.fillRect(this.position.xAxis, this.position.yAxis, 50, this.height);
    //   note that the 'x' is the x position created on the object on STEP12. 50 and 150 are the witdth and height of the sprite/ rectngle that we are drawing.
    // So now, we need some type of color associated with our drawn sprite/ rectangle to differentiate it from the black canvas background. Note that we need to write the code for the color "context.fillStyle = 'red' " before the code with the positions to make sure we are filling the rectangle with a red color.
  }

  // STEP18:Whenever we have things moving around, its usually good We create a new or additional method/function in our Sprite class called update(), so when we want properties updated to beging to move across the screen,we call it inside of the update method

  update() {
    // so when we call the update, the first thing we wanna do is to also call the call the draw method.
    this.draw();
    //  And for our player and enemy to fall, we need to go ahead and select their positions
    this.position.yAxis += this.velocity.yAxis;
    // So we are adding 10 to is because we are saying over time our position is going to have a 10px added onto it for each frame we loop over, but in order to make this takes effect, we need to call the update within our animationLoop on STEP16 and also note that the value was set to this.velocity.yAxis following STEP19.

    // so we are gonna be writing an if statement from STEP20
    // and also note that this.height is the distance or height from the bottom of our rectangle to the bottom of our screen or web page.

    if (
      this.position.yAxis + this.height + this.velocity.yAxis >=
      canvas.height
    ) {
      this.velocity.yAxis = 0;
      //  this.velocity.yAxis = 0, would stop our obkect from moving downwards outside of the screen.
    }
  }
}

//STEP10:  So now that we have our class and our constructor, we can go ahead to creating a player and enemy so to do that, we are basically going to be creating a new player first.
// Note to create a new object from the class, we use the "new".

const player = new Sprite({
  position: {
    // STEP11: so we can look inside of our class to see what argument this take and that would be the "position" and this is the position we want associated with our player and also we are putting the positions inside of an object "{}" so: the position could be an object, a string, an array etc but in our case we wanna use an object so:

    xAxis: 0,
    yAxis: 0,
  },
  // The velocity x and y at Zero means that our objects are not going to be moving by default. We go ahead and do the same for the enemy
  velocity: {
    xAxis: 0,
    // note that we changed the yAxis of the player from 0 to 10 just right after executing STEP19.
    yAxis: 10,
  },
});
// console.log(player);

// STEP12: So now we need some sort of way to define what our player actually looks like so we would do that within the our Sprite class, so we go back to the Sprite class above, so there we would create a draw method, note this method could be called anything, we are naming the method "draw" to show that the function would handle drawing our player.

// STEP14: So now we need to call our player draw method down here "player.draw()", Remember that "const player" was the new player we created out of the Sprite class, so now we call it together with the draw method we created, the draw was simple where we drew our rectangle/sprite/player.

// player.draw();
// the player would now be called inside of the animationLoop after STEP18

// STEP15: Now that we have our player, lets create our enemy just the same way we created our player, this time, we want our enemy to be infront of our player so that means we would have to change the x and yAxis values to achieve that.

const enemy = new Sprite({
  position: {
    // STEP11: so we can look inside of our class to see what argument this take and that would be the "position" and this is the position we want associated with our player and also we are putting the positions inside of an object "{}" so: the position could be an object, a string, an array etc but in our case we wanna use an object so:

    xAxis: 400,
    yAxis: 100,
  },
  // The velocity x and y at Zero means that our objects are not going to be moving by default. We go ahead and do the same for the enemy
  velocity: {
    xAxis: 0,
    yAxis: 0,
  },
});
//  so we call the enemy below,

// enemy.draw();
// the enemy would now be called inside of the animationLoop after STEP18

// STEP16: So in order to get the objects moving, we need to create some sort of animation loop

// lets create a function called animation loop

function animationLoop() {
  // now we would call window.animationFrame(), this just means or asks, which function do i want to loop over and over(infinite loop), and now the function we want to keep running in the  loop is the animationLoop function, we call it inside of the window.animationFrame(animationLoop)

  window.requestAnimationFrame(animationLoop);
  // console.log("go");

  // These below (player.update(); and enemy.update(); ) are being called inside of the animationLoop after STEP18 but before we actually call them we need to clear the long rectacles on our screen, that means resizing our ojects by cutting them to the size of rectangles that we want. so: this is achieved by calling the fillRect and passing 4 arguments the zero positions and the canvas width and height respectively. and also we need to give it again the black canvas background of black.
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.update();
  // Notice that here we never called player.draw() because remember update is still calling this.draw on line 48, STEP18.
  enemy.update();
}
animationLoop();

// STEP17:
// Since we know that our player and enemy are going to be moving objects, we are going to add velocity property property unto our Sprite, do this with canvas anytime you have objects that are gonna be moving on screen.
// The velocity is gonna determine in which direction the/ each objects are going to be moving when they are inside an animation loop. so lets go ahead and add a velocity and gravity to make sure that our player and enemy fall to the bottom of the screen and they stop when the hit the bottpm of the screen.
// So now we are going to alter our sprite position so that our objects begin to move up and down the screen over time and they are going to be affected by gravity so we go ahead and add a new property to the sprite class called this.velocity.

// STEP19: So after following all STEP18 steps, you would discover that our rectangles are falling off the screen, so we need to correct that by getting them to stop right at the bottom of the screen by changing the static value 10 on the update() method and equate it to the velocity that we are actually passing through for both our player and our enemy sprite because if we want our sprites to stop moving, we gonna have to set our velocity equal to zero at some point, so what we are gong to do is, instead of addint 10 to this.position.yAxis, we will add this.velocity.yAxis so that means for our position on the yAxis, we are adding our velocity on the yAxis to it. #SO LETS GO NOW TO STEP18, LINE 50 AND EXECUTE THAT!!

// STEP20: After STEP19 which was executed on the update method, we would also write in there an if statement that says, if this.position.yAxis [which would go ahead and give us the top of the sprites or the rectangle in form of our objects] + this.height [so now lets quickly go and add a height property on our sprite cos we dont have one yet]

// continue from STEP21---- setting the gravity, video time 26mins:18secs
