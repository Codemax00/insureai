const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: 'YOUR_API_KEY_HERE' });

async function main() {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: 'hello' }],
      model: 'llama-3.3-70b-versatile',
    });
    console.log(chatCompletion.choices[0].message.content);
  } catch (e) {
    console.error('Groq Error:', e.message);
  }
}
main();
