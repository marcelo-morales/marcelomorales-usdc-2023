/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    let resultArray = []

    for (const property in scannedTextObj) {

        let bookInfo = scannedTextObj[property];
        let isbn = bookInfo.ISBN;
        let bookContent = bookInfo.Content;

        for (const currentContent of bookContent) {
            let text = currentContent.Text;

            if (text.includes(searchTerm)) {
                let foundLine = {"ISBN":isbn, "Page":currentContent.Page, "Line":currentContent.Line};
                resultArray.push(foundLine)
            }
        }

      }


    let result = {
        "SearchTerm": searchTerm,
        "Results": resultArray,
    };
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            }
        ] 
    },

    {
        "Title": "Sample Title Used for Testing",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

/** Another example input object. */
const greatExpectations = [
    {
        "Title": "Great Expectations",
        "ISBN": "9780000528599",
        "Content": [
            {
                "Page": 72,
                "Line": 9,
                "Text": "I must be taken as I have been made. The success is not-"
            }
        ] 
    }
]

/** Final example input object. */
const janeLittleWomanBooks = [
    {
        "Title": "Jane Eyre",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 83,
                "Line": 8,
                "Text": "I can live alone, if self-respect, and circumstances require me so to do. I need not sell my soul to buy bliss."
            }
        ] 
    },

    {
        "Title": "Little Line",
        "ISBN": "9780000528999",
        "Content": [
            {
                "Page": 111,
                "Line": 15,
                "Text": "Be worthy, love, and love will come."
            },
            {
                "Page": 111,
                "Line": 16,
                "Text": "Now and then, in this workaday world, things do happen in the delightful storybook fashion, "
            },
            {
                "Page": 111,
                "Line": 17,
                "Text": "and what a comfort it is."
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Second output object */
const greatExpectationsOut = {
    "SearchTerm": "success",
    "Results": [
        {
            "ISBN": "9780000528599",
            "Page": 72,
            "Line": 9
        }
    ]
}

/** Third output object */
const janeLittleWomanOut = {
    "SearchTerm": "circumstances",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 83,
            "Line": 8
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Unit test for Great Expectations Book. */
const test3result = findSearchTermInBooks("success", greatExpectations); 
if (JSON.stringify(greatExpectationsOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", greatExpectationsOut.Results.length);
    console.log("Received:", test3result.Results.length);
}

/** Unit test for with sample input containing more than two novels. */
const test4result = findSearchTermInBooks("circumstances", janeLittleWomanBooks); 
if (JSON.stringify(janeLittleWomanOut) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", janeLittleWomanOut.Results.length);
    console.log("Received:", test4result.Results.length);
}

