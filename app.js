const obj=require('./util/helper')
const lg=require('./logger')
const oobj=require('./validator/formatter')
const _=require('lodash')
//obj.logMessage('module system')
//obj.printWelcomeMaessage=welcomeer 
lg.log('balaji')
lg.welcomeer()
console.log(lg.loggerEndpoint)
console.log("-----------------")
obj.printDate()
obj.printMonth()
obj.getBatchinfo()
console.log("----------------------")
oobj.trim()
oobj.changtoLowerCase()
oobj.changtoUpperCase()
console.log("----------------------")
console.log(_.chunk(["jan","feb","mar","app","may","jun","jul","aug","sep","otc","nov","dec"],4))
const n=[1,2,3,4,5,6,7,8,9,10]
//let b=n.reverse(n)
//let c=_.tail(b,b-1)
console.log(_.tail(n))
console.log(_.union([2,4,2,5,4,7,9],[4,2],[5,6,7,8,9]))
let f1=["horror","The Shining"]

let f2 = ["drama","Titanic"]

let f3=["thriller","Shutter Island"]

let f4=["fantasy","Pans Labyrinth"]

console.log(_.fromPairs([f1,f2,f3,f4]));
//console.log(_.formPairs())
