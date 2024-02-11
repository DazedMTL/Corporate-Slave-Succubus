function HolidayWeekSelect() {
  if (
    $gameVariables.value(19) - 2 == 11 ||
    $gameVariables.value(19) - 2 == 42 ||
    $gameVariables.value(19) - 2 == 54 ||
    $gameVariables.value(19) - 2 == 119 ||
    $gameVariables.value(19) - 2 == 120 ||
    $gameVariables.value(19) - 2 == 123 ||
    $gameVariables.value(19) - 2 == 124 ||
    $gameVariables.value(19) - 2 == 125 ||
    $gameVariables.value(19) - 2 == 203 ||
    $gameVariables.value(19) - 2 == 204 ||
    $gameVariables.value(19) - 2 == 221 ||
    $gameVariables.value(19) - 2 == 263 ||
    $gameVariables.value(19) + 1 == 266 ||
    $gameVariables.value(19) + 1 == 307 ||
    $gameVariables.value(19) + 1 == 327 ||
    $gameVariables.value(19) + 1 == 375 ||
    $gameVariables.value(19) + 1 == 407 ||
    $gameVariables.value(19) + 1 == 419 ||
    $gameVariables.value(19) + 1 == 445 ||
    $gameVariables.value(19) + 1 == 484 ||
    $gameVariables.value(19) + 1 == 488 ||
    $gameVariables.value(19) + 1 == 489 ||
    $gameVariables.value(19) + 1 == 490 ||
    $gameVariables.value(19) + 1 == 564 ||
    $gameVariables.value(19) + 1 == 588 ||
    $gameVariables.value(19) + 1 == 627 ||
    $gameVariables.value(19) + 1 == 631 ||
    $gameVariables.value(19) + 1 == 672 ||
    $gameVariables.value(19) + 1 == 692
  ) {
    $gameScreen.showPicture(
      7,
      "work_weekH" + ($gameVariables.value(10) - 1),
      0,
      545,
      24,
      100,
      100,
      255,
      0
    );
  } else {
    $gameScreen.showPicture(
      7,
      "work_week" + ($gameVariables.value(10) - 1),
      0,
      545,
      24,
      100,
      100,
      255,
      0
    );
  }
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
    $gameVariables.value(19) == 266 ||
    $gameVariables.value(19) == 307 ||
    $gameVariables.value(19) == 327 ||
    $gameVariables.value(19) == 375 ||
    $gameVariables.value(19) == 407 ||
    $gameVariables.value(19) == 419 ||
    $gameVariables.value(19) == 445 ||
    $gameVariables.value(19) == 484 ||
    $gameVariables.value(19) == 488 ||
    $gameVariables.value(19) == 489 ||
    $gameVariables.value(19) == 490 ||
    $gameVariables.value(19) == 564 ||
    $gameVariables.value(19) == 588 ||
    $gameVariables.value(19) == 627 ||
    $gameVariables.value(19) == 631 ||
    $gameVariables.value(19) == 672 ||
    $gameVariables.value(19) == 692
  ) {
    $gameScreen.showPicture(
      8,
      "work_weekH" + $gameVariables.value(10),
      0,
      655,
      24,
      100,
      100,
      255,
      0
    );
  } else {
    $gameScreen.showPicture(
      8,
      "work_week" + $gameVariables.value(10),
      0,
      655,
      24,
      100,
      100,
      255,
      0
    );
  }
}
