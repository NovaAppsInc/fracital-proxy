stringTruncate('Hello world ass', 5); //output "Hello..."
stringTruncate('Hello world ass', 20);//output "Hello world ass"

function stringTruncate(str, length){
  var dots = str.length > length ? '...' : '';
  return str.substring(0, length)+dots;
};