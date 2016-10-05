/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */

var numCheck=function(nums){
    var mark =true;
    nums.forEach(function(value){
        if (typeof(value)!== 'number'){
            mark=false;}
        });
     return mark;
};

var sum=function(nums){
    if(numCheck(nums)===false){
        console.log('not number array');
        return('error');
    }
    return nums.reduce(function(sumSoFar,value){
		return sumSoFar+value;
	},0);
};

sum([1,2,3,4]);
//sum([1,2, '5',4]);

//EX.1
var avg=function(nums){
    if(numCheck(nums)===false){
        console.log('not number array');
        return('error');
    }
	return sum(nums)/nums.length;
};

//sum([1 ,2,3,4]);
avg([1,2,3,4]);

//EX.2
var max=function(nums){
     if(numCheck(nums)===false){
        console.log('not number array');
        return('error');
    }
    var maxNum=nums[0];
    nums.forEach(function(value)
    {
        if(maxNum<value)
        {
            maxNum=value;    
         }
    });
    return maxNum;
};

max([1,2,3,4]);

//EX.3
var anyEven= function(nums){
	if(numCheck(nums)===false){
        console.log('not number array');
        return('error');
    }
    var eMark=false;
    nums.forEach(function(value){
    if (value%2===0)
    { eMark=true;}
    });
    return eMark;
};
anyEven([1,7,3,5]);

//EX.4
var allEven= function(nums){
    if(numCheck(nums)===false){
        console.log('not number array');
        return('error');
    }
    var allEMark=true;
    nums.forEach(function(value){
    if (value%2!==0)
    {    allEMark=false;}
    });
    return allEMark;
};
allEven([2,5]);


//EX.5
var arrayContains= function(strings, word){
  var eqMark=false;
  strings.forEach(function(value){
  if(value===word){
      eqMark=true;
  }
  });   
 return    eqMark;
};

arrayContains(['hello', 'world'],'hello');


//Ex.6

var array2Contains= function(strings, word){
  var eq2Mark=0,
      tContains=false;
  strings.forEach(function(value){
  if(value===word){
      eq2Mark+=1;
  }
  });  
 if(eq2Mark>=2){tContains=true;}
 return tContains;
};

array2Contains(['hello', 'world','hello'],'hello');

var arrayNContains= function(strings, word,n){
  var eqNMark=0,
      nContains=false;
  strings.forEach(function(value){
  if(value===word){
      eqNMark+=1;
  }
  });  
 if(eqNMark>=n){nContains=true;}
 return nContains;
};

arrayNContains(['hello', 'world','hello'],'hello',2);