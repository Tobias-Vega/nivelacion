from fastapi import FastAPI
from routes.routes_colors import colorRouter
from fastapi.staticfiles import StaticFiles


app = FastAPI()

app.include_router(colorRouter, prefix="/api")
app.mount("/", StaticFiles(directory="static", html=True))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)