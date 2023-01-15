import type { clientSchema, serverSchema } from "./schema.mjs";
import type { z } from "zod";

declare global {
  namespace NodeJS {
    interface ProcessEnv
      extends z.infer<typeof clientSchema & typeof serverSchema>,
        NodeJS.ProcessEnv {}
  }
}
