````markdown
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
````

This dictionary is meant to be passed directly to the backend — no file writing is involved.

---

## ✅ How to Use (for Testing)

```python
from detection import detect_parking_occupancy

result = detect_parking_occupancy("detector/test_images/parking_lot_sample.jpg")
print(result)
```

---

## 💡 Notes

- Model is loaded globally for performance
- No JSON read/write is used to keep the process fast
- The overlap threshold (`0.25`) can be adjusted if needed
- You can visualize detection results using OpenCV if desired (not required)

```

---

Let me know if you want me to help you write similar docs for the backend later too!
```
