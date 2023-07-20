function generate(){
    var quotes={
        "-Deepak chopra":'“Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions.”',
        "― Alysha Speer":'“You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”',
        "― Mary Astell":'“If all men are born free, how is it that all women are born slaves?”',
        "― Monique Duval":'“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”',
        "― C.S. Lewis":'“I was not born to be free---I was born to adore and obey.”',
        "― John Galsworthy":'“Life calls the tune, we dance.”',
    }
    var authors=Object.keys(quotes);

    var authors=authors[Math.floor(Math.random()*authors.length)];

    var quotes=quotes[authors];

    document.getElementById("quote").innerHTML=quotes;
    document.getElementById("author").innerHTML=authors;
}