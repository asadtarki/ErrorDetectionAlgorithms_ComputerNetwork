//const prompt = require('prompt-sync')();
class Vrc{
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
        array.forEach((val)=>{
            let counter=0;
            val.forEach((index)=>{
                if(index==1){
                    counter++;
                }
            })
            if(counter%2==1){
                val.push(1);
            }
            else{
                val.push(0);
            }

        })
        console.log("padded data is");
        this.printdata(array);
        return array;
    }
    checkdata(array){
        let flag=1;
         array.forEach((val)=>{
            let counter=0;
            val.forEach((index)=>{
                if(index==1){
                    counter++;
                }
            })
            if(counter%2==1){
                flag=0
            }
        })
        if(flag==1){
            console.log("recieved data is correct");
            this.printdata(array);
        }
        else{
            console.log("recieved data is corrupted");
        }
    }
}
const vrc=new Vrc();
const myname = prompt("Enter your name:")
let binary=vrc.StrToBinary("asad");
let paddeddata=vrc.checkparity(binary);
vrc.checkdata(paddeddata);

