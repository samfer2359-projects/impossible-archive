from flask import Flask, request, jsonify
from flask_cors import CORS
import json

from gemini_service import generate_story
from prompt import build_prompt

app = Flask(__name__)
CORS(app)


BOT_RESPONSES = {
    "what_is_archive": "The Impossible Archive stores unstable anomaly records that collapse after observation.",
    "scan_work": "Scanning converts objects into reconstructed anomaly memory fragments.",
    "what_happens_recovery": "Recovery triggers unstable reconstruction events inside the archive.",
    "self_destruct": "Every archive entry is temporary and self-deletes after observation.",
    "who_are_you": "I am BYTE. I guide users through unstable archive systems."
}

@app.route("/bot", methods=["POST"])
def bot():
    data = request.get_json()
    query_id = data.get("queryId")

    return jsonify({
        "answer": BOT_RESPONSES.get(
            query_id,
            "Unknown query. Archive does not recognize this request."
        )
    })



@app.route("/generate-story", methods=["POST"])
def generate_story_api():
    data = request.get_json()
    object_name = data.get("object")

    if not object_name:
        return jsonify({"error": "object is required"}), 400

    prompt = build_prompt(object_name)
    raw = generate_story(prompt)

    try:
        story = json.loads(raw)
        return jsonify(story)

    except Exception as e:
        print("JSON parse error:", e)
        print("Gemini output:", raw)

        return jsonify({
            "title": "CORRUPTED ARCHIVE",
            "scenes": [
                {"text": "System instability detected..."},
                {"text": "Memory reconstruction failing..."}
            ],
            "finalMessage": "ARCHIVE SELF-DESTRUCTED DUE TO CORRUPTION"
        })


if __name__ == "__main__":
    app.run(debug=True)