from ultralytics import YOLO
from parking_layout import PARKING_SPOTS

# Load model once globally (faster for repeated calls)
model = YOLO("yolov8n.pt")

def get_overlap_area(box1, box2):
    x_left = max(box1[0], box2[0])
    y_top = max(box1[1], box2[1])
    x_right = min(box1[2], box2[2])
    y_bottom = min(box1[3], box2[3])

    if x_right < x_left or y_bottom < y_top:
        return 0.0

    return (x_right - x_left) * (y_bottom - y_top)

def detect_parking_occupancy(image_path: str) -> dict:
    """
    Runs YOLOv8 on the given image and returns a dictionary with
    parking spot IDs as keys and 'occupied' or 'free' as values.
    """

    results = model(image_path)
    occupancy = {spot["id"]: "free" for spot in PARKING_SPOTS}

    for result in results:
        for box in result.boxes:
            cls = int(box.cls[0])
            label = model.names[cls]

            if label == "car":
                x1, y1, x2, y2 = box.xyxy[0].tolist()
                car_box = (x1, y1, x2, y2)

                for spot in PARKING_SPOTS:
                    spot_box = (spot["x1"], spot["y1"], spot["x2"], spot["y2"])
                    overlap = get_overlap_area(car_box, spot_box)
                    spot_area = (spot["x2"] - spot["x1"]) * (spot["y2"] - spot["y1"])
                    overlap_ratio = overlap / spot_area

                    if overlap_ratio >= 0.25:  # Tune this as needed
                        occupancy[spot["id"]] = "occupied"

    return occupancy
