//=============================================================================
// CustomSaveName.js
//=============================================================================

/*:
 * @plugindesc Changes the save file name in RPG Maker MV.
 */

(function () {
  var originalMakeSavefileInfo = DataManager.makeSavefileInfo;

  DataManager.makeSavefileInfo = function () {
    var info = originalMakeSavefileInfo.call(this);
    // Check if a specific switch is ON (replace SWITCH_ID with the actual switch ID).
    if ($gameSwitches.value(49)) {
      info.title = "Clear Data";
      // Replace 'My Custom Save Name' with the desired name for the specific save file.
    }
    return info;
  };
})();
