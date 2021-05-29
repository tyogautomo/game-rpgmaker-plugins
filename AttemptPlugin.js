/*:
 *
 * @plugindesc Simple plugin for RPG Maker MV
 *
 * @author Yoga Utomo aka tyogautomo
 *
 * @help
 * This is just a simple script created to help my small RPG Maker MV project
 *
 * @param Jumper
 * @desc default attack jump height
 * @default 2
 *
*/

(function () {

  let paramaters = PluginManager.parameters('MyFirstPlugin');
  let jumper = paramaters['Jumper'];
  let player_canEncounter = Game_Player.prototype.canEncounter

  Scene_Title.prototype.drawGameTitle = function () {
    var x = 20;
    var y = Graphics.height / 4;
    var maxWidth = Graphics.width - x * 2;
    var text = $dataSystem.gameTitle;
    this._gameTitleSprite.bitmap.outlineColor = 'black';
    this._gameTitleSprite.bitmap.outlineWidth = 8;
    this._gameTitleSprite.bitmap.fontSize = 72;
    this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
  };

  Game_Player.prototype.canEncounter = function () {
    return (player_canEncounter.call(this) && !this.isDashing());
  };

}());
