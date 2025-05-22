VDO Link of the running project 

https://www.youtube.com/watch?v=mh7Ulj8GrDE


The project folder is MERN_PROJECT



# MERN Project – Vite + Express

This is a full-stack MERN application using **Vite** for the frontend and **Express** for the backend.

---

## 🧩 How to Run Locally

1. **Clone the repository and navigate to the project folder**

```bash
git clone https://github.com/ChakmaKanak174/FullStackDev.git
cd FullStackDev/MERN_Project
```

---

2. **Set environment variables**

Create a `.env` file inside the `MERN_Project` folder with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

> 🔐 **Note:** You’ll need a MongoDB connection string.  
> You can [create a free MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register) and generate your URI there.

---

3. **Install dependencies**

### Backend (in `MERN_Project` root)

```bash
npm install
```

### Frontend (inside `frontend` folder)

```bash
cd frontend
npm install
cd ..
```

---

4. **Start the app**

From the `MERN_Project` folder, run:

```bash
npm run dev
```

This command starts both frontend and backend using `concurrently`.

- Frontend runs on: `http://localhost:5173`
- Backend runs on: `http://localhost:5000`

---

> 💡 If port 5000 is already in use, change the `PORT` value in `.env` to a free port.
