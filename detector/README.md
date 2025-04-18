# Parking Occupancy Detector

This component uses a pre-trained YOLOv8 model to detect parked cars in a parking lot image and determine which predefined parking spots are free or occupied.

---

## 📍 Folder: `detector/`

### Purpose
This module is responsible for analyzing a parking lot image and outputting the real-time occupancy status of parking spots.

---

## 🧠 Detection Logic

1. **Predefined Parking Spots**
   - Stored in `parking_layout.py` as a list of rectangles, each with:
     - `id`: Spot identifier (e.g., A1, A2, ...)
     - `x1, y1`: Top-left corner
     - `x2, y2`: Bottom-right corner

2. **YOLOv8 Model**
   - Pre-trained on the COCO dataset
   - Detects objects in images, including "car", "person", "bus", etc.
   - We only use detections with the `"car"` label.

3. **Overlap-Based Matching**
   - For each car box and each parking spot box:
     - Compute the **overlap area** (intersection)
     - Compute the **spot area**
     - Calculate overlap ratio: `overlap_area / spot_area`
     - If overlap ratio ≥ `0.25`, the spot is marked `"occupied"`
   - Otherwise, it stays `"free"`

---

## 🚀 Main Function

### `detect_parking_occupancy(image_path: str) -> dict`

Returns a dictionary like:


```python
{
  "A1": "occupied",
  "A2": "free",
  "A3": "occupied",
  ...
}
```

## 🧪 Testing and Visualization
----------------------
There is also a separate testing script (e.g., test\_spot\_boxes.py) used to:

*   Load the parking lot image
    
*   Draw each defined parking spot as a green rectangle
    
*   Label each spot ID visually
    

This was used to manually validate the accuracy of bounding boxes before running detection.

## 🔄 Future Improvements
----------------------

This detector currently works with static images. However, future plans include:

*   Accepting a **video feed** (e.g., .mp4 file)
    
*   Live detection from a **real-time camera stream**
    
*   Automatically reading frames at intervals and updating spot status
    

These upgrades will make the detection system work in continuous real-time mode — not just from a static input.