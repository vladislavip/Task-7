/*filter,find,findIndex,indexof,reduce*/


const testArr = [40, 100, 1, 5, 25, 10, 100, 34, 3];    //Test array 

/*---------Array filter---------*/


function myFilter(conditionFunc,passedArr){
    
    let arr=[];

    for (let i = 0; i < passedArr.length; i++)
    {
      if  (conditionFunc(passedArr[i])!=undefined)
      {
        arr.push(passedArr[i])
      }
    }
    return arr;

}

let condition= (x)=>{if (x>0) return x;}


//----------Test input------------------
let result = myFilter(condition,testArr)

console.log(result)



/*---------Array find---------*/


function myFind (element,arr)
{
    for (let i = 0; i < arr.length; i++)
    {
       if (element===arr[i])
       {
        return arr[i];
       }
       else 
       {
        continue;
       }
       
    }
    return undefined;
}


//----------Test input------------------

let result2= myFind(100,testArr);
console.log(result2);

/*---------findIndex---------*/


function myFindIndex (element,arr)
{
    for (let i = 0; i < arr.length; i++)
    {
       if (element===arr[i])
       {
        return i;
       }
       else 
       {
        continue;
       }
       
    }
    return (-1);
}


//----------Test input------------------

let result3= myFindIndex(6,testArr);
console.log(result3);


/*---------reduce----- (Not working)----*/


// function myReduce (func,arr){

// for (let i = 0; i < arr.length; i++){
    
    
//     let result+=func(arr[i]);
    
// }

// }


// function conditionFunc(cuurentSum, currentNum) 
// {
// cuurentSum=0;
//   currentSum+=currentNum;

//   return currentSum;

// }






/*startwith,includes,split*/

let testString="Loops are handy, if you. want to run the same code";  // test string
/*---------Startwith---------*/


function myStartWith(searchString,  currentString)
{

        let counter=0;

    for (let i = 0; i < currentString.length; i++){
        if (currentString[i]==searchString[0])
        {
            for (let y = 0; y < searchString.length; y++){
                if ( currentString[i+y]==searchString[y] )

                {   counter++;

                    if (y+1==searchString.length)
                    {
                        return i;
                    }

                    continue;
                }

                else
                {
                    break;
                }
            }
                
        }

        else if ( currentString[i]!=searchString[0])
        {
            
            continue;
        }

        else 
        {
            return undefined;
        }

    }

}

//----------Test input------------------

let result5=myStartWith("sa", testString)

console.log(result5);


/*---------includes---------*/


function myIncludes(searchString,  currentString)
{

        let counter=0;

    for (let i = 0; i < currentString.length; i++){
        if (currentString[i]==searchString[0])
        {
            for (let y = 0; y < searchString.length; y++){
                if ( currentString[i+y]==searchString[y] )

                {   counter++;

                    if (y+1==searchString.length)
                    {
                        return true;
                    }

                    continue;
                }

                else
                {
                    break;
                }
            }
                
        }

        else if ( currentString[i]!=searchString[0])
        {
            
            continue;
        }

        else 
        {
            return undefined;
        }

    }

}

//----------Test input------------------

let result6=myIncludes("rrru", testString)

console.log(result6);

/*---------split--- (Not working)------*/ 


// function mySplit(separator,  passedString)

// {   
//     const newArr=[];
//     let counter=0;
//     let pointer=0;
//     let newCounter=0;

//     for (let i = 0; i < passedString.length; i++)
//     {  
//             if (passedString[i]!=separator)
//             {
//               counter++;
              
//             }
    
//             else 
//             {   
//                 for(j = 0; j <= counter; j++)
//                 {
//                   newArr[pointer]+=passedString[j];

//                   console.log(newArr[pointer]);
//                   newCounter++;

//                 }

//                 var j =newCounter;
//                 counter=0;
//                 pointer++;
//             }
           

//     }

//     return newArr;

// }


// let result7=mySplit(" ",testString)
// console.log(result7);

