'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ファイル全体で使用する TDD 用の変数を宣言する。
let expected;
let actual;
// TDDをtest関数として呼び出すように用意する


function test(actual, expected) {
  if (_.isEqual(actual, expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

test(actual, expected);


function jyanken(){
  const numberElement = document.getElementsByClassName("youjyanken");
  const result = document.getElementsByClassName("bluebox");
  let wanistring = "";
  for (let i=0; i < Number(numberElement[0].value); i++){
    wanistring = wanistring + "🐊";
  }
  result[0].textContent = wanistring;
}

const target = document.getElementsByClassName("games");

target[0].addEventListener("click",jyanken);


