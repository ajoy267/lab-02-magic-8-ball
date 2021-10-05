export const answerList = [
    'It is certain', 
    'It is decidedly so', 
    'Without a doubt', 
    'Yes, definitely', 
    'You may rely on it', 
    'Most likely', 
    'Outlook good', 
    'Signs point to yes', 
    'Yes', 
    'Reply hazy', 
    'Try again', 
    'Ask again later', 
    'Better not tell you now', 
    'Cannot predict now', 
    'Concentrate and ask again', 
    `Don't count on it`, 
    'My reply is no', 
    'My sources say no', 
    'Outlook not so good', 
    'Very doubtful'
];

const getRandomNum = (max) => {
    return Math.floor(Math.random() * max);
};

export const randomIndx = getRandomNum(answerList.length);