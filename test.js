/*let note = prompt("entrer votre note : ");
let n = Number.parseInt(note);
if(n<10) console.log(`redouble`);
else if(n>=10 && n<12)
console.log(`passable :)`);
else if(n>=12 && n<14)
console.log(`Assez bien`);
else if(n>=14 && n<16)
console.log(` bien`);
else if(n>=16 && n<18)
console.log(`très bien`);
else console.log(`super (y)`);*/

/*let f=function (a,b) {
	let s=a+b;
	return s;
}
let d=5;
let y=9;
console.log(f(d,y));*/


/*function calc(a,b){
let op=prompt("entrer l'operateur :");
let res;
switch(op)
{
	case '+':res=a+b;break;
	case '-':res=a-b;break;
	case '*':res=a*b;break;
	case '/':res=a/b;break;
	case '%':res=a%b;break;
	default:console.log(`erreur 302`);
}
return res;
}
console.log(calc(4,2));*/

function vecteur(x,y){
	this.x=x;
	this.y=y;
};

vecteur.prototype.mod = function() {
	return Math.sqrt(this.x*this.x+this.y*this.y);
};
vecteur.prototype.egale = function(v) {
	return (this.x==v.x && this.y==v.y);
};

let v1=new vecteur(2,4);
let v2=new vecteur(2,4);
console.log(v1.mod());
console.log(v2.mod());
console.log(v1.egale(v2));