import React from "react";

export function useKey(keyName, action) {
  React.useEffect(
    function () {
      function key(e) {
        if (e.code.toLowerCase() === keyName.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", key);
      return () => document.removeEventListener("keydown", key);
    },
    [keyName, action]
  );
}
