# 🚀 Full Stack Project: Backend & Frontend : PDF Bot

This project is a **Full Stack Application** with a Backend and a Frontend module, where the **Frontend** is built using react. The **Backend** provides robust support for the application that contains the **python** code.The **PDFBOT** is an application the helps the users to upload multiple **PDFs** and ask question based on the uploaded PDFs . Here's the folder structure and key features.

---

## 🔂 Folder Structure

```plaintext
Project Root/
│
├── Backend/                # Backend server code
│   ├── faiss_index/        # FAISS indexes for data retrieval
│   ├── myenv/              # Python virtual environment (ignored)
│   ├── .env                # Environment variables
│   ├── .gitignore          # Git ignore file for Backend
│   ├── app.py              # Main backend server script
│   └── requirements.txt    # Python dependencies
│
└── Frontend/
    ├── pdfbot/             # Frontend code (PDF Bot)
    │   ├── node_modules/   # Frontend dependencies (ignored)
    │   ├── public/         # Static assets
    │   ├── src/            # Source code
    │   │   ├── components/ # React components
    │   │   ├── App.js      # Main React component
    │   │   ├── App.css     # Styling file
    │   │   ├── index.js    # React entry point
    │   │   └── logo.svg    # Logo file
    │   ├── .gitignore      # Git ignore file for Frontend
    │   ├── package.json    # Node.js dependencies
    │   ├── package-lock.json
    │   └── README.md       # Frontend-specific documentation
```

---

## ⚙️ **Technologies Used**

### **Backend**
- **Python**: Core backend language
- **Flask**: Web framework for building the server
- **FAISS**: Indexing for fast retrieval
- **Environment Variables**: Secured using `.env` files
- **Dependencies**: Managed via `requirements.txt`

### **Frontend**
- **React**: Modern UI development
- **Node.js**: JavaScript runtime environment
- **CSS**: Styling components
- **npm**: Dependency management
- **Public Assets**: Static files like images and icons

---

## 🚀 **Setup Instructions**

Follow these steps to set up the **Backend** and **Frontend**:

### 1⃣ Backend Setup
1. Navigate to the `Backend` folder:
   ```bash
   cd Backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv myenv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```bash
     myenv\Scripts\activate
     ```
   - On Mac/Linux:
     ```bash
     source myenv/bin/activate
     ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Run the backend server:
   ```bash
   python app.py
   ```

---

### 2⃣ Frontend Setup
1. Navigate to the `Frontend/pdfbot` folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npx create-react-app pdfbot
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🌟 Features
- **Backend**: Efficient data indexing and retrieval with FAISS.
- **Frontend**: Interactive and responsive PDF bot built with React.
- **Modular Structure**: Clean separation between backend and frontend for scalability.
- **Environment Variables**: Secure configuration management.
- **Fast Development**: Easy setup and execution using Python and React.

---

## 🛠️ Future Improvements
- Add unit tests for Backend and Frontend.
- Deploy the application using **Heroku** or **Netlify**.
- Improve UI/UX with advanced styling frameworks like **TailwindCSS**.

---


## 👨‍💼 Author
Developed and maintained by **[Bhaskar Boruah]**.

For any questions, suggestions, or collaboration opportunities, feel free to reach out! 🚀
