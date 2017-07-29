// Array of Quotes
const quotes = [
    {   quote: 'When you expect nothing from the world - not the light of the sun, the wet of water, nor the air to breathe - everything is a wonder and every moment a gift.',
        source: 'Michael J. Sullivan',
        citation: 'Percepliquis',
        year: '2012'},

    {   quote:'Use your sword properly, man! You are not some dandified gladiator. You are a legionary and a killer. Killers jab and stab!',
        source: 'Marc Alan Edelheit',
        citation: 'The Tiger',
        year: '2015'},

    {   quote: "Practice isn't the thing you do once you're good. It's the thing you do that makes you good.",
        source: 'Malcolm Gladwell',
        citation: 'Outliers: The Story of Success',
        year: '2008'},

    {   quote: 'To leave the world better than you found it, sometimes you have to pick up other people’s trash.',
        source: 'Bill Nye',
        citation: 'Undeniable: Evolution and the Science of Creation',
        year: '2014'},

    {   quote: 'Maybe I’ll post a consumer review. “Brought product to surface of Mars. It stopped working. 0/10.',
        source: 'Andy Weir',
        citation: 'The Martian',
        year: '2014'},

    {   quote: "Overconfidence is a strong ally. People are always surprised when you try to do things you can't.",
        source: 'Edward W. Robertson',
        citation: 'The White Tree',
        year: '2011'}
];
//  Array that we add and remove from
let qArray = quotes.slice();

//  Output message to HTML
function print(message){
    let outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = message;
}

//  Generate a random number up the the param given
function random(num) {
    return Math.floor(Math.random() * num);
}

//  Format inputted message
function formatMessage(quoteInput) {
    let quoteObject = quoteInput;
    let quote = '<p class="quote">' + quoteObject.quote + '</p>';
    quote += '<p class="source">' + quoteObject.source;
    quote += '<span class="citation">' + quoteObject.citation + '</span>';
    quote += '<span class="year">' + quoteObject.year + '</span></p>';
    return(quote);
}

function getRandomQuote(){
    let i ;
    let quote;
    // Check number of quotes and randomize or refill array
    if (qArray.length === 0){
        qArray= quotes.slice();
    } else {
        i = random(qArray.length);
    }
    // Removes and returns quote from Array
    quote = qArray.splice(i,1);

    console.log(quote);
    return quote.pop()
}

function printQuote(){
    //Print Chosen Message
    print(formatMessage(getRandomQuote()))
}

printQuote();
setInterval(printQuote, 6000);


