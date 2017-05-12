/* 
Looping a Triangle

Write a loop that makes seven calls to console.log to output the following
triangle:

#
##
###
####
#####
######
#######

 */

for (let i = 1; i < 8; i+=1) {
  let t = '';
  for (let j = 0; j < i; j+=1) {
    t += '#';
  }
  console.log(t);
}
