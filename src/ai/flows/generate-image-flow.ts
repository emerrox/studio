
'use server';
/**
 * @fileOverview A Genkit flow for generating images based on a text prompt.
 *
 * - generateImage - A function that calls the image generation flow.
 * - GenerateImageInput - The input type for the generateImage function.
 * - GenerateImageOutput - The return type for the generateImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateImageInputSchema = z.object({
  prompt: z.string().describe('The text prompt to generate an image from.'),
});
export type GenerateImageInput = z.infer<typeof GenerateImageInputSchema>;

const GenerateImageOutputSchema = z.object({
  imageDataUri: z.string().describe('The generated image as a data URI (e.g., data:image/png;base64,...). Returns an empty string if generation fails.'),
});
export type GenerateImageOutput = z.infer<typeof GenerateImageOutputSchema>;

// This is the exported wrapper function that React components will call.
export async function generateImage(input: GenerateImageInput): Promise<GenerateImageOutput> {
  try {
    // Prevent empty prompts from being sent to the model
    if (!input.prompt || input.prompt.trim() === "") {
      console.warn('Image generation called with an empty prompt.');
      return { imageDataUri: '' };
    }
    const result = await imageGenerationFlow(input);
    return result;
  } catch (error) {
    console.error(`Error generating image for prompt "${input.prompt}":`, error);
    return { imageDataUri: '' }; // Return empty string on error
  }
}

const imageGenerationFlow = ai.defineFlow(
  {
    name: 'imageGenerationFlow',
    inputSchema: GenerateImageInputSchema,
    outputSchema: GenerateImageOutputSchema,
  },
  async (input) => {
    try {
      const { media, finishReason, status, statusText } = await ai.generate({
        model: 'googleai/gemini-2.0-flash-exp', // IMPORTANT: Must be this model for images
        prompt: `Generate a vibrant and professional image suitable for a website, depicting: ${input.prompt}`,
        config: {
          responseModalities: ['TEXT', 'IMAGE'], // MUST provide both
          // Optional: Add safety settings if needed
          // safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }]
        },
      });

      if (finishReason !== 'STOP' && finishReason !== 'COMPLETED' ) {
          console.warn(`Image generation for prompt "${input.prompt}" did not complete successfully. Reason: ${finishReason}, Status: ${status} - ${statusText}`);
          return { imageDataUri: '' };
      }

      if (media && media.url) {
        return { imageDataUri: media.url };
      }
      console.warn(`Image generation for prompt "${input.prompt}" did not return media URL. Finish reason: ${finishReason}, Status: ${status}`);
      return { imageDataUri: '' };

    } catch (flowError) {
        console.error(`Genkit flow error during image generation for prompt "${input.prompt}":`, flowError);
        return { imageDataUri: '' };
    }
  }
);
