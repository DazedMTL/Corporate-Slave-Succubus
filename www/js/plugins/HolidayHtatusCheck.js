function HolidayHstatusCheck() {
  if (
    $gameVariables.value(19) - 1 == 11 ||
    $gameVariables.value(19) - 1 == 42 ||
    $gameVariables.value(19) - 1 == 54 ||
    $gameVariables.value(19) - 1 == 119 ||
    $gameVariables.value(19) - 1 == 120 ||
    $gameVariables.value(19) - 1 == 123 ||
    $gameVariables.value(19) - 1 == 124 ||
    $gameVariables.value(19) - 1 == 125 ||
    $gameVariables.value(19) - 1 == 203 ||
    $gameVariables.value(19) - 1 == 204 ||
    $gameVariables.value(19) - 1 == 221 ||
    $gameVariables.value(19) - 1 == 263 ||
    $gameVariables.value(19) - 1 == 266 ||
    $gameVariables.value(19) - 1 == 307 ||
    $gameVariables.value(19) - 1 == 327 ||
    $gameVariables.value(19) - 1 == 375 ||
    $gameVariables.value(19) - 1 == 407 ||
    $gameVariables.value(19) - 1 == 419 ||
    $gameVariables.value(19) - 1 == 445 ||
    $gameVariables.value(19) - 1 == 484 ||
    $gameVariables.value(19) - 1 == 488 ||
    $gameVariables.value(19) - 1 == 489 ||
    $gameVariables.value(19) - 1 == 490 ||
    $gameVariables.value(19) - 1 == 564 ||
    $gameVariables.value(19) - 1 == 588 ||
    $gameVariables.value(19) - 1 == 627 ||
    $gameVariables.value(19) - 1 == 631 ||
    $gameVariables.value(19) - 1 == 672 ||
    $gameVariables.value(19) - 1 == 692
  ) {
    $gameTemp.reserveCommonEvent(132);
  } else {
    if ($gameVariables.value(9) == 6) {
      $gameTemp.reserveCommonEvent(130);
    } else {
      $gameTemp.reserveCommonEvent($gameVariables.value(9) + 131);
    }
  }
}
