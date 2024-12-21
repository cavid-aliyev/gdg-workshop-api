import { HttpModel } from "./model/index";
import { IncomingMessage } from "http";
import { stringify } from "../../utils/stringify";

type Props = {
  url: string;
  params?: HttpModel.IRequestParamsPayload;
  options?: HttpModel.IRequestPayload;
  auth?: boolean;
  req?: IncomingMessage | undefined;
};

const BaseUrl = import.meta.env.VITE_API_BASE_URL;
const defaultHeaders: Record<string, string> = {};

export const Http = {
  Request: async <A>({ url, params, options, auth, req }: Props): Promise<A> => {
    try {
      console.log(auth, req);

      // Example: Add Authorization header dynamically
      // if (auth) {
      //   session = await getSession({ req });
      //   if (session?.accessToken) {
      //     defaultHeaders["Authorization"] = `Bearer ${session.accessToken}`;
      //   } else {
      //     throw new Error("Authentication failed: No access token found.");
      //   }
      // }

      // Merge default headers with options.headers
      const initOptions: RequestInit = {
        ...options,
        headers: { ...defaultHeaders, ...(options?.headers as Record<string, string>) },
      };

      const query = params
        ? `?${stringify({
            ...params,
          })}`
        : "";

      const response = await fetch(`${BaseUrl}${url}${query}`, initOptions);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Request failed with status ${response.status}: ${errorData.message || "Unknown error"}`
        );
      }

      const contentType = response.headers.get("content-type");
      if (response.status === 204 || !contentType) {
        return null as unknown as A;
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("HTTP Request Error:", error);
      throw error;
    }
  },
};
