/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spaceshipcostume extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "SpaceshipCostume",
        "./Spaceshipcostume/costumes/SpaceshipCostume.png",
        { x: 250, y: 206 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.size = 15;
    this.direction = -90;
    this.goto(25, -159);
    this.stage.vars.xspeed = 0;
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.stage.vars.xspeed = 5;
      }
      if (this.keyPressed("left arrow")) {
        this.stage.vars.xspeed = -5;
      }
      this.x += this.toNumber(this.stage.vars.xspeed);
      this.stage.vars.xspeed = this.toNumber(this.stage.vars.xspeed) * 0.9;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.compare(this.stage.vars.score, this.stage.vars.highscore) > 0) {
        this.stage.vars.highscore = this.stage.vars.score;
      }
      yield;
    }
  }
}
