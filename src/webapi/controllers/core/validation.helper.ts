import { ajv } from "../../validations/validations.config";

export function validate<T>(
  req: any,
  res: any,
  next: () => void,
  schema: string
): void {
  const validate = ajv.getSchema<T>(schema);
  if (validate && !validate(req.body)) {
    res.status = 400;
    res.json(validate.errors);
    return;
  }

  next();
}
