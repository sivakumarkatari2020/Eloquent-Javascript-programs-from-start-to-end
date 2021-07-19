/*Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

var string='#';
for(let i=0;i<7;i++){
    console.log(string);
    string=string+' '+'#';
}