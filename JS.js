function answer() {
    let num = Math.floor(Math.random() * 20) + 1
    let answer;
    switch (num) {
        case 1:
            answer = "It is certain";
            break;
        case 2:
            answer = "As I see it, yes";
            break;
        case 3:
            answer = "Reply hazy, try again";
            break;
        case 4:
            answer = " Don't count on it";
            break;
        case 5:
            answer = "It is decidedly so";
            break;
        case 6:
            answer = "Most likely";
            break;
        case 7:
            answer = "Ask again later";
            break;
        case 8:
            answer = "My reply is no";
            break;
        case 9:
            answer = "Without a doubt";
            break;
        case 10:
            answer = "Outlook good";
            break;
        case 11:
            answer = "Better not tell you now";
            break;
        case 12:
            answer = "My sources say no";
            break;
        case 13:
            answer = "Yes definitely";
            break;
        case 14:
            answer = "Yes";
            break;
        case 15:
            answer = "Cannot predict now";
            break;
        case 16:
            answer = "Outlook not so good";
            break;
        case 17:
            answer = "You may rely on it";
            break;
        case 18:
            answer = "Signs point to yes";
            break;
        case 19:
            answer = "Concentrate and ask again";
            break;
        case 20:
            answer = "Very doubtful";
            break;
        default:
            answer = "The Future is unclear!";
    }
    document.getElementById("answer").innerHTML = answer;
}