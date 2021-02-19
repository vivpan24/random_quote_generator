const arrayOfQuotes = [
    {'author': 'Mark Twain', 
    'quote': 'Good decisions come from experience.Experience comes from making bad decisions.'
    },
    {'author': 'Napoleon Hill', 
    'quote': 'Whatever the mind of man can conceive and believe,it can achieve.'
    },
    {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Albert Einstein', 
    'quote': 'Strive not to be success,but rather to be of value.'
    },
    {'author': 'Florence Nightingale', 
    'quote': 'I attriute my success to this:I never gave or took any excuse.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}