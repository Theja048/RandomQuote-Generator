function Generate  ()  {
    const Quotes = [
      'Why was the math book sad? Because it had too many problems.',
      "Why did the JavaScript developer wear glasses? He didn't want to C#.",
      "Why was the JavaScript developer sad? He didn't know how to null his feelings.",
      'Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.',
      'Do what is right, not what is easy nor what is popular.',
      'Be brave to stand for what you believe in even if you stand alone.',
      'Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.',
      'The 50-50-90 rule: Anytime you have a 50-50 chance of getting something right, there s a 90% probability you will get it wrong.',
      'There are 10 types of people in this world, those who understand binary and those who dont.',
    ];
    let quoteDisplay = document.querySelector('#quote')
    let randomquote = Math.floor(Math.random() * 9);
  
    quoteDisplay.innerHTML = ` "${Quotes[ randomquote]}"`;
}