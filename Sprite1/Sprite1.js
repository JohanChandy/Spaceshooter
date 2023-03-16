/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.png", {
        x: 12,
        y: 23
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.size = 50;
    this.visible = false;
    while (true) {
      if (this.keyPressed("space")) {
        this.createClone();
        yield* this.startSound("pop");
      }
      yield;
    }
  }

  *startAsClone() {
    this.moveAhead();
    this.visible = true;
    yield* this.startSound("pop");
    this.goto(
      this.sprites["Spaceshipcostume"].x,
      this.sprites["Spaceshipcostume"].y
    );
    while (true) {
      if (this.touching("edge")) {
        this.deleteThisClone();
      }
      this.y += 10;
      yield;
    }
  }
}
