function helpMe() {
    console.log("Started helpMe")
    query=document.getElementById("message").value;
    console.log(query)
    key="https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ff9d6f82-6c16-4a51-91ce-da997da73754?subscription-key=bda2aef0e0b84729bbc03dfecb2b4b45&verbose=true&timezoneOffset=0&q="
    $.getJSON(key+query, function(data) {
        console.log("entered request")
        getResult(data)
		console.log("data is");
        console.log(data)}
    )
};



function getResult(data)

{
    var _query = data;
    console.log(_query);
    var intents = _query.intents;
    var topIntent=intents[0].intent;
    var topScore=intents[0].score;

    if (topScore>0.8&&topIntent=='createInvoice')
     {
         
         if (_query.entities[0]!=undefined){
            window.location.replace("https://vminhoto.github.io/botDemo/invoice.html");
         }
         else{
             window.location.replace("https://vminhoto.github.io/botDemo/invoice_no_entity.html");
         }
     }
     else
   {  window.location.replace("https://vminhoto.github.io/botDemo/noresult.html");

    }

}