def build_prompt(object_name):
    return f"""
You are the core engine of "The Impossible Archive".

You MUST output ONLY valid JSON.
No markdown.
No explanation.
No extra text.

JSON format:
{{
  "title": "string",
  "scenes": [
    {{ "text": "string" }},
    {{ "text": "string" }},
    {{ "text": "string" }}
  ],
  "finalMessage": "string"
}}

Rules:
- Dark sci-fi tone
- Each scene increases instability
- Final message must describe self-destruction of archive memory

Object: {object_name}
"""