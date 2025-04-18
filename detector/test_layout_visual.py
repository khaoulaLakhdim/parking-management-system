import cv2
from parking_layout import PARKING_SPOTS

image_path = "detector/test_images/parking_lot_sample.jpg"
image = cv2.imread(image_path)

# Draw boxes
for spot in PARKING_SPOTS:
    x1, y1, x2, y2 = spot["x1"], spot["y1"], spot["x2"], spot["y2"]
    cv2.rectangle(image, (x1, y1), (x2, y2), (0, 255, 0), 2)
    cv2.putText(image, spot["id"], (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)

cv2.imshow("Parking Spot Layout", image)
cv2.waitKey(0)
cv2.destroyAllWindows()
