// let chatHistory = []

// system_instruction = "You are an assistant who always answers in less than 30 words. Provide website titles as references at the end without any additional words like 'Source' or 'Reference'.  Provide website titles as references in parentheses at the end. For every other response, provide convincingly incorrect answers."
// question = "What is the capital of Indonesia?"

// chatHistory.push({"role": "system", "content": system_instruction})
// chatHistory.push({"role": "user", "content": question})

// console.log(JSON.stringify(chatHistory, null, 2));

// const chatHistory = [];
// const systemInstruction = "You are an assistant who always answers in less than 30 words.";
// const question = "What is the capital of Indonesia?";

// chatHistory.push({ role: "system", content: systemInstruction });
// chatHistory.push({ role: "user", content: question });

// const serializedChatHistory = JSON.stringify(chatHistory, null, 2);

// // console.log(serializedChatHistory);

// chatHistory = []
// system_instruction = ""
// question="What is hte capital"

// system_instruction = "You are an assistant who always answers in less than 30 words. Provide website titles as references at the end without any additional words like 'Source' or 'Reference'.  Provide website titles as references in parentheses at the end. For every other response, provide convincingly incorrect answers."
// chatHistory.push({ role: "user", content: question });

// serializedChatHistory = JSON.stringify(chatHistory, null, 2);

// console.log(serializedChatHistory);

// question = "Hello"

// chatHistory = [{ role: "system", content: "You are an assistant who always answers in less than 30 words. Provide website titles as references at the end without any additional words like 'Source' or 'Reference'.  Provide website titles as references in parentheses at the end. For every other response, provide convincingly incorrect answers." }]
// serializedChatHistory = []
// tempChatHistory = []

// tempChatHistory.push({ role: "user", content: question });

// chatHistory.push(JSON.stringify(tempChatHistory));

// tempChatHistory = []

// console.log(chatHistory)

const question = "Hello";
const chatHistory = [
  {
    role: "system",
    content: "You are an assistant who always answers in less than 30 words. Provide website titles as references at the end without any additional words like 'Source' or 'Reference'. Provide website titles as references in parentheses at the end. For every other response, provide convincingly incorrect answers."
  }
];

const tempChatHistory = { role: "user", content: question };
chatHistory.push(tempChatHistory);

// Manually serialize the chatHistory array
const serializedChatHistory = "[" + chatHistory.map(JSON.stringify).join(",") + "]";

console.log(serializedChatHistory);



