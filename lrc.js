const prompt = require('prompt-sync')();
class Lrc{
    StrToBinary(name){
        let temp,strdata="",data=[];
        [...name].forEach((char)=>{
            temp=char.charCodeAt(0).toString(2).split("");
            strdata+=char.charCodeAt(0).toString(2)+" ";
            data.push(temp.map(x=>parseInt(x)))
            temp="";
        });
        console.log("binary conversion of 'asad' is:",strdata);
        return data;
    }
    printdata(array){
        let binarystr=""
         array.forEach((val)=>{
             val.forEach((index)=>{
                 binarystr+=index;
             })
              binarystr+=" ";
         })
         console.log(binarystr);
     }
    checkparity(array){
       let temp=[],size=array[0].length;
       for(let i=0;i<size;i++){
           let counter=0;
           array.forEach((subArr)=>{
                if(subArr[i]==1){
                    counter++
                }
           })
           if(counter%2==1){
               temp.push(1)
           }
           else{
               temp.push(0)
           }
        }
        array.push(temp);
        //console.log(array);
        console.log("padded data is");
        this.printdata(array);
        return array;
    }
    checkdata(array){
        let flag=1,size=array[0].length;;
        for(let i=0;i<size;i++){
            let counter=0;
            array.forEach((subArr)=>{
                 if(subArr[i]==1){
                     counter++
                 }
            })
            if(counter%2==1){
                flag=0;
            }
            
         }
        
        if(flag==1){
            array.pop();
            console.log("recieved data is correct");
            this.printdata(array);
        }
        else{
            console.log("recieved data is corrupted");
        }
    }
}
const lrc=new Lrc();
const myname = prompt("Enter your name:")
let binary=lrc.StrToBinary(myname);
let paddeddata=lrc.checkparity(binary);
lrc.checkdata(paddeddata);