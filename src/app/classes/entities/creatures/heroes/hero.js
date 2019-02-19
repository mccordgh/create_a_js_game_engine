import { Creature } from '../creature';

import gameConstants from '../../../../constants/game-constants';

export class Hero extends Creature {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.handler = handler;
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 64;
        this.health = 50;
        this.baseAttack = 4;

        this.type = gameConstants.TYPES.HERO;
    }

    static getDisplayName() {
        throw new Error('Hero must have a "getDisplayName()" method!');
    }

    setDefaultBounds() {
        const boundsX = Math.floor(this.width / 4);
        this.bounds = {
            x: this.width - boundsX,
            y: 0,
            width: boundsX,
            height: this.height,
        };
    }

    tick(dt) {
        if (this.x > gameConstants.GAME_WIDTH + (this.width * 3)) {
            // we've gone off the right side of the screen so destroy self
            this.handler.getEntityManager().removeEntity(this);
        }

        this.xMove = this.speed * dt;

        this.move();
        this.assets.animations['walk_right'].tick();
    }

    render(graphics) {
        if (this.getAnimationFrame()) {
            graphics.drawSprite(this.getAnimationFrame(), this.x, this.y, this.width, this.height);
        }

        // ****** DRAW BOUNDING BOX
        // graphics.fillStyle = "purple";
        // graphics.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
        // ****** DRAW BOUNDING BOX
    }

    getAnimationFrame() {
        return this.assets.animations['walk_right'].getCurrentFrame();
    }
}