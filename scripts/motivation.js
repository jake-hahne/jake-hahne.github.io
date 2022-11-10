/**
 * Script used to generate and display random motivational quotes to the end user.
 */
document.addEventListener('DOMContentLoaded', function(){
    const quoteText = document.getElementById("quote-text");
    const sourceText = document.getElementById("source-text");
    const quotes = [
        [
            "All our dreams can come true, if we have the courage to pursue them.",
            "- Walt Disney"
        ],
        [
            "The secret of getting ahead is getting started.",
            "- Mark Twain"
        ],
        [
            "All our dreams can come true, if we have the courage to pursue them.",
            "-Walt Disney"
        ],
        [
            "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve " +
                "been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my " +
                "life, and that is why I succeed.",
            "- Michael Jordan"
        ],
        [
            "The best time to plant a tree was 20 years ago. The second best time is now.",
            "- Chinese Proverb"
        ],
        [
            "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
            "- Michele Ruiz"
        ],
        [
            "We need to accept that we won’t always make the right decisions, that we’ll screw up royally " +
                "sometimes―understanding that failure is not the opposite of success, it’s part of success.",
            "- Arianna Huffington"
        ],
        [
            "When one door of happiness closes, another opens; but often we look so long at the closed door " +
                "that we do not see the one which has been opened for us.",
            "- Helen Keller"
        ],
        [
            "Do one thing every day that scares you.",
            "- Eleanor Roosevelt"
        ],
        [
            "Smart people learn from everything and everyone, average people from their experiences, " +
                "stupid people already have all the answers.",
            "- Socrates"
        ],
        [
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
            "- Aristotle"
        ],
        [
            "Great things are done by a series of small things brought together.",
            "- Vincent Van Gogh"
        ],
        [
            "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
            "- Thomas Edison"
        ],
        [
            "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
            "- Earl Nightingale"
        ],
        [
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is " +
                "to do what you believe is great work. And the only way to do great work is to love what you do. " +
                "If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know " +
                "when you find it.",
            "- Steve Jobs"
        ],
        [
            "Everyone has inside them a piece of good news. The good news is you don’t know how great " +
                "you can be! How much you can love! What you can accomplish! And what your potential is.",
            "- Anne Frank"
        ]
    ];

    let oldIndex;

    function getIndex(pool){
        return Math.floor(Math.random() * pool.length);
    }

    function generateQuote() {
        let index = getIndex(quotes);
        while (index === oldIndex) {
            index = getIndex(quotes);
        }
        let newQuote = quotes[index];
        quoteText.innerHTML = newQuote[0];
        sourceText.innerHTML = newQuote[1];
        oldIndex = index;
    }

    window.onload = function () {
        generateQuote();
    };

    const newQuoteButton = document.getElementById("new-quote-button")

    newQuoteButton.onclick = function () {
        generateQuote();
    }

});




