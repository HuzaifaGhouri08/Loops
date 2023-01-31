let sum = 0;
let user1 = 0;
let user2 = 0;

do {
sum += user1 + user2;

user1 = parseInt(prompt('"ENTER THE NUMBERS", Put negative numbers to result'));
if (user1 <= 0){
break;}

user2 = parseInt(prompt('"ENTER MORE NUMBERS", Put negative numbers to result'));
if (user2 <= 0){
break;}
    
   }

while(user1 >= 0 || user2 >0)

alert("The sum is" +" " + sum);