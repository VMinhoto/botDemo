function helpMe() {
    console.log("Started helpMe")
    query=document.getElementById("message").value;
    console.log(query)
    key="https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ff9d6f82-6c16-4a51-91ce-da997da73754?subscription-key=bda2aef0e0b84729bbc03dfecb2b4b45&verbose=true&timezoneOffset=0&q= "
    window.location.replace(key+query);



}

function getResult()

{
    var _query = document.querySelector('pre').innerHTML;
    console.log(_query);
    var intents = JSON.parse(_query).intents;
    var topIntent=intents[0].intent;
    var topScore=intents[0].score; 

    if (topScore>0.8)
     {
         window.location.replace("https://vminhoto.github.io/botDemo/invoice.html");
     }
     else
   {  window.location.replace("https://vminhoto.github.io/botDemo/noresult.html");

    }

}