// This file will conatain all the core logic of jaspect. For now it's a staging designed to work with index.html

var scripts = top.document.getElementsByTagName('script');



//console.log(parse('function foo(x, y, z){\n return x + y + z; \n}'));
//console.log(deparse(["toplevel", [ ["defun", "foo" ,["x","y","z"],[["return", [ "binary", "+", [ "binary", "+", ["name", "x"],["name", "y"]],["name","z"]]]]]]]))

function traverse(tree){
	
  if (typeof tree === 'string'){
    return;
  	}
  
  for (var i = 0; i < tree.length; i++){
    
    if (tree[i] === 'defun'){
      tree[3].unshift(["stat", ["call", ["name", "bar"], []]]);
    }
    traverse(tree[i]);
  }


}

ast = parse('function foo(x, y, z){\n return x + y + z; \n}');
console.log(ast);
traverse(ast);
console.log(ast);
console.log(deparse(ast));