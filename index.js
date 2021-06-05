"use strict";
var editor = null;

require.config({ paths: { vs: "node_modules/monaco-editor/min/vs" } });
require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
  });

  var MODES = (function () {
    var modesIds = monaco.languages.getLanguages().map(function (lang) {
      return lang.id;
    });
    modesIds.sort();
    return modesIds.map(function (modeId) {
      return {
        modeId: modeId,
      };
    });
  })();

  var startModeIndex = 0;
  for (var i = 0; i < MODES.length; i++) {
    var o = document.createElement("option");
    o.textContent = MODES[i].modeId;
    if (MODES[i].modeId === "typescript") {
      startModeIndex = i;
    }
    document.querySelector(".language-picker").append(o);
  }
  document.querySelector(".language-picker").selectedIndex = startModeIndex;
  loadSample(MODES[startModeIndex]);

  document
    .querySelector(".language-picker")
    .addEventListener("change", function (evt) {
      loadSample(MODES[this.selectedIndex]);
    });

  document
    .querySelector(".theme-picker")
    .addEventListener("change", function (evt) {
      changeTheme(this.selectedIndex);
    });
});

window.onresize = function () {
  if (editor) {
    editor.layout();
  }
};

function loadSample(mode) {
  if (!editor) {
    editor = monaco.editor.create(document.getElementById("editor"), {
      model: null,
    });
  }
  var oldModel = editor.getModel();
  var newModel = monaco.editor.createModel("", mode.modeId);
  editor.setModel(newModel);
  if (oldModel) {
    oldModel.dispose();
  }
}

function changeTheme(theme) {
  var newTheme = theme === 1 ? "vs-dark" : theme === 0 ? "vs" : "hc-black";
  monaco.editor.setTheme(newTheme);
}