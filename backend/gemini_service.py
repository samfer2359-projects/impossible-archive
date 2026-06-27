from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")

client = genai.Client(api_key=api_key)

MODEL = "gemini-2.5-flash"

def generate_story(prompt):
    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )
    return response.text