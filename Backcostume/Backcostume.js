/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Backcostume extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BackCostume", "./Backcostume/costumes/BackCostume.png", {
        x: 270,
        y: 178.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.goto(0, 0);
    this.createClone();
    this.stage.vars.scrollingspeed = 2;
    while (true) {
      if (this.compare(this.y, -340) > 0) {
        this.y += this.toNumber(this.stage.vars.scrollingspeed) * -1;
      } else {
        this.goto(0, 345);
      }
      yield;
    }
  }

  *startAsClone() {
    this.moveBehind();
    this.goto(0, 345);
    while (true) {
      if (this.compare(this.y, -340) > 0) {
        this.y += this.toNumber(this.stage.vars.scrollingspeed) * -1;
      } else {
        this.goto(0, 345);
      }
      yield;
    }
  }
}
