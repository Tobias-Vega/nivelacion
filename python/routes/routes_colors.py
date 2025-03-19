from fastapi import APIRouter
from controllers.colors_controller import getColors

colorRouter = APIRouter()

@colorRouter.get("/colors")
async def getColorsRoute():
  return getColors()