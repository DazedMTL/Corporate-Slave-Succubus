function succubusMulti() {
  for (var i = 21; i < 25 + 1; i++) {
    if ($gameVariables.value(i) == 6) {
      for (var o = i + 46; o <= 70; o++) {
        if ($gameSwitches.value(177) == true) {
          $gameVariables.setValue(o, $gameVariables.value(o) * 2);
          $gameVariables.setValue(o + 10, $gameVariables.value(o + 10) * 2);
        } else {
          if ($gameSwitches.value(176) == true) {
            $gameVariables.setValue(o, $gameVariables.value(o) * 1.75);
            $gameVariables.setValue(
              o + 10,
              $gameVariables.value(o + 10) * 1.75
            );
          } else {
            if ($gameSwitches.value(175) == true) {
              $gameVariables.setValue(o, $gameVariables.value(o) * 1.5);
              $gameVariables.setValue(
                o + 10,
                $gameVariables.value(o + 10) * 1.5
              );
            } else {
              if ($gameSwitches.value(174) == true) {
                $gameVariables.setValue(o, $gameVariables.value(o) * 1.25);
                $gameVariables.setValue(
                  o + 10,
                  $gameVariables.value(o + 10) * 1.25
                );
              } else {
                if ($gameSwitches.value(173) == true) {
                  $gameVariables.setValue(o, $gameVariables.value(o) * 1.1);
                  $gameVariables.setValue(
                    o + 10,
                    $gameVariables.value(o + 10) * 1.1
                  );
                }
              }
            }
          }
        }
      }
      break;
    }
  }
}
