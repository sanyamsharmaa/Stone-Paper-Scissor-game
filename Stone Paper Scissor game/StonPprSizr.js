let opts=['Stone', 'Paper', 'Sissor']
function RPSwinr(pla,plb,sc,su){
   if(pla=='Stone'){
     if(plb=='Paper'){
        alert('You loose')
        sc.val+=1
      }
     else{
        alert('You won')
        su.val+=1
     }
    }
   else if(pla=='Paper'){
         if(plb=='Sissor'){
            alert('You loose')
            sc.val+=1
      }
         else{
            alert('You won')
            su.val+=1
      }
         }
   else if(pla=='Sissor'){
      if(plb=='Stone'){
            alert('You loose')
            sc.val+=1
      }
         else{
            alert('You won')
            su.val+=1
      }
      }
console.log('Score-\nMe-',sc.val,'      \nYou-',su.val)
}

function SPS(sc,su){ 
let ri=Math.floor(Math.random()*3)
let opp=opts[ri]
let usr=prompt('Type your choise-\n 1.Stone\n 2.Paper\n 3.Sissor')

while(opp==usr || !opts.includes(usr)){
console.error('');
 usr=prompt('Select again-\n 1.Stone\n 2.Paper\n 3.Sissor')
}

console.log('I choose-',opp,'\nYou choose-',usr)
RPSwinr(usr,opp,sc,su)
}

var me={val:0}       //Number and string can't be given by refrence only Object can be given, to give Number/String by refrence we have to wrap them in object
var you={val:0}
SPS(me,you)
console.log('After 1st call, Me=',me.val,'    You=',you.val)
while(true){
if(confirm('Do you want to play again ')){
   SPS(me,you)
}
else{break}
}

