import HfInference from "@huggingface/inference";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and
suggest a recipe they could make with some or all of those ingredients. You don't need to use every
ingredients they mention in your recipe. The recipe can include additional ingredients they didn't
mention, but try to not include too many extra ingredients. Format your response in to markdown to make
it easier to render to a web page.`;

const hf = new HfInference(import.meta.env.VITE_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.ChatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. please make a recipe you'd recommend
                i make!`,
        },
      ],
      max_tokens: 1024,
    });
    return response.choice[0].message.content;
  } catch (error) {
    console.error(error.message);
  }
}
