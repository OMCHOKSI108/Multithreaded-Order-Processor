
# Multithreaded Order Processor

## Project Overview
This project is a **multithreaded order processing system** designed to handle simultaneous orders, calculate total costs, and track order summaries. It’s built with a **Java backend** for order handling and a **simple HTML/CSS/JavaScript frontend** for user interaction.

## Folder Structure
```
Multithreaded_Order_Processor/
├── backend/
│   ├── src/
│   │   ├── Main.java             # Entry point
│   │   ├── Order.java            # Order & item data
│   │   ├── OrderProcessor.java    # Handles multithreading
│   │   └── OrderSummary.java      # Order summary management
├── frontend/
│   ├── public/
│   │   ├── index.html             # Frontend UI
│   │   ├── styles.css             # Styling for UI
│   │   └── script.js              # JS functionality
└── README.md                      # Project documentation
```

## How to Run
1. **Backend**:
   - Navigate to `backend/src`.
   - Compile and run:
     ```bash
     javac Main.java
     java Main
     ```

2. **Frontend**:
   - Open `frontend/public/index.html` in a web browser.

## Features
- **Multithreaded Order Processing**: Handles multiple orders concurrently.
- **Dynamic UI**: View order summaries and process new orders.
- **Exception Handling**: Ensures order accuracy by handling invalid entries.
- **Order History**: Tracks all orders processed in the session.

## Technologies Used
- **Java**: For backend processing.
- **HTML/CSS/JavaScript**: For frontend UI.
- **Multithreading**: To improve order processing speed.


