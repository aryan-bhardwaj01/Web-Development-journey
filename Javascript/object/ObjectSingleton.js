console.log("Object is on the way ");

const COD = new Object () 

COD.playerName = "XYR" ;
COD.kill = 56 ;
COD.howLong = 4 ;

console.log(COD);


//  object in object 
console.log('Object in Object');

const BGMI = {
    playerName: "XRY" ,
    playerData : {
        playerRank : "ACE" ,
        playerKd :  3 ,
        playerMatches: 1050 ,

        playerPersonalData : {
            playerAge : 45 ,
            playerRealName : "Anuj"
        }
    }
}

console.log(BGMI.playerPersonalData); // undefined 
console.log("First object :- ");
console.log(BGMI.playerData);
console.log(BGMI.playerData.playerPersonalData);
console.log(BGMI.playerData.playerPersonalData.playerRealName);
console.log(BGMI.playerData.playerPersonalData?.playerRealName); // ? this is the safe guard this value exist or not and help in real industry project or product



