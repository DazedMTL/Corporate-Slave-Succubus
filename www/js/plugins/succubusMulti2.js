function succubusMulti2() {
  for (var i = 21; i < 25 + 1; i++) {
    if ($gameVariables.value(i) == 5) {
      for (var o = 21; o < 25 + 1; o++) {
        if (i < o) {
          if ($gameVariables.value(o) <= 4) {
            if ($gameSwitches.value(166) == true) {
              $gameVariables.setValue(o + 45, $gameVariables.value(o + 45) * 2);
              $gameVariables.setValue(o + 55, $gameVariables.value(o + 55) * 2);

              break;
            } else {
              if ($gameSwitches.value(165) == true) {
                $gameVariables.setValue(
                  o + 45,
                  $gameVariables.value(o + 45) * 1.8
                );
                $gameVariables.setValue(
                  o + 55,
                  $gameVariables.value(o + 55) * 1.8
                );

                break;
              } else {
                if ($gameSwitches.value(164) == true) {
                  $gameVariables.setValue(
                    o + 45,
                    $gameVariables.value(o + 45) * 1.6
                  );
                  $gameVariables.setValue(
                    o + 55,
                    $gameVariables.value(o + 55) * 1.6
                  );

                  break;
                } else {
                  if ($gameSwitches.value(163) == true) {
                    $gameVariables.setValue(
                      o + 45,
                      $gameVariables.value(o + 45) * 1.4
                    );
                    $gameVariables.setValue(
                      o + 55,
                      $gameVariables.value(o + 55) * 1.4
                    );

                    break;
                  } else {
                    if ($gameSwitches.value(162) == true) {
                      $gameVariables.setValue(
                        o + 45,
                        $gameVariables.value(o + 45) * 1.2
                      );
                      $gameVariables.setValue(
                        o + 55,
                        $gameVariables.value(o + 55) * 1.2
                      );

                      break;
                    } else {
                      if ($gameSwitches.value(161) == true) {
                        $gameVariables.setValue(
                          o + 45,
                          $gameVariables.value(o + 45) * 1
                        );
                        $gameVariables.setValue(
                          o + 55,
                          $gameVariables.value(o + 55) * 1
                        );

                        break;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
