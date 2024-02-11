function succubusRoutine() {
  var $routine1_1 = $gameVariables.setValue($gameVariables.value(8) + 61, 600);
  var $routine1_2 = $gameVariables.setValue($gameVariables.value(8) + 71, 2400);
  var $routine1_3 = $gameVariables.setValue($gameVariables.value(8) + 81, 10);
  if ($gameSwitches.value(161)) {
    $routine1_1 = $gameVariables.setValue($gameVariables.value(8) + 61, 800);
    $routine1_2 = $gameVariables.setValue($gameVariables.value(8) + 71, 3600);
    $routine1_3 = $gameVariables.setValue($gameVariables.value(8) + 81, 8);
  }
  if ($gameSwitches.value(162)) {
    $routine1_1 = $gameVariables.setValue($gameVariables.value(8) + 61, 1200);
    $routine1_2 = $gameVariables.setValue($gameVariables.value(8) + 71, 4400);
    $routine1_3 = $gameVariables.setValue($gameVariables.value(8) + 81, 10);
  }
  $routine1_1;
  $routine1_2;
  $routine1_3;
}
