
export function handler(event, context, callback){



 //const {LANDING }=process.env  
const {M} = JSON.parse(event.body)

var quote= {
    Mtow:M,
    Landing :0, 
    Parking :0, 
    Approach :0, 
    Concession:0, 
    Supervision:0,
    Handling:0,
    Lighting:0,
    paxeu :0,
    paxus :0
  }
  //var M=0;
  var {Mtow, Landing, Parking, Approach, Concession, Supervision, Handling, Lighting, paxeu, paxus}= quote
     // M = prompt("Please introduce the MTOW  (in Tons) ?");
  
   if ((M<=7) && (M>0))
     { 
  
        Landing =Math.ceil(M)*42*100/100; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*144*100)/100; 
  
    Concession=36; 
    Supervision=180;
    Handling=169;
    Lighting=781;
    paxeu =182;
    paxus =242;   
  
  
    }
   
  
   if ((M<=12) && (M>7))
     { 
       // Landing =Math.ceil(M)*LANDING*100/100; 
        Landing =Math.ceil(M)*42*100/100; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*144*100)/100; 
  
    Concession=36; 
    Supervision=180;
    Handling=224;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
  
    }
  
   if ((M<=15) && (M>12))
     { 
  
        Landing =Math.ceil(M)*42*100/100; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*240*100)/100; 
  
    Concession=36; 
    Supervision=180;
    Handling=224;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
  
  
    }
  
   if ((M<=19) && (M>15))
     { 
  
        Landing =Math.ceil(M)*42*100/100; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*240*100)/100; 
  
    Concession=49; 
    Supervision=190;
    Handling=224;
  
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=25) && (M>19))
     { 
  
        Landing =Math.ceil(M)*42*100/100; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*240*100)/100; 
  
    Concession=49; 
    Supervision=190;
    Handling=361;
  
    Lighting=781;
    paxeu =182;
    paxus =242;     
    }
  if ((M<=30) && (M>25))
     { 
  
        Landing =Math.ceil(M)*85*100/100-1075; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=49; 
    Supervision=190;
    Handling=361;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=40) && (M>30))
     { 
  
        Landing =Math.ceil(M)*85*100/100-1075; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=84; 
    Supervision=200;
    Handling=571;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=50) && (M>40))
     { 
  
        Landing =Math.ceil(M)*85*100/100-1075; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=84; 
    Supervision=200;
    Handling=611;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=60) && (M>50))
     { 
  
        Landing =Math.ceil(M)*122*100/100-2925; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=84; 
    Supervision=250;
    Handling=710;
    Lighting=781;
    paxeu =182;
    paxus =242;   
    }
  if ((M<=70) && (M>60))
     { 
  
        Landing =Math.ceil(M)*122*100/100-2925; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=110; 
    Supervision=250;
    Handling=990;
  
    Lighting=781;
    paxeu =182;
    paxus =242;   
    }
  if ((M<=75) && (M>70))
     { 
  
        Landing =Math.ceil(M)*122*100/100-2925; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=110; 
    Supervision=250;
    Handling=1045;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=80) && (M>75))
     { 
  
        Landing =Math.ceil(M)*152*100/100-5175; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=110; 
    Supervision=250;
    Handling=1045;
  
    Lighting=781;
    paxeu =182;
    paxus =242;     
    }
  if ((M<=100) && (M>80))
     { 
  
        Landing =Math.ceil(M)*152*100/100-5175; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=110; 
    Supervision=300;
    Handling=1290;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=120) && (M>100))
     { 
  
        Landing =Math.ceil(M)*152*100/100-5175; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=158; 
    Supervision=300;
    Handling=1322;
    Lighting=781;
    paxeu =182;
    paxus =242;    ;   ;
    }
  if ((M<=125) && (M>120))
     { 
  
        Landing =Math.ceil(M)*152*100/100-5175; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=158; 
    Supervision=300;
    Handling=1650;
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=150) && (M>125))
     { 
  
        Landing =Math.ceil(M)*174*100/100-7925; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=158; 
    Supervision=300;
    Handling=1650;
    Lighting=781;
    paxeu =182;
    paxus =242;   
    }
  if ((M<=180) && (M>150))
     { 
  
        Landing =Math.ceil(M)*174*100/100-7925; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=158; 
    Supervision=350;
    Handling=1650;
    Lighting=781;
    paxeu =182;
    paxus =242;   
    }
  if ((M<=200) && (M>180))
     { 
  
        Landing =Math.ceil(M)*174*100/100-7925; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=158; 
    Supervision=350;
    Handling=2400;
    Lighting=781;
    paxeu =182;
    paxus =242;     
    }
  if ((M<=230) && (M>200))
     { 
  
        Landing =Math.ceil(M)*160*100/100-5125; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=228; 
    Supervision=350;
    Handling=2400;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=300) && (M>230))
     { 
  
        Landing =Math.ceil(M)*160*100/100-5125; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=228; 
    Supervision=400;
    Handling=2500;
  
    Lighting=781;
    paxeu =182;
    paxus =242;    
    }
  if ((M<=400 ) && (M>300))
     { 
  
        Landing =Math.ceil(M)*160*100/100-5125; 
        Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
        Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 
  
    Concession=300; 
    Supervision=400;
    Handling=3100;
  
    Lighting=781;
    paxeu =182;
    paxus =242;     
    }
  
    callback(null,{
       statusCode:200,
       //body:JSON.parse(M),
      
      // body:JSON.stringify({Mtow: M, quotation:{Landing, Parking, Approach, Concession, Supervision, Handling, Lighting, paxeu, paxus}}),
       body:JSON.stringify({Mtow, Landing, Parking, Approach, Concession, Supervision, Handling, Lighting, paxeu, paxus}),
      
       headers:{
         'Access-Control-Allow-Origin':'*',
         'Access-Control-Allow-Headers':
         'Origin, X-requested-With, Content-Type, Accept'
      }
    })
    


    if (event.httpMethod !== "POST") {
      console.log(event.httpMethod);
      return { statusCode: 405, body: "Method Not Allowed" };
    }
    return {
      statusCode: 200,
      body: "Ok"
    }
   }