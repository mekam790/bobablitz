import Phaser from 'phaser';
class titleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
  }

  preload() {
    this.load.image(
      "startpage",
      "https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/homepage.jpg?v=1700422333563"
    );
    this.load.image(
      "storybutton",
      "https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/storybutton.png?v=1700008878742"
    );
    this.load.image(
      "endlessbutton",
      "https://cdn.glitch.global/51f9b802-4a85-450b-aa0b-f27da861f866/endlessbutton.png?v=1700008892943"
    );
  }

  create() {
    var bg = this.add.sprite(100, 0, "startpage");
    bg.setOrigin(0, 0);
  }
}

export default titleScene;
