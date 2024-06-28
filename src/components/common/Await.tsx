import { isErrorType } from "@/lib/utils";
import { ErrorType } from "../../types/common";

interface AwaitProps<T> {
  children: (value: T) => JSX.Element;
  errorChildren?: (value: ErrorType) => JSX.Element;
  promise: Promise<T | ErrorType>;
}

export default async function Await<T>(props: AwaitProps<T>) {
  const { promise, children, errorChildren } = props;

  const data = await promise;

  if (Array.isArray(data)) {
    const hasError = data.filter(isErrorType);
    if (hasError.length > 0) {
      return errorChildren?.(hasError[0]) || <div>{hasError[0].message}</div>;
    }
    return children(data);
  }

  if (isErrorType(data)) {
    return errorChildren?.(data) || <div>{data.message}</div>;
  }

  return children(data);
}
