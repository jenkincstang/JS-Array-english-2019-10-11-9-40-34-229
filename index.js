// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
a is string type, b is array type.

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i = a.length - 1; i >= 0; i--) {
	a[i] = a[i]*2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function formatLog(array,spacer){
	var result = "";
	for (var i = 0; i < array.length; i++) {
		result += array[i];
		if (i!=array.length-1) {
			result += spacer;
		}
	}
	return result;
}

console.log(formatLog(colors," "));//case 1
console.log(formatLog(colors,"+"));//case 2
console.log(formatLog(colors,","));//case 3

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function bubbleSort(array){
	if (array.length==0) {
		return array;
	}
	for(var i=0;i<array.length;i++){
		var flag = 0;
		for(var j=0;j<array.length-1-i;j++){
			if (array[j]<array[j+1]) {
				flag = 1;
				var tmp = array[j];
				array[j]=array[j+1];
				array[j+1]=tmp;
			}
		}
		if (flag==0) {
			return array;
		}
	}
}

console.log(bubbleSort(a));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var max_count = 1;
var res;
var cur_count;
for(var i=0;i<a.length;i++){
	cur_count = 1;
	for(var j=0;j<a.length;j++){
		if(i==j){
		}else{
			if(a[i]==a[j]){
				cur_count++;
			}
		}
	}
	if(max_count<cur_count){
		max_count = cur_count;
		res = a[i];
	}
}
console.log(res);
