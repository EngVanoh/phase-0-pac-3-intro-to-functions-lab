// shout(string)
function shout(string) {
    return string.toUpperCase();
  }
  
  // whisper(string)
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // logShout(string)
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // logWhisper(string)
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // sayHiToHeadphonedRoommate(string)
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }