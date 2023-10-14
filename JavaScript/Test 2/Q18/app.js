// Dialog Box
function showDialog() {
  window.alert("This is a simple dialog box.");
}

// Confirm Box
function showConfirm() {
  const result = window.confirm("Do you want to proceed?");
  if (result) {
    alert("You clicked OK!");
  } else {
    alert("You clicked Cancel!");
  }
}

// Message Box
function showMessage() {
  const message = window.prompt("Enter a message:", "Hello Javascript");
  if (message !== null) {
    alert("You entered: " + message);
  } else {
    alert("You clicked Cancel ,we are closing the prompt.");
  }
}