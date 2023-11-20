/* global Phaser */
import Phaser from 'phaser';

import titleScene from './titleScene.js';
import story1Scene from './story1Scene.js';
import story2Scene from './story2Scene.js';
import story3Scene from './story3Scene.js';
import story4Scene from './story4Scene.js';
import story5Scene from './story5Scene.js';
import endlessScene from './endlessScene.js';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  backgroundColor: "#66B193", // Use https://www.google.com/search?q=color+picker

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 150 },
      debug: false,
    },
  },
  scene: [
    titleScene,
    story1Scene,
    story2Scene,
    story3Scene,
    story4Scene,
    story5Scene,
    endlessScene,
  ],
};

var game = new Phaser.Game(config);


/*var title = new titleScene();
var level1 = new story1Scene();
var level2 = new story2Scene();
var level3 = new story3Scene();
var level4 = new story4Scene();
var level5 = new story5Scene();
var endlessMode = new endlessScene();*/

//load music/effects
/*function preload() {
  //assets for home page
  //assets for levels
  this.load.image(
    "scenebackground","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/scenebackground.png?v=1700008038831"
  );
  this.load.image(
    "platform","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/counterplatform.png?v=1700004383765"
  );
  this.load.image(
    "star",
    "https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/star.png?v=1700004050288"
  );
  //falling items
  this.load.image(
    "boba",
    "https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/boba.png?v=1700007443938"
  );
  this.load.image(
    "chaibag","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/chaibag.png?v=1700086653460"
  );
  this.load.image(
    "matchabag","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/matchabag.png?v=1700003967602"
  );
  this.load.image(
    "strawberrybag","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/strawberrybag.png?v=1700003967735"
  );
  this.load.image(
    "fakechaibag","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/fakechaibag.png?v=1700086670207"
  );
  this.load.image(
    "fakematchabag","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/fakematchabag.png?v=1700003968167"
  );
  this.load.image(
    "fakestrawberrybag","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/fakestrawberrybag.png?v=1700003967888"
  );
  this.load.image(
    "strawberry","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/strawberry.png?v=1700006768167"
  );
  this.load.image(
    "whippedcream","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/whippedcream.png?v=1700006772758"
  );
  this.load.image(
    "brownsugarsyrup","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/brownsugarsyrup.png?v=1700006770356"
  );
  this.load.image(
    "brocolli","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/brocolli.png?v=1700007451156"
  );
  this.load.image(
    "pepper","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/pepper.png?v=1700007448633"
  );
  this.load.image(
    "scoremulti","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/scoremulti.png?v=1700007446078"
  );
  //sprites
  this.load.spritesheet(
    "bobacup","https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/spritesheet.png?v=1700087981913", {
      frameWidth: 252, 
      frameHeight: 357}
  );
  //music/sound effects
  this.load.audio("backgroundmusic", ["https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/Boba_Blitz_Music.mp3?v=1700092970419"]);
  // Load assets here before the game starts.
  this.load.audio("ingredientcollect",["https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/ingredient.mp3?v=1700103006631"]);
  this.load.audio("modebutton",["https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/game-start.mp3?v=1700103026450"]);
  this.load.audio("multiplier",["https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/scoremulti.mp3?v=1700103037929"]);
  this.load.audio("obstacle",["https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/obstacle.mp3?v=1700103423430"]);
}

var platforms;
var player;
var stars;
var cursors;
var playState = {};


// these are the vars for the score
var score = 0;
var scoreText;

playState.init = function (wlevel) {
    wlevel = wlevel;
};


function create() {
  // create the scoring stuff
  // Create level and characters. This runs only once.
  this.add.image(400, 300, "background");
  platforms = this.physics.add.staticGroup();
  platforms
    .create(400, 568, "ground")
    .setScale(2)
    .refreshBody();
  player = this.physics.add.sprite(400, 350, "cup");
  player.setScale(0.5);
  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, platforms);
  cursors = this.input.keyboard.createCursorKeys();
  scoreText = 
    this.add.text(16, 16, "score: 0", {
    fontSize: "32px",
    fill: "#111"
  });
  
  stars = this.add.group({
    key: "star", // image key
    repeat: 4, // 1 + repeat 2 = 3 total
    setXY: { x: 325, y: 35, stepX: 50 }, // initial position and step
    setScale: { x: 0.06 } // image scale
  });


  this.anims.create({
    key: "left",
    frames: this.anims.generateFrameNumbers("cup", { start: 0, end: 1 }),
    frameRate: 10,
    repeat: -1
  });

  // 5) create an animation called "right" which uses frames 5 to 8
  this.anims.create({
    key: "right",
    frames: this.anims.generateFrameNumbers("cup", { start: 3, end: 4 }),
    frameRate: 10,
    repeat: -1
  });

  // 6) create an animation called "turn" which uses frame 4 only
  this.anims.create({
    key: "turn",
    frames: [{ key: "cup", frame: 2 }],
    frameRate: 20
  });
  this.anims.create({
     key: "blue",
     frames: [{ key: "colorcup", frame: 0 }],
   });
   this.anims.create({
     key: "brown",
     frames: [{ key: "colorcup", frame: 1 }],
   });
   this.anims.create({
     key: "green",
     frames: [{ key: "colorcup", frame: 2 }],
   });
   this.anims.create({
     key: "pink",
     frames: [{ key: "colorcup", frame: 3 }],
   });
   this.anims.create({
     key: "purple",
     frames: [{ key: "colorcup", frame: 4 }],
   });
   this.anims.create({
     key: "blueboba",
     frames: [{ key: "bobacup", frame: 0 }],
     frameRate: 20 
   });
   this.anims.create({
     key: "brownboba",
     frames: [{ key: "bobacup", frame: 1 }],
     frameRate: 20 
   });
   this.anims.create({
     key: "greenboba",
     frames: [{ key: "bobacup", frame: 2 }],
     frameRate: 20 
   });
   this.anims.create({
     key: "pinkboba",
     frames: [{ key: "bobacup", frame: 3 }],
     frameRate: 20 
   });
   this.anims.create({
     key: "purpleboba",
     frames: [{ key: "bobacup", frame: 4}],
    frameRate: 20 
   });
  this.anims.create({
     key: "purplesyrup",
     frames: [{ key: "syrupcup", frame: 0}],
    frameRate: 20 
   });
  this.anims.create({
     key: "brownsyrup",
     frames: [{ key: "syrupcup", frame: 1}],
    frameRate: 20 
   });
  this.anims.create({
     key: "bluesyrup",
     frames: [{ key: "syrupcup", frame: 2}],
    frameRate: 20 
   });
  this.anims.create({
     key: "pinksyrup",
     frames: [{ key: "syrupcup", frame: 3}],
    frameRate: 20 
   });
  this.anims.create({
     key: "greensyrup",
     frames: [{ key: "syrupcup", frame: 4}],
    frameRate: 20 
   });

  var titleText;
  titleText = this.add.text(550, 16, "Boba Blitz", {
    fontSize: "32px",
    fill: "#111"
  });
  this.time.addEvent({
    callback: function() {
      titleText.destroy(); // remove the titleText after a delay
    },
    delay: 3500,
    callbackScope: this
  });
  this.time.addEvent({
    callback: createTeabag, // call createBomb function every 'delay' ms
    delay: 3000, // delay between events in ms
    loop: true, // repeat in the loop
    callbackScope: this
  });
  this.time.addEvent({
    callback: createSyrup, // call createBomb function every 'delay' ms
    delay: 3000, // delay between events in ms
    loop: true, // repeat in the loop
    callbackScope: this
  });
   this.time.addEvent({
     callback: createBoba, // call createBomb function every 'delay' ms
     delay: 2000, // delay between events in ms
     loop: true, // repeat in the loop
     callbackScope: this
  });
  this.time.addEvent({
    callback: createObstacle, // call createBomb function every 'delay' ms
    delay: 3500, // delay between events in ms
    loop: true, // repeat in the loop
    callbackScope: this
  });
}

function createTeabag() {
  var teabag = this.physics.add.sprite(
    Phaser.Math.Between(50, 750), // random starting x coordinate
    50, // fixed starting y coordinate
    Phaser.Math.RND.pick([
      "blue teabag",
      "brown teabag",
      "pink teabag",
      "purple teabag",
      "green teabag"
    ])
  );
  function collectTeabag(player, teabag) {
    teabag.disableBody(true, true);
    score += 10;
    scoreText.setText("Score: " + score);
    console.log(teabag.texture.key);
    if (teabag.texture.key == "blue teabag") {
      player.anims.play("blue", true);
      delay: 2000;
    }
    if (teabag.texture.key == "brown teabag") {
      player.anims.play("brown", true);
      delay: 2000;
    }
    if (teabag.texture.key == "green teabag") {
      player.anims.play("green", true);
      delay: 2000;
    }
    if (teabag.texture.key == "pink teabag") {
      player.anims.play("pink", true);
      delay: 2000;
    }
    if (teabag.texture.key == "purple teabag") {
      player.anims.play("purple", true);
      delay: 2000;
    }
    teabag.destroy();
  }
  this.physics.add.overlap(player, teabag, collectTeabag, null, this);
}

  function createBoba() {
     var boba = this.physics.add.sprite(
       Phaser.Math.Between(50, 750),
       50,
       "boba"
     );

    function collectBoba(player, boba) {
       boba.disableBody(true, true);
       score += 10;
       scoreText.setText("Score: " + score);
       var playerAnim = 
           (player.anims.currentAnim || {}).key;
       if (playerAnim == "blue") {
         player.anims.play("blueboba", true);
       }
       if (playerAnim == "brown") {
         player.anims.play("brownboba", true);
       }
       if (playerAnim == "green") {
         player.anims.play("greenboba", true);
       }
       if (playerAnim == "pink") {
         player.anims.play("pinkboba", true);
       }
       if (playerAnim == "purple") {
         player.anims.play("purpleboba", true);
       }
      boba.destroy();
    }
    this.physics.add.overlap(player, boba, collectBoba, null, this);
  }

function createSyrup() {
  var syrup = this.physics.add.sprite(
    Phaser.Math.Between(50, 750), // random starting x coordinate
    50, // fixed starting y coordinate
    Phaser.Math.RND.pick([
      "syrup"
    ])
  );
function collectSyrup(player, syrup) {
    syrup.disableBody(true, true);
    score += 10;
    scoreText.setText("Score: " + score);
    console.log(syrup.texture.key);
    if (syrup.texture.key == "syrup") {
      player.anims.play("brownsyrup", true);
      delay: 2000;
    }
    syrup.destroy();
  }
  this.physics.add.overlap(player, syrup, collectSyrup, null, this);
}


function createObstacle() {
  var obstacle = this.physics.add.sprite(
    Phaser.Math.Between(50, 750),
    50,
    Phaser.Math.RND.pick(["rock", "veggie"])
  );

  function collectObstacle(player, obstacle) {
    obstacle.disableBody(true, true);
    score += 0;
    scoreText.setText("Score: " + score);
    stars.getLast(true).destroy();
    if (stars.getLength() == 0) {
      this.physics.pause();
      alert('Aww, you lost! Try again!');
      location.reload();
    }
    console.log(obstacle.texture.key);
    obstacle.destroy();
  }

  this.physics.add.overlap(player, obstacle, collectObstacle, null, this);

  if (score >= 250) {
    alert('You won the game, congratulations!');
    location.reload();
  }
}


// this runs many times per second
function update() {
  if (cursors.left.isDown) {
    //player.anims.play("left", true);
    player.setVelocityX(-300);
  } if (cursors.right.isDown) {
    //player.anims.play("right", true);
    player.setVelocityX(300);
  } 
}*/

// Start the title scene
game.scene.start('titleScene');
