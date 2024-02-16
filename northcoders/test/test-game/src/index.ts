import * as Phaser from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
  };
  
  export class GameScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
    private circle:Phaser.GameObjects.Shape & { body: Phaser.Physics.Arcade.Body};
    private cartoon:Phaser.GameObjects.Sprite;
    private rope:Phaser.GameObjects.Rope;
    constructor() {
      super(sceneConfig);
    }
    public preload(){
      // this.load.baseURL = 'test-game/'
      this.load.image('girl','👧')
      this.load.image('cartoon', require('../images/cartoon.png'))
    }
    public create() {
      type: Phaser.CANVAS,
      this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any;
      this.circle = this.add.circle(400,300,100,100) as any;
      this.add.image(500,150,'girl')
      this.physics.add.existing(this.square);
      this.cartoon=this.add.sprite(100,100,'cartoon')
      this.physics.add.existing(this.circle);
      this.cartoon.rotation = 0.14;
      // var mySprite= this.add.sprite(600,300,'cartoon');
    }
   
    public update() {
      const cursorKeys = this.input.keyboard.createCursorKeys();
 
if (cursorKeys.up.isDown) {
  this.square.body.setVelocityY(-500);
  this.circle.body.setVelocityY(-300);
  this.cartoon.active;
} else if (cursorKeys.down.isDown) {
  this.square.body.setVelocityY(500);
  this.circle.body.setVelocityY(300);
} else {
  this.square.body.setVelocityY(0);
  this.circle.body.setVelocityY(0);
}
 
if (cursorKeys.right.isDown) {
  this.square.body.setVelocityX(500);
} else if (cursorKeys.left.isDown) {
  this.square.body.setVelocityX(-500);
} else {
  this.square.body.setVelocityX(0);
}
    }
  }

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',
 
  type: Phaser.AUTO,
  scene:  GameScene,
  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
 
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
 
  parent: 'game',
  backgroundColor: '#6A5ACD',
};
 
export const game = new Phaser.Game(gameConfig);