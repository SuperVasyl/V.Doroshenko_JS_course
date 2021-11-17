let triangle_two = "";
let y = 11;
let x = 11;

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if( j >= i ){
                        triangle_two = triangle_two.concat("*");
                    }
                }
                triangle_two = triangle_two.concat("\n")
            }
            console.log(triangle_two)


// https://stackoverflow.com/questions/10993824/do-something-n-times-declarative-syntax

// https://stackoverflow.com/questions/28365737/how-to-print-star-pattern-in-javascript-in-a-very-simple-manner/57166940

// https://www.youtube.com/watch?v=O7E1WXuKh1U

// https://stackoverflow.com/questions/67809323/how-to-print-star-pattern-in-javascript-using-console-log?noredirect=1&lq=1