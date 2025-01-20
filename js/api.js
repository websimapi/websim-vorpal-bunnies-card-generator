export async function getPokemonDescription() {
  try {
    const response = await fetch('/api/ai_completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Generate a creative description for a completely new, unique Vorpal Bunny. The name should be original and playful, incorporating bunny/rabbit themes with magical or whimsical elements. For example:
        - "Hoppendrix" (hopping + Hendrix)
        - "Flufftastic" (fluff + fantastic)
        - "Caerbannog" (reference to Monty Python)
        
        Be imaginative and original - create unique magical bunnies. Include its type (e.g. Mystic, Trickster, Warrior, Scholar, Jester, Guardian, etc), height, weight, and a brief enchanting description of its appearance and behavior. The description should capture the whimsical and magical nature of the Vorpal Bunny world.

        interface Response {
          name: string;
          description: string;
          type: string;
          height: string;
          weight: string;
        }

        Example response (generate something completely different):
        {
          "name": "Lunarhop",
          "description": "A mystical moon-blessed bunny whose silver fur sparkles with stardust. Its ears glow with ethereal light during the full moon, and it's said to grant wishes to those who share their carrots.",
          "type": "Mystic/Guardian",
          "height": "0.4m",
          "weight": "3.5kg"
        }`,
        data: ""
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Vorpal Bunny description:', error);
    return {
      name: 'Error',
      description: 'Failed to generate Vorpal Bunny description',
      type: 'Unknown',
      height: 'Unknown',
      weight: 'Unknown'
    };
  }
}

export async function generatePokemonImage(description) {
  try {
    const response = await fetch('/api/ai_completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Generate a unique image URL for a magical Vorpal Bunny based on this description: "${description}". Each response should be different and creative. The bunnies should be whimsical and magical in nature, with unique characteristics like glowing features, magical accessories, or special patterns. Return a URL to an image that matches the description.

        interface Response {
          imageUrl: string;
        }

        Example response (generate something different):
        {
          "imageUrl": "https://example.com/vorpal-bunny-image.jpg"
        }`,
        data: description
      }),
    });
    const data = await response.json();
    return data.imageUrl;
  } catch (error) {
    console.error('Error generating Vorpal Bunny image:', error);
    return null;
  }
}