import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Spaceshipcostume from "./Spaceshipcostume/Spaceshipcostume.js";
import Backcostume from "./Backcostume/Backcostume.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Spaceshipcostume: new Spaceshipcostume({
    x: 66.5590185865903,
    y: -159,
    direction: -90,
    costumeNumber: 1,
    size: 15,
    visible: true,
    layerOrder: 3
  }),
  Backcostume: new Backcostume({
    x: 0,
    y: -17,
    direction: 90,
    costumeNumber: 1,
    size: 266.66666666666663,
    visible: true,
    layerOrder: 1
  }),
  Sprite1: new Sprite1({
    x: -77.99999999999999,
    y: 68,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 4
  }),
  Sprite2: new Sprite2({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 300,
    visible: false,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
