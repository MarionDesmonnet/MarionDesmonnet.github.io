if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'je dis *tag': function(tag) {
      
    var nouveauDiv = document.createElement("div");
    nouveauDiv.innerHTML = "<h1>" + tag + "</h1>";
  
    var mon_div = document.getElementById("org_div1");
    document.body.insertBefore(nouveauDiv, mon_div);
      }
  };
  
  annyang.debug();
  annyang.setLanguage('fr-FR');

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  
}
