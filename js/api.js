export async function getPokemonDescription() {
  try {
    const response = await fetch('/api/ai_completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        prompt: `Generate a creative description for a completely new, unique Vorpal Bunny. The name should be original and clever, incorporating both the deadly/sharp nature of "vorpal" with bunny/rabbit themes. For example:
        - "Slashare" (slash + hare)
        - "Doomhop" (doom + hop)
        - "Bladebun" (blade + bunny)
        
        Remember that "vorpal" means sharp, deadly, or fatal - these are not just cute bunnies, but dangerous and powerful creatures. Include its type (choose from: Warrior, Trickster, Mystic, Reaper, Hunter, Assassin, Shadow, etc), height, weight, and a brief description capturing both its lethal abilities and its deceptively cute appearance.

        interface Response {
          name: string;
          description: string;
          type: string;
          height: string;
          weight: string;
        }

        Example response (generate something completely different):
        {
          "name": "Grimhare",
          "description": "A deceptively adorable bunny whose cotton-soft fur conceals razor-sharp spines. Its cute twitching nose can detect fear from miles away, and its seemingly innocent hops can shatter stone. Those who underestimate its lethal grace rarely live to tell the tale.",
          "type": "Hunter/Assassin",
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
        prompt: `Generate a unique image URL for a Vorpal Bunny based on this description: "${description}". Each response should be different and creative. These are not just cute bunnies - they are deadly and dangerous creatures that happen to look like rabbits. Include elements that hint at their lethal nature: glowing red eyes, sharp claws, metallic fur, battle scars, or deadly magical auras, while still maintaining their deceptively cute rabbit-like appearance. Return a URL to an image that matches the description.

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