// Question 3
// var val = new Array(20,8);
// var path = '';
// function AreaX(val){
//   var arr = [];
//   arr[0] = val[0] + 3;
//   arr[1] = val[1] + 2;
//   return arr;
// }
// function AreaY(val){
//   var arr = [];
//   arr[0] = val[0] - 5;
//   arr[1] = val[1] - 10;
//   return arr;
// }
// function AreaZ(val){
//   var arr = [];
//   arr[0] = val[0] - 20;
//   arr[1] = val[1] + 5;
//   return arr;
// }
//  var initiate = function(){
//   var currArea = '';
//   // set initial Area
//   if (currArea === ''){
//     currArea = setCurrentArea(val);
//   }
//   // if initial area is not correct exit;
//   if(currArea === ''){
//     return ;
//   }
//   while(val[0] >= 0 || val[1] >= 0){
//     currArea = SwitchArea(val , currArea);
//     if(currArea ===  ''){
//       return;
//     }
//   }
//   console.log(currArea);
//  };

//  var setCurrentArea = function(val){
//   if(AreaX(val)[0] >= 0 && AreaX(val)[1] >= 0){
//     val[0] = AreaX(val)[0];
//     val[1] = AreaX(val)[1];
//     path = path + 'X';
//     return 'x';
//   } else if(AreaY(val)[0] >= 0 && AreaY(val)[1] >= 0){
//     val[0] = AreaY(val)[0];
//     val[1] = AreaY(val)[1];
//     path = path + 'Y';
//     return 'y';
//   } else if(AreaZ(val)[0] >= 0 && AreaZ(val)[1] >= 0){
//     val[0] = AreaZ(val)[0];
//     val[1] = AreaZ(val)[1];
//     path = path + 'Z';
//     return 'z';
//   } else{
//     return '';
//   }
//  };

//  var SwitchArea = function(val , currArea) {
//   //If in Area X
//   if (currArea === 'x'){
//     if(AreaY(val)[0] >= 0 && AreaY(val)[1] >= 0){
//       val[0] = AreaY(val)[0];
//       val[1] = AreaY(val)[1];
//       path = path + '--Y';
//       return 'y';
//     } else if(AreaZ(val)[0] >= 0 && AreaZ(val)[1] >= 0){
//       val[0] = AreaZ(val)[0];
//       val[1] = AreaZ(val)[1];
//       path = path + '--Z';
//       return 'z';
//     } else{
//       return '';
//     }
//   }
//   // If in Area Y
//   if (currArea === 'y'){
//     if(AreaX(val)[0] >= 0 && AreaX(val)[1] >= 0){
//       val[0] = AreaX(val)[0];
//       val[1] = AreaX(val)[1];
//       path = path + '--X';
//       return 'x';
//     } else if(AreaZ(val)[0] >= 0 && AreaZ(val)[1] >= 0){
//       val[0] = AreaZ(val)[0];
//       val[1] = AreaZ(val)[1];
//       path = path + '--Z';
//       return 'z';
//     } else{
//       return '';
//     }
//   }
//   if (currArea === 'z'){
//     if(AreaX(val)[0] >= 0 && AreaX(val)[1] >= 0){
//       val[0] = AreaX(val)[0];
//       val[1] = AreaX(val)[1];
//       path = path + '--X';
//       return 'x';
//     }
//     else if(AreaY(val)[0] >= 0 && AreaY(val)[1] >= 0){
//       val[0] = AreaY(val)[0];
//       val[1] = AreaY(val)[1];
//       path = path + '--Y';
//       return 'y';
//     } else{
//       return '';
//     }
//   }
//  };

//  var start = function(){
//   initiate();
//   console.log(val , path);
//  }();

// Question 4
// var printStrict = function(n) {
//   var lowerLimit = 0;
//   var HigherLimit =  Math.pow(10, n) - 1;
//   for(i = lowerLimit ; i <= HigherLimit ; i++){
//     var strNum = addLeadingZero(i, n);
//     var hasLeadingZero = true;
//     for(j = 1; j < n ; j++){
//       hasLeadingZero = hasLeadingZero && (parseInt(strNum[j], 10) - parseInt(strNum[j - 1], 10) > 0);
//     }
//     if(hasLeadingZero){
//       console.log(strNum);
//     }
//   }
// };

// function addLeadingZero(i, n){
//   if(i.toString().length < n){
//     var suf = '';
//     for(dig = 0; dig < n - i.toString().length; dig++){
//       suf = suf + '0';
//     }
//     return suf + i.toString();
//   } else{
//     return i.toString();
//   }
// }


// var input = [2,3,4,5];


// console.log(input);

// var subsetSums = function(arr, l, r, sum=0)
// {
//     // Print current subset
//     if (l > r)
//     {
//         console.log(sum + ' ');
//         return;
//     }

//     // Subset including arr[l]
//     subsetSums(arr, l+1, r, sum+arr[l]);

//     // Subset excluding arr[l]
//     console.log(sum);
//     subsetSums(arr, l+1, r, sum);
// }

// var subsetSumsB = function(arr,n)
// {
//     // There are totoal 2^n subsets
//     var total = 1<<n;

//     // Consider all numbers from 0 to 2^n - 1
//     for (i=0; i<total; i++)
//     {
//         sum = 0;

//         // Consider binary reprsentation of
//         // current i to decide which elements
//         // to pick.
//         for (j=0; j<n; j++){
//             console.log(i, 1<<j , i & (1<<j));
//             if (i & (1<<j)){
//                 // console.log('in');
//                 sum += arr[j];
//             }


//           // Print sum of picked elements.
//           console.log(sum + ' ');
//         }
//     }
// }

// var main = function(){
//     var arr = [5, 4, 3];
//     var n = arr.length;
//     subsetSumsB(arr, n);
//     return 0;
// }();


// // first round
// // l = 0 -
// // sibs





// var magicNumber = function(n,M){
//   pow = 1; add = 0;
//   var bin = '';
//   while(n){
//     pow = pow * M;
//     // odd digits addition
//     if(n % 2 === 1){
//       add = add + pow;
//       // reduces
//       bin = '1' + bin;
//       n = n - 1;
//     }else{
//       bin = '0' + bin;
//     }
//     if(n){
//       n = n/2;
//     }
//   }
//   console.log(add , bin);
// }(16,5);

//
