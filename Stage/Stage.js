/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.xspeed = -0.000027343782434914757;
    this.vars.scrollingspeed = 2;
    this.vars.score = 19;
    this.vars.highscore = 19;

    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 241,
      y: -152
    });
    this.watchers.highscore = new Watcher({
      label: "highScore",
      style: "normal",
      visible: true,
      value: () => this.vars.highscore,
      x: 245,
      y: 175
    });
  }
}
