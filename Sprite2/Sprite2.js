/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.png", {
        x: 32,
        y: 8
      })
    ];

    this.sounds = [
      new Sound("Chill", "./Sprite2/sounds/Chill.wav"),
      new Sound("Crazy Laugh", "./Sprite2/sounds/Crazy Laugh.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.score = 0;
    this.size = 300;
    while (true) {
      yield* this.wait(2);
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.goto(this.random(-200, 200), 180);
    while (!(this.compare(this.y, -180) < 0)) {
      this.y -= 2;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    this.visible = true;
    yield* this.startSound("Chill");
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.vars.score++;
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.stage.vars.score = 0;
    this.size = 300;
    while (true) {
      yield* this.wait(2);
      this.createClone();
      yield;
    }
  }
}
