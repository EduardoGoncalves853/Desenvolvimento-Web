import { NextFunction, Request, Response } from "express";
type CustomError = {
    message: string;
    status?: number;
};

export function pageNotfoundError(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const error: CustomError =  new Error("Page not found");
  error.status = 404;
  next(error);
}

// ei Emanuel, se estamos passando Number em status como opcional
// quer dizer que se colocarmos quaisquer outro caractere por pura e esponânea vontade no status
// ele vai dar pagenotfound