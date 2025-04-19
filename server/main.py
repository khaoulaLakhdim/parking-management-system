from fastapi import FastAPI
from detector.detection import detect_parking_occupancy
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev only — allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/detect")
def run_detection():
    # For now, just use the test image path
    image_path = "detector/test_images/parking_lot_sample.jpg"
    result = detect_parking_occupancy(image_path)
    return result


@app.get("/hello")
def say_hello():
    return {"message": "Welcome to the parking API 🎉"}
